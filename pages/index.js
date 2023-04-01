import Body from '@/UI/Container/Body'
import Project from '@/UI/Container/Projects/Project'
import Projects from '@/UI/Container/Projects/Projects'
import Link from 'next/link'
import {BsFillMoonStarsFill} from 'react-icons/bs'
function index() {
  return (
    <div>
        <main className="px-10">
            <section className="min-h-screen text-center mx-auto">
                <nav className='py-10 mb-10 flex justify-between'>
                    <h1 className=' text-lg'>Ali Pileforooshha</h1>
                    <ul className='flex flex-row item-center content-center'>
                        <li>
                            <BsFillMoonStarsFill className=' cursor-pointer text-2xl' />
                        </li>
                        <li>
                            <Link href="#" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</Link>
                        </li>
                    </ul>
                </nav>
                <Body/>
                <Projects />
            </section>
        </main>
    </div>
  )
}

export default index