import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Image } from '../components/Image';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
                <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl text-slate-400">article</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Article not found</h1>
                <p className="text-slate-500 mt-2 mb-6">The article you are looking for does not exist.</p>
                <Link to="/blog" className="text-primary font-bold hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back to Articles
            </button>

            <header className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                     <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        {post.date}
                     </span>
                     <span className="size-1 rounded-full bg-slate-300"></span>
                     <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                        {post.readTime}
                     </span>
                </div>
            </header>

            <div className="rounded-3xl overflow-hidden aspect-video shadow-lg mb-12 bg-slate-100">
                <Image src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div 
                className="prose prose-lg prose-slate dark:prose-invert mx-auto max-w-2xl"
                dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} 
            />

            <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <p className="font-bold text-slate-900 dark:text-white">Share this article</p>
                <div className="flex gap-4">
                    <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all">
                        <i className="fa-brands fa-facebook-f"></i>
                    </button>
                    <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-all">
                        <i className="fa-brands fa-twitter"></i>
                    </button>
                    <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;