import Image from "next/image";

const Partners = () => {
    interface PartnersLogo{
        img: string
    }

    const partnersLogo : PartnersLogo[] =[
        {
            img: "/partner/1.png",
        },
        {
            img: "/partner/2.png",
        },
        {
            img: "/partner/3.png",
        },
        {
            img: "/partner/4.png",
        },
        {
            img: "/partner/5.png",
        },
    ]
    return ( 
        <main className="px-[5%] py-20 flex items-center justify-center md:justify-between basis-56 flex-wrap gap-6">
            {partnersLogo.map((partners, index) =>
            <div className="p-2 md:p-4 rounded-xl bg-white hover:shadow-md shadow-md md:shadow-none flex items-center justify-center" key={index} data-aos="zoom-in">
                <Image src={partners.img} width={100} height={100} alt="img" className="object-contain h-full"/>
            </div>
            )}
        </main>
     );
}
 
export default Partners