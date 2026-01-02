import React from 'react'
import './Contact.css'
import './contact.js'
// import '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />'


// import  '<link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


const Contact = () => {

   


  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        {/* <FontAwesomeIcon icon={faHouse} /> */}
       

        <meta charSet='UTF-8'/>
     <div className='contact' id='contact'>
     <div className='end'></div>
      <h3 className='abt-text'>Get in
        <small class="text-body-light" id='hire_me'> Touch</small>
        </h3>
         
{/* card */}
{/* <div className="card_details">

        <div class="card  ">Contact:+91 7448872528<br/>E-mail: rakesh.ramalingam22@gmail.com<br/>     
        <button type="button" class="btn " ><a href="https://github.com/Rak0722">Github</a>
  
</button>
 
  <div class="card-img-overlay">
   
  </div>
</div>
</div> */}

<div class="media_icon">
        <a href=""><i class="ri-instagram-line">Instagam</i></a>
        <a href="https://www.linkedin.com/in/rakesh-r-1a797a259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i class="ri-linkedin-box-line">linkedIn</i></a>
        <a href="http://t.me/its_rocky22"><i class="ri-telegram-2-line">Telegram</i></a>
        <a href="http://Wa.me/+917448872528"><i class="ri-whatsapp-line">WhatsApp</i></a>
        <a href="https://rakesh.ramalingam22@gmail.com"><i class="ri-mail-line">Gmail</i></a>
    </div>



<h4 class ="queries" >Share Your Queries:</h4>

 {/* <img src="src\assets\images\redcube.png" class="card-img" alt="backie"/> */}

{/* form */}
        <form class="row form gy-1 gx-3 align-items-center">
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingtextarea" placeholder="Your Name"/>
  <label for="floatingtextarea">Name</label>
  <div class="valid-feedback">
      Looks good!
    </div>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="@Email address"/>
  <label for="floatingInput">Email address</label>
  <div class="valid-feedback">
      Looks good!
    </div>
</div>



<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2 "></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
{/* form ends */}






{/* <!-- Button trigger modal - */}
<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Send
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title title-dark fs-5" id="exampleModalLabel">Message sent successfully</h1>
        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Thanks for sending a Message...&#128172;
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  
  </form>




  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3>address</h3>
        <p>
          Kannan Colony 1st Street, <br />Alandur, <br /> Chennai-600016. 
        </p>
        
        {/* <div class="share">
          <a href="#" class="fab fa-facebook-f "></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div> */}
      </div>

      <div class="box">
        <h3>E-mail</h3>
        <a href="#" class="link">Rakesh.ramalingam22@gmail.com</a>
        {/* <a href="#" class="link">123@gmail.com</a> */}
      </div>
    

      <div class="box">
        <h3>call Me</h3>
        <p>+91 7448872528</p>
        {/* <p>+91 9876543210</p> */}
      </div>

      {/* <div class="box">
        <h3>opening hours</h3>
        <p>
          Monday - Friday: 9:00 - 23:00 <br />
          Saturday: 8:00 - 24:00
        </p>
      </div> */}

<div><h2>Scroll-Up</h2>
<div class="mouse_scroll">

		<div class="mouse">
			<a href=""><div class="wheel" ></div></a>
		</div>
		<div>
			<span class="m_scroll_arrows unu"><a href="#"></a></span>
			<span class="m_scroll_arrows doi"><a href="#"></a></span>
			<span class="m_scroll_arrows trei"><a href="#"></a></span>
		</div>
    
</div>
</div>

    </div>

    
  </section>


<hr/>
  
  <div class="credit">
      Created by <span id='rights'> &nbsp;Rakesh Ramalingam&nbsp;</span>all rights reserved!
    </div>


    </div>

    </div>
  )
}

export default Contact
