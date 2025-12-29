import { Doctor, Service, BlogPost, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
    {
        id: '1',
        name: 'Dr. Sarah Jenkins',
        specialty: 'Senior Periodontist',
        experience: 12,
        description: 'Specialist in prevention, diagnosis, and treatment of periodontal disease.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDztu2oGHerQAqEN8qwIh2qpCNbd7zq2msrgA0hkcAwlbVjXX7Dv0dn4EXWLDQqmW5UdTuja71b23D1IND3iOF-ER2_aH1P4_YTB_pD6VXBRp0Pn0fhDWIw_AtlIx64tg9ON0ljYFi5j-1S80taFTCI8EQQyxFZJUfyIDHjv461h5VIQBlQPJgSzhEqTaGfWpTv9v-BZx6hBf5p7wG0-GBMG1TjZBNogTv3fYy6lChtIcAE6Tj1C-5H3zlbEdNG4UQ_nkFCq1uUYeHQ',
        available: true
    },
    {
        id: '2',
        name: 'Dr. Michael Chen',
        specialty: 'Orthodontist',
        experience: 8,
        description: 'Expert in diagnosing and treating dental irregularities and jaw alignment.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrgDpA32PIe25Bjb_dezTNnDBOz39BrsggrXU2mOWvJ4GSk2jopMq_JQjp8FuIVNg3ZkGahoybEKJAzFEimhe0mSZRgu_0NheCrhtUL0tc_13aGi5_TwNNk91apHZ-YU8hvJ5OWNXEXTxo-vvZntk4nI7OfKAfCZFqwQ3gboJtNo7bLanZutRH84h_reU8KmO4tYJfiCNj-Q3E5rNRs9RTyGti_DihwMJzLiPPb4dlpXGGSkEGG3Sg7RAkGqNaXxZ8kgLMYoot1cRv',
        available: false, 
    },
    {
        id: '3',
        name: 'Dr. Emily Rossi',
        specialty: 'Pediatric Dentist',
        experience: 15,
        description: 'Dedicated to the oral health of children from infancy through the teen years.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpL4ddTaLYOHlrQ0i0yvXSNg6iQCMhAZFG4IdKKvF2OveRFZmeBDUGXsyumi3psRHBJKgqReim6alFP2UVFtkUiRVMDs_WkP6uiHJrA3h9nen9g3kjHTda_FTTk-KHSWmihvMrfe9pfQtXUbU4gSd1BjIQL_acj9dLkDubZuoemEBpzkdLjGNCo8VyQ38zRer3viWoHQEH4sCtgQDFYYzYUM7JjJLjtjFFuSzsWs92XAhCVOwAWBb-RGmY08ORW_-Ak4Q4VfAaLsd1',
        available: true
    },
    {
        id: '4',
        name: 'Dr. James Wilson',
        specialty: 'Oral Surgeon',
        experience: 10,
        description: 'Specializes in treating diseases and injuries in the head, neck, and face.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe9zFo9YtYgi95T8Zwo-FsHF7efag2RS8Q2aEftpmKTI27Og6QFmIQtdYkSUsugXaBIgl5-SBm8cgAls0MPEzywO8s7R9HePYvr_35_VmCbIFjWS1TKd5cCoSufFhtXpZxrSmtKkAByznu_oBQIoCqMUVVX6mDLT9HnkBUa99m1x4vdAZOfMjAIQLzhjVSi3gmk_5V4ak8gHmEj8mMcCFv2ptnRNmfBcQzpsUCkRJ6UAyIlRFu1oD46qMekchQIMFCxzLClit0Kili',
        available: true
    },
];

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'General Dentistry',
        description: 'Routine checkups, cleanings, and preventative care to keep your smile healthy and bright.',
        longDescription: 'Our General Dentistry services are the foundation of good oral health. We focus on preventing problems before they start and providing restorative treatments when needed. From comprehensive exams and professional cleanings to fillings and sealants, our team ensures your teeth and gums stay healthy for life. We use digital X-rays and intraoral cameras to catch issues early.',
        features: ['Comprehensive Exams', 'Professional Hygiene', 'Oral Cancer Screening', 'Digital X-Rays'],
        icon: 'dentistry',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATDhfvn1zVshnwtaxeDL-iseCFetnwHSObTyUOFwtjS7-i_WIHVVrwkuyP8ic86ZZR9jfESmwri4OyPxCYaimD6CIz8rGkaJwlcADZ6rT0I5MA9BXZOY06iuoganFevj_kGgUz53-PlOoarS1DfXohRcJYo2O4kHq9Lu0VxBoFhzXhcF9E-2oOi-lHJkotoPLFC1IjdNvHSFDtxtEr6URzxcreotL2RBtklNj6wwi4nXEvVGKBs8Z3T_UcTuNwWSjFyu1o5hCxWTMn',
        colorClass: 'text-primary bg-blue-50 dark:bg-blue-900/30'
    },
    {
        id: '2',
        title: 'Cosmetic Solutions',
        description: 'Teeth whitening, veneers, and smile makeovers designed to boost your confidence.',
        longDescription: 'Achieve the smile of your dreams with our advanced cosmetic dentistry solutions. Whether you want to brighten your teeth, fix chips and cracks, or completely transform your smile, we have the expertise and artistry to deliver stunning results. We offer Zoom! Teeth Whitening, custom porcelain veneers, and composite bonding tailored to your facial features.',
        features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers', 'Composite Bonding'],
        icon: 'auto_fix_high',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9bKXfUcJaMmEdNfpSX2id1fqawJpNatevKkSJuvSulZI_En3eoe8WDMs31Z-MM6gTJ3jyIKNghpSkArEvxZiD277yad2usPIKSzfFUXotUwShVNLjkOhJnTSTfrpZu_INCPV-3AqnMmSDnfPXL6OhmNrD8uankqyCUWajMoWp5Vy4_X8CmkMGOJMW47srCNve36L5FWeG23qZL-Wh5zfZjG0coEQ-hz30dDJ1zUUZhaeEYT1HzU98TqMcCbhf5jrDRO-41rnWhu9S',
        colorClass: 'text-purple-600 bg-purple-50 dark:bg-purple-900/30'
    },
    {
        id: '3',
        title: 'Pediatric Dentistry',
        description: 'Gentle care for children, focusing on building positive dental habits early on.',
        longDescription: 'We strive to make every visit a positive, fun experience for your child. Our pediatric specialists are trained to handle the unique behavioral and dental needs of children from infancy through adolescence. We emphasize education, preventive care like fluoride and sealants, and early orthodontic assessments to set the stage for a lifetime of healthy smiles.',
        features: ['Child-Friendly Environment', 'Sealants & Fluoride', 'Habit Counseling', 'Emergency Care'],
        icon: 'child_care',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJK3GGagPcqP5LqHO_etg4vVIdw-_JMShMYWGKQLED_GFzZefe5_pcddE1ZMjEHwy57-gsdbWKu1LJ_owfnXedyT54iKpgPDlaivLC6DetQqxxVY_FdBEpb-3Ux8bg1wNDHl66ATavPhXlOpFPuCd797D3DCToJXWdeoeRUDz5pzM6R1MFxzDNaMM5ALnLi7wzhppTQlJ_ceDf6l1Zbze1Adwyy4gevUXDrJ5v1J1hFmxLxJQrmFTnmxk_DsvVpuX21QeS2jTXc2yW',
        colorClass: 'text-teal-600 bg-teal-50 dark:bg-teal-900/30'
    },
    {
        id: '4',
        title: 'Orthodontics',
        description: 'Straighten your teeth with modern braces and invisible aligners for a perfect smile.',
        longDescription: 'Straight teeth are not just about aesthetics; they are easier to clean and function better. We offer a variety of orthodontic options for children, teens, and adults. From traditional metal braces to clear ceramic brackets and Invisalign® clear aligners, we create custom treatment plans to align your bite and improve your oral health.',
        features: ['Invisalign® Providers', 'Traditional Braces', 'Retainers', 'Early Intervention'],
        icon: 'medical_services',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgl0XB9bLpCxs3F2Ht1B3eDgy-ulzafr2sXeHfYYdseowy0GMg-vgKDD4ceWKL9LDb0VwwosEadaGUXdGNsY32XiTNtWBikaHnDAn76WjWnQ_fanLKVpjNsp0ZIm8hPEQgNzwfvStleue8TnEmzGCqRVvUbtw5VCPLaMmeJKA27vvzwC6NuomzCnDi_YWFn_Nu0J47VnRP1hT4wcQOaGo74vGuYIFxyysLsUWVEfoo2_snUV4Kg7E9xUR69BvTW4lYJt6cI-1r4O0r',
        colorClass: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30'
    },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: '7 Myths About Root Canals Debunked',
        excerpt: 'Root canals often get a bad reputation, but modern technology has made them virtually painless. Let\'s separate fact from fiction.',
        content: `
            <p>Root canals are often misunderstood procedures. For decades, they've been the punchline of jokes about painful experiences. However, modern endodontics has revolutionized how we save natural teeth. Here are the biggest myths debunked.</p>
            <h3>Myth 1: Root canals are painful.</h3>
            <p>This is the most common misconception. With modern anesthetics and technology, a root canal is typically no more uncomfortable than a routine filling. The pain you feel is actually caused by the infection in the tooth, not the treatment itself. The procedure removes the infection and relieves the pain.</p>
            <h3>Myth 2: It's better to just pull the tooth.</h3>
            <p>Saving your natural tooth is almost always the best option. Artificial teeth can limit your ability to chew certain foods and may require ongoing maintenance. Nothing looks, feels, or functions exactly like your natural tooth.</p>
            <h3>Myth 3: Root canals cause illness.</h3>
            <p>This myth stems from poorly designed research conducted nearly a century ago, which has long since been debunked. There is no valid scientific evidence linking root canal-treated teeth to disease elsewhere in the body.</p>
            <p>Don't let fear stop you from getting the care you need. If you have tooth pain or sensitivity, schedule a consultation with our specialists today.</p>
        `,
        category: 'Prevention',
        date: 'Oct 24, 2023',
        readTime: '6 min read',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPgcuNZmhCUA1E8YJKaDzYyVbY5Miqofs_uv_TKAnAy2UCdrk8ryaZaT4UVFtqTlDXUG0uZ1lGTe3H0QX6DiL4AZa_NwB3mKm0W0VxNoDwuVwjx0fnFFtF83I_o7hgX2A5GCImxmnf2A9j8ov8hHn1QGf3Qouxj3nuo8Z4wktstrhjPmAzBXM-4u51OYEi9jLVRlGAUbWEGJOL7g0nEA_rd6Et1xWOuuZjcWyvtZCBBye3IaOviwkd1znG2E-XIHURXtcC54gfOzxR',
        featured: false
    },
    {
        id: '2',
        title: 'The Importance of Flossing: More Than Just Clean Teeth',
        excerpt: 'Flossing does more than remove food; it stimulates gums, reduces inflammation, and can even impact heart health.',
        content: `
            <p>We've all heard it from our dentists: "You need to floss more." But is it really that important? The short answer is yes. Flossing does about 40% of the work required to remove sticky bacteria, or plaque, from your teeth.</p>
            <h3>Why Brushing Isn't Enough</h3>
            <p>A toothbrush bristles can't reach deep between teeth or under the gumline where much of the destructive bacteria live. If left alone, this plaque hardens into tartar, which can only be removed by a dentist.</p>
            <h3>The Systemic Connection</h3>
            <p>Gum disease is an inflammatory condition. Chronic inflammation in the mouth has been linked to systemic issues like heart disease, diabetes, and even Alzheimer's. By keeping your gums healthy through flossing, you're helping to protect your overall health.</p>
            <p>Try to floss at least once a day, preferably before bedtime, to remove the day's accumulation of plaque.</p>
        `,
        category: 'Hygiene',
        date: 'Oct 20, 2023',
        readTime: '4 min read',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBQWDSDIwtTHhSs1h_aK1jHWp6Pn-D83N9XUivq2BVDB3Ht_309gqft1SQzHYowyBfqQ7tGYuKA-NYGUl0jBlwWXQu8DxQH-Vd6PtOrKEDd8mJZOB52_POxwqz6TGnm1yu7U027JmtWo-pXYCEc-AlC9nWsbj6l3jMxtO3skvsHzvIT8K3jWoAlx2ozFcue01VfSyi3afSY07G9cBS0XxzNi47mKZAPuKQ-1TS2xR5cxcb7wRqhN4mpJLifjt9H0v0IbwJ3ZWbs0MF',
        featured: false
    },
    {
        id: '3',
        title: 'Invisalign vs. Braces: Which is Right for You?',
        excerpt: 'Choosing between traditional braces and clear aligners depends on your lifestyle, budget, and dental needs.',
        content: `
            <p>Orthodontic treatment has come a long way. Gone are the days when metal braces were the only option. Today, Invisalign offers a compelling alternative. But which is best for you?</p>
            <h3>Invisalign: The Clear Choice</h3>
            <p>Invisalign uses a series of clear, removable aligners to gradually move teeth. They are virtually invisible, making them a popular choice for adults and self-conscious teens. The ability to remove them makes eating and cleaning your teeth much easier.</p>
            <h3>Traditional Braces: The Powerhouse</h3>
            <p>Metal braces consist of brackets adhered to teeth and connected by wires. They are generally more effective for complex dental issues, such as severe overcrowding or vertical movement of teeth. Modern braces are also smaller and more comfortable than in the past.</p>
            <h3>The Verdict</h3>
            <p>If you have mild to moderate alignment issues and discipline to wear aligners for 22 hours a day, Invisalign is excellent. For complex cases, braces might be necessary. Consult with our orthodontists to find your perfect fit.</p>
        `,
        category: 'Cosmetic',
        date: 'Oct 15, 2023',
        readTime: '8 min read',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHpM1BGFirmn5BkUvfESHJ74_9wEUk6eFJo0_VV6PhVIlD8U3JYcnCBcOFNBIa62PCTyxkZEsYY9Gwlm3tKwM37-M7uGYd3OnzVDq51TwxVpKkSfyZnW7McyL58XMniTdw-9vzDGT2jlI06-QVyPRIkLiM03S_4T7xZ750FumH7cbRR5gsQMq9-d4FNxanF-5rsRpXugtVlry3-GZaadb7UEAtivMwa0pKOLBF-ykvHR8NHCWt-ZuFEikhauknqGZd2ErOTbKi2nLX',
        featured: false
    },
    {
        id: '4',
        title: 'Modern Dentistry: A Guide to a Healthier Smile',
        excerpt: 'Discover the latest tips and treatments for maintaining perfect oral hygiene from our top specialists.',
        content: `
            <p>Technology in dentistry is moving fast. From 3D imaging to laser treatments, the patient experience is becoming more comfortable, accurate, and efficient.</p>
            <h3>Digital Impressions</h3>
            <p>Say goodbye to the goopy trays. Digital intraoral scanners create a 3D map of your teeth in seconds, allowing for perfectly fitted crowns and aligners.</p>
            <h3>Laser Dentistry</h3>
            <p>Lasers are now used for everything from gum contouring to cavity detection. They often require less anesthesia and result in faster healing times.</p>
            <p>At DentalCare, we stay at the forefront of these advancements to ensure you receive the best care possible.</p>
        `,
        category: 'Featured',
        date: 'Oct 25, 2023',
        readTime: '5 min read',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4HHatPBgQr68wgeGycC0MFRa9QuKpjcRCJkJD1RbzPiyum7wDbUR3c9EW0mgw7BfIyA2TSoW5FYEWjRYbZoV-kWUvxLeHF_JGq_D6f_X_R-KXVMiHLtcK1uB6T_BT_Jd8DUDaLw3Hgm2WAjUEBiVVjREG1zO4aeacDtSoAz6hVyxldJmv9ZZI93-oqfoaZ1I8p6MWpcurRgH3ESItFK1MP5bc2JFlerx-KSw8xoFetCrdPckr4OWb877rgGSqAIqSUpa9bkJgPzph',
        featured: true
    }
];