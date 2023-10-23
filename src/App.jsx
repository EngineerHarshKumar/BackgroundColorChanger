import { Fragment, useState } from "react";

export default function App() {

  const [ backgroundColor, setBackgroundColor ] = useState("green") ;
  const [ showText, setShowText ] = useState("GREEN") ;
  
  return (
    <Fragment>
        <div className=' w-screen h-screen flex flex-wrap flex-col justify-between  items-center pt-40  pb-5' style={{backgroundColor: backgroundColor}}>
          <h1 className=" uppercase text-black text-3lg font-semibold">{showText}</h1>

          <div className=" w-fit px-2 py-1 rounded-xl bg-white flex flex-row outline-none justify-evenly items-center">
            <div className="flex px-2 py-1 rounded-xl outline-none gap-5" >
              
              <button onClick={ (e) => {setBackgroundColor(String(e.target.innerHTML))
              setShowText(e.target.innerHTML)}} className=" outline-none  capitalize bg-green-800 text-white px-2 text-center py-1">green</button>
              <button onClick={ (e) => {setBackgroundColor(String(e.target.innerHTML))
              setShowText(e.target.innerHTML) }} className=" outline-none  capitalize bg-blue-800 text-white px-2 text-center py-1">blue</button>
              <button onClick={ (e) => {setBackgroundColor(String((e.target.innerHTML)))
              setShowText(e.target.innerHTML)}} className=" outline-none  capitalize bg-violet-900 text-white px-2 text-center py-1">violet</button> 
              <button onClick={ (e) => {setBackgroundColor(String(e.target.innerHTML))
              setShowText(e.target.innerHTML)}} className=" outline-none  capitalize bg-red-800 text-white px-2 text-center py-1">red</button>
            </div>
          </div>
        </div>
    </Fragment>
  ) ;
}
