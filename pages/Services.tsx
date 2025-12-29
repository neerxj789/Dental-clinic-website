import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">
                Comprehensive <span className="text-primary">Dental Care</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                From routine checkups to complex surgeries, we provide a full spectrum of dental treatments tailored to your unique needs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {SERVICES.map((service) => (
                <div key={service.id} className="group relative flex flex-col gap-6 p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
                     <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-100">
                         <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <div className="flex-1">
                        <div className={`inline-flex p-3 rounded-2xl mb-4 ${service.colorClass.split(' ')[1]}`}>
                            <span className={`material-symbols-outlined text-2xl ${service.colorClass.split(' ')[0]}`}>{service.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                            {service.description} We use the latest technology to ensure precise, comfortable, and effective treatment.
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                Experienced Specialists
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                Advanced Technology
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                Comfortable Environment
                            </li>
                        </ul>
                        <button 
                            onClick={() => navigate(`/services/${service.id}`)}
                            className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Learn More
                        </button>
                     </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Services;