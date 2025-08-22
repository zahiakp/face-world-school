'use client'
import React, { useState } from 'react';
import { Batch2021, Batch2022, Batch2023, Batch2024, Batch2025 } from './BatchesData';
import { batch2021Data, batch2022Data, batch2023Data, batch2024Data, batch2025Data } from './OverviewData';
import LogoStroke from '@/public/svg/LogoStrock';

const batchData:any = {
    "2021": Batch2021,
    "2022": Batch2022,
    "2023": Batch2023,
    "2024": Batch2024,
    "2025": Batch2025,
};

export const StudentCard = ({ student }:{student:any}) => (
    <div className='p-3 text-gray-800'>
        <div className='h-32 rounded-xl bg-green-light/50'></div> {/* Using a default tailwind color */}
        <div>
            <p className='flex justify-between text-sm mt-2'>
                <span>{student.name}</span>
               {student.totalScholarship &&  <span className='font-semibold whitespace-nowrap'>{student.totalScholarship} Lakh</span>}
            </p>
            <div className='w-full border-b my-1 border-gray-200'></div>
            <div className='leading-[1.5] text-gray-500 flex flex-col'> {/* Improved layout for universities */}
                {student.universities.map((item:any, ii:any) => (
                    <span className='text-xs' key={ii}>{item}</span>
                ))}
            </div>
        </div>
    </div>
);

const StatItem = ({ value, label }:any) => (
    <div className='text-center px-2 md:px-4'>
        <p className='text-4xl lg:text-5xl font-bold text-green-300'>{value}</p>
        <p className='text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider mt-1'>{label}</p>
    </div>
);

export function BatchOverviewCard({ batchData }:any) {
    const { year, title, stats, highlights } = batchData;

    return (
        <article className='bg-white overflow-hidden '>
            {/* <header className='p-6 lg:p-8 bg-gray-50/80'>
                <div className='flex items-baseline gap-x-4'>
                    <h2 className='text-5xl lg:text-6xl font-extrabold text-green-600'>{year}</h2>
                    <h3 className='text-xl lg:text-2xl font-semibold text-gray-700'>{title}</h3>
                </div>
            </header> */}

            {/* Key Stats Bar */}
            <div className='grid grid-cols-3 gap-2 sm:gap-4 border-y border-gray-200 py-6'>
                {stats.map((stat:any, index:number) => (
                    <StatItem key={index} value={stat.value} label={stat.label} />
                ))}
            </div>

            {/* Highlights Section */}
            <div className='py-6 lg:py-8'>
                <div className='grid md:grid-cols-2 gap-x-8 gap-y-10'>
                    {highlights.map((highlight:any, index:number) => (
                        <div key={index} className='flex flex-col gap-3'>
                            <div className='text-green-300 w-fit rounded-xl p-3 bg-green-light/70 text-3xl mb-1'>
                                {highlight.icon}
                            </div>
                            <h4 className='text-xl font-semibold text-green'>{highlight.title}</h4>
                            <p className='text-gray-600 text-sm leading-relaxed'>{highlight.description}</p>
                            {highlight.points && (
                                <ul className='list-disc list-inside mt-2 space-y-2 text-gray-600'>
                                    {highlight.points.map((point:any, i:number) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}

function Batches() {
    const [active, setActive] = useState("2021");
    
    const Tabs = [
        { value: "2021", label: "2021 Batch" },
        { value: "2022", label: "2022 Batch" },
        { value: "2023", label: "2023 Batch" },
        { value: "2024", label: "2024 Batch" },
        { value: "2025", label: "2025 Batch" },
    ];

    const activeBatchData = batchData[active] || [];
    const batchOverview:any = {
        "2021": batch2021Data,
    "2022": batch2022Data,
    "2023": batch2023Data,
    "2024": batch2024Data,
    "2025": batch2025Data
       };

    const activeBatchOverview = batchOverview[active] || [];

    console.log(activeBatchOverview);
    
    return (
        <section className='w-full bg-white relative'>
            <main className='w-[85%] flex flex-col md:flex-row text-gray-800 gap-10 max-w-[1200px] mx-auto py-20 z-[2] relative'>
                <div className='w-full md:w-[20%]'>
                    <div className='flex flex-row md:flex-col md:space-y-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0'>
                        {Tabs.map((tab) => (
                            <button 
                                onClick={() => setActive(tab.value)} 
                                className={`p-3 text-left whitespace-nowrap cursor-pointer px-5 border rounded-lg transition-colors duration-200 ${active === tab.value ? "border-green-500 bg-green-light/50 font-semibold" : "border-gray-200 hover:bg-gray-50"}`} 
                                key={tab.value}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

               
                <div className='w-full md:w-[80%]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <main className='w-full sm:col-span-2 lg:col-span-3 xl:col-span-4'>
                {/* {activeBatchOverview.map((batch:any,index:number) => ( */}
                    <BatchOverviewCard  batchData={activeBatchOverview} />
                {/* // ))} */}
            </main>
                        {activeBatchData.map((student:any, index:number) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
                </div>
            </main>
            <LogoStroke className="text-green-200 blur-md z-0 w-[480px] h-auto absolute -top-44 left-[12%] rotate-12" />
        </section>
    );
}

export default function App() {
    return <Batches />;
}
