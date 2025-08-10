'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

// Define the type for a single stage object for better type safety.
interface Stage {
    id: number;
    title: string;
    subtitle: string;
    location: string;
    place: string;
    description: string;
    image: string;
}

// The Stages component, now defined as a React Functional Component (React.FC).
const Stages: React.FC = () => {
    // The stages data array, now typed with the Stage interface.
    const stages: Stage[] = [
        {
            id: 1,
            title: "Stage 1",
            subtitle: "Where Future Leaders Begin Their Journey",
            location: "FACE World Leadership School",
            place: "Kodiyathur",
            description: "Students are enrolled at the FACE World Leadership School campus in Kozhikode, where they receive intensive academic training, competitive exam preparation, and holistic personal development.",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Stage 2",
            subtitle: "Advancing to National Centres of Excellence",
            location: "Top Universities",
            place: "India & Abroad",
            description: "Supports students in gaining admission to top universities in India and around the world, helping them with scholarships and higher education pathways.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "Stage 3",
            subtitle: "Preparing for Civil Services and Leadership",
            location: "FACE IAS Academy",
            place: "Trivandrum",
            description: "Students undergo full-time civil service preparation at FACE IAS Academy in Trivandrum.",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];

    // The currentStep state is explicitly typed as a number.
    const [currentStep, setCurrentStep] = useState<number>(0);
    
    // The ref is now correctly typed to hold an array of HTMLDivElement or null.
    // We initialize the array with nulls and assign refs directly in the render.
    const stageRefs = useRef<(HTMLDivElement | null)[]>(
        Array(stages.length).fill(null)
    );

    // This useEffect hook sets up the IntersectionObserver to watch each stage card.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When a card is intersecting (i.e., visible on screen)...
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        // ...get its stage ID from the data attribute...
                        // The non-null assertion (!) is safe here because we always set the data attribute.
                        const stageId = parseInt(target.dataset.stageId!, 10);
                        // ...and update the current step.
                        // We use Math.max to ensure the animation only moves forward as you scroll down.
                        setCurrentStep((prevStep) => Math.max(prevStep, stageId));
                    }
                });
            },
            {
                threshold: 0.4, // Trigger when 40% of the card is visible.
            }
        );

        // Start observing each of the stage card refs.
        stageRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        // Cleanup function to disconnect the observer when the component unmounts.
        return () => {
            stageRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []); // The empty dependency array ensures this effect runs only once on mount.

    return (
        // Added a placeholder div to allow for scrolling demonstration.
        <div className="h-[200vh] bg-gray-200">
            <section className="bg-gray-50 font-sans sticky top-0 py-20">
                <main className="w-[90%] max-w-[1200px] mx-auto">
                    {/* --- Stepper UI --- */}
                    <div className="grid grid-cols-5 items-start mb-12">
                        {/* Stage 1 */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className={`w-12 h-12 text-xl flex items-center justify-center rounded-full border-4 font-semibold transition-all duration-500 ${currentStep >= 1 ? "bg-green-500 border-green-500 text-white" : "bg-gray-200 border-gray-300 text-gray-400"}`}>
                                {currentStep >= 1 ? <FaCheck /> : 1}
                            </div>
                            <p className='text-sm text-gray-600 mt-2 font-medium'>Stage 1</p>
                        </div>

                        {/* Connector 1 */}
                        <div className="h-1 bg-gray-200 mt-6 relative">
                            <div className={`absolute left-0 top-0 h-1 bg-green-500 transition-all duration-1000 ${currentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                        </div>

                        {/* Stage 2 */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className={`w-12 h-12 text-xl flex items-center justify-center rounded-full border-4 font-semibold transition-all duration-500 ${currentStep >= 2 ? "bg-green-500 border-green-500 text-white" : "bg-gray-200 border-gray-300 text-gray-400"}`}>
                                {currentStep >= 2 ? <FaCheck /> : 2}
                            </div>
                            <p className='text-sm text-gray-600 mt-2 font-medium'>Stage 2</p>
                        </div>

                        {/* Connector 2 */}
                        <div className="h-1 bg-gray-200 mt-6 relative">
                            <div className={`absolute left-0 top-0 h-1 bg-green-500 transition-all duration-1000 ${currentStep >= 3 ? 'w-full' : 'w-0'}`}></div>
                        </div>

                        {/* Stage 3 */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className={`w-12 h-12 text-xl flex items-center justify-center rounded-full border-4 font-semibold transition-all duration-500 ${currentStep >= 3 ? "bg-green-500 border-green-500 text-white" : "bg-gray-200 border-gray-300 text-gray-400"}`}>
                                {currentStep >= 3 ? <FaCheck /> : 3}
                            </div>
                            <p className='text-sm text-gray-600 mt-2 font-medium'>Stage 3</p>
                        </div>
                    </div>

                    {/* --- Stage Cards --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stages.map((stage, index) => (
                            <div 
                                key={stage.id} 
                                // Attach the corresponding ref and data-attribute to each card
                                ref={(el:any) => stageRefs.current[index] = el}
                                data-stage-id={stage.id}
                                className={`text-gray-800 min-h-40 transition-all duration-700 ease-in-out ${currentStep >= stage.id ? "opacity-100" : "opacity-30"}`}
                            >
                                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                                    <div className="h-48 overflow-hidden">
                                        <img src={stage.image} alt={stage.title} className='w-full h-full object-cover' onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null; 
                                            target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found';
                                        }}/>
                                    </div>
                                    <div className="p-5 flex-grow flex flex-col">
                                        <p className='text-xs p-1.5 px-3 bg-green-100 text-green-700 rounded-full italic mb-3 self-start font-medium'>{stage.subtitle}</p>
                                        <div className="space-y-2 flex-grow">
                                            <h6 className="text-xl text-gray-800 font-bold">
                                                {stage.location}
                                            </h6>
                                            <p className="text-gray-500 font-medium">{stage.place}</p>
                                            <div className="w-full border-b border-gray-200 pt-2"></div>
                                            <p className="text-sm text-gray-600 pt-2">{stage.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
}

export default Stages;
