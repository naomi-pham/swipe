import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5', {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    // },
  });
  const products = await res.json();

  return NextResponse.json({ products });
}
