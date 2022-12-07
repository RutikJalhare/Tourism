import React from 'react'

const Featuredtour = () => {


      let cars = [
            {
                  "name": "Wildlife Tours",
                  "desc": "  Expert in organizing tiger safaris in the various tiger reserves & national parks of India. Plan to see wild tigers ."

            },

            {
                  "name": " Paragliding Tours ",
                  "desc": "Paragliding Holidays India- Yatra.com offers Indian Paragliding holiday tour and travel packages."


            },
            {
                  "name": " Adventure Tours",
                  "desc": "Adventure Tours is a leading tour and travel company of Ladakh, offers all type of adventure tour services such as Trekking Tours."

            },
            {
                  "name": "Hang Gliding Tours",
                  "desc": "If you've ever had the desire to fly like a bird then Hang Gliding is one of the most exciting and affordable solution for most Traveller ."

            }



      ]






      return (
            <>
                  <section id="rtravel" className="d-flex align-items-center p-5">
                        <div className="container">
                              <div className="row">
                                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                          <h1 className='title'>
                                                Are you ready to travel ?</h1>
                                          <h2 className='text-white'>


                                                Tevily is a World Leading Online Tour Booking Platform</h2>
                                          <div className="d-flex justify-content-center justify-content-lg-start">


                                          </div>
                                    </div>

                                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                          <div className='row'>
                                                {
                                                      cars.map((a, b) => {
                                                            return (<div className='col-md-6 py-1  text-start'>
                                                                  <div className="card border-0">
                                                                        <div className="card-body cr">
                                                                              <h5 className="card-title p-1 text-danger">{a["name"]}
                                                                              </h5>
                                                                              <p className="card-text text-white">
                                                                                    {a["desc"]}
                                                                              </p>

                                                                        </div>
                                                                  </div>
                                                            </div>)
                                                      })
                                                }
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      )
}
export default Featuredtour;
