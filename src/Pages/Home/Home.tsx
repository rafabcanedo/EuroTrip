import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { Button } from '../../components/Button/Button'

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
      <div className="flex flex-col items-center justify-center px-6">
        <span className="font-sans text-title text-xl">
          Todos a bordo e vamos para a nossa viagem dos sonhos
        </span>
        <span className="font-sans text-title text-xl">
          I building this website for help us in all the time, It will help us
          in our roadmap like a restaurants and importants places what we want
          to go. All the website is very explicit with roules, names, locality
          and more important food 🤣🤣
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
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
    </section>
  )
}
