import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received body:', body) // For debugging

    // Validate the data
    if (!body.productName) {
      return NextResponse.json({ error: "Product name is required" }, { status: 400 })
    }

    // Example logic to extract family from product name
    const productName = body.productName // e.g., "PET Extra Peche 30 CL"
    
    // Parse the product name to get family details
    const family = {
      type: productName.split(' ')[0], // "PET"
      line: productName.split(' ')[1], // "Extra"
      flavor: productName.split(' ')[2], // "Peche"
      size: productName.split(' ')[3] + ' ' + productName.split(' ')[4] // "30 CL"
    }

    return NextResponse.json(family)
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
} 