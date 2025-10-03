'use client'
import { counter } from '@/slices/action'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChatPage = () => {
  const userDetail = useSelector((state)=>state.userSlice)
  console.log(userDetail,"userDetail")
  // const count1 = useSelector((state)=>state.duplicatecountReducer.count)
  // const dispacth = useDispatch()
  return (
    <div>
      Chat Page (Private)
      {/* <p>{count}</p>
      <p>{count1}</p> */}
      <button onClick={()=>dispacth(counter(1))}>INCREMENT</button>
      <button onClick={()=>dispacth({type : "DECREMENT"})}>DECREMENT</button>
    </div>
  )
}

export default ChatPage
