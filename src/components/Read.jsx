import React, {useState} from 'react'

const Read = ({popularMovies}) => {
    let text = popularMovies.length > 0 ? popularMovies[0].overview : 'No overview available';
const[read, setRead]= useState(false)
const[btn, setBtn] = useState(false)

 let show = ()=>{
setRead(prevState => !prevState)
setBtn(prevState => !prevState)
 }
  return (
    <p className='text-white text-xl'>{read ? text.slice(0,79): text.slice(0,text.length)} <span className='text-red-500 text-sm cursor-pointer hover:text-red-300' onClick={show}>{btn ? "Read more..." : "Read less..." }</span></p>
  )
}

export default Read