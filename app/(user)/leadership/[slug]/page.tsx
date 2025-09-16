import UserLayout from '@/components/layout/UserLayout'
import { use } from 'react'

type PageProps = {
  params: Promise<{ slug: string }>; // Wrap the object in a Promise
};


export default function Page({ params }: PageProps) {
  const {slug} = use(params)
  return (
    <UserLayout title='' description=''>
      {slug}
    </UserLayout>
  )
}
