import React, { useEffect, useState } from 'react'
import axios from 'axios'
import video from "./videos/deadpool.mp4"
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import Read from './Read';
import Television from './Television';

const apiKey = "944d386ed73c0afb15150448b688472b";
const url = "https://api.themoviedb.org/3/movie"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated";

const Card = ({img})=>(
    <img className='m-3 w-[200px] h-[18rem] cursor-pointer   transform transition-all duration-300  hover:translate-y-2 hover:scale-105 ' src={img} alt="cover"/>
)

const Row = ({title, arr=[]})=>(
    <div className='p-2 mt-2   bg-black     '>
    <h2 className=' text-lg font-medium ml-3 text-white'>{title}</h2>

    <div className='flex justify-evenly  overflow-x-auto'>
      {

        
        arr.map((item , index)=>(
      <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>

    ))
      }
    
    </div>
    </div>
)
function Home() {

  const[upcomingMovies , setUpcomingMovies] = useState([])
  const[nowPlayingMovies , setNowPlayingMovies] = useState([])
  const[popularMovies , setPopularMovies] = useState([])
  const[topratedMovies , setTopratedMovies] = useState([])
  useEffect(()=>{
const fetchUpcoming = async ()=>{
   const {data: {results}}  = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
   console.log(results)
   setUpcomingMovies(results)
}
const fetchNowPlaying = async ()=>{
  const {data: {results}}  = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`)
  console.log(results)
  setNowPlayingMovies(results)
}
const fetchPopular= async ()=>{
  const {data: {results}}  = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
  console.log(results)
  setPopularMovies(results)
}
const fetchTopRated = async ()=>{
  const {data: {results}}  = await axios.get(`${url}/${topRated}?api_key=${apiKey}`)
  console.log(results)
  setTopratedMovies(results)
}
fetchUpcoming()
fetchNowPlaying()
fetchTopRated()
fetchPopular()
  }, [])

  // read more read less


  return (
      < section className='home  bg-gray-900  mt-24 '>
  
  <div className='banner  lg:flex w-full h-[auto]   bg-black ' >
   <div className=" lg:w-3/5 p-10 flex flex-col items-left  gap-14  h-full  ">
       <h2 className='text-white text-5xl font-bold '>{popularMovies.length && popularMovies[0].title}</h2>
 <Read popularMovies={popularMovies}/>
<div className='flex items-center justify-center   gap-7 '>
<button className='cursor-pointer hover:opacity-[0.8] flex items-center text-white text-2xl  justify-center gap-3 px-[1.2rem] py-3 rounded-lg z-10 bg-red-500'><BiPlay/> Play </button>
       <button className='cursor-pointer hover:opacity-[0.8]  bg-white text-black flex items-center text-2xl  justify-center gap-3 px-[1rem] py-3 rounded-lg  z-10 '> <AiOutlinePlus/> My List </button>
</div>
      
   </div>
    
    {/* <video className='h-[400px] w-[90%] m-auto rounded-xl    ' controls autoPlay  muted>
    <source src={video} type="video/mp4" />
    
  </video> */}
  
  <Television/>


   </div>

   <div>
    
   <Row title={'Upcoming Movies'} arr={upcomingMovies}/>
   <Row title={'Now Playing Movies'} arr={nowPlayingMovies}/>
   <Row title={'Popular movies'} arr={popularMovies }/>

   <Row title={'Top Rated Movies'} arr={topratedMovies }/>
   </div>
 

   {/* <Row title={'Popular on Netflix'}/>
   <Row title={'Movies'}/>
   <Row title={'Tv shows'}/>
   <Row title={'Recently viewed'}/>
   <Row title={'My List'}/> */}
   
    </section>
  )
}

export default Home
