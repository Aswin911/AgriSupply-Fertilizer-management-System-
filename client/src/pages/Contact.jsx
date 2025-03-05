import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow">
            <div>
              <p>Contact loading...</p>
              <a href="https://github.com/Aswin911" target="_blank" rel="noopener noreferrer">
              GitHub(click me!)</a>

            </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
  )
}

export default Contact