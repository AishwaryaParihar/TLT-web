
import React from 'react'
import ListItemHoverEffect from './ListItemHoverEffect'
import fc from "../../assets/fc-img.avif"

const Listsection = () => {
  return (
  <>
  <h2 className='text-black text-2xl text-center'>Amenities</h2>
<div className="flex shadow-lg border-collapse">

<div className="mt-10">
  <ListItemHoverEffect/>
</div>

<div className="">

<img src={fc} alt="facility" className="w-[500px] h-[450px] items-center" />
</div>
</div>
  </>
  )
}

export default Listsection;
