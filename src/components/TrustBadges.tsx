"use client"

export default function TrustBadges() {
    return (
        <section className="bg-[#F4F4F5]  border-y border-primary/10 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">verified</span>
                        <h4 className="text-lg font-bold mb-2 uppercase tracking-widest playfair">Hallmark Certified</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Every piece is certified with the BIS hallmark to ensure purity and quality standards.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">local_shipping</span>
                        <h4 className="text-lg font-bold mb-2 uppercase tracking-widest playfair">Insured Shipping</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Complimentary insured delivery worldwide on all orders with real-time tracking.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">published_with_changes</span>
                        <h4 className="text-lg font-bold mb-2 uppercase tracking-widest playfair">14-Day Returns</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Shop with confidence with our hassle-free 14-day exchange and return policy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
