export default function BestSellers() {
    const products = [
        {
            id: 1,
            name: 'Kundan Choker',
            price: '₹1,25,000',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkXAoadTcd9uKTA5yT3poM6l7MWANR-AqNdzx7H_CCgHKU5O9brtlC0fZS3D3ctzyG8Tr_XkMK3xPoSNRJgclXtphNa1LPyN46YnbjDlPTLuXhe-XYocpAe_qhIk45SbCWetNhmTnBySu88-8HOdIRC10dMcTbyjpdsemxbW7NiIekMWgw97cVgdMgF7TDqYagX5swMD0_E_98AmGmnLyz3TNK21ieeqvN8LpL3h9J_r6wA-SsoDOfwpe1HnufIWx7gCy9e19yj5o',
        },
        {
            id: 2,
            name: 'Pearl Jhumkas',
            price: '₹45,000',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBupdGOF1Ul2IIeqvrnya5jH9eLJDO9YA0zWhOsmQe-FNSmyeetYMTk4-JXb6bs964uync4tqmMct9t3f5yR_12jCr5cP50MWHISpnUTkzDIqqvjVvseN7lP7bt14r9TGqPX58LrImpjDklt376t377FyQfTcyNwRZjy_BXmaN-43uhJrudq6syiPqV6mZamEHv9r-B0_VXkg_OYl-jWdU6ZStj1QDS0tsl3wqum5BT0cnj3gFI9R88LGdfH_QAopN7HehaHvfOaCU',
        },
        {
            id: 3,
            name: 'Meenakari Bangles',
            price: '₹85,000',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVUg1Oux0mw3Z8J6w0KtAmLPEey1PnEcKvBjbPnpZaUSpe9XVotDCuI6L9eVwG-lx-cfQW6WVatPy59mZzOVGDGCqOws36RMAxFHLdHztILP3JGNHwkBFRvbr2oEddJZwBxU43oHbmgrdmvaj3FjdO9nu_aqb7BotLq5nuoM4KFNdDqXTmRvgOGvme_NYw8U_ixqkQMsDv4GVcknhP-mBJCuMHKK7LjkisJ2L1Tda9oEBG3Um5o5AjglsRRJlWzegmJ7-7FvfQ_mU',
        },
        {
            id: 4,
            name: 'Polki Necklace',
            price: '₹2,10,000',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJRNexpU8T_5e7OBZLtnzf-PuZlIo0uvGdUKy2v9uhdP4DZxQGSK3DE_kpzM_ymf3bGUzY6vjOj_EQDCNyAYT-8YgkGGyLet7KBgKeOYDMSln5szXPPjBpxo7OPfd32NFT0dgeLfvvR8Wbty6Aaoo7iE2aghcbWLKRJZNURmEZeWU6MwTb3KNR5Lksz-u8u2t1OQ8SRIbikwtXW-X7PA2zAg3ObR6OwcGPJP9G8NUt4jQCRP8AGFDMO8ekmyyiM9UuBUYqEUYy-XI',
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-[36px] font-display font-bold mb-3 text-[#1b160d]">Curated Favorites</h2>
                <p className="font-sans text-[16px] text-[#666] tracking-wide">The pieces our community loves most.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4">
                            <img
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={product.image}
                            />
                        </div>
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">Azaraa Heritage</p>
                        <h3 className="text-lg font-bold mb-1 text-[#1b160d]">{product.name}</h3>
                        <p className="text-sm text-gray-600 font-sans">{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="border-2 border-primary text-primary px-10 py-3 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
                    Shop Best Sellers
                </button>
            </div>
        </section>
    );
}
