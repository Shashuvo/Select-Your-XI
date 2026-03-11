import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#06091A] text-white'>
            <footer className="footer w-11/12 mx-auto sm:footer-horizontal py-10 grid grid-cols-1 md:grid-cols-3 gap-60">
                <nav>
                    <h1 className='font-semibold text-lg mb-1'>About Us</h1>
                    <p className='opacity-60'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </nav>
                <nav>
                    <h6 className='font-semibold text-lg mb-1'>Legal</h6>
                    <div className='opacity-60 flex flex-col gap-3 ml-5'>
                        <li className="link link-hover">Home</li>
                        <li className="link link-hover">Services</li>
                        <li className="link link-hover">About</li>
                        <li className="link link-hover">Contact</li>
                    </div>
                </nav>
                <form>
                    <h6 className='font-semibold text-lg mb-1'>Subscribe</h6>
                    <p className='opacity-60 mb-1'>Subscribe to our newsletter for the latest updates.</p>
                    <fieldset className="w-80">
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item placeholder:text-[#131313]/40" />
                            <button className="bg-linear-to-r from-[#F2D388] to-[#E98EAD] font-bold py-2 px-6 rounded-r-md shadow-sm hover:opacity-90 transition-opacity text-[#040D11]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;