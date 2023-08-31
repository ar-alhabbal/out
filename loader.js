'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://ar-alhabbal.firebaseapp.com/${src}?w=${width}&q=${quality || 75}`
}