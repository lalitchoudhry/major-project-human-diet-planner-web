import React, { forwardRef } from 'react';
import slide1 from './hometwo1.jpg'
import HomeTwo2 from './hometwo2.jpg'
const HomeTwo = forwardRef((props, ref) => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-home-banner">
            <div className=" mx-auto md:p-20 p-5 bg-black/80">
                <h2 className="text-3xl sm:text-6xl font-semibold text-white mb-4 text-center">What do you get?</h2>
                {/* First row */}
                <div className="flex flex-col md:flex-row justify-between items-center my-10">
                    {/* First text and picture */}
                    <div className="flex items-start">
                        <div className="flex flex-col items-start pr-8"> 
                            <h2 className="text-xl font-semibold text-accent underline mb-4 text-left">Ready Meals</h2>
                            <p className="md:w-2/3 text-xl sm:text-3xl text-white font-thin mb-8 text-justify md:text-left">
                                To save your time, our specialists create balanced meals that you can enjoy without restrictions. It will allow you to prepare nutrition plans for patients faster than ever. We will enable you to instantly generate fully personalized menus in accordance with a wide range of calorie goals, preferences, and dietary restrictions.
                            </p>
                        </div>
                    </div>
                    <img src={slide1} alt="hometwo 1" className='md:w-1/3 rounded-xl' /> {/* Picture */}
                </div>
    
                {/* Second row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Second text and picture */}
                    <div className="flex items-start">
                        <div className="flex flex-col items-start pr-8"> 
                            <h2 className="text-xl font-semibold text-accent underline mb-4 text-left">Nutritional Overview</h2>
                            <p className="md:w-2/3 text-xl sm:text-3xl font-thin text-white mb-8 text-left">
                                An easy-to-use nutritional interview will help you gather the necessary information about your 24-hour diet and enter your eating habits.
                            </p>
                        </div>
                    </div>
                    <img src={HomeTwo2} alt="HomeTwo2" className='md:w-1/3 rounded-xl' /> {/* Picture */}
                </div>
    
                {/* Can add more rows if we want */}
            </div>
        </div>
    );
    
    
    
});

export default HomeTwo;