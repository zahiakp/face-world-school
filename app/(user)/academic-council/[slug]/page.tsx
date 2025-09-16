'use client'
import UserLayout from '@/components/layout/UserLayout'
import { notFound } from 'next/navigation'
import React, { use } from 'react'
import Hero from './Hero'
import { Leaders } from '../Content'
import Content from './Content'


type PageProps = {
  params: Promise<{ slug: string }>; // Wrap the object in a Promise
};

function Page({ params }: PageProps) {
  const {slug} = use(params);
  const data = Leaders.find((item: any) => item.slug === slug);

  if (!data) {
    return notFound();
  }
    
  return (
    <UserLayout title={data.name} description=''>
      <Hero name={data.name} position={data.designation}/>
      <Content data={data}/>
    </UserLayout>
  );
}

export default Page;