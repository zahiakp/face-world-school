import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function Countries() {
    const countries = [
      { flag: "india.jpg", name: "India", code: "IN" },
      { flag: "Turkey.webp", name: "Turkey", code: "TR" },
      { flag: "New Zealand.png", name: "New Zealand", code: "NZ" },
      { flag: "USA.png", name: "United States", code: "US" },
      { flag: "UK.webp", name: "United Kingdom", code: "GB" },
      { flag: "Latvia.png", name: "Latvia", code: "LV" },
      { flag: "Australia.svg", name: "Australia", code: "AU" }
    ];

    // Duplicate the flags array to create seamless loop
    const duplicatedCountries = [...countries, ...countries];

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mask-fade w-full relative overflow-hidden">
                    <div className="animate-infinite-scroll hover:pause flex items-center gap-12 w-max will-change-transform py-10">
                        {duplicatedCountries.map((country, index) => (
                            <div key={index} className="flex items-center gap-6 group">
                                {/* Circular Flag */}
                                <div className="flag-hover cursor-pointer">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white transition-colors duration-300">
                                            <img
                                                src={`/images/countries/${country.flag}`}
                                                alt={`${country.name} flag`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Glow effect */}
                                        {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400/30 to-purple-400/30 opacity-0  transition-opacity duration-300 blur-md -z-10"></div> */}
                                        {/* Country code badge */}
                                        {/* <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-lime-500 to-lime-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            {country.code}
                                        </div> */}
                                    </div>
                                </div>

                                {/* Country Name */}
                                <div className="text-center">
                                    <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap">
                                        {country.name}
                                    </h3>
                                    {/* <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-lime-300 to-transparent mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div> */}
                                </div>

                                {/* Separation Symbol */}
                                {index < duplicatedCountries.length - 1 && (
                                    <div className="flex items-center text-gray-500/50 justify-center">
                                        <PiStarFourFill />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Countries;