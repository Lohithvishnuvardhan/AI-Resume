import React, { useState } from 'react';
import { FileText, Sparkles, Download, Copy, RefreshCw, FileDown } from 'lucide-react';
import html2pdf from 'html2pdf.js';

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

  const downloadAsPDF = () => {
    const element = document.createElement('div');
    element.style.padding = '40px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.fontSize = '12pt';
    element.style.lineHeight = '1.5';
    element.style.color = '#000';
    element.innerHTML = generatedLetter.split('\n').map(line => `<p style="margin: 0 0 8px 0;">${line || '&nbsp;'}</p>`).join('');

    const opt = {
      margin: 1,
      filename: `cover-letter-${coverLetterData.companyName.replace(/\s+/g, '-')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const downloadAsWord = () => {
    const header = `MIME-Version: 1.0\nContent-Type: multipart/related; boundary="BOUNDARY"\n\n--BOUNDARY\nContent-Type: text/html; charset="utf-8"\n\n`;
    const footer = `\n--BOUNDARY--`;

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.5; }
    p { margin: 0 0 8pt 0; }
  </style>
</head>
<body>
  ${generatedLetter.split('\n').map(line => `<p>${line || '&nbsp;'}</p>`).join('')}
</body>
</html>`;

    const blob = new Blob([header + html + footer], {
      type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cover-letter-${coverLetterData.companyName.replace(/\s+/g, '-')}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Cover Letter Generator</h2>
              <p className="text-gray-600">Create a personalized cover letter in seconds</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex h-[calc(90vh-80px)]">
          {/* Input Form */}
          <div className="w-1/2 p-6 border-r border-gray-200 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={coverLetterData.yourName}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, yourName: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <input
                  type="text"
                  value={coverLetterData.jobTitle}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, jobTitle: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  placeholder="Senior Software Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  value={coverLetterData.companyName}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  placeholder="TechCorp Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hiring Manager (Optional)</label>
                <input
                  type="text"
                  value={coverLetterData.hiringManager}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, hiringManager: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  placeholder="Ms. Johnson"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description (Optional)</label>
                <textarea
                  value={coverLetterData.jobDescription}
                  onChange={(e) => setCoverLetterData(prev => ({ ...prev, jobDescription: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  placeholder="Paste the job description here for better personalization..."
                />
              </div>

              <button
                onClick={generateCoverLetter}
                disabled={!coverLetterData.yourName || !coverLetterData.jobTitle || !coverLetterData.companyName || isGenerating}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Cover Letter
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Letter */}
          <div className="w-1/2 p-6 overflow-y-auto">
            {generatedLetter ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Generated Cover Letter</h3>
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center text-sm"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </button>
                </div>
                <div className="flex space-x-3 mb-4">
                  <button
                    onClick={downloadAsPDF}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    PDF
                  </button>
                  <button
                    onClick={downloadAsWord}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl"
                  >
                    <FileDown className="w-5 h-5 mr-2" />
                    Word
                  </button>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="whitespace-pre-wrap text-sm text-gray-800 leading-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.5' }}>
                    {generatedLetter}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Fill in the job details and click "Generate Cover Letter" to get started</p>
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