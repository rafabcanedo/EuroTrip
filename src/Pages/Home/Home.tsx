import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { Button } from '../../components/Button/Button'
import { ButtonList } from '../../components/ButtonsVariants/ButtonList'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-signika text-4xl text-[#5c636e]">Hey, everyone</h3>
        <h2 className="font-signika text-2xl text-[#5c636e]">
          Welcome to our EuroTrip 🧳🚀
        </h2>
      </div>
      <div className="flex mt-6 mb-6">
        <img
          src={Logo}
          alt="Logo"
          width={500}
          height={500}
          className="rounded"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bebas text-title text-lg">
          start here, some options for negavigation
        </span>
        <div className="flex flex-row gap-4">
          <Link to="/roadmap">
            <Button size="xl">Roadmap</Button>
          </Link>
          <Link to="/todolist">
            <Button size="xl">Todo List</Button>
          </Link>
        </div>
      </div>
      <div className="flex w-96 justify-end mr-4">
        <ButtonList />
      </div>
    </section>
  )
}
