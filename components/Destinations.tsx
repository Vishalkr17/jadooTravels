import Image from "next/image";

const Destination = () => {
    interface Destination{
        img: string,
        location: string,
        cost:string,
        days: string,
    }

    const destination : Destination[] = [
        {
            img: "/dest/dest1.jpg",
            location: "Rome, Italy",
            cost: "$5200",
            days: "10 days trip",
        },
        {
            img: "/dest/dest2.jpg",
            location: "London, UK",
            cost: "$4200",
            days: "12 days ago",
        },
        {
            img: "/dest/dest3.jpg",
            location: "Macedonia",
            cost: "$15000",
            days: "28 days trip",
        },
    ]

    return (
    <div className="relative w-full py-20 px-[5%] grid grid-cols-1 gap-6">
        <section className="flex flex-col items-center text-center gap-4">
                <p className="text-[18px] text-gray-500 font-medium special-font" >Top Selling</p>
                <h1 className="text-3xl md:text-5xl font-bold text-blue-950" >Top Destinations</h1>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 lg:gap-8 xl:gap-16 special-font">
        {destination.map((destinations, index) => 
                <div className="relative flex flex-col rounded-2xl shadow-xl cursor-pointer" key={index}>
                    <div className="relative z-10" data-aos="fade-up">
                        <div className="h-[350px]">
                            <Image src={destinations.img} width={300} height={300} alt="img" className="w-full h-full rounded-tl-2xl rounded-tr-2xl" />
                        </div>
                        <div className="grid grid-cols-1 gap-2 p-4  hover:shadow-2xl rounded-2xl transition delay-100">
                            <div className="text-[18px] text-gray-500 font-medium flex items-center justify-between gap-4">
                                <p>{destinations.location}</p> <p>{destinations.cost}</p>
                            </div>
                            <div className="text-[16px] text-gray-500 font-medium flex items-center gap-1">
                                <span >
                                    <Image src="/dest/navigation.svg" alt="nav" height={20} width={20}
                                /></span><p>{destinations.days}</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                )}
            </section>
    </div>
  )
}

export default Destination