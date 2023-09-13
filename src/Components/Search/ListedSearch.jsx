import React from 'react'
import { Link } from 'react-router-dom'

const ListedSearch = () => {
  return (
    <div className='w-screen h-fit flex flex-col justify-center items-center p-5 gap-5 lg:py-10 lg:px-20'>
        <div className='w-[80vw] mx-auto font-semibold text-[20px]'>
            <p>See also</p>
        </div>
        <Link to={'/things-to-do/food-jogja/1'}>
            <div className='w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row'>
                <div className='  overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]'>
                    <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center ' src="/Assets/foods/apem.jpg" alt="" />
                </div>
                <div className='p-3 lg:w-2/3 lg:ml-5'>
                    <h3 className='text-[22px]'>Javanese Apem Cake</h3>
                    <p className='line-clamp-2'>Apem (also known as appam in its native India) is a food made from rice flour that is left overnight by mixing eggs, coconut milk, sugar and tape and a little salt then burned or steamed. The Ngapem tradition was started by the Kanoman Palace in Cirebon, since the time of Sunan Gunung Jati as a form of spreading Islam in Java.</p>
                </div>
            </div>
        </Link>
        <Link to={'/things-to-do/drinks-jogja/3'}>
            <div className='w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row'>
                <div className=' overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]'>
                    <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center ' src="/Assets/drinks/wedang-ronde.jpg" alt="" />
                </div>
                <div className='p-3 lg:w-2/3 lg:ml-5'>
                    <h3 className='text-[22px]'>Wedang Ronde</h3>
                    <p className='line-clamp-2'>Wedang Ronde is a delightful and heartwarming Indonesian dessert that enchants the taste buds with its unique combination of flavors and textures. Hailing from the vibrant culinary traditions of Java, this sweet and aromatic treat features glutinous rice flour dumplings filled with crushed peanuts, palm sugar, and a hint of ginger. These dumplings are served in a warm, fragrant ginger and lemongrass-infused broth, creating a harmonious blend of sweet and spicy notes that dance on the palate. Topped with crispy fried shallots, this comforting dessert is a beloved symbol of Indonesian hospitality and a favorite choice for those seeking a cozy and satisfying culinary experience.</p>
                </div>
            </div>
        </Link>
        <div className='w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row'>
            <div className=' overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]'>
                <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center ' src="/Assets/souvenir/batu-akik1.png" alt="" />
            </div>
            <div className='p-3 lg:w-2/3 lg:ml-5'>
                <h3 className='text-[22px]'>Batu Akik (Gemstones) #belum di link</h3>
                <p className='line-clamp-2'>Indonesia is known for its gemstones, and you can find a variety of them in Jogja's markets. Look for agate stones or other gems that catch your eye.</p>
            </div>
        </div>
        <div className='w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row'>
            <div className=' overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]'>
                <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center ' src="/Assets/attraction/prambanan.jpg" alt="" />
            </div>
            <div className='p-3 lg:w-2/3 lg:ml-5'>
                <h3 className='text-[22px]'>Candi Prambanan #belum di link</h3>
                <p className='line-clamp-2'>Prambanan is a magnificent Hindu temple complex located in Central Java, Indonesia, near the city of Yogyakarta. This UNESCO World Heritage site is renowned for its exquisite architecture and historical significance.</p>
            </div>
        </div>
        <div className='w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row'>
            <div className=' overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]'>
                <img className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center ' src="/Assets/art-activities/BatikMasterClass.jpg" alt="" />
            </div>
            <div className='p-3 lg:w-2/3 lg:ml-5'>
                <h3 className='text-[22px]'>Batik Master Class #belum di link</h3>
                <p className='line-clamp-2'>Batik Master Class with Full Process by Alga Lova Tour</p>
            </div>
        </div>
    </div>
  )
}

export default ListedSearch
