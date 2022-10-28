import React from 'react';
import { IconWeather } from './IconWeather';
import { timeConverter } from '../helpers/helpers';

import temperature from '../icons/temperature.gif';
import wind from '../icons/wind.gif';
import humidity from '../icons/humidity.gif';



const Wheater = ({result}) => {

    const {city, list}=result; 
    if(!city) return null;

    const kelvin = 273.15;

    return (  
        <>
            <div className="w-full h-full text-white ">
                <div className="w-full h-4/7  p-3 flex mb-2  rounded-lg bg-box1">
                    <div className="w-2/5 mb-3">
                        <p className=" text-4xl">{city.name}, <span className=" text-5xl">{city.country}</span></p>
                        <hr className="text-xl mt-2 "></hr>
                        <br></br>
                        <div>
                            <p className="text-2xl mb-3">Today {timeConverter(list[0].dt)} </p>
                        </div>
                        <div className='flex '>
                            <img src={temperature} width='50' color="#fff" />
                            <p className=" text-2xl sm:text-3xl lg:text-5xl text-purple-700 font-bold "> {parseFloat(list[0].main.temp - kelvin, 10).toFixed(2)}<span>&#176;</span>C</p>
                        </div>
                        <div className='flex'>
                            <img src={humidity} width='50'color="#fff"/>
                            <p className="text-2xl text-purple-700 font-bold mt-5 "> {list[0].main.humidity}%</p>
                        </div>
                        <div className='flex'>
                            <img src={wind} width='50' color="#fff"/>
                            <p className="text-2xl text-purple-700 font-bold mt-5"> {list[0].wind.speed}m/s</p>
                        </div>
                        
                    </div>
                    <div className="w-3/5 p-2">
                        <div className=''>
                            <p className="w-full flex justify-center items-center"><IconWeather id={list[0].weather[0].icon} size={150}/></p>
                            <p className="uppercase text-3xl text-center p-2 mb-2">{list[0].weather[0].description}</p>
                            <div className='text-center'>
                                <p className=" text-2xl sm:text-3xl   ">Min: <span className='text-purple-700'>{parseFloat(list[0].main.temp_min - kelvin, 10).toFixed(2)} &#176;C</span></p>
                                <p className=" text-2xl sm:text-3xl   ">Max: <span className='text-purple-700'>{parseFloat(list[0].main.temp_max - kelvin, 10).toFixed(2)} &#176;C</span></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="h-3/7">
                    <div className=" grid grid-cols-3 gap-2 h-full ">
                        <div className='bg-box2 p-3  bg-slate-400 rounded-lg'>
                            <p className='flex justify-center items-center'><IconWeather id={list[6].weather[0].icon} size={80} color="#fff" /></p>
                            <div className=' text-center'>
                                <p>{timeConverter(list[6].dt)}</p>
                                <div className='flex justify-center items-center'>
                                    <img src={temperature} width='50' color="#fff" />
                                    <p className=" text-xl sm:text-2xl text-purple-700 "> {parseFloat(list[6].main.temp - kelvin, 10).toFixed(2)}<span>&#176;</span>C</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bg-box2 p-3 bg-slate-400 rounded-lg'>
                            <p className='flex justify-center items-center'><IconWeather id={list[6].weather[0].icon} size={80} color="#fff" /></p>
                            <div className=' text-center'>
                                <p>{timeConverter(list[12].dt)}</p>
                                <div className='flex justify-center items-center'>
                                    <img src={temperature} width='50' color="#fff" />
                                    <p className="text-xl sm:text-2xl text-purple-700 "> {parseFloat(list[12].main.temp - kelvin, 10).toFixed(2)}<span>&#176;</span>C</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bg-box2 p-3 bg-slate-400 rounded-lg'>
                            <p className='flex justify-center items-center'><IconWeather id={list[6].weather[0].icon} size={80} color="#fff" /></p>
                            <div className=' text-center'>
                                <p>{timeConverter(list[22].dt)}</p>
                                <div className='flex justify-center items-center'>
                                    <img src={temperature} width='50' color="#fff" />
                                    <p className="text-xl sm:text-2xl text-purple-700 "> {parseFloat(list[22].main.temp - kelvin, 10).toFixed(2)}<span>&#176;</span>C</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Wheater;