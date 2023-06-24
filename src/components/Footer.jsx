import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-black py-5 text-white w-full flex">
       
          <div className="flex flex-col gap-5 items-center mx-auto">
            <p>Home</p>
            <p>Pages</p>
            <p>Shop</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <h2 className="font-bold mb-5">Contacts</h2>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Dolor omnis <br /> ad consequatur deserunt exercitationem sunt.</p>
          </div>
        
        <div className="flex items-center mx-auto">

          <p className="text-white">@Copyright by <br /> <i>E-commerce</i> 2023</p>
        </div>
        
      </div>
    </>
  )
}

export default Footer