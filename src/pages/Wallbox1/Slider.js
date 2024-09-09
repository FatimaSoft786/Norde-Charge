import React, { useState } from 'react'
import charging1 from "../../images/wall_slider_img1.svg"
import charging2 from "../../images/wall_slider_img2.svg"
import charging3 from "../../images/wall_slider_img3.svg"

const Slider = () => {

  const [data, setData] = useState([
    {
        "id": "1",
        "title": 'eBox wr30 Ambiente Licht',
        "image": charging1
    },
    {
        "id": "2",
        "title": "eBox wr30-R in Edelstahl",
        "image": charging2
    },
    {
        "id": "3",
        "title": "Parkplatz mit eBox wr30-R in Edelstahl",
        "image": charging3
    }
  ])

  return (
    <div className=' flex mx-10 mt-4'>
    <div className=' grid grid-cols-3 sm:grid-cols-1 gap-5'>
    {
        data.map((e)=>(
            <div key={e.id}>
             <img src={e.image} alt='charging'/>
             <p className=' text-[24px] sm:text-[18px] font-semibold text-black'>{e.title}</p>
            </div>
        ))
    }
    </div>

    </div>
  )
}

export default Slider