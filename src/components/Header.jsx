import React from 'react'
import {logo, profile, trolly} from '../assets/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const {productData, user} = useSelector(state => state.ecomm)
  // console.log(user);
  return (
    <>
      <div className="flex justify-between w-full bg-[lightgreen] py-5 px-5">

        <div className="flex items-center max-w-screen-xl mx-auto gap-10">
          <div>
            <Link to="/">
              <img className="w-20" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex">
            <ul className="flex gap-5">
              <li className="font-bold text-[18px] hover:cursor-pointer hover:underline text-orange-700 duration-300" ><Link to="/">Home</Link></li>
              <li className="font-bold text-[18px] hover:cursor-pointer hover:underline text-orange-700 duration-300">Product</li>
              <li className="font-bold text-[18px] hover:cursor-pointer hover:underline text-orange-700 duration-300">Pages</li>
              <li className="font-bold text-[18px] hover:cursor-pointer hover:underline text-orange-700 duration-300">Shop</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-10  items-center max-w-screen-xl mx-auto">
          <div className="w-[30px] relative">
            <Link to="cart">
              <img className="w-[100%]" src={trolly} alt="" />
              <span className="absolute flex items-center justify-center rounded-full h-[25px] w-[25px] top-[-5px] right-[-15px] bg-[lightcoral] p-1 text-white font-bold]">{productData.length}</span>
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Link to="login">
              <img src={user ? user.image : profile} alt="" className="rounded-full object-cover w-[35px] h-[35px]" />
            </Link>
            <p className="font-bold">{user ? user.name : "Guest"}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header