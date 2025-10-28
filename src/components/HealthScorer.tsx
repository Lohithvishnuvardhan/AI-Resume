import React from 'react';
import { Heart, TrendingUp, AlertCircle, CheckCircle, Star, Target } from 'lucide-react';

interface HealthScorerProps {
  resumeData: any;
  score: number;
  onScoreChange: (score: number) => void;
}

interface HealthMetric {
  name: string;
  score: number;
  maxScore: number;
  suggestions: string[];
  status: 'excellent' | 'good' | 'needs-improvement';
}

const HealthScorer: React.FC<HealthScorerProps> = ({ resumeData, score, onScoreChange }) => {
  const calculateHealthMetrics = (): HealthMetric[] => {
    const metrics: HealthMetric[] = [
      {
        name: 'Content Quality',
        score: resumeData?.personalInfo?.summary ? 25 : 10,
        maxScore: 25,
        suggestions: [
          'Add a compelling professional summary',
          'Use action verbs in experience descriptions',
          'Quantify achievements with numbers'
        ],
        status: resumeData?.personalInfo?.summary ? 'excellent' : 'needs-improvement'
      },
      {
        name: 'Completeness',
        score: Math.min(25, (
          (resumeData?.personalInfo?.fullName ? 5 : 0) +
          (resumeData?.personalInfo?.email ? 5 : 0) +
          (resumeData?.experience?.length > 0 ? 10 : 0) +
          (resumeData?.skills?.length > 0 ? 5 : 0)
        )),
        maxScore: 25,
        suggestions: [
          'Complete all personal information fields',
          'Add at least 2 work experiences',
          'Include 5+ relevant skills'
        ],
        status: resumeData?.experience?.length > 0 && resumeData?.skills?.length >= 5 ? 'excellent' : 'needs-improvement'
      },
      {
        name: 'Professional Impact',
        score: Math.min(25, (resumeData?.experience?.length || 0) * 8),
        maxScore: 25,
        suggestions: [
          'Highlight leadership experiences',
          'Show career progression',
          'Include measurable achievements'
        ],
        status: (resumeData?.experience?.length || 0) >= 3 ? 'excellent' : 'needs-improvement'
      },
      {
        name: 'Skills Relevance',
        score: Math.min(25, (resumeData?.skills?.length || 0) * 3),
        maxScore: 25,
        suggestions: [
          'Add industry-specific skills',
          'Include both technical and soft skills',
          'Match skills to job requirements'
        ],
        status: (resumeData?.skills?.length || 0) >= 8 ? 'excellent' : 'good'
      }
    ];

    const totalScore = metrics.reduce((sum, metric) => sum + metric.score, 0);
    const newScore = Math.round(totalScore);
    
    if (newScore !== score) {
      onScoreChange(newScore);
    }

    return metrics;
  };

  const metrics = calculateHealthMetrics();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600';
      case 'good':
        return 'text-yellow-600';
      case 'needs-improvement':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'good':
        return <Star className="w-5 h-5 text-yellow-500" />;
      case 'needs-improvement':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Resume Health Score</h3>
            <p className="text-gray-600">AI-powered analysis and improvement tips</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}/100</div>
          <div className="flex items-center justify-center mt-1">
            <TrendingUp className={`w-4 h-4 mr-1 ${getScoreColor(score)}`} />
            <span className="text-sm text-gray-600">Health Score</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getStatusIcon(metric.status)}
                <h4 className="font-semibold text-gray-900">{metric.name}</h4>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`font-bold ${getStatusColor(metric.status)}`}>
                  {metric.score}/{metric.maxScore}
                </span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  metric.status === 'excellent' ? 'bg-green-500' :
                  metric.status === 'good' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${(metric.score / metric.maxScore) * 100}%` }}
              ></div>
            </div>

            <div className="space-y-1">
              <h5 className="text-sm font-medium text-gray-700">Improvement Suggestions:</h5>
              {metric.suggestions.map((suggestion, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <Target className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-gray-900 mb-2">Overall Assessment</h4>
        <p className="text-sm text-gray-700">
          {score >= 80 ? 'Excellent! Your resume is well-optimized and ready to impress employers.' :
           score >= 60 ? 'Good progress! A few improvements will make your resume even stronger.' :
           'Your resume needs attention. Focus on the suggestions above to significantly improve your chances.'}
        </p>
      </div>
    </div>
  );
};

export default HealthScorer;