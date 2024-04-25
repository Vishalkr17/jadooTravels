import Image from "next/image";

const Category = () => {
    interface Category{
        img: string;
        heading: string;
        description: string;
    }

    const category : Category[] = [
      {
        img: "/category/icon1.png",
        heading: "Calculated Weather",
        description: "Built Wicket longer admire do barton vanity itself do in it.",
      },
      {
        img: "/category/icon2.png",
        heading: "Best Flights",
        description: "Engrossed listening. Park gate sell they west hard for the.",
      },
      {
        img: "/category/icon3.png",
        heading: "Local Events",
        description: "Barton vanity itself do in it. Prefferd to men it engrossed listening.",
      },
      {
        img: "/category/icon4.png",
        heading: "Customization",
        description: "We deliver outsourced aviation services for military customers",
      },
    ]

    return (
      <main className="relative w-full py-20 px-[5%] grid grid-cols-1 gap-4" >
          <section className="flex flex-col items-center text-center gap-4">
              <p className="text-lg text-gray-500 font-medium special-font" data-aos="fade-up">CATEGORY</p>
              <h1 className="text-3xl md:text-5xl font-bold text-blue-950" data-aos="fade-up">We Offer Best Services</h1>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center items-stretch gap-6 lg:gap-10 special-font">
              {category.map((categories, index) =>
              <div className="relative parent group transition delay-100" key={index}>
                  <div className="first-child relative flex flex-col items-center p-10 sm:p-4 xl:p-10 rounded-3xl gap-4 z-10 bg-white h-full hover:shadow-lg transition delay-100">
                      <div>
                          <Image src={categories.img} width={100} height={100} alt="img" />
                      </div>

                      <div className="flex flex-col items-center text-center gap-4">
                          <h2 className="text-[20px] text-gray-700 font-medium">{categories.heading}</h2>
                          <p className="text-[16px] text-gray-500">{categories.description}</p>
                      </div>
                  </div>
                  <div className="second-child hidden p-6 lg:p-8 bg-red-500 rounded-tl-3xl rounded-br-lg absolute bottom-[-18px] lg:bottom-[-25px] left-[-15px] lg:left-[-20px] group-hover:block"></div>
              </div>
              )}
          </section>

          <Image src="/category/shape.svg" width={100} height={100} alt="grid" className=" w-[18%] md:w-[8%] absolute top-[70px] right-5 lg:right-20"/>
      </main>
  );
}

export default Category