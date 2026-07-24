import {useState} from 'react';
import {motion} from 'framer-motion';

// Import all images eagerly from the Closets folder
const closetImages = import.meta.glob('../assets/Closets/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Fireplace folder
const hardwareImages = import.meta.glob('../assets/Hardware/*.{png,jpg,jpeg,svg}', {eager: true});

// Import all images eagerly from the Kitchens folder
const kitchenImages = import.meta.glob('../assets/Kitchens/*.{png,jpg,jpeg,svg}', {eager: true});


// Import all images eagerly from the Trim folder
const trimImages = import.meta.glob('../assets/Trim/*.{png,jpg,jpeg,svg}', {eager: true});

function extractImageUrls(images: Record<string, any>): string[] {
    return Object.values(images).map((module: any) => module.default);
}

const closetItems = extractImageUrls(closetImages)
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
        title: `Custom Cabinetry ${index + 1}`,
        category: 'Closets',
        projectType: '',
        description: 'Tailored storage solutions',
        image: url
    };
});

const hardwareItems = extractImageUrls(hardwareImages)
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
        title: `Modern Fireplace ${index + 1}`,
        category: 'Fireplace',
        projectType: '',
        description: 'Custom Fireplace ',
        image: url,
    };
});

const kitchenItems = extractImageUrls(kitchenImages)
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
            title: `Modern Kitchen ${index + 1}`,
            category: 'Kitchens',
            projectType: '',
            description: 'Custom cabinetry with precision detailing',
            image: url,
        };
    });
console.log(kitchenItems);


const trimItems = extractImageUrls(trimImages)
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
        title: `Precision Trim Work ${index + 1}`,
        category: 'Trim',
        projectType: '',
        description: 'High-end finish carpentry',
        image: url,
    };
});

const initialPortfolioItems:any = [
    // {
    //     id: 1,
    //     title: 'Luxury Residential Estate',
    //     category: 'Residential',
    //     projectType: 'Projects',
    //     description: 'Complete custom woodwork throughout',
    //     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1MzEyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    // },
    // {
    //     id: 2,
    //     title: 'Executive Office Build-Out',
    //     category: 'Commercial',
    //     projectType: 'Projects',
    //     description: 'High-end corporate millwork',
    //     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2V8ZW58MXx8fHwxNzY1MzEyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    // }
];

const combinedItems = [
    ...closetItems,
    ...hardwareItems,
    ...kitchenItems,
    ...trimItems,
];

const startingId = initialPortfolioItems.length + 1;

const combinedItemsWithIds = combinedItems.map((item, index) => ({
    id: startingId + index,
    ...item,
}));

const portfolioItems = [
    ...initialPortfolioItems,
    ...combinedItemsWithIds,
];

const categories = ['All', 'Kitchens',  'Closets',  'Trim', 'Hardware'];
const projectSubcategories = ['Commercial', 'Residential'];

export function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        if (category !== 'Projects') {
            setSelectedSubcategory(null);
        }
    };

    const filteredItems = (() => {
        if (selectedCategory === 'All') {
            return portfolioItems;
        }
        if (selectedCategory === 'Projects') {
            if (selectedSubcategory) {
                return portfolioItems.filter(item => item.category === selectedSubcategory);
            }
            return portfolioItems.filter(item => item.projectType === 'Projects');
        }
        return portfolioItems.filter(item => item.category === selectedCategory);
    })();

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
                    {selectedCategory === 'Projects' && (
                        <div className="flex gap-6">
                            {projectSubcategories.map((subcategory) => (
                                <button
                                    key={subcategory}
                                    onClick={() => setSelectedSubcategory(subcategory)}
                                    className={`px-6 py-3 text-sm tracking-wider transition-all duration-500 border-2 rounded-full ${
                                        selectedSubcategory === subcategory
                                            ? 'border-[#c9a050] text-white bg-[#c9a050]/10'
                                            : 'border-white/20 text-white/60 hover:border-[#c9a050]/50 hover:text-white/90'
                                    }`}
                                >
                                    {subcategory}
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {filteredItems.length === 0 ? (
                        <p className="text-white text-center col-span-full">No items found for this category.</p>
                    ) : (
                        filteredItems.map((item, index) => (
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