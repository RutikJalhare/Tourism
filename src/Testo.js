import React from 'react'
import test1 from './images/test1.avif'
import test2 from './images/test2.avif'
import test3 from './images/test3.avif'
import test4 from './images/test4.jpg'
import test5 from './images/test5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
const Testo = () => {

  let test=[
  {name:"Michael M. Esq",img:test1,desc:'  Israel was awesome! Even though I’d been there 3x before, I saw so much I did not even know about or missed on previous trips.  Beit Shean was one of those places.'},
  {name:"Terry and Bob",img:test2,desc:' I can say without hesitation that VFI PLUS was one of the most rewarding experiences of our lifetimes. The opportunity to work as volunteers on a military base to help '},
  {name:"Terry and Bob",img:test3,desc:'This, my first trip to Israel and VFI experience, affected me in ways that I had not anticipated. As a secular Jew, it helped clarify where I fit in regard to my Judaism and relationship wand '},
  {name:"  Christine M.",img:test4,desc:'Overall the VFI program was wonderful and represented one of the greatest travel experiences we have ever had. An opportunity to interact with the “real Israel” through wonderful young people.'},
  {name:" Rhonda E.",img:test5,desc:'This Volunteers for Israel PLUS was one of the most rewarding experiences of my lifetime. I had the opportunity to work as a volunteer on a military base to help support the IDF soldiers and to cherish.'}


  ]

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       


{
  test.map((a,b)=>{
    return(
      <div className="shadow col-md-4 mb-4 mb-md-0 ">
          <SwiperSlide>
            <div class="card shadow">
              <div class="card-body ">
                <img id="testo" className="rounded-circle mx-auto d-block" src={a['img']} alt="card image" />

                <p className="card-text  lead text-secondary">
                  {a['desc']}
                </p>
                <h4 className="card-title">{a['name']}</h4>
                <p className="card-title fw-bold text-danger">CUSTOMER</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
    )
    {/* console.log(a['name'],"and ",b) */}

  })
}


       









      











      </Swiper>
    </>
  )
}

export default Testo