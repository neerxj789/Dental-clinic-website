import React, { useState, useMemo } from 'react';
import { DOCTORS } from '../constants';
import { Image } from '../components/Image';

const Doctors = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Orthodontics', 'Pediatric', 'Periodontics', 'Surgery'];

  const filteredDoctors = useMemo(() => {
    if (selectedCategory === 'All') return DOCTORS;
    
    // Map categories to partial matches in specialty string
    const matchTerm = {
        'Orthodontics': 'Orthodontist',
        'Pediatric': 'Pediatric',
        'Periodontics': 'Periodontist',
        'Surgery': 'Surgeon'
    }[selectedCategory] || selectedCategory;

    return DOCTORS.filter(doc => doc.specialty.includes(matchTerm));
  }, [selectedCategory]);

  return (
    <div className="flex flex-col">
        {/* Hero */}
        <div className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
             <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-6">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    World-Class Specialists
                </div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
                    Meet Our <span className="text-primary">Medical Team</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Dedicated professionals committed to your perfect smile. Experience personalized dental care with our expert team of surgeons, orthodontists, and hygienists.
                </p>
             </div>
        </div>

        {/* Filters */}
        <div className="sticky top-16 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-4 mb-8 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar">
                <div className="flex items-center justify-start sm:justify-center gap-3 min-w-max">
                    <button 
                        onClick={() => setSelectedCategory('All')}
                        className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${selectedCategory === 'All' ? 'bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900' : 'bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:text-primary dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700'}`}
                    >
                        All Specialists
                    </button>
                    {categories.filter(c => c !== 'All').map(cat => (
                         <button 
                            key={cat} 
                            onClick={() => setSelectedCategory(cat)}
                            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:text-primary hover:ring-primary/20 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[400px]">
                {filteredDoctors.length > 0 ? filteredDoctors.map((doctor) => (
                    <div key={doctor.id} className="group relative flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-soft dark:bg-slate-800 dark:ring-slate-700 animate-in fade-in zoom-in-95 duration-500">
                         <div className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${doctor.available ? 'bg-green-50 text-green-600 ring-green-600/20 dark:bg-green-900/20 dark:text-green-400' : 'bg-slate-50 text-slate-500 ring-slate-200 dark:bg-slate-700 dark:text-slate-400'}`}>
                            {doctor.available ? 'Available' : 'Booked'}
                        </div>
                        <div className="mb-4 flex justify-center">
                            <div className="relative h-32 w-32">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-400 opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                                <div className="h-full w-full rounded-full ring-4 ring-white dark:ring-slate-800 relative z-10 overflow-hidden bg-slate-100">
                                    <Image src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center flex-grow">
                             <h3 className="text-lg font-bold text-slate-900 dark:text-white">{doctor.name}</h3>
                             <p className="text-sm font-medium text-primary mb-2">{doctor.specialty}</p>
                             <div className="mb-4 flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[14px]">school</span>
                                {doctor.experience} Years Experience
                            </div>
                            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                                {doctor.description}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-auto">
                            <button className="flex-1 rounded-xl bg-slate-50 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                                Profile
                            </button>
                            <button className="flex-1 rounded-xl bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                                Book
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-full py-20 text-center text-slate-500">
                        <p className="text-lg">No specialists found for this category.</p>
                        <button onClick={() => setSelectedCategory('All')} className="mt-4 text-primary font-bold hover:underline">View All Doctors</button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Doctors;