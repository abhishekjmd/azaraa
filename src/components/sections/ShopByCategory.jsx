const categories = [
  {
    name: 'Necklaces',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkXAoadTcd9uKTA5yT3poM6l7MWANR-AqNdzx7H_CCgHKU5O9brtlC0fZS3D3ctzyG8Tr_XkMK3xPoSNRJgclXtphNa1LPyN46YnbjDlPTLuXhe-XYocpAe_qhIk45SbCWetNhmTnBySu88-8HOdIRC10dMcTbyjpdsemxbW7NiIekMWgw97cVgdMgF7TDqYagX5swMD0_E_98AmGmnLyz3TNK21ieeqvN8LpL3h9J_r6wA-SsoDOfwpe1HnufIWx7gCy9e19yj5o',
  },
  {
    name: 'Earrings',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBupdGOF1Ul2IIeqvrnya5jH9eLJDO9YA0zWhOsmQe-FNSmyeetYMTk4-JXb6bs964uync4tqmMct9t3f5yR_12jCr5cP50MWHISpnUTkzDIqqvjVvseN7lP7bt14r9TGqPX58LrImpjDklt376t377FyQfTcyNwRZjy_BXmaN-43uhJrudq6syiPqV6mZamEHv9r-B0_VXkg_OYl-jWdU6ZStj1QDS0tsl3wqum5BT0cnj3gFI9R88LGdfH_QAopN7HehaHvfOaCU',
  },
  {
    name: 'Bangles',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVUg1Oux0mw3Z8J6w0KtAmLPEey1PnEcKvBjbPnpZaUSpe9XVotDCuI6L9eVwG-lx-cfQW6WVatPy59mZzOVGDGCqOws36RMAxFHLdHztILP3JGNHwkBFRvbr2oEddJZwBxU43oHbmgrdmvaj3FjdO9nu_aqb7BotLq5nuoM4KFNdDqXTmRvgOGvme_NYw8U_ixqkQMsDv4GVcknhP-mBJCuMHKK7LjkisJ2L1Tda9oEBG3Um5o5AjglsRRJlWzegmJ7-7FvfQ_mU',
  },
];

function CategoryCircle({ category }) {
  return (
    <a className="group flex flex-col items-center" href="#">
      <div className="size-48 lg:size-64 rounded-full overflow-hidden border-2 border-primary/20 p-2 group-hover:border-primary transition-all duration-500">
        <div
          className="w-full h-full rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${category.image}')` }}
        />
      </div>
      <h3 className="mt-6 text-lg font-bold tracking-widest uppercase">{category.name}</h3>
      <span className="text-primary text-xs tracking-widest mt-1">Explore</span>
    </a>
  );
}

export default function ShopByCategory() {
  return (
    <section className="bg-primary/5 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <CategoryCircle key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
