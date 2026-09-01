import {useState} from 'react';
import {motion} from 'framer-motion';
import {PortfolioItem} from "../types/types";

// Import all images eagerly from the Base-Trim folder
const baseTrimImages = import.meta.glob('../assets/Base-Trim/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Bunk-Beds folder
const bunkBedImages = import.meta.glob('../assets/Bunk-Beds/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Closets folder
const closetImages = import.meta.glob('../assets/Closets/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Custom-Cabinetry folder
const customCabinetryImages = import.meta.glob('../assets/Custom-Cabinetry/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Custom-Carpentry folder
const customCarpentryImages = import.meta.glob('../assets/Custom-Carpentry/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Hardware folder
const hardwareImages = import.meta.glob('../assets/Hardware/*.{png,jpg,jpeg,svg}', {eager: true});

function extractImageUrls(images: Record<string, any>): string[] {
    return Object.values(images).map((module: any) => module.default);
}

const baseTrimItems = extractImageUrls(baseTrimImages)
    .sort((a, b) => {
        // Extract the number from the filename using regex
        const getNumber = (url: any) => {
            const match = url.match(/trim_(\d+)\.jpg$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map((url, index) => {
        return {
            id: index + 1,
            title: `Precision Trim Work ${index + 1}`,
            category: 'Base Trim',
            projectType: '',
            description: 'Bespoke Trim Work',
            image: url,
        };
    });

const bunkBedsItems = extractImageUrls(bunkBedImages)
    .sort((a, b) => {
        // Extract the number from the filename using regex
        const getNumber = (url: any) => {
            const match = url.match(/bunk_(\d+)\.jpg$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map((url, index) => {
        return {
            id: index + 1,
            title: `Hand Crafted Bunk-Beds ${index + 1}`,
            category: 'Bunk Beds',
            projectType: '',
            description: 'Unique, custom-crafted design',
            image: url,
        };
    });


const closetItems = extractImageUrls(closetImages)
    .sort((a, b) => {
        // Extract the number from the filename using regex
        const getNumber = (url: any) => {
            const match = url.match(/closet_(\d+)\.jpg$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map((url, index) => {
        return {
            id: index + 1,
            title: `Custom Closets ${index + 1}`,
            category: 'Closets',
            projectType: '',
            description: 'Tailored storage solutions',
            image: url
        };
    });

const customCabinetryItems = extractImageUrls(customCabinetryImages)
    .sort((a, b) => {
        // Extract the number from the filename using regex
        const getNumber = (url: any) => {
            const match = url.match(/kitchen_(\d+)\.jpg$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map((url, index) => {
        return {
            id: index + 1,
            title: `Custom Cabinetry ${index + 1}`,
            category: 'Custom Cabinetry',
            projectType: '',
            description: ' High-end cabinetry tailored to your unique needs',
            image: url,
        };
    });

const customCarpentryItems = extractImageUrls(customCarpentryImages)
    .sort((a, b) => {
        // Extract the number from the filename using regex
        const getNumber = (url: any) => {
            const match = url.match(/carpentry_(\d+)\.jpg$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map((url, index) => {
        return {
            id: index + 1,
            title: `Custom Carpentry ${index + 1}`,
            category: 'Custom Carpentry',
            projectType: '',
            description: 'Custom carpentry with precision detailing',
            image: url,
        };
    });

const hardwareItems = extractImageUrls(hardwareImages)
    .sort((a, b) => {
        // Extract the number from the filename using regex
        const getNumber = (url: any) => {
            const match = url.match(/hardware_(\d+)\.jpg$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map((url, index) => {
        return {
            id: index + 1,
            title: `Quality Hardware ${index + 1}`,
            category: 'Hardware',
            projectType: '',
            description: 'Only the best hardware ',
            image: url,
        };
    });

const categoryItemsMap: Record<string, PortfolioItem[]> = {
    'Custom Cabinetry': customCabinetryItems,
    'Custom Carpentry': customCarpentryItems,
    'Bunk Beds': bunkBedsItems,
    'Closets': closetItems,
    'Base Trim': baseTrimItems,
    'Hardware': hardwareItems,
};

function getFilteredItems(selectedCategory: string): PortfolioItem[] {
    return categoryItemsMap[selectedCategory] || null;
}

const categories = ['Custom Cabinetry', 'Custom Carpentry', 'Bunk Beds', 'Closets', 'Base Trim', 'Hardware'];


export function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('Custom Cabinetry');

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const foundItems: PortfolioItem[] = getFilteredItems(selectedCategory) || [];
    return (
        <section id="portfolio" className="py-32 bg-[#0a0a0a]" style={{width: '100%', margin: '0 auto'}}>
            <div style={{maxWidth: '1280px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem'}}>
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-100px"}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#c9a050]"></div>
                        <h4 className="text-[#c9a050]">Our Work</h4>
                        <div className="w-12 h-px bg-[#c9a050]"></div>
                    </div>
                    <h2 className="mb-4 text-white">Portfolio</h2>
                    <p className="text-white/70 mx-auto text-lg" style={{marginBottom: '3rem'}}>
                        Years of proven experience delivering exceptional quality in every detail
                    </p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-100px"}}
                    transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
                    className="flex flex-wrap justify-center gap-6"
                    style={{marginBottom: '4rem'}}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-6 py-3 text-sm tracking-wider transition-all duration-500 border-2 rounded-full ${
                                selectedCategory === category
                                    ? 'border-[#c9a050] text-white bg-[#c9a050]/10'
                                    : 'border-white/20 text-white/60 hover:border-[#c9a050]/50 hover:text-white/90'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {foundItems.length === 0 ? (
                        <p className="text-white text-center col-span-full">No items found for this category.</p>
                    ) : (
                        foundItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-50px"}}
                                transition={{duration: 0.6, delay: index * 0.1, ease: "easeOut"}}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden mb-6 bg-[#f5f5f3] aspect-[4/3]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    >
                                        <div
                                            className="text-[#c9a050] text-xs tracking-widest mb-2">{item.category}</div>
                                        <h3 className="text-white mb-2">{item.title}</h3>
                                        <p className="text-white/80 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}