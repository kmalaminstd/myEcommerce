// import { root } from 'postcss'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addToCart } from '../redux/ecommerce'
import { toast } from 'react-toastify'

function Products({product}) {
  const [detect, useDetect] = useState(false)
  const {productData} = useSelector(state => state.ecomm)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(productData);
  },[detect])

  const id = product.title
  const idToString = (id)=>{
    return id.toLowerCase().split(" ").join("")
  }

  const rootId = idToString(id)
  // console.log(rootId);

  const handleDetails = ()=>{
    navigate(`product/${rootId}`,{
      state: product
    })
    // console.log(product);
  }

  return (
    <>
      <div style={{width: '21%'}} className="bg-[lightblue] p-2">
        <div onClick={handleDetails} className="h-[350px] overflow-hidden">
          <img className="h-full w-full object-cover cursor-pointer transition-transform hover:scale-[1.2]" src={product.image} alt="" />
        </div>
        <div className='pt-3'>
          <h2 className='pt-3 font-semibold'>{product.title}</h2>
          <p className='pt-4 h-[140px] overflow-hidden'>{product.description}</p>
          <div className="flex flex-col gap-8">
            <p className="mt-5 font-bold">Price: <span className="line-through opacity-[0.8] font-normal text-[14px]">${product.oldPrice}</span> $<span>{product.price}</span></p>
            <button onClick={()=>dispatch(addToCart({
              _id: product._id,
              image: product.image,
              title: product.title,
              description: product.description,
              price: product.price,
              quantity: 1 
            })) & toast.success(`${product.title} is added`)} className="border-[lightgreen] border-[3px] bg-[lightgreen] font-bold py-2 active:bg-[lightcoral]">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products