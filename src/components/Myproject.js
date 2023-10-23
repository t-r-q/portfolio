import React from 'react'


const Myproject = (props) =>  {
  return (
<div>
<div className="bg-cyan-100 mx-auto mt-16 max-w-2xl rounded-2xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900"> {props.title}</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">
        {props.detail}
         </p>

        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">{props.langaug}</h4>

      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
          <img src={props.img_path} alt={props.title}/>

            <a
              href={props.linkIt}
              className="mt-10 block w-full rounded-md bg-gradient-to-r from-cyan-500 text- to-sky-800  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get access
            </a>

          </div>
        </div>
      </div>
    </div>
</div>
    )
}


export default Myproject;