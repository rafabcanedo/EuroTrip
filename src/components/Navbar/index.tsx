import { useState } from 'react'
import Logo from '../../assets/logo-eurotrip.svg'
import { X, AlignLeft } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav>
        <div className="flex flex-row items-center gap-2">
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
      </nav>
    </div>
  )
}
