import React, { useState } from 'react';
import { FileText, Sparkles, Download, Copy, RefreshCw, FileDown } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { IS_PURCHASED, GUMROAD_URL } from '../config';

interface CoverLetterData {
  jobTitle: string;
  companyName: string;
  hiringManager: string;
  jobDescription: string;
  yourName: string;
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
  };
}

interface CoverLetterBuilderProps {
  resumeData: any;
  isVisible: boolean;
  onClose: () => void;
}

const CoverLetterBuilder: React.FC<CoverLetterBuilderProps> = ({ resumeData, isVisible, onClose }) => {
  const [coverLetterData, setCoverLetterData] = useState<CoverLetterData>({
    jobTitle: '',
    companyName: '',
    hiringManager: '',
    jobDescription: '',
    yourName: resumeData?.personalInfo?.fullName || '',
    personalInfo: {
      fullName: resumeData?.personalInfo?.fullName || '',
      email: resumeData?.personalInfo?.email || '',
      phone: resumeData?.personalInfo?.phone || ''
    }
  });

  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCoverLetter = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const letter = `Dear ${coverLetterData.hiringManager || 'Hiring Manager'},

I am writing to express my strong interest in the ${coverLetterData.jobTitle} position at ${coverLetterData.companyName}. With my background in ${resumeData?.profession || 'technology'} and proven track record of success, I am confident I would be a valuable addition to your team.

In my previous roles, I have demonstrated expertise in ${resumeData?.skills?.slice(0, 3).join(', ') || 'various technical skills'}, which directly aligns with the requirements outlined in your job posting. My experience includes:

• ${resumeData?.experience?.[0]?.description || 'Leading cross-functional teams to deliver high-impact projects'}
• Developing innovative solutions that drive business growth and efficiency
• Collaborating with stakeholders to achieve strategic objectives

I am particularly drawn to ${coverLetterData.companyName} because of your commitment to innovation and excellence in the industry. I would welcome the opportunity to discuss how my skills and passion can contribute to your team's continued success.

Thank you for considering my application. I look forward to hearing from you soon.

Sincerely,
${coverLetterData.yourName || coverLetterData.personalInfo.fullName}`;

      setGeneratedLetter(letter);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
  };

  const downloadAsPDF = async () => {
    if (!IS_PURCHASED) {
      window.open(GUMROAD_URL, '_blank', 'noopener,noreferrer');
      alert('Preview only – downloading cover letters is available after purchasing the template on Gumroad.');
      return;
    }

    try {
      const letterElement = document.querySelector('.cover-letter-content') as HTMLElement;
      if (!letterElement) {
        // Create a temporary element if not found
        const tempDiv = document.createElement('div');
        tempDiv.className = 'cover-letter-content';
        tempDiv.style.padding = '1in';
        tempDiv.style.fontFamily = 'Arial, sans-serif';
        tempDiv.style.whiteSpace = 'pre-wrap';
        tempDiv.textContent = generatedLetter;
        document.body.appendChild(tempDiv);

        const opt = {
          margin: 0.5,
          filename: `${coverLetterData.yourName || 'CoverLetter'}-CoverLetter.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as 'portrait' }
        };

        await html2pdf().set(opt).from(tempDiv).save();
        document.body.removeChild(tempDiv);
      } else {
        const opt = {
          margin: 0.5,
          filename: `${coverLetterData.yourName || 'CoverLetter'}-CoverLetter.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as 'portrait' }
        };

        await html2pdf().set(opt).from(letterElement).save();
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const downloadAsWord = () => {
    if (!IS_PURCHASED) {
      window.open(GUMROAD_URL, '_blank', 'noopener,noreferrer');
      alert('Preview only – downloading cover letters is available after purchasing the template on Gumroad.');
      return;
    }

    try {
      const header = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 0.5in; white-space: pre-wrap; }
  </style>
</head>
<body>`;
      const footer = `</body>
</html>`;
      
      const fullHtml = header + generatedLetter.replace(/\n/g, '<br>') + footer;
      const blob = new Blob([fullHtml], { type: 'application/msword' });
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${coverLetterData.yourName || 'CoverLetter'}-CoverLetter.doc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating Word document:', error);
      alert('Failed to generate Word document. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-bold text-gray-900">AI Cover Letter Generator</h2>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Create a personalized cover letter in seconds</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl flex-shrink-0"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Input Form */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200 overflow-y-auto">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Your Name</label>
                <input
                  type="text"
                  value={coverLetterData.yourName}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, yourName: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 text-sm sm:text-base"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Job Title</label>
                <input
                  type="text"
                  value={coverLetterData.jobTitle}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, jobTitle: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 text-sm sm:text-base"
                  placeholder="Senior Software Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Company Name</label>
                <input
                  type="text"
                  value={coverLetterData.companyName}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 text-sm sm:text-base"
                  placeholder="Google"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Hiring Manager (Optional)</label>
                <input
                  type="text"
                  value={coverLetterData.hiringManager}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, hiringManager: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 text-sm sm:text-base"
                  placeholder="Ms. Johnson"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Job Description (Optional)</label>
                <textarea
                  value={coverLetterData.jobDescription}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, jobDescription: e.target.value }))}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 text-sm sm:text-base"
                  placeholder="Paste the job description here..."
                />
              </div>

              <button
                onClick={generateCoverLetter}
                disabled={!coverLetterData.yourName || !coverLetterData.jobTitle || !coverLetterData.companyName || isGenerating}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Generate Cover Letter
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Letter */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto">
            {generatedLetter ? (
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Generated Letter</h3>
                  <button
                    onClick={copyToClipboard}
                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center text-xs sm:text-sm"
                  >
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Copy
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <button
                    onClick={downloadAsPDF}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    PDF
                  </button>
                  <button
                    onClick={downloadAsWord}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl text-sm sm:text-base"
                  >
                    <FileDown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Word
                  </button>
                </div>
                <div className="bg-gray-50 p-3 sm:p-6 rounded-lg cover-letter-content">
                  <div className="whitespace-pre-wrap text-xs sm:text-sm text-gray-800 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {generatedLetter}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center px-4">
                  <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-300" />
                  <p className="text-xs sm:text-sm">Fill in the job details and click "Generate Cover Letter"</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterBuilder;