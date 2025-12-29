import React from 'react';

const Contact = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12 text-center max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                 <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                 Accepting New Patients
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
                Smile with Confidence.<br/>
                <span className="text-primary">Book Your Visit.</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-normal">
                 Expert dental care is just an appointment away. Fill out the form below or give us a call to schedule your visit today.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 xl:col-span-8">
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-soft p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                        <span className="material-symbols-outlined text-primary text-3xl">calendar_add_on</span>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Request Appointment</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">We will confirm your slot within 2 hours.</p>
                        </div>
                    </div>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</span>
                                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-0 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" type="text"/>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Contact Number</span>
                                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-0 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
                            </label>
                        </div>
                        <label className="flex flex-col gap-2">
                             <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</span>
                             <input className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-0 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 transition-all" placeholder="name@example.com" type="email"/>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Reason for Visit</span>
                                <div className="relative">
                                    <select className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-0 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 appearance-none pr-10">
                                        <option>General Checkup</option>
                                        <option>Teeth Whitening</option>
                                        <option>Root Canal</option>
                                        <option>Dental Implants</option>
                                        <option>Orthodontics</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Date</span>
                                <div className="relative">
                                    <input className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-0 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 appearance-none" type="date"/>
                                    <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none bg-slate-50 dark:bg-slate-900 pl-2">calendar_month</span>
                                </div>
                            </label>
                        </div>
                        <div className="pt-4">
                            <button className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-glow transition-all transform hover:-translate-y-1 active:translate-y-0 text-lg flex items-center justify-center gap-2">
                                <span>Confirm Booking</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
                 <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-soft p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Our Location</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">123 Health Ave, Medical District<br/>New York, NY 10010</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Phone Number</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">+1 (555) 123-4567</p>
                                <p className="text-xs text-slate-400 mt-0.5">Mon-Fri 9am-6pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/30 flex items-start gap-3">
                        <span className="material-symbols-outlined text-rose-500 mt-0.5">emergency</span>
                        <div>
                            <p className="text-sm font-bold text-rose-700 dark:text-rose-400">Dental Emergency?</p>
                            <p className="text-xs text-rose-600/80 dark:text-rose-400/80 mt-1">Call our 24/7 priority line for immediate assistance: <span className="font-semibold underline">+1 (555) 911-DENT</span></p>
                        </div>
                    </div>
                 </div>
                 
                 <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-soft p-2 border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden group bg-slate-200">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTXBDPKqslPDgJGeozYKUBJputAgZwsPosaj0PBtsvgxz6hFLECvh0YUWP2lZqrc2ynfU08Si9ulP5_LK1E1dJlC9uDLIOP2kbm7kF-RQW3UQcWEgmFrhGtfjEGf5_3fpTJpmWLvL3YNqgio_SQQ2a4XPlZ0FjBrIc9X_l8hvbuxXlWfAfr_ijyzKrNLaY_YPsZVwoB3c0Jocf1fD-j9H7Q79MYsxo3VqnQHjUuz7zF86-ugbo2yzi3SWGhjt5XaBPY_dhUM0g_GUN" 
                         alt="Map" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"/>
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">Get Directions</span>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;