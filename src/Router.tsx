import { useState, useEffect } from 'react';
import App from './App';
import Documentation from './pages/Documentation';
import LicenseTerms from './pages/LicenseTerms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/documentation':
        return <Documentation />;
      case '/license-terms':
        return <LicenseTerms />;
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/refund-policy':
        return <RefundPolicy />;
      case '/terms-of-service':
        return <TermsOfService />;
      default:
        return <App />;
    }
  };

  return renderPage();
}

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}