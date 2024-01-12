import { useState } from 'react'
import Logo from '../../assets/logo-eurotrip.svg'
import { X, AlignLeft } from 'lucide-react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full h-16 bg-red-300">
      <nav className="flex flex-row items-center justify-between px-12">
        <div className="flex flex-row items-center gap-2 mt-2">
          <img src={Logo} alt="logo eurotrip" />
          <img
            src="https://img.freepik.com/vetores-premium/bonito-espaguete-macarrao-cartoon-vetor-icone-ilustracao-alimento-objeto-icone-conceito-isolado-vetor-plano_138676-9773.jpg?w=2000"
            width="50"
            height="50"
            alt="seila"
            className="rounded-full"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <X /> : <AlignLeft />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-nuv dark:bg-nav md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] md:opacity-100 opacity-0'
          }`}
        >
          <div className="mt-2">
            <Link to="/roadmap">
              <Button>Roadmap</Button>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  )
}
