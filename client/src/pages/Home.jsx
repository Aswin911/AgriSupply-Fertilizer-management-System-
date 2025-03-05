import React from 'react';
import './style_sheet/Home.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow">
                {/* Add your main content here */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;