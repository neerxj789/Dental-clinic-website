import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Image } from '../components/Image';

const Blog = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Categories present in the mock data
    const categories = ['All', 'Prevention', 'Hygiene', 'Cosmetic', 'Featured'];

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') return BLOG_POSTS;
        return BLOG_POSTS.filter(post => post.category === selectedCategory);
    }, [selectedCategory]);

    const heroPost = useMemo(() => {
        if (selectedCategory === 'All') {
            return filteredPosts.find(p => p.featured) || filteredPosts[0];
        }
        return filteredPosts[0];
    }, [filteredPosts, selectedCategory]);

    const gridPosts = useMemo(() => {
        if (!heroPost) return [];
        return filteredPosts.filter(p => p.id !== heroPost.id);
    }, [filteredPosts, heroPost]);

    const handleReadPost = (id: string) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
             {/* Featured Hero */}
             {heroPost && (
                 <div key={heroPost.id} className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 mb-12 animate-in fade-in zoom-in-95 duration-500">
                     <div className="grid md:grid-cols-2 gap-0">
                         <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                             <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                                <span className="material-symbols-outlined text-[16px]">stars</span>
                                {heroPost.category}
                             </div>
                             <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
                                 {heroPost.title}
                             </h1>
                             <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                                 {heroPost.excerpt}
                             </p>
                             <button 
                                onClick={() => handleReadPost(heroPost.id)}
                                className="w-fit flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-blue-600 hover:gap-3"
                             >
                                Read Article
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                             </button>
                         </div>
                         <div className="h-64 md:h-auto w-full relative order-1 md:order-2 bg-slate-100 dark:bg-slate-700">
                             <Image src={heroPost.image} alt={heroPost.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-none z-10"></div>
                         </div>
                     </div>
                 </div>
             )}

             {/* Filter Bar */}
             <div className="sticky top-16 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl py-4 mb-8 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
                <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                    {categories.map(cat => (
                         <button 
                            key={cat} 
                            onClick={() => setSelectedCategory(cat)}
                            className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                                selectedCategory === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 hover:text-primary hover:ring-primary/50'
                            }`}
                         >
                             {cat === 'All' ? 'All Posts' : cat}
                         </button>
                    ))}
                </div>
             </div>

             {/* Blog Grid */}
             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20 min-h-[400px]">
                 {gridPosts.length > 0 ? (
                     gridPosts.map(post => (
                         <article 
                            key={post.id} 
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 fill-mode-both cursor-pointer"
                            onClick={() => handleReadPost(post.id)}
                         >
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                <Image src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute right-3 top-3 rounded-lg bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur-sm shadow-sm z-20">
                                    {post.category}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                    <span>{post.date}</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="mb-3 text-lg font-bold leading-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary">
                                    Read Post
                                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                                </div>
                            </div>
                         </article>
                     ))
                 ) : (
                    !heroPost && (
                        <div className="col-span-full py-20 text-center animate-in fade-in">
                            <div className="inline-flex size-20 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mb-4">
                                <span className="material-symbols-outlined text-4xl">search_off</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No articles found</h3>
                            <p className="text-slate-500 mt-2">There are no articles in the "{selectedCategory}" category yet.</p>
                            <button 
                                onClick={() => setSelectedCategory('All')}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                View all posts
                            </button>
                        </div>
                    )
                 )}
             </div>

             {/* Newsletter */}
             <div className="relative rounded-3xl overflow-hidden bg-primary text-white shadow-xl shadow-primary/20">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                 <div className="relative z-10 p-8 md:p-16 text-center max-w-2xl mx-auto">
                     <div className="size-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
                         <span className="material-symbols-outlined text-3xl">mail</span>
                     </div>
                     <h2 className="text-3xl font-bold mb-4">Weekly Dental Tips</h2>
                     <p className="text-white/80 mb-8">Join 5,000+ subscribers and get the best oral health advice delivered to your inbox.</p>
                     <div className="flex flex-col sm:flex-row gap-3">
                         <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm" />
                         <button className="px-8 py-3 rounded-xl bg-white text-primary font-bold shadow-lg hover:bg-slate-100 transition-colors">Subscribe</button>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Blog;