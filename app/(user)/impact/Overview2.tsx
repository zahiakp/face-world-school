import CountUp from '@/components/ui/CountUp/CountUp';
import React from 'react';
import { TbNorthStar } from 'react-icons/tb';

function Overview2() {
    // Array containing all the data for your stats
    const statsData = [
        { from: 350, to: 402, suffix: '+', label: 'Students' },
        { from: 10, to: 50, suffix: '%', label: 'Girls' },
        { from: 50, to: 100, suffix: '%', label: 'Residential Students' },
        { from: 10, to: 50, suffix: '%', label: 'Students in Scholarship' },
        { from: 10, to: 30, suffix: '%', label: 'Faculty Members' },
    ];

    return (
        <section className='w-full bg-green-300'>
            <main className='w-[90%] grid grid-cols-14 justify-items-center items-center gap-y-14 gap-x-4 max-w-[1200px] mx-auto py-14'>
                {statsData.map((stat, index) => (
                    <React.Fragment key={stat.label}>
                        {/* Stat Block */}
                        <div className='col-span-2 justify-self-start'>
                            <p className='text-[60px] font-semibold text-green-light -my-4'>
                                <CountUp
                                    from={stat.from}
                                    to={stat.to}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                                {stat.suffix}
                            </p>
                            <p className='text-green-500 text-xl leading-6 font-medium'>{stat.label}</p>
                        </div>

                        {/* Separator (don't add after the last item) */}
                        {index < statsData.length - 1 && (
                            <div className='h-full w-px bg-green-500/30 relative'>
                                <TbNorthStar className='text-green-500/50 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </main>
        </section>
    );
}

export default Overview2;