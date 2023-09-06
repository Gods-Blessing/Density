import './Nav.css';
import smiley from '../../../public/smily.jpg'
import Image from 'next/image';

export default function Nav(){

    return (
        <nav className="flex px-14 py-4 justify-between items-center fixed left-0 right-0 bg-white z-50">
            {/* <img src={smiley} alt=""  className='w-16'/> */}
            <Image src={smiley} className='w-16' alt='pic'/>

            <ul className='flex gap-x-12 font-semibold'>
                <li>Emotions</li>
                <li>Manifesto</li>
                <li>Self-awareness test</li>
                <li>Work With Us</li>
            </ul>

            <button className='bg-black font-bold text-zinc-50 px-5 py-3 rounded-full flex justify-center items-center'>
                Download App
            </button>
        </nav>
    )
}