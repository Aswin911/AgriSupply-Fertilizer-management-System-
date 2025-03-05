import React from 'react';
import './style_sheet/Home.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/Card'; // Import the Card component

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow flex justify-center items-center p-6">
                <Card /> {/* Inserted the Card component */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
