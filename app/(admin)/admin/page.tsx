import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout isMargin={false}>
      <div className='p-10 px-14 text-6xl font-semibold text-green-200 flex items-center justify-center h-screen w-full'>Dashboard</div>
    </AdminLayout>
  )
}

export default page