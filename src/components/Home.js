import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

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
    <div className='p-2  '>
    <h2 className=' text-md font-medium ml-3'>{title}</h2>

    <div className='flex justify-evenly overflow-x-auto'>
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
  return (
      < section className='home  bg-black'>
  
   <div className='  banner w-[100%] h-[500px]   bg-cover bg-no-repeat bg-center opacity-70 ' style={{ backgroundImage: popularMovies.length>0 ? `url(${imgUrl}/${popularMovies[0].poster_path})` : "" }}>
   <div className="p-10 flex flex-col items-left justify-center gap-14 w-[50%] h-full ">
       <h2 className='text-white text-5xl font-bold '>{popularMovies.length && popularMovies[0].title}</h2>
       <p className='text-white text-xl'>{popularMovies.length && popularMovies[0].overview}</p>
<div className='flex items-center gap-7 '>
<button className='cursor-pointer hover:opacity-[0.8] hover:bg-black flex items-center text-2xl  justify-center gap-3 px-[1rem] py-3 rounded-lg w-[150px] z-10 bg-red-500'><BiPlay/> Play </button>
       <button className='cursor-pointer hover:opacity-[0.8] hover:bg-red-500 flex items-center text-2xl  justify-center gap-3 px-[1rem] py-3 rounded-lg w-[150px] z-10 bg-black'> <AiOutlinePlus/> My List </button>
</div>
      
   </div>
   

   </div>
   <Row title={'Upcoming Movies'} arr={upcomingMovies}/>
   <Row title={'Now Playing Movies'} arr={nowPlayingMovies}/>
   <Row title={'Popular movies'} arr={popularMovies }/>

   <Row title={'Top Rated Movies'} arr={topratedMovies }/>

   {/* <Row title={'Popular on Netflix'}/>
   <Row title={'Movies'}/>
   <Row title={'Tv shows'}/>
   <Row title={'Recently viewed'}/>
   <Row title={'My List'}/> */}
   
    </section>
  )
}

export default Home