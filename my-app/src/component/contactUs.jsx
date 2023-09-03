import map from '../images/map.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { fas ,fa-map-marker-alt } from '@fortawesome/free-solid-svg-icons'
 */
function ContactUs(){

    return (
<div className="container col-12 mt-5" >
<h2 className='my-5'>GET IN TOUCH</h2>
    <div className='row'>
    <div className="container col-6">
    <div className='row'>
   {/*  <FontAwesomeIcon icon="fas fa-map-marker-alt" /> */}

    </div>
    
    <img src={map} className='img-thumbnail row ' height={300} width={350}></img>
    </div>
    <div className="container col-6">
  
    <form>
   <h5 className='text-start'>Leave us a message</h5>     
  <div >
    <input type="text" className="form-control my-5" placeholder='Full Name' id="nameINP" />
  </div>
  <div >
    <input type="email" className="form-control my-5" id="emailINP" placeholder='Your email' aria-describedby="emailHelp"/>
  </div>
  <div >
    <textarea className="form-control my-5" id="messageINP" rows={5} placeholder='Your message'></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>

</form>
    </div>
    </div>

</div>




    )

} 





export default ContactUs;