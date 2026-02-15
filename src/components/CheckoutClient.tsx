'use client';

import Link from 'next/link';

export default function CheckoutClient() {
    return (
        <div className="min-h-screen bg-background-light  text-[#1b160d]  antialiased">
            {/* Simplified Header */}
            <header className="w-full py-8 border-b border-[#E9E2D3]/30 flex justify-center items-center bg-white/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold tracking-[0.1em] uppercase playfair">Azaraa</h1>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10">
                {/* Progress Stepper */}
                <div className="mb-12 ">
                    <div className="flex bg-[#FCFAF8] justify-between items-center mb-4 max-w-2xl mx-auto">
                        <div className="flex flex-col items-center gap-2 group">
                            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">1</div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Shipping</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-[#E9E2D3] mx-4 mb-6"></div>
                        <div className="flex flex-col items-center gap-2 opacity-40">
                            <div className="size-8 rounded-full bg-[#E9E2D3] flex items-center justify-center text-[#1b160d] text-xs font-bold">2</div>
                            <span className="text-xs font-semibold uppercase tracking-wider">Delivery</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-[#E9E2D3] mx-4 mb-6"></div>
                        <div className="flex flex-col items-center gap-2 opacity-40">
                            <div className="size-8 rounded-full bg-[#E9E2D3] flex items-center justify-center text-[#1b160d] text-xs font-bold">3</div>
                            <span className="text-xs font-semibold uppercase tracking-wider">Payment</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-[#E9E2D3] mx-4 mb-6"></div>
                        <div className="flex flex-col items-center gap-2 opacity-40">
                            <div className="size-8 rounded-full bg-[#E9E2D3] flex items-center justify-center text-[#1b160d] text-xs font-bold">4</div>
                            <span className="text-xs font-semibold uppercase tracking-wider">Review</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Shipping Form (65%) */}
                    <div className="w-full lg:w-[65%] space-y-10">
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 font-display">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">Email Address</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-gold/50" placeholder="email@example.com" type="email" />
                                    <p className="text-xs text-neutral-gold">Already have an account? <a className="text-primary hover:underline" href="#">Log in</a> for faster checkout.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-6 font-display">Shipping Address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">First Name</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">Last Name</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" type="text" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">Address</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="House number and street name" type="text" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">Apartment, suite, etc. (optional)</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Apartment 4B" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">City</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="New York" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">Postal Code</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="10001" type="text" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-medium text-neutral-gold uppercase tracking-tight">Phone</label>
                                    <input className="w-full h-12 px-4 rounded border border-[#E9E2D3] bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+1 (555) 000-0000" type="tel" />
                                </div>
                            </div>
                        </section>

                        <div className="pt-6 border-t border-[#E9E2D3]/30 flex justify-between items-center">
                            <Link className="text-sm font-medium text-neutral-gold flex items-center gap-2 hover:text-primary transition-colors" href="/cart">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Return to Cart
                            </Link>
                            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded font-semibold tracking-wide shadow-lg shadow-primary/20 transition-all uppercase text-sm">
                                Continue to Delivery
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Sticky Order Summary (35%) */}
                    <div className="w-full lg:w-[35%]">
                        <div className="sticky top-8 bg-white border border-[#E9E2D3] p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-[#E9E2D3]/30 font-display">Order Summary</h3>
                            {/* Item List */}
                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                                {/* Item 1 */}
                                <div className="flex gap-4">
                                    <div className="relative size-20 flex-shrink-0 bg-background-light rounded border border-[#E9E2D3] overflow-hidden">
                                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5zFPA4ve7vC3RYsoAajmZxiYpXvXAQx93jrNJKfdyAzwqkfpvUDTc2ox9GQ17jfOhWNxMwzdS7_NEmkN8-vMoSOXc-sBX5XZPArHvlTnGrq9dNwvtFbDaVKP7nLhETYVLRbTI24F-75xlLOcWc6uODtt4lozBdNnd0iq_Ajx_RKmnoSZYPE2mWqIB6FiFeUzkSUHp6zIosSW5NC1F0q0YMEg97yPOAmFJlwIPbZuTl0h68vQa1vVPI-TZzSG92ilawVN_w9kdu2w" alt="Aurelia Diamond Pendant" />
                                        <span className="absolute -top-2 -right-2 size-5 bg-neutral-gold text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                                    </div>
                                    <div className="flex flex-col justify-center flex-1">
                                        <h4 className="text-sm font-semibold font-display">Aurelia Diamond Pendant</h4>
                                        <p className="text-xs text-neutral-gold">18k Yellow Gold / 0.5ct</p>
                                    </div>
                                    <span className="text-sm font-medium">₹1,250.00</span>
                                </div>
                                {/* Item 2 */}
                                <div className="flex gap-4">
                                    <div className="relative size-20 flex-shrink-0 bg-background-light rounded border border-[#E9E2D3] overflow-hidden">
                                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBDTgLNG05JeDfZ2f40IOA2bkAtfBPfZfk-3nXuPRccIxUurh8RGTXHwDBAjqpsq2dF6PI8xfb-UrEXoHRRv3QzF_BCNOIf_F7IumPrz9W9Sq6m8oRyDUXy9zE2PzmYuJ-VG9pBO-gLPoZ3GqRb9SgkTkNYtGE_N2-1gjGW6perx3XC7A4kjHCQ6C60esK2AhDHGeEX4Ttx6nj_Nc4PYcmH0yBf-dbZViWxJKdEbi4EARw1HWJW7m3rS7OYGLnZobQwHtD-jhVnEY" alt="Luna Solitaire Ring" />
                                        <span className="absolute -top-2 -right-2 size-5 bg-neutral-gold text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                                    </div>
                                    <div className="flex flex-col justify-center flex-1">
                                        <h4 className="text-sm font-semibold font-display">Luna Solitaire Ring</h4>
                                        <p className="text-xs text-neutral-gold">Platinum / 1.2ct</p>
                                    </div>
                                    <span className="text-sm font-medium">₹3,400.00</span>
                                </div>
                            </div>
                            {/* Promo Code */}
                            <div className="flex gap-2 mb-8">
                                <input className="flex-1 h-10 px-3 text-sm rounded border border-[#E9E2D3] bg-background-light focus:ring-1 focus:ring-primary outline-none" placeholder="Promo code" type="text" />
                                <button className="px-4 py-2 border border-[#E9E2D3] text-xs font-bold uppercase tracking-wider hover:bg-[#E9E2D3] transition-colors">Apply</button>
                            </div>
                            {/* Totals */}
                            <div className="space-y-3 pt-6 border-t border-[#E9E2D3]/30">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-gold">Subtotal</span>
                                    <span className="font-medium">₹4,650.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-gold">Shipping</span>
                                    <span className="text-xs italic">Calculated at next step</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-gold">Taxes</span>
                                    <span className="font-medium">₹372.00</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold font-display pt-4 border-t border-[#E9E2D3]/30 mt-4">
                                    <span>Total</span>
                                    <div className="text-right">
                                        <span className="text-[10px] text-neutral-gold font-sans font-normal uppercase block">INR</span>
                                        <span>₹5,022.00</span>
                                    </div>
                                </div>
                            </div>
                            {/* Trust Signals */}
                            <div className="mt-10 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                                    <span className="text-[10px] leading-tight uppercase font-bold tracking-tighter text-neutral-gold">Secure SSL Payment</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">package_2</span>
                                    <span className="text-[10px] leading-tight uppercase font-bold tracking-tighter text-neutral-gold">Insured Shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-20 border-t border-[#E9E2D3]/30 py-10 text-center">
                <div className="flex justify-center gap-8 mb-4">
                    <a className="text-xs text-neutral-gold hover:text-primary transition-colors" href="#">Privacy Policy</a>
                    <a className="text-xs text-neutral-gold hover:text-primary transition-colors" href="#">Terms of Service</a>
                    <a className="text-xs text-neutral-gold hover:text-primary transition-colors" href="#">Returns Policy</a>
                </div>
                <p className="text-[10px] text-neutral-gold uppercase tracking-widest">© 2024 Azaraa Fine Jewellery. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
