import React from 'react'
import Know from './images/Know.png'
const Knowus = () => {
  return (
      
<>

<section id="why-us" class="why-us section-bg">
<div class="container-fluid aos-init aos-animate" data-aos="fade-up">
<div class="row">
<div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
<div>
     <img src={Know}/>
</div>


 </div>

 <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
<div className='title'>
      <span className='fs-4'>Get To Know Us</span>
</div>
<div>
      <h1 className='ms-4 '>Plan Your Trip with Trevily</h1>
</div>
<div>
      <p className='fs-5 text-justify text-secondary  ms-4 '>
      There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.

      </p>
</div>

<div>
<button type="button" className="btn btn-danger ms-4  fw-3 fw-bold px-4">BOOK WITH US NOW</button>
</div>

 </div>



 </div>
 </div>
 </section>




</>
  )
}

export default Knowus