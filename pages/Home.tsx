import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, DOCTORS, BLOG_POSTS } from '../constants';
import { Image } from '../components/Image';

const HeroSection = () => (
  <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10" />
    
    <div className="flex-1 flex flex-col gap-6 text-center md:text-left animate-in slide-in-from-bottom-8 duration-700">
      <div className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">Accepting New Patients</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        Your Perfect Smile <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Starts Here</span>
      </h1>
      
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
        Advanced dental care with a gentle touch. Experience modern dentistry in a comfortable, relaxing environment designed for your well-being.
      </p>
      
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
        <Link to="/contact" className="h-12 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
          <span>Book Visit</span>
          <span className="material-symbols-outlined text-lg">calendar_month</span>
        </Link>
        <Link to="/services" className="h-12 px-8 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center gap-2">
          <span>Our Services</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-8 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
        {[
          { label: 'Years Experience', value: '15+' },
          { label: 'Happy Patients', value: '10k+' },
          { label: 'Google Rating', value: '4.9', icon: 'star' }
        ].map((stat, i) => (
          <div key={i}>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1">
              {stat.label}
              {stat.icon && <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex-1 w-full relative group perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-[2rem] blur-2xl opacity-60 transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-700"></div>
        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
             <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-2xl shadow-lg max-w-[200px]">
                <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Certified Team</p>
                    <p className="text-[10px] text-slate-500">Top Rated Doctors</p>
                </div>
             </div>
             {/* Critical Image Optimization: fetchpriority="high" */}
             <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoRgIK1zAg47QnNxXsT3zHHwMC8ZxGuxN9Ld5biN1LQzO3I8AYef4himvg5Pxfg1jq9RSnjlTEpqUWeuxGDic834S_es0CNJ9qmBMwr1UTIVcwLzjg863wW8zCiL4palziajggZWM1YaxTOnf-oR83bddGRmbF_LqHM1PrIanQnshtywgkpE_C0scr7fP6Hm6nAC2HE5duzwQugnTrmFRj7q8Vj8OCDcv1wWkTcVu2LfEcyDFp87j9u6jmOXu3JFa5DarKNnlyoMLQ" 
                alt="Happy Patient"
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
        </div>
    </div>
  </section>
);

const ServicesSection = () => (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20" id="services">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Comprehensive Dental Services</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-400">We offer a full range of treatments to help you achieve and maintain the best possible oral health.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">
                View All Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
                <div key={service.id} className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="flex-1 flex flex-col justify-between gap-4 z-10">
                        <div>
                            <div className={`size-12 rounded-2xl flex items-center justify-center mb-4 ${service.colorClass.split(' ')[1] || 'bg-blue-50'}`}>
                                <span className={`material-symbols-outlined text-2xl ${service.colorClass.split(' ')[0]}`}>{service.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{service.description}</p>
                        </div>
                        <span className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">
                            Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </span>
                    </div>
                    <div className="w-full sm:w-48 h-48 sm:h-auto rounded-2xl bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0">
                         <Image src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const DoctorsPreview = () => (
  <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50 dark:bg-slate-900/30 rounded-[3rem]">
    <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Meet Our Specialists</h2>
        <p className="text-slate-500 mt-2">Highly qualified professionals dedicated to your smile.</p>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
        {DOCTORS.slice(0, 3).map((doctor) => (
            <div key={doctor.id} className="group flex flex-col items-center gap-4">
                <div className="relative size-48 rounded-full p-1 bg-gradient-to-tr from-primary to-blue-300 overflow-visible">
                    <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <Image src={doctor.image} alt={doctor.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {doctor.available && (
                         <div className="absolute bottom-2 right-2 size-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md z-10">
                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{doctor.name}</h4>
                    <p className="text-sm text-slate-500">{doctor.specialty}</p>
                </div>
            </div>
        ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <HeroSection />
      <ServicesSection />
      <DoctorsPreview />
      
      {/* Blog Preview Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Latest Articles</h2>
            <Link to="/blog" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:text-blue-600">
                 View all <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => (
                <article key={post.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                     <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <Image src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute right-3 top-3 rounded-lg bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur-sm shadow-sm z-20">
                            {post.category}
                        </div>
                     </div>
                     <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>{post.date}</span>
                            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                            <span>{post.readTime}</span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold leading-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                            {post.excerpt}
                        </p>
                     </div>
                </article>
            ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="w-full px-4 mb-8">
        <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden bg-primary text-white shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 text-center md:text-left">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready for a Brighter Smile?</h2>
                    <p className="text-blue-100 text-lg max-w-xl">Schedule your comprehensive exam today. We are accepting new patients and accept most insurance plans.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="h-14 px-8 flex items-center justify-center rounded-2xl bg-white text-primary font-bold shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200">
                        Book Appointment
                    </Link>
                    <button className="h-14 px-8 rounded-2xl bg-blue-600/50 border border-white/20 text-white font-bold backdrop-blur-sm hover:bg-blue-600/70 transition-all duration-200">
                        Call (555) 123-4567
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;