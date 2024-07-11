
import { assets } from '../assets/assets'
const Sidebar = () => {
   return (
      <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
         <div className="bg-[#121212] h-[15%] rounded flec flex-col justify-around">
            <div className="flex items-center gap-3 pl-8 cursor-pointer">
               <img className="w-6" src={assets.home_icon} alt="" />
               <p className='font-bold'>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8 pt-4 cursor-pointer">
               <img className="w-6" src={assets.search_icon} alt="" />
               <p className='font-bold'>Search</p>
            </div>
         </div>
         <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex item-center justify-between'>
               <div className='flex item-center gap-3'>
                  <img className='w-8' src={assets.stack_icon} alt="" />
                  <p className='font-semibold'>Your Library</p>
               </div>
               <div className='flex item-center gap-3'>
                  <img className='w-4 h-4' src={assets.arrow_icon} alt="" />
                  <img className='w-4 h-4' src={assets.plus_icon} alt="" />
               </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semiblod flex flex-col item-start justify-start gap-1 pl-4'>
               <h1>Create your first playlist</h1>
               <p className='font-light '>Get started with your music journey</p>
               <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semiblod flex flex-col item-start justify-start gap-1 pl-4 mt-4'>
               <h1>Find some podcasts to follow</h1>
               <p className='font-light '>You will be updated with the new episodes</p>
               <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
         </div>
      </div>
   )
}

export default Sidebar