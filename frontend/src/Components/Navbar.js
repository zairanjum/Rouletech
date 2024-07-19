import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{
        fontWeight: 'bold', 
        fontSize: '20px', 
        fontFamily: 'cursive', 
        color: '#FFFFFF',
        textShadow: '2px 2px 4px #000000'
      }} > {props.Tittle}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ display: 'flex', justifyContent: 'right', width: '100%', fontFamily:'cursive', shadow:'2px 2px 4px #000000' }} >
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="/">{props.HomeText}</a>
          </li>  
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  Tittle: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  Tittle: 'Set your Title'
}