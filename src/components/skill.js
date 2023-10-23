import React from 'react'

export default function skill(props) {
  return (
   
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                  <img src={props.myimg}  width={props.width} height={props.height} alt={props.title} />
                  <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800"> {props.title} </h3>
                  <h4 className=" text-teal-600">{props.detail}</h4>
      </div>
   

  )
}
