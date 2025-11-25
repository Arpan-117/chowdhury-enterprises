import React from 'react'
import { Link } from 'react-router'

function PageNotFoundCE() {
  return (
    <div className='text-center py-4'>
        {/* <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBtZzhoYnV1YXN3bjN1ZDhpeDJtMHR3ZjQ5YW45dDR2aXlpZ2EwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cjDbTQZy5Tlch5nQAI/giphy.gif' alt='404 error' className='mx-auto' /> */}
        <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhzajFwNmhxa3c1djFka3RkYnE0ZnM0bnJlb3kxdjNiejNkMDg1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8L0Pky6C83SzkzU55a/giphy.gif' alt='404 error' className='mx-auto' />
        <p className='py-2 text-xl'>The page you are looking for does not exist.</p>
        <button className='mx-auto p-2 font-semibold text-lg text-white rounded-lg bg-black hover:scale-105 transition-all duration-300'>
            <Link to='/' className='mx-auto'>Go back to Home</Link>
        </button>
        
    </div>
  )
}

export default PageNotFoundCE