"use client"

import React, { useEffect, useMemo, useState } from 'react'

type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
  image?: string
  brand?: string
  description?: string
}

const STORAGE_KEY = 'azaraa_cart'

function formatPrice(n: number) {
  return `₹${n.toLocaleString('en-IN')}`
}

export default function CartClient() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "kundan-choker-001",
      title: "Kundan Choker Set",
      brand: "RITU KUMAR",
      description: "Handcrafted Gold Plating",
      price: 45000,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-bvAWXBvK3-D8YVBZKnXEvivS1MLX1o4DKnKzWgHfJsR1uB3CMumi1phwqtFuEJi-LpA-qGY6bwLTIwz_dwyGr1_hKhUFNJpVNf4GCT-Z6qA2nxn_HamC1l_KDx2HS8wimvZg1ZyyEs-SXs8ggjj-Y_a_tCy3RGQdVmm06H4gSOVUaVON11rJH33lBozDThQPKiKRgtQnucyvrGjlvgI_TyWTA7U-ZsDLfQsNOkh5LSOlrF0zh51Q_ayDCwmW7ypFBhrkToTtWj8"
    },
    {
      id: "pearl-jhumkas-002",
      title: "Pearl Jhumkas",
      brand: "RITU KUMAR",
      description: "South Sea Pearls",
      price: 12500,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlRd8M3OoazX0AgvqmXQLYbaa734qAJqY-fMEI5wNo0PpceVeW-qtbn9WYG4ZflhT_u59YOvOKWVBLo1F2Fb0V6ljcvYdnibia_5XhabLjvimThoedD23QaCTPKH-NLPA0eKWFI4LrSDEZhmMsHlMZit4zoSKOJ8c53lbi_grAvHs-75DX3R-9K4koV_44OClVfREblt6MJsgtTDVQxk98d6emxmnYtCJBtimP8oS53z88KUivEpKu1egyMaGknAILG-rjpGOfWv8"
    },
    {
      id: "meenakari-bangles-003",
      title: "Meenakari Bangles",
      brand: "RITU KUMAR",
      description: "Set of 2 • Traditional Enamel",
      price: 28000,
      quantity: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2T35KsGC9bDqpVk4PuSBuiNPXsr1ACVYk2Cp7gtg_gsb2LeBHpKIEdznyEF4PIqmRiWOb_NsQYHADpIeziCNTQuctAw_Cda2Yr3T-pk2zkm4GzX9xCKvwgYRlJAha_soAi8q6ehVTb-H0SUianbyx2auOj_j_8pxPRNy3WXklyJvGHa3VBkMMI0y99MKyPBM-4W1s4pSGgEfqF5XCp6603_KF-uPxpB9O3AJtzvZu5nVJdYtMNXkcFB2-Amc3F37Ls0xrq4SwU9M"
    }
  ])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        if (parsed.length > 0) {
          setItems(parsed)
        }
      }
    } catch (e) {
      console.error('Failed to read cart', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.error('Failed to save cart', e)
    }
  }, [items])

  const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.quantity, 0), [items])
  const tax = Math.round(subtotal * 0.03)
  const total = subtotal + tax
  const totalItems = items.reduce((s, i) => s + i.quantity, 0)
  const freeShippingThreshold = 50000
  const hasUnlockedFreeShipping = subtotal >= freeShippingThreshold
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100)

  function updateQuantity(id: string, qty: number) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, quantity: Math.max(1, qty) } : it))
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(it => it.id !== id))
  }

  if (!items || items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold playfair mb-4">Your cart is empty</h2>
        <p className="text-zinc-500 mb-8">Browse our collection and add pieces you love.</p>
        <a href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-bold">Continue Shopping</a>
      </div>
    )
  }

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 bg-[#F8F7F6]">
      <h2 className="text-4xl md:text-5xl playfair font-bold mb-12 border-b border-primary/10 pb-6 uppercase tracking-tight">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-[65%] space-y-8">
          {items.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-white  rounded-lg shadow-sm border border-primary/10">
              <div className="w-full sm:w-40 h-40 bg-zinc-100 dark:bg-zinc-800 rounded overflow-hidden">
                {item.image ? <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={item.image} alt={item.title} /> : null}
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    {item.brand && (
                      <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-2">
                        {item.brand}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-zinc-500 mb-4 uppercase tracking-tighter italic">{item.description}</p>
                    )}
                  </div>
                  <p className="text-xl font-bold text-primary">{formatPrice(item.price)}</p>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex items-center border border-zinc-200  rounded-lg h-10 px-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-zinc-100  rounded">-</button>
                    <input aria-label={`Quantity for ${item.title}`} value={item.quantity} onChange={e => updateQuantity(item.id, Number(e.target.value || 1))} className="w-10 border-none bg-transparent text-center focus:ring-0 text-sm font-bold" type="number" min={1} />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-zinc-100  rounded">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="flex items-center gap-1 text-sm text-zinc-400 hover:text-red-500 transition-colors uppercase font-bold tracking-wider">
                    <span className="material-symbols-outlined text-lg">delete</span> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-6">
            <a className="inline-flex items-center gap-2 text-primary hover:underline font-bold uppercase tracking-widest text-sm" href="/">
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </a>
          </div>
        </div>

        <aside className="lg:w-[35%]">
          <div className="sticky top-32 p-8 bg-white  rounded-xl shadow-xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-8 playfair uppercase tracking-widest border-b border-primary/10 pb-4">Order Summary</h3>

            {/* Free Shipping Progress */}
            <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {hasUnlockedFreeShipping ? "You've unlocked Free Shipping!" : `₹${formatPrice(freeShippingThreshold - subtotal)} away from Free Shipping`}
                </p>
                <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full transition-all duration-500" style={{ width: `${shippingProgress}%` }} />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal ({totalItems} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Estimated Shipping</span>
                <span className="text-primary font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Estimated Tax (GST 3%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="pt-4 border-t border-primary/10 flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary playfair">{formatPrice(total)}</p>
                  <p className="text-[10px] text-zinc-400 italic">Incl. all taxes</p>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-[#d49826] transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
              Proceed to Checkout
              <span className="material-symbols-outlined">trending_flat</span>
            </button>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="material-symbols-outlined text-primary">lock</span>
                <span>Secure SSL Encrypted Checkout</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span>100% Authenticity Guaranteed</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
