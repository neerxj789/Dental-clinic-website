import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Image } from '../components/Image';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = SERVICES.find(s => s.id === id);

    if (!service) {
        return (
             <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
                <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl text-slate-400">medical_services</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Service not found</h1>
                <Link to="/services" className="mt-4 text-primary font-bold hover:underline">Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <button onClick={() => navigate('/services')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                All Services
            </button>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                     <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.colorClass.split(' ')[1] || 'bg-blue-50'}`}>
                        <span className={`material-symbols-outlined text-4xl ${service.colorClass.split(' ')[0]}`}>{service.icon}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                        {service.longDescription || service.description}
                    </p>
                    
                    {service.features && (
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">What We Offer</h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <div className="size-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </div>
                                        <span className="font-semibold text-slate-700 dark:text-slate-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="px-8 py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 hover:-translate-y-0.5 transition-all">
                            Book Appointment
                        </Link>
                        <button className="px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                            View Pricing
                        </button>
                    </div>
                </div>

                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl bg-slate-100 dark:bg-slate-800">
                    <Image src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-2xl shadow-lg border border-white/20 z-10">
                         <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Patient Favorite</p>
                                <p className="text-sm text-slate-500">Rated 4.9/5 by over 500 patients for comfort and results.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;