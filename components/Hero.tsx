import Search from "./navbar/Search"

const Hero = () => {
  return (
    <section className="shadow-sm  dark:bg-gray-900">
        <div 
            className="relative flex items-center justify-center w-full h-screen text-center bg-center bg-cover " 
            style={{backgroundImage: 'url(https://res.cloudinary.com/dvrk2468z/image/upload/v1697364595/island2_cbrqo8.jpg)', height: '560px'}}
        >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-20" />
            <div className="z-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                   Find your Next holiday
                </h2>
                <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, odio, cum voluptas nobis ab ex placeat officiis deserunt distinctio modi velit est similique!
                </p>
                <div className="justify-center sm:flex">
                    <div className='bg-white rounded-2xl'>
                        <Search />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero