import Image from "next/image";

const Subscribe = () => {
    return (
        <main className="relative py-20 px-[5%] special-font">
            <section className="relative p-4 md:p-8 rounded-lg rounded-tl-3xl flex flex-col gap-10 items-center justify-center bg-gray-100 h-[300px] z-10">
                <p className="text-xl md:text-3xl font-bold text-gray-500 w-full md:w-[75%] text-center relative z-10">Subscribe to get information, latest news and other interesting offers about Jadoo</p>

                <div className="flex items-center justify-center gap-2 w-full relative z-10">
                    <label htmlFor="" className="relative w-full md:w-[50%]">
                        <input type="text" placeholder="Your email" className="relative border-none outline-none bg-white rounded-lg py-3 pl-12 pr-4 w-full text-[15px] font-normal" />
                        <Image src="/cta/mail.svg" alt="mail" width={20} height={20} />
                    </label>
                    <button className="bg-[#FF7D68] text-[15px] py-3 px-5 text-white font-medium rounded-lg">Subscribe</button>
                </div>

                <Image src="/cta/shape-bg1.png" width={300} height={300} alt="img" className="absolute bottom-0 left-[-60px]" />
                <Image src="/cta/shape-bg2.png" width={180} height={180} alt="img" className="absolute top-0 right-0" />
                <Image src="/cta/send.png" width={40} height={40} alt="img" className="absolute top-[-15px] right-[-15px]" data-aos="slide-right"/>
            </section>

            <Image src="/cta/cta-shape.svg" width={80} height={80} alt="img" className="absolute bottom-[60px] right-0 md:right-[20px]" />

        </main>
    );
}

export default Subscribe;