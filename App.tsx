import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';

// Eager load Home for faster LCP (Largest Contentful Paint)
import Home from './pages/Home';

// Lazy load other pages to split the bundle
const Doctors = lazy(() => import('./pages/Doctors'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
        <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
            <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
};

export default App;