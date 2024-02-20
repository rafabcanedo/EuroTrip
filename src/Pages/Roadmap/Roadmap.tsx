import { Croissant, Pizza, Soup, Utensils } from 'lucide-react'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'

export default function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-title text-4xl font-semibold underline decoration-button">
        Roadmap
      </h1>
      <div className="flex flex-col gap-2 mt-8">
        <div className="bg-neutral-200 w-80 h-32 rounded">
          <div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Pizza className="text-yellow-300" />
              <h1 className="text-title font-signika text-2xl">Italia</h1>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-hoverbutton px-4 h-6 rounded-lg font-mono">
                Know More
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex flex-row gap-4">
                <Link to="/italy">
                  <Button
                    size="sm"
                    className="bg-transparent border border-hoverbutton"
                  >
                    Places
                  </Button>
                </Link>
                <Link to="/italy">
                  <Button
                    size="sm"
                    className="bg-transparent border border-hoverbutton"
                  >
                    Food
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 w-80 h-32 rounded">
          <div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Utensils className="text-yellow-300" />
              <h1 className="text-title font-signika text-2xl">Spain</h1>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-hoverbutton px-4 h-6 rounded-lg font-mono">
                Know More
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex flex-row gap-4">
                <Link to="/spain/madrid/places">
                  <Button
                    size="sm"
                    className="bg-transparent border border-hoverbutton"
                  >
                    Places
                  </Button>
                </Link>
                <Link to="/spain/madrid/restaurants">
                  <Button
                    size="sm"
                    className="bg-transparent border border-hoverbutton"
                  >
                    Food
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 w-80 h-32 rounded">
          <div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Soup className="text-yellow-300" />
              <h1 className="text-title font-signika text-2xl">Netherlands</h1>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-hoverbutton px-4 h-6 rounded-lg font-mono">
                Know More
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex flex-row gap-4">
                <Button
                  size="sm"
                  className="bg-transparent border border-hoverbutton"
                >
                  Places
                </Button>
                <Button
                  size="sm"
                  className="bg-transparent border border-hoverbutton"
                >
                  Food
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 w-80 h-32 rounded">
          <div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Croissant className="text-yellow-300" />
              <h1 className="text-title font-signika text-2xl">France</h1>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-hoverbutton px-4 h-6 rounded-lg font-mono">
                Know More
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex flex-row gap-4">
                <Button
                  size="sm"
                  className="bg-transparent border border-hoverbutton"
                >
                  Places
                </Button>
                <Button
                  size="sm"
                  className="bg-transparent border border-hoverbutton"
                >
                  Food
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
