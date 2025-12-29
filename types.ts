export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    experience: number;
    description: string;
    image: string;
    available: boolean;
    onLeave?: boolean;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    features?: string[];
    icon: string;
    image: string;
    colorClass: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content?: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    quote: string;
    rating: number;
    image: string;
}