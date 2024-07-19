import React from 'react';
import './Styling/Header.css'; 


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="introduction">
              <h1>Hello, I'm Muhammad Zair Anjum</h1>
              <p>
              I am an experienced Software Engineer focused on web development, Metatrader coding, and UI/UX design, holding a Bachelor's degree in Software Engineering from COMSATS Lahore. 
              I have successfully developed innovative E-commerce applications and user-centric applications using modern technologies. 
              Notable projects include a MERN stack pet networking web application and a Trading Admin Dashboard with Next.js and MT5 integration. 
              I excel in backend development, creating trading alert systems with Node.js and Nodemailer and implementing payment solutions like Authorize.Net and Stripe. 
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-picture">
              <img
                src="https://raw.githubusercontent.com/zairanjum/Rouletech/main/zair.jpg"
                alt="Muhammad Zair Anjum Profile"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
