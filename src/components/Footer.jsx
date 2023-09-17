import React from 'react'
import './Footer.scss'




const Footer = () => {
  return (
    <footer>
        <div>
            <h1>Ankit </h1>
            <p>@all rights reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
          <div>

            <a href='https://youtube.com' target={"blank"}>YouTube</a>
            <a href="https://instagram.com"  target={"blank"}>Instagram</a>
            <a href= "https://github.com" target={"blank"}>Github</a>
            <a href= "https://linkedin.com" target={"blank"}>Linked-in</a>

          </div>
        </div>
    </footer>
  )
}

export default Footer