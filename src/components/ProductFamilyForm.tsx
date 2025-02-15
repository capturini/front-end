"use client"

import { useState } from 'react'

type ProductFamily = {
  type: string
  line: string
  flavor: string
  size: string
}

export default function ProductFamilyForm() {
  const [family, setFamily] = useState<ProductFamily | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      const response = await fetch('/api/product/family', {
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
      if (data.error) {
        setError(data.error)
      } else {
        setFamily(data)
      }
      console.log('Response data:', data) // For debugging
    } catch (error) {
      console.error('Error:', error)
      setError('Failed to process product family')
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test Product Family
        </button>
      </form>
      
      {error && (
        <div className="mt-4 text-red-500">
          Error: {error}
        </div>
      )}
      
      {family && (
        <div className="mt-4">
          <h3 className="font-bold">Product Family Details:</h3>
          <p>Type: {family.type}</p>
          <p>Line: {family.line}</p>
          <p>Flavor: {family.flavor}</p>
          <p>Size: {family.size}</p>
        </div>
      )}
    </div>
  )
} 