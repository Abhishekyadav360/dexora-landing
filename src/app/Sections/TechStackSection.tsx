'use client';
import TechCard from "../Components/TechCard";
import Title from "../Components/Title";



const techStack = [
    { title: 'OpenAI', icon: '/images/dexf1.webp' },
    { title: 'Zapier', icon: '/images/dexf1.webp' },
    { title: 'Airtable', icon: '/images/dexf1.webp' },
    { title: 'LangChain', icon: '/images/dexf1.webp' },
    { title: 'Python', icon: '/images/dexf1.webp' }
];

const TechStackSection = () => {
    return (
        <section className=" py-20 px-4 overflow-hidden min-h-[70vh]">
            
            <div className="max-w-7xl mx-auto">

                <div className="max-w-3xl">
              <Title
                title="Our Ecosystem"
                highlightedWord=""
                highlightedText=""
                subtitle=""
                className="text-left mb-20"
              />
            </div>
            
                <div className="hidden md:flex items-center justify-center mx-auto">
                    {techStack.map((item, i) => (
                        <TechCard key={i} index={i} {...item} />
                    ))}
                </div>

               
                <div className="grid grid-cols-2 gap-6 md:hidden justify-items-center">
                    {techStack.map((item, i) => (
                        <TechCard key={i} index={0} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
