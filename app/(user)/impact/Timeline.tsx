import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BatchOverviewCard, StudentCard } from "./Batches";
import { Batch2021, Batch2022, Batch2023, Batch2024, Batch2025 } from "./BatchesData";
import { batch2021Data, batch2022Data, batch2023Data, batch2024Data, batch2025Data } from "./OverviewData";

export function TimelineDemo() {
  const data = [
    {
      title: "2021 Batch",
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <main className='w-full sm:col-span-2 lg:col-span-3 xl:col-span-4'>
                {/* {activeBatchOverview.map((batch:any,index:number) => ( */}
                    <BatchOverviewCard  batchData={batch2021Data} />
                {/* // ))} */}
            </main>
                        {Batch2021.map((student:any, index:number) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
      ),
    },
    {
      title: "2022 Batch",
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <main className='w-full sm:col-span-2 lg:col-span-3 xl:col-span-4'>
                {/* {activeBatchOverview.map((batch:any,index:number) => ( */}
                    <BatchOverviewCard  batchData={batch2022Data} />
                {/* // ))} */}
            </main>
                        {Batch2022.map((student:any, index:number) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
      ),
    },
    {
      title: "2023 Batch",
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <main className='w-full sm:col-span-2 lg:col-span-3 xl:col-span-4'>
                {/* {activeBatchOverview.map((batch:any,index:number) => ( */}
                    <BatchOverviewCard  batchData={batch2023Data} />
                {/* // ))} */}
            </main>
                        {Batch2023.map((student:any, index:number) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
      ),
    },
    {
      title: "2024 Batch",
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <main className='w-full sm:col-span-2 lg:col-span-3 xl:col-span-4'>
                {/* {activeBatchOverview.map((batch:any,index:number) => ( */}
                    <BatchOverviewCard  batchData={batch2024Data} />
                {/* // ))} */}
            </main>
                        {Batch2024.map((student:any, index:number) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
      ),
    },
    {
      title: "2025 Batch",
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <main className='w-full sm:col-span-2 lg:col-span-3 xl:col-span-4'>
                {/* {activeBatchOverview.map((batch:any,index:number) => ( */}
                    <BatchOverviewCard  batchData={batch2025Data} />
                {/* // ))} */}
            </main>
                        {Batch2025.map((student:any, index:number) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <div className="w-[85%] mx-auto">
      <Timeline data={data} title="Explore the scholarship milestones and achievements of our batches"/>
    </div></div>
  );
}
