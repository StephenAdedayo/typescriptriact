import React, { useState } from 'react'

const Form:React.FC = () => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   e.preventDefault()
      setName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!name){
        setError('please enter a name')
    } else{
      setError('')
    console.log(name);
    
    }
  }

  return (
    <div className='grid place-items-center'>
      <form onSubmit={handleSubmit}>
        
        <input value={name} onChange={handleChange} type="text" placeholder='Enter Your name' className=' border rounded-lg w-full outline-none bg-slate-50 p-3 '/> 
        {error && <p className='text-red-600'>{error}</p>}<br /> 
       
        <button className='outline-none bg-indigo-700 px-6 py-3 text-white rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Form
