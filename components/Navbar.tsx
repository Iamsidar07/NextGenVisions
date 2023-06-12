import Image from "next/image"
import Link from "next/link"
import { BsBrush } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className='w-full  backdrop-blur-sm border-b sticky top-0 left-0 right-0 z-10 bg-white/70 '>
      
      <div className='flex justify-between items-center px-2 sm:px-6 py-1.5 sm:py-2 max-w-7xl mx-auto'>
        <Link href={'/'} className='flex items-center space-x-1'>
          <Image
          src={'/assets/icons/terminal.svg'}
          height={30}
          width={30}
          alt='logo'
          className='object-contain'/>
          <span className='font-bold'>
            NexGenVisions
          </span>
        </Link>
        <Link href={'/create-post'} className='px-5 py-2.5 rounded-full bg-black hover:bg-black/75 text-white transition-all duration-150 ease-linear cursor-pointer flex items-center space-x-2  text-center '>
          <BsBrush size={16} className='text-purple-700'/>
          <span>Create</span>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar