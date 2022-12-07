import React from 'react'

const Navbar = () => {
      let links=['Home',
            'Destinations',
            'Tours',
            'Pages',
            'News',
            'Contact']
  return (
    <>
      <div className='container'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#">Tevily</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

      {/* {
            links.map((a,b)=>{
                  return(    <li className="nav-item p-4">
          <a className="nav-link active" aria-current="page" href="#">{a}</a>
        </li>)
            })
      } */}
       
      </ul>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}

export default Navbar