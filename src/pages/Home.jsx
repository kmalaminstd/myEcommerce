import React from 'react'
import Products from '../components/Products'
import Sliders from '../components/Slider'
import { useLoaderData } from 'react-router'

function Home() {
  const allProduct = useLoaderData()
  // console.log(allProduct);
  return (
    <>
        <Sliders />

        
        <div className="flex items-center justify-center my-14">
          <h2 className="text-5xl font-bold">Products</h2>
        </div>
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '0 30px',
          margin: '50px 0',
          gap: '20px'
        }}>
          {
            allProduct && (
              allProduct.data.map((elm)=>{
                return(

                  <Products key={elm._id} product={elm} />
                )

              })
            )
          }
        </div>
    </>
  )
}

export default Home