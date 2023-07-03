'use client'
import { increase, decrease, initialize } from '../redux/reducers/numberSlice'
import { AppDispatch } from '../redux/store'
import { useDispatch } from 'react-redux'
import {useAppSelector} from '../redux/store'

export default function Home() {
  const dispatch = useDispatch()

  const number = useAppSelector((state)=> state.numberReducer)

  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center ' >
      <h2>the number is {number}</h2>
      <div className='flex gap-7'>
        <button onClick={()=> {
          console.log(number)
          dispatch(increase())
        }
        }>+</button>
        <button onClick = { ()=> dispatch(decrease())}>-</button>
        <button onClick={() => dispatch(initialize())}>zerar</button>
      </div>
    </main>
  )
}
