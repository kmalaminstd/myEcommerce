import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { addToCart } from '../redux/ecommerce'
import { toast } from 'react-toastify'

function CartItem() {
  const dispatch = useDispatch()
  let [baseQnty, setBaseQnty] = useState(1)
  // const

  const location = useLocation()
  const product = location.state
  // console.log(product);

  const decrementQty = ()=>{
    if(baseQnty === 1){
      baseQnty = 1
    }else{
      setBaseQnty(baseQnty=> (baseQnty -1))
    }
  }

  return (
    <>
        <div className=' my-6 flex justify-center'>
          <h1 className="text-3xl font-bold">Product Details</h1>

        </div>

        <div className="w-full flex mx-auto gap-3 my-10 px-10">

          <div className="h-[480px] w-3/4">
            {/* product image   */}
            <img className="h-[100%] object-cover" src={product.image} alt="" />
          </div>

          <div className="max-w-screen-xl mx-auto">
            {/* product details */}
            <div className="w-3/4 flex flex-col gap-8">
              <h1 className="font-bold text-xl">
                {product.title}
              </h1>
              <p>{product.description}</p>

              <div className="flex gap-5 font-semibold text-[20px]">
                Price: <div>
                  <span className="line-through text-[16px] opacity-[.8]">${product.oldPrice}</span> <span>${product.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xl">Quantity:</p>
                <div className="flex border-gray-400 border-[1px]">
                  <button onClick={()=>setBaseQnty(baseQnty =>( baseQnty+1))} className="border-gray-500 border-[00.5px] px-3 text-[18px] font-semibold cursor-pointer">+</button>
                  <span className="font-semibold text-[18px] px-3">{baseQnty}</span>
                  <button onClick={()=>decrementQty()} className="border-gray-500 border-[00.5px] px-3 text-[18px] font-semibold cursor-pointer">-</button>
                </div>
              </div>
              <div className="my-10 flex justify-center">
                <button onClick={()=>dispatch(addToCart({
                  _id: product._id,
                  image: product.image,
                  title: product.title,
                  description: product.description,
                  price: product.price,
                  quantity: baseQnty 
                })) & toast.success(`${product.title} is added`) } className="bg-[lightgreen] px-5 py-1 font-semibold cursor-pointer">Add to cart</button>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default CartItem