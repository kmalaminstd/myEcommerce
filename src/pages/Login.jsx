import React, { useState } from 'react'
import {AiFillGithub, AiOutlineGoogle} from 'react-icons/ai'
import { auth } from '../config/firebase.config'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from 'firebase/auth' 
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { addUser, removeUser } from '../redux/ecommerce'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const {user} = useSelector(state => state.ecomm)

    const googleProvider = new  GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const githubSignIn = ()=>{
        signInWithPopup(auth, githubProvider)
        .then((result)=>{
            // console.log(result.uuid);
            navigate('/')
            dispatch(addUser({
                _id: result.user.uid,
                image: result.user.photoURL,
                name: result.user.displayName,
                email: result.user.email
            }))
            
            toast.success('Login Successfull')
        }).catch((err)=>{
            toast.error("Login failed! Something went wrong")
            // console.log(err.message);
        })
    }

    const googleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            // console.log(result.user.uid);
            navigate('/')
            dispatch(addUser({
                _id: result.user.uid,
                image: result.user.photoURL,
                name: result.user.displayName,
                email: result.user.email
            }))
            toast.success('Login Successfull')
        }).catch((err)=>{
            toast.error("Login failed! Something went wrong")
            // console.log(err.message);
        })
    }

    const handleSignOut = ()=>{
        signOut(auth)
        .then((res)=>{
            // console.log(res);
            toast.error('Signed Out')
            navigate('/')
            dispatch(removeUser())
        }).catch((err)=> {
            // console.log(err.message);
        })
    }

  return (
    <>

        {
            !user && (

                <div className="w-full my-20 mx-auto flex gap-10 flex-col items-center">
                    <div onClick={githubSignIn} className="flex gap-5 bg-black text-white items-center py-2 px-10 text-[20px] cursor-pointer">
                        <div>
                            <AiFillGithub />
                        </div>
                        <div>
                            <p>Sign in with Github</p>
                        </div>
                    </div>
                    <div onClick={googleSignIn} className="flex gap-5 bg-orange-700 text-white items-center py-2 px-10 text-[20px] cursor-pointer">
                        <div>
                            <AiOutlineGoogle />
                        </div>
                        <div>
                            <p>Sign in with Google</p>
                        </div>
                    </div>
                </div>
            )
        }
        
        {
            user && (

            <div className="w-full flex items-center justify-center my-20">
                <button onClick={handleSignOut} className="bg-black text-white cursor-pointer py-2 px-8 font-semibold">Sign Out</button>
            </div>
            )
        }

    </>
  )
}

export default Login