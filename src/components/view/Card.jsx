import React, { useState } from "react";
import { CARD_DATA } from "../../utils/Helper";

const Card = () => {
    const [category, setCategory] = useState("All")
    const [search,  setSearch] = useState("")
    
    const filterCard = CARD_DATA.filter((item) => {

        const categoryMatch = 
        category === "All" || item.category === category

        const searchMatch = 
        item.Heading.toLowerCase().includes(search.toLocaleLowerCase())

        return categoryMatch && searchMatch 

    }) 

  return (

    <section className="px-4 py-28">
      <div className="max-w-355 mx-auto">
        <h1 className="font-black text-6xl text-center py-9 text-navy-blue">SEARCH FILTER </h1>
        <div className="flex gap-4 items-center justify-center flex-wrap">
            <input type="text" placeholder="Seacrch Category" value={search} onChange={(e) => setSearch(e.target.value)} className="w-80 h-14 border border-navy-blue rounded-xl outline-none px-5 font-normal text-lg" />
            <button onClick={() => setCategory("All")} className={`text-2xl font-bold py-4 px-8 rounded-2xl cursor-pointer ${category === "All" ? "bg-navy-blue text-white" : "text-navy-blue bg-white border border-navy-blue"} `}>All</button>
            <button onClick={() => setCategory("Gaming")} className={`text-2xl font-bold py-4 px-8 rounded-2xl cursor-pointer ${category === "Gaming" ? "bg-navy-blue text-white" : "text-navy-blue bg-white border border-navy-blue"} `}>Gaming</button>
            <button onClick={() => setCategory("Accessories")} className={`text-2xl font-bold py-4 px-8 rounded-2xl cursor-pointer ${category === "Accessories" ? "bg-navy-blue text-white" : "text-navy-blue bg-white border border-navy-blue"} `}>Accessories</button>
            <button onClick={() => setCategory("Tools")} className={`text-2xl font-bold py-4 px-8 rounded-2xl cursor-pointer ${category === "Tools" ? "bg-navy-blue text-white" : "text-navy-blue bg-white border border-navy-blue"}  `}>Tools</button>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6.25 mt-9">
          {filterCard.map((item, index) => (
            <div
              key={index}
              className="border rounded-[30px] border-light-gray py-8 px-10 hover:border-transparent hover:shadow-[0px_8px_35px_0px_#0000001A] transition-all duration-300"
            >
              <img
                className="w-86 h-63 border-none rounded-[20px] object-contain"
                src={item.Image}
                alt="card-img"
              />

              <h1 className="font-semibold text-2xl leading-[150%] text-navy-blue mt-[19.35px] mb-3">
                {item.Heading}
              </h1>

              <p className="font-normal text-[16px] leading-[150%] text-steel-blue">
                {item.Para}
              </p>

              <h3 className="font-semibold text-2xl leading-[100%] text-navy-blue mt-12.75">
                {item.Price}
              </h3>

              <div className="flex justify-between items-center mt-6.25">
                <button className="w-33.5 h-11.5 border rounded-[23px] bg-navy-blue text-white font-semibold text-[16px] leading-[150%] hover:bg-white hover:text-navy-blue hover:border-navy-blue transition-all duration-300 cursor-pointer">
                  {item.Btn}
                </button>
                <span className=" cursor-pointer">
                  <svg
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="45.8193"
                      height="44.5466"
                      rx="22.2733"
                      fill="#73A4E0"
                    />
                    <path
                      d="M28.4283 28.8961C29.0138 28.8961 29.5753 29.1287 29.9893 29.5427C30.4034 29.9567 30.6359 30.5182 30.6359 31.1037C30.6359 31.6892 30.4034 32.2507 29.9893 32.6647C29.5753 33.0787 29.0138 33.3113 28.4283 33.3113C27.8429 33.3113 27.2813 33.0787 26.8673 32.6647C26.4533 32.2507 26.2207 31.6892 26.2207 31.1037C26.2207 29.8785 27.2031 28.8961 28.4283 28.8961ZM10.7676 11.2354H14.377L15.4146 13.4429H31.7397C32.0325 13.4429 32.3132 13.5592 32.5202 13.7662C32.7272 13.9732 32.8435 14.254 32.8435 14.5467C32.8435 14.7344 32.7883 14.922 32.7111 15.0986L28.7595 22.2402C28.3842 22.9135 27.6557 23.3771 26.8278 23.3771H18.6045L17.6111 25.1763L17.578 25.3088C17.578 25.382 17.6071 25.4522 17.6588 25.5039C17.7106 25.5557 17.7808 25.5847 17.854 25.5847H30.6359V27.7923H17.3904C16.8049 27.7923 16.2434 27.5597 15.8294 27.1457C15.4154 26.7317 15.1828 26.1702 15.1828 25.5847C15.1828 25.1984 15.2821 24.8341 15.4477 24.5251L16.9488 21.8208L12.9752 13.4429H10.7676V11.2354ZM17.3904 28.8961C17.9759 28.8961 18.5374 29.1287 18.9514 29.5427C19.3654 29.9567 19.598 30.5182 19.598 31.1037C19.598 31.6892 19.3654 32.2507 18.9514 32.6647C18.5374 33.0787 17.9759 33.3113 17.3904 33.3113C16.8049 33.3113 16.2434 33.0787 15.8294 32.6647C15.4154 32.2507 15.1828 31.6892 15.1828 31.1037C15.1828 29.8785 16.1651 28.8961 17.3904 28.8961ZM27.3245 21.1695L30.3931 15.6505H16.4411L19.0461 21.1695H27.3245Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
