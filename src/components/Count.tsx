import React, { useState } from 'react'

const Count:React.FC = () => {
 const [count, setCount] = useState<number>(0)

 const increment = (e: React.MouseEvent<HTMLButtonElement>)  => {
    setCount(count + 1);
    console.log('Increase Button clicked:', e);

    
 } 

 const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if(count > 0){
        setCount(count - 1);
        console.log('Decrease Button clicked:', e);
    // }


 }

 const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0)
    console.log('reset', e);
    
 }

  return (
    <div className='my-10 grid place-items-center space-y-2'>
      <p>Count : {count}</p>
      <div className='space-x-3'>
      <button onClick={increment}  className='outline-none bg-indigo-700 px-6 py-3 text-white rounded-md'>Increment</button>
      <button onClick={decrement} className='outline-none bg-indigo-700 px-6 py-3 text-white rounded-md'>Decrement</button>
      <button onClick={reset} className='outline-none bg-indigo-700 px-6 py-3 text-white rounded-md'>Reset</button>

      </div>
    </div>
  )
}

export default Count
