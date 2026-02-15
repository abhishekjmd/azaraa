"use client"

import React, { useState } from 'react'

export type Product = {
  id: string
  title: string
  price: number
  priceText: string
  images: string[]
  rating: number
  reviews: number
  brand: string
  specs: Record<string,string>
  description: string
}

export default function ProductDetailsClient({ product }: { product: Product }){
  const [mainImage, setMainImage] = useState(product.images[0])
  const [qty, setQty] = useState<number>(1)
  const [toast, setToast] = useState<string>('')

  const changeImage = (src: string) => setMainImage(src)

  const dec = () => setQty(v => Math.max(1, v-1))
  const inc = () => setQty(v => v+1)
  const onQtyInput = (v: string) => {
    const n = parseInt(v.replace(/[^0-9]/g,''), 10)
    setQty(Number.isNaN(n) ? 1 : Math.max(1,n))
  }

  const addToBag = () =>{
    try{
      const cart = JSON.parse(localStorage.getItem('azaraa_cart') || '[]')
      cart.push({ id: product.id, title: product.title, price: product.price, quantity: qty, image: mainImage })
      localStorage.setItem('azaraa_cart', JSON.stringify(cart))
      setToast(`${qty} × ${product.title} added to bag`)
      setTimeout(()=> setToast(''), 2000)
    }catch(e){
      console.error(e)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 grid grid-cols-12 gap-4">
          <div className="col-span-2 space-y-4">
            {product.images.map((src, i) => (
              <div key={i} className={`aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-opacity ${mainImage===src? 'border-2 border-primary':''}`}>
                <img
                  src={src}
                  alt={`${product.title} ${i+1}`}
                  className="w-full h-full object-cover"
                  onClick={() => changeImage(src)}
                  onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); changeImage(src) } }}
                  tabIndex={0}
                />
              </div>
            ))}
          </div>
          <div className="col-span-10">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
              <img src={mainImage} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal text-white rounded-full text-[10px] uppercase tracking-widest font-bold mb-4">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              {product.brand}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">{product.title}</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-0.5">
                {Array.from({length:5}).map((_,i)=> (
                  <span key={i} className={`material-symbols-outlined ${i<Math.floor(product.rating)?'fill-primary':''} text-lg`}>{ i < Math.floor(product.rating) ? 'star' : (i < product.rating ? 'star_half' : 'star') }</span>
                ))}
              </div>
              <span className="text-sm text-muted-gold font-medium">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-display text-primary font-bold">{product.priceText}</p>
            <p className="text-xs text-muted-gold mt-2 uppercase tracking-tighter italic">MRP incl. of all taxes</p>
          </div>

          <div className="h-px bg-primary/10"></div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center w-32 border border-primary/20 rounded-lg overflow-hidden">
                <button onClick={dec} className="w-10 h-10 flex items-center justify-center hover:bg-primary/5">-</button>
                <input aria-label="quantity" value={qty} onChange={(e)=> onQtyInput(e.target.value)} className="w-12 h-10 border-none text-center focus:ring-0 text-sm font-bold bg-transparent" />
                <button onClick={inc} className="w-10 h-10 flex items-center justify-center hover:bg-primary/5">+</button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={addToBag} className="w-full bg-primary text-charcoal font-bold py-4 rounded-lg uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:brightness-105 transition-all">Add to Bag</button>
              <button className="w-full bg-transparent border-2 border-charcoal/10 text-charcoal font-bold py-4 rounded-lg uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined text-lg">store</span>Visit Boutique</button>
            </div>
          </div>

          <div className="mt-8 border-t border-primary/10">
            <div className="py-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">Product Specifications</h3>
              <div className="mt-4 text-sm text-charcoal/80 space-y-2 leading-relaxed">
                {Object.entries(product.specs).map(([k,v])=> (
                  <div key={k} className="flex justify-between border-b border-primary/5 pb-1">
                    <span className="text-muted-gold">{k}</span>
                    <span className="font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">Care Instructions</h3>
              <p className="mt-4 text-sm text-charcoal/80 leading-relaxed">Avoid contact with perfumes, moisture, and excessive heat. Store in the original Azaraa velvet box when not in use. Clean with a soft lint-free cloth only.</p>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">The Craftsmanship</h3>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-charcoal/70 leading-relaxed">{product.description}</p>
        </div>
      </section>

      {toast && (
        <div className="fixed right-6 bottom-6 bg-black text-white px-4 py-2 rounded-md shadow-lg z-50">{toast}</div>
      )}
    </div>
  )
}
