import { NavLink } from "react-router-dom";

export default function Content() {
    return (
      <div>
      <div className='container'>
          <div className='text'>
              <h5>Car Engine</h5>
              <h4>Most Searched on TiT</h4>
              <p style={{textAlign:'justify'}}>We offer the best rates for car spare parts and provide a complete range of spare parts. Along with spare parts we have an exclusive range of car accessories. If you are looking for car accessories online then we are the one-stop shop for you. At Motrparts, we check every spare part and make sure that you receive the original and best quality spare parts. All the spare parts go under quality tests so that our end user gets the best spare parts online</p>

              {/* <div className='button' ><NavLink to="/" style={{marginBottom:'200px'}} >Explore Now &#8599;</NavLink></div> */}
          </div>
          <div className='image'>
              {/* <img src="crypto1.png" alt="" /> */}
             
              <img style={{marginLeft:"30px"}} src="https://car-images.bauersecure.com/wp-images/2434/03-ford-mustang.jpg" alt="" />
            
          </div>
      </div>
      <div className='partners'>
          {/* <span><img src="webflow.png" alt="" /></span>
          <span><img src="mparticle.png" alt="" /></span>
          <span><img src="chargebee.png" alt="" /></span>
          <span><img src="corsair.svg" alt="" /></span> */}
          {/* <span><img src="emachines.png" alt="" /></span> */}
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.png" alt="" /></span>
          <span><img   src="https://logohistory.net/wp-content/uploads/2023/01/Audi-Symbol-1536x864.png" alt="" /></span>
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/Jaguar-Logo-2001-1536x864.png" alt="" /></span>
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/BMW-Emblem-1536x864.png" alt="" /></span>
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/Ford-Emblem-1536x864.png" alt="" /></span>
      </div>
  </div>
    );
  }
  