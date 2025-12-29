import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

export const Image: React.FC<ImageProps> = ({ className, containerClassName, alt, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName || 'w-full h-full'}`}>
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse z-10" />
            )}
            
            <img 
                {...props}
                alt={alt}
                style={{ ...style, opacity: isLoaded ? undefined : 0 }}
                className={`${className || ''} transition-opacity duration-500`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
            />
            
            {hasError && (
                 <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 z-20">
                    <span className="material-symbols-outlined text-4xl">image_not_supported</span>
                </div>
            )}
        </div>
    );
};