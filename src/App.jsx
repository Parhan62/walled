import NavItems from './components/NavItems'
import logo from './assets/Vector.png'
import { useState } from 'react'
// import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard")
  const menu = [
    {title: "Dashboard",
    Link: "#"
    },
    {title: "Transfer",
      Link: "#"
    },
    {title: "Topup",
      Link: "#"
    },
    {title: "Sign Out",
      Link: "#"
    }
  ]

  return (
    <>
      <nav className='flex items-center w-screen justify-between bg-white py-4 px-8 font bold'>
        <img src = {logo}/>
        <div className='flex gap-x-8'>
          <NavItems
            menu={menu}
            activeTab={activeTab}
            handleClick={setActiveTab} />
        </div>
      </nav>
    </>
  )
}

export default App
