import Front from '@/components/Front/Front'
import Nav from '@/components/Nav/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Nav/>
      <div className='h-28'></div>
      <Front/>
    </main>
  )
}
