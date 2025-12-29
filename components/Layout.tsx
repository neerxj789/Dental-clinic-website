import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `text-sm font-medium transition-colors ${isActive(path) ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`;

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-2xl">dentistry</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">DentalCare<span className="text-primary">.</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/services" className={linkClass('/services')}>Services</Link>
          <Link to="/doctors" className={linkClass('/doctors')}>Doctors</Link>
          <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/contact')}
            className="hidden sm:flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-blue-600 hover:shadow-primary/50 transition-all active:scale-95"
          >
            Book Now
          </button>
          <button 
            className="flex md:hidden text-slate-900 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/')}>Home</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/services')}>Services</Link>
                <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/doctors')}>Doctors</Link>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/blog')}>Blog</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/contact')}>Contact</Link>
                <button 
                    onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
                    className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-white"
                >
                    Book Appointment
                </button>
            </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">dentistry</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">DentalCare<span className="text-primary">.</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Providing top-tier dental care with a focus on patient comfort and advanced technology. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#E4405F] hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/services/1" className="hover:text-primary transition-colors">General Dentistry</Link></li>
              <li><Link to="/services/2" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link to="/services/3" className="hover:text-primary transition-colors">Pediatrics</Link></li>
              <li><Link to="/services/4" className="hover:text-primary transition-colors">Orthodontics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>123 Medical Center Dr.<br/>Suite 200, Health City, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>hello@dentalcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© 2024 DentalCare Hospital. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};