import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdClose} from 'react-icons/md'
import { decrementQuantity, incrementQuantity, removeItem, resetCart } from '../redux/ecommerce'
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [totalAmt, setTotalAmt] = useState('')
  const [pay, setPay] = useState(false)
  const {productData, user} = useSelector(state => state.ecomm)
  // console.log(productData);
  useEffect(()=>{
    let amt = 0 ;
    productData.map(elm => {
      amt += elm.quantity * elm.price
      // console.log(typeof elm.price);
      setTotalAmt(amt)
    })
  },[productData])

  const handlePay = ()=>{
    if(user){
      setPay(true)
    }else{
      toast.error("Please sign in to proceed!!!")
    }
  }

  const payment = async (token)=>{
    await axios.post("https://my-ecommerce-server-cc3jz8hwb-kmalaminstd.vercel.app/pay",{
      amount: totalAmt * 100,
      token: token
    })
  }

  return (
    <>
      <div className="flex w-full mx-auto my-10">

        <div className="max-w-3/4 mx-auto">
          <h1 className="font-semibold my-11 text-2xl">Shopping Cart</h1>
          <div className="flex flex-col gap-8">

            {
                productData &&
                productData.map(elem => (
                // console.log(elem);
                <div key={elem._id} className="flex gap-1 items-center">
                  <div className='cursor-pointer' onClick={()=>dispatch(removeItem(elem._id))}>
                    <MdClose />

                  </div>
                  <div className="w-30">
                    <img className="w-24 object-cover" src={elem.image} alt="" />
                  </div>
                  <div className="w-full ps-4">
                    <p className="font-semibold">{elem.title}</p>
                  </div>
                  <div className="w-1/4 ps-4">
                    <p className="font-semibold">${elem.price}</p>
                  </div>
                  <div className="w-36">
                    <div className="w-full flex justify-between">
                      <button onClick={()=>dispatch(incrementQuantity(elem._id))} className='border-[0.5px] border-[gray] cursor-pointer px-1'>+</button>
                        <span>{elem.quantity}</span>
                      <button onClick={()=>dispatch(decrementQuantity(elem._id))}  className='border-[0.5px] border-[gray] cursor-pointer px-1'>-</button>
                    </div>
                  </div>
                  <div className="ps-4 mx-auto">
                    <p className="font-black">${elem.price * elem.quantity}</p>
                  </div>
                </div>

                ))
            }

            {
              productData.length > 0 &&
              <button onClick={()=>dispatch(resetCart())} className="bg-orange-700 font-semibold text-white py-3">Reset Cart</button>
            }

            {
              productData.length <= 0 &&
              <div className="flex flex-col gap-5">
                <p className="text-orange-700 text-[21px]">Product Cart is empty!!</p>
                <button onClick={()=>navigate('/')} className="flex items-center gap-3"> <MdArrowBack /> Continue Shopping</button>
              </div>

            }

          </div>
        </div>

        <div className="w-1/3 mx-auto">
          <div className="bg-[#e5e7eb] p-5">
            <h1 className="text-2xl font-semibold">Cart Total</h1>
            <div className="flex flex-col gap-5 justify-between border-b-[1px] border-black pb-2">
              <p className="flex justify-between font-bold text-[22px] mt-7"><span>Subtotal:</span> <span>${parseFloat(totalAmt).toFixed(2)}</span></p>
              <p className="flex justify-between gap-2 text-[18px]"><span>Shipping:</span> <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p>
            </div>
            <div className="mt-7">
              <p className="flex justify-between font-bold text-3xl"><span>Total:</span> <span>${parseFloat(totalAmt).toFixed(2)}</span></p>
            </div>
            <button onClick={handlePay} className="border-black border-[1px] w-full mt-4 text-white bg-black cursor-pointer py-3 text-[18px] font-semibold">Proceed To Pay</button>

            {
              pay &&
              <StripeCheckout
                label='Pay Now'
                stripeKey='pk_test_51MvatPGdlAMKyfMAdjhEEoeZI5WYQtU2Ajs1PnhafzNZKUp1ILKXAtEBHDB5yrfs9YVDVFxZ4n704Ww7rACkaBD900dNEFofm3'
                name='Ecommerce'
                amount={totalAmt * 100}
                description={`Your total amount is ${totalAmt}`}
                token={payment}
                email={user.email}
              />
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart