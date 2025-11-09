import React, { useState } from 'react';
import { Upload, FileText, Sparkles, X, CheckCircle, AlertCircle } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

interface ResumeUploaderProps {
  onResumeExtracted: (resumeData: any) => void;
  onClose: () => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onResumeExtracted, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const extractTextFromFile = async (file: File): Promise<string> => {
    if (file.type === 'application/pdf') {
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({
          data: arrayBuffer,
          useWorkerFetch: false,
          isEvalSupported: false,
          useSystemFonts: true
        });

        const pdf = await loadingTask.promise;
        let fullText = '';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: any) => {
              if ('str' in item) {
                return item.str;
              }
              return '';
            })
            .join(' ');
          fullText += pageText + '\n';
        }

        if (!fullText.trim()) {
          throw new Error('No text could be extracted from the PDF. It might be an image-based PDF.');
        }

        return fullText;
      } catch (error: any) {
        console.error('PDF extraction error:', error);
        const errorMsg = error?.message || 'Unknown error';
        throw new Error(`PDF extraction failed: ${errorMsg}`);
      }
    } else {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
      });
    }
  };

  const parseResumeWithAI = (text: string): any => {
    if (typeof text !== 'string') {
      throw new Error('Invalid file content');
    }

    // Normalize text from PDFs where newlines are lost; add newlines before section keywords and bullets
    const normalizedText = text
      .replace(/\u2022/g, '•')
      .replace(/\s+•\s+/g, '\n• ')
      .replace(/\s+-\s+/g, '\n- ')
      .replace(/\s*Summary\s*[:\-]?/gi, '\nSummary\n')
      .replace(/\s*Professional\s+Summary\s*[:\-]?/gi, '\nProfessional Summary\n')
      .replace(/\s*Education\s*[:\-]?/gi, '\nEducation\n')
      .replace(/\s*(Work\s+)?Experience\s*[:\-]?/gi, '\nExperience\n')
      .replace(/\s*Projects?\s*[:\-]?/gi, '\nProjects\n')
      .replace(/\s*Certifications?\s*[:\-]?/gi, '\nCertifications\n')
      .replace(/\s*Achievements?|Awards?|Honors?\s*[:\-]?/gi, '\nAchievements\n')
      .replace(/\s*Skills?|Core\s+Competencies\s*[:\-]?/gi, '\nSkills\n')
      .replace(/\s*Languages?\s*[:\-]?/gi, '\nLanguages\n');

    const lines = normalizedText.split(/\n|\r/).map(l => l.trim()).filter(l => l);

    const resumeData: any = {
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        title: '',
        summary: ''
      },
      experience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: [],
      achievements: [],
      languages: [],
      hobbies: [],
      socialLinks: {},
      rawText: text
    };

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}/g;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const linkedinRegex = /linkedin\.com\/in\/[^\s]+/g;
    const githubRegex = /github\.com\/[^\s]+/g;

    // Extract email, phone from entire text
    const emailMatch = text.match(emailRegex);
    if (emailMatch && emailMatch[0]) resumeData.personalInfo.email = emailMatch[0];

    const phoneMatch = text.match(phoneRegex);
    if (phoneMatch && phoneMatch[0]) resumeData.personalInfo.phone = phoneMatch[0];

    // Extract social links
    const linkedinMatch = text.match(linkedinRegex);
    if (linkedinMatch && linkedinMatch[0]) {
      resumeData.socialLinks.linkedin = linkedinMatch[0].startsWith('http') ? linkedinMatch[0] : `https://${linkedinMatch[0]}`;
    }

    const githubMatch = text.match(githubRegex);
    if (githubMatch && githubMatch[0]) {
      resumeData.socialLinks.github = githubMatch[0].startsWith('http') ? githubMatch[0] : `https://${githubMatch[0]}`;
    }

    // Extract name - search first 10 lines for two or more capitalized words
    if (!resumeData.personalInfo.fullName) {
      for (let i = 0; i < Math.min(10, lines.length); i++) {
        const line = lines[i].replace(/[,|]/g, ' ').trim();
        const isCandidate =
          line.length >= 5 && line.length <= 80 &&
          !line.includes('@') && !/\d{3,}/.test(line) && !/^https?:/i.test(line);
        const wordCount = (line.match(/[A-Z][a-z]+/g) || []).length;
        if (isCandidate && wordCount >= 2) {
          resumeData.personalInfo.fullName = line;
          break;
        }
      }
    }

    // Extract professional title from early lines or from summary sentence
    if (!resumeData.personalInfo.title) {
      const titleKeywords = /(software|developer|engineer|student|designer|manager|analyst|architect|lead)/i;
      for (let i = 0; i < Math.min(15, lines.length); i++) {
        const line = lines[i];
        if (!line.includes('@') && titleKeywords.test(line) && line.length <= 80) {
          resumeData.personalInfo.title = line.replace(/\s{2,}/g, ' ').trim();
          break;
        }
      }
    }

    let currentSection = '';
    let currentItem: any = null;
    let summaryLines: string[] = [];
    let descriptionBuffer: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lowerLine = line.toLowerCase();

      // Detect sections
      if (lowerLine.match(/^(work\s+)?experience|professional\s+experience|employment\s+history/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'experience';
        continue;
      } else if (lowerLine.match(/^education|academic\s+background/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'education';
        continue;
      } else if (lowerLine.match(/^(technical\s+)?skills|core\s+competencies/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'skills';
        continue;
      } else if (lowerLine.match(/^projects|key\s+projects/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'projects';
        continue;
      } else if (lowerLine.match(/^certifications?|licenses?/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'certifications';
        continue;
      } else if (lowerLine.match(/^achievements?|awards?|honors?/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'achievements';
        continue;
      } else if (lowerLine.match(/^languages?/)) {
        if (currentItem) saveCurrentItem();
        currentSection = 'languages';
        continue;
      } else if (lowerLine.match(/^(professional\s+)?summary|objective|profile|about\s+me/)) {
        currentSection = 'summary';
        continue;
      }

      // Parse summary
      if (currentSection === 'summary') {
        if (line.length > 15 && !lowerLine.match(/^(experience|education|skills|projects|certifications|achievements|languages)/)) {
          summaryLines.push(line);
        } else if (summaryLines.length > 0) {
          resumeData.personalInfo.summary = summaryLines.join(' ').trim();
          currentSection = '';
        }
      }

      // Parse experience
      if (currentSection === 'experience') {
        const yearPattern = /\b(20\d{2}|19\d{2})\b/;
        const hasYear = yearPattern.test(line);
        const isBullet = line.match(/^[•\-*]/);

        if (!isBullet && line.length > 5 && (hasYear || (!currentItem && line.length < 100))) {
          if (currentItem && currentItem.position) {
            currentItem.description = descriptionBuffer.join(' ').trim();
            resumeData.experience.push(currentItem);
          }

          const parts = line.split(/[|,]|\s{2,}/);
          currentItem = {
            position: parts[0]?.trim() || line,
            company: parts[1]?.trim() || (parts.length > 1 ? parts[1].trim() : ''),
            duration: hasYear ? line.match(/\d{4}[\s\-–]+(?:present|\d{4})/i)?.[0] || '2020-2023' : '2020-2023',
            description: ''
          };
          descriptionBuffer = [];
        } else if (isBullet && line.replace(/^[•\-*]\s*/, '').length > 3) {
          descriptionBuffer.push(line.replace(/^[•\-*]\s*/, ''));
        }
      }

      // Parse education
      if (currentSection === 'education') {
        const yearPattern = /\b(20\d{2}|19\d{2})\b/g;
        const hasYear = yearPattern.test(line);

        if (!line.match(/^[•\-*]/) && line.length > 5 && !lowerLine.match(/^education$/)) {
          // Check if this line has school/degree information
          const isEducationEntry = hasYear ||
                                   line.match(/university|college|school|institute|B\.Tech|M\.Tech|B\.S|M\.S|Bachelor|Master|GPA|CGPA/i);

          if (isEducationEntry) {
            if (currentItem && currentItem.degree) {
              resumeData.education.push(currentItem);
            }

            // Extract year range if present
            const yearMatches = line.match(/\d{4}/g);
            const yearRange = yearMatches && yearMatches.length >= 2
              ? `${yearMatches[0]} - ${yearMatches[yearMatches.length - 1]}`
              : yearMatches && yearMatches.length === 1
                ? yearMatches[0]
                : '2020';

            const parts = line.split(/\s{2,}|\t/);
            currentItem = {
              degree: parts[0]?.trim() || line.split(/\b(Sept|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/i)[0]?.trim() || line,
              school: parts[1]?.trim() || '',
              year: yearRange
            };
          }
        }
      }

      // Parse skills
      if (currentSection === 'skills') {
        // Handle skills with category labels like "Programming Languages: C, Python"
        if (line.includes(':')) {
          const parts = line.split(':');
          if (parts.length >= 2) {
            const skillsText = parts.slice(1).join(':').trim();
            const skillMatch = skillsText.split(/[,;|&]/);
            skillMatch.forEach(skill => {
              const s = skill.trim();
              const wordCount = s.split(/\s+/).filter(Boolean).length;
              const looksSentence = /\.$/.test(s);
              if (s.length > 0 && s.length < 40 && wordCount <= 4 && !looksSentence) {
                resumeData.skills.push(s);
              }
            });
          }
        } else {
          // Regular skills parsing
          const skillMatch = line.replace(/^[•\-*]\s*/, '').split(/[,;|&]/);
          skillMatch.forEach(skill => {
            const s = skill.trim();
            const wordCount = s.split(/\s+/).filter(Boolean).length;
            const looksSentence = /\.$/.test(s) || /\b(using|projects?|goal|experience)\b/i.test(s);
            if (s.length > 1 && s.length < 40 && wordCount <= 4 && !looksSentence && !s.match(/^(skills|technical)/i)) {
              resumeData.skills.push(s);
            }
          });
        }
      }

      // Parse projects
      if (currentSection === 'projects' && line.length > 3) {
        const isBullet = /^([•\-*])\s*/.test(line);
        const clean = line.replace(/^([•\-*])\s*/, '');
        const looksLikeUrl = /https?:\/\//i.test(clean) || /github\.com\//i.test(clean);

        // Title heuristics: 2-8 words, TitleCase-ish, avoid generic prefixes
        const wc = clean.split(/\s+/).filter(Boolean).length;
        const looksLikeTitle = !isBullet && wc >= 2 && wc <= 8 && !/[.!?]$/.test(clean) && !/^(using|technologies|tools|objective|summary|my goal)/i.test(clean);

        if (looksLikeTitle) {
          if (currentItem && currentItem.title) {
            currentItem.description = descriptionBuffer.join(' ').trim();
            resumeData.projects.push(currentItem);
          }
          const title = clean.replace(/^\"|\"$/g, '').replace(/\s*\.?\d+\s*$/, '');
          currentItem = { title: title, description: '', url: '' };
          descriptionBuffer = [];
        } else if (looksLikeUrl) {
          if (!currentItem) currentItem = { title: 'Project', description: '', url: '' };
          currentItem.url = clean.match(/https?:\/\/\S+/)?.[0] || clean;
        } else {
          if (!currentItem) currentItem = { title: 'Project', description: '', url: '' };
          descriptionBuffer.push(clean);
        }
      }

      // Parse certifications
      if (currentSection === 'certifications' && line.length > 5 && !line.match(/^[•\-*]/)) {
        const parts = line.split(/[|,]|\s{2,}/);
        resumeData.certifications.push({
          name: parts[0]?.trim() || line,
          issuer: parts[1]?.trim() || 'Issuing Organization',
          year: line.match(/\d{4}/)?.[0] || new Date().getFullYear().toString()
        });
      }

      // Parse achievements
      if (currentSection === 'achievements' && line.length > 10) {
        if (line.match(/^[•\-*]/)) {
          resumeData.achievements.push({
            title: 'Professional Achievement',
            description: line.replace(/^[•\-*]\s*/, '')
          });
        }
      }

      // Parse languages (strict filtering)
      if (currentSection === 'languages' && line.length > 2) {
        const cleanLang = line.replace(/^[•\-*]\s*/, '');
        const candidates = cleanLang.split(/[,|]/).map(s => s.trim()).filter(Boolean);
        const blocklist = /(web|development|subject|programming|react|node|html|css|tools)/i;
        candidates.forEach(c => {
          if (!blocklist.test(c)) {
            resumeData.languages.push({ name: c, proficiency: 'Professional' });
          }
        });
      }

      // Extract professional title from first few lines
      if (i < 5 && !resumeData.personalInfo.title &&
          line.length > 5 && line.length < 80 &&
          line !== resumeData.personalInfo.fullName &&
          !emailRegex.test(line) && !phoneRegex.test(line)) {
        resumeData.personalInfo.title = line;
      }
    }

    // Save last item
    function saveCurrentItem() {
      if (!currentItem) return;

      if (currentSection === 'experience' && currentItem.position) {
        currentItem.description = descriptionBuffer.join(' ').trim();
        resumeData.experience.push(currentItem);
      } else if (currentSection === 'education' && currentItem.degree) {
        resumeData.education.push(currentItem);
      } else if (currentSection === 'projects' && currentItem.title) {
        currentItem.description = descriptionBuffer.join(' ').trim();
        resumeData.projects.push(currentItem);
      }
      currentItem = null;
      descriptionBuffer = [];
    }
    saveCurrentItem();

    // Final summary extraction if still empty
    if (!resumeData.personalInfo.summary && summaryLines.length > 0) {
      resumeData.personalInfo.summary = summaryLines.join(' ').trim();
    }

    // Set title from experience if not found
    if (!resumeData.personalInfo.title && resumeData.experience.length > 0) {
      resumeData.personalInfo.title = resumeData.experience[0].position;
    }

    // Clean up data
    if (resumeData.personalInfo.summary) {
      resumeData.personalInfo.summary = resumeData.personalInfo.summary.substring(0, 500).trim();
    }

    resumeData.skills = [...new Set(resumeData.skills)].slice(0, 20);
    resumeData.experience = resumeData.experience.filter((e: any) => e.position || e.company);
    resumeData.education = resumeData.education.filter((e: any) => e.degree || e.school);
    resumeData.projects = resumeData.projects.filter((p: any) => p.title);
    resumeData.certifications = resumeData.certifications.filter((c: any) => c.name);
    resumeData.achievements = resumeData.achievements.filter((a: any) => a.description);
    resumeData.languages = resumeData.languages.filter((l: any) => l.name);

    return resumeData;
  };

  const handleFileSelect = async (file: File) => {
    setIsProcessing(true);
    setUploadStatus('idle');
    setErrorMessage('');

    try {
      if (!file.type.includes('pdf') && !file.type.includes('text') && !file.type.includes('document')) {
        throw new Error('Please upload a PDF, TXT, or DOC file');
      }

      if (file.size > 5 * 1024 * 1024) {
        throw new Error('File size must be less than 5MB');
      }

      const text = await extractTextFromFile(file);

      if (!text || text.trim().length < 50) {
        throw new Error('Could not extract enough text from the file. The file may be empty or corrupted.');
      }

      console.log('Extracted text length:', text.length);
      console.log('First 500 characters:', text.substring(0, 500));

      const resumeData = parseResumeWithAI(text);

      console.log('Parsed resume data:', resumeData);

      setUploadStatus('success');
      setTimeout(() => {
        onResumeExtracted(resumeData);
        onClose();
      }, 1000);

    } catch (error: any) {
      setUploadStatus('error');
      setErrorMessage(error.message || 'Failed to process file');
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Upload className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Upload Resume</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">AI-Powered Analysis</h3>
              <p className="text-sm text-blue-700">
                Upload your existing resume and our AI will automatically extract all information,
                check your ATS score, and provide suggestions to improve it.
              </p>
            </div>
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : uploadStatus === 'success'
                ? 'border-green-500 bg-green-50'
                : uploadStatus === 'error'
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50'
            }`}
          >
            {isProcessing ? (
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                <p className="text-lg font-semibold text-gray-700">Processing your resume...</p>
                <p className="text-sm text-gray-500">AI is analyzing your document</p>
              </div>
            ) : uploadStatus === 'success' ? (
              <div className="space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <p className="text-lg font-semibold text-green-700">Resume uploaded successfully!</p>
                <p className="text-sm text-green-600">Applying improvements...</p>
              </div>
            ) : uploadStatus === 'error' ? (
              <div className="space-y-4">
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
                <p className="text-lg font-semibold text-red-700">Upload failed</p>
                <p className="text-sm text-red-600">{errorMessage}</p>
                <button
                  onClick={() => setUploadStatus('idle')}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <FileText className="w-16 h-16 text-gray-400 mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Drop your resume here or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports PDF, TXT, DOC (Max 5MB)
                  </p>
                </div>
                <label className="inline-block">
                  <input
                    type="file"
                    accept=".pdf,.txt,.doc,.docx"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                  <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all cursor-pointer inline-block">
                    Choose File
                  </span>
                </label>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-900 text-sm">AI Extraction</h4>
              <p className="text-xs text-purple-700 mt-1">Smart parsing</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-900 text-sm">ATS Check</h4>
              <p className="text-xs text-blue-700 mt-1">Instant scoring</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <Sparkles className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-900 text-sm">Auto-Fix</h4>
              <p className="text-xs text-green-700 mt-1">AI improvements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploader;
