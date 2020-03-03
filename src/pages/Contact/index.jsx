import React from "react";
import "../../index.css";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <main className="main mobile-12">
      <div className="content">

        <h1 className="heading">Contact</h1>
        <ContactForm />
          
      </div>
    </main>
  );
}

export default Contact;

{/* <form action="mailto:npatel_89@hotmail.com" method="post" enctype="text/plain" class="form">
  <div class="group mobile-12">
    <label for= "input-name" class="label" /> Name
    <input id= "input-name" placeholder= "e.g. Nilesh Patel" class="input mobile-12" />
  </div>
  <div class="group mobile-12">
    <label for= "input-email" class="label" /> Email
    <input id= "input-email" placeholder= "example@gmail.com" class="input mobile-12" />
  </div>
  <div class="group mobile-12">
    <label for="input-message" class="label"/> Message
    <textarea id="input-message" class= "input mobile-12"/>
  </div>
  <div class="group mobile-12">
    <button class="submit-btn"> Submit </button>
  </div>
</form> */}
