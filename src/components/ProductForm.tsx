"use client"

import { useState } from 'react'
import type { Product } from '@/types/product'

export default function ProductForm() {
  const [product, setProduct] = useState<Product | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: "PET Extra Peche 30 CL"
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Test Product</button>
      </form>
      
      {product && (
        <div>
          <h3>Product Details:</h3>
          <p>Name: {product.productName}</p>
        </div>
      )}
    </div>
  )
} 