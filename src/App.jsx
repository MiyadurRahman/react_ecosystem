import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <div>
          <h1 className='bg-amber-50'>Get started</h1>
          
            
          
        </div>
        <div>
          <div className="avatar">
  <div className="w-24 rounded-xl">
    <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
  </div>
</div>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
</div>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      
    </>
  )
}

export default App
