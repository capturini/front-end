import { NextResponse } from 'next/server'
import type { Product } from '@/types/product'

export async function GET(request: Request) {
  // Mock data for example
  const products: Product[] = [
    {
      productName: "PET Extra Peche 30 CL",
      size: "30 CL",
      flavor: "Peche",
      type: "PET Extra"
    }
  ]
  
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the data
    if (!body.productName) {
      return NextResponse.json({ error: "Product name is required" }, { status: 400 })
    }

    // Process the product data
    // ... your logic here

    return NextResponse.json(body)
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
} 