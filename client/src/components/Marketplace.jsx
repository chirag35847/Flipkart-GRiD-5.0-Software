import React from 'react'
import ProductHome from './ProductHome'
import Collection from './Collection'
import Sales from './Sales'
import Footer from './Footer'

const Marketplace = () => {
  return (
    <>
    <div className="bg-gradient-to-t from-black to-gray-900 min-h-screen">
    <ProductHome/>
    <Collection/>
    <div className='mt-14'>
    <h1 className='font-semibold ml-14 mb-7 mt-3 text-white' id="sellers">Top Sales</h1>
    <div className='grid gap-4 md:grid-cols-4 sm:grid-cols-2'>
      <Sales/>
      <Sales/>
      <Sales/>
      <Sales/>
    </div>
    </div>
    <div className='mt-14'>
    <h1 className='font-semibold ml-14 mb-7 mt-16 text-xl text-white'>New Arivals</h1>
    <div className='grid  gap-4 md:grid-cols-4 sm:grid-cols-2'>
      <Sales/>
      <Sales/>
      <Sales/>
      <Sales/>
    </div>
    </div>
    <div className='mt-8'>
    <Footer/>
    </div>
    </div>
    
    </>
  )
}

export default Marketplace