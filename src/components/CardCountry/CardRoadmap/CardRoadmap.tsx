import { Pizza, Croissant, Salad, Utensils } from 'lucide-react'
import { ButtonRoadmap } from '../../ButtonsVariants/ButtonRoadmap'

export function CardRoadmap() {
  return (
    <div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Pizza className="text-yellow-300" />
          <h1 className="text-title font-signika text-2xl">Italia</h1>
        </div>
        <ButtonRoadmap />
      </div>

      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Croissant className="text-yellow-300" />
          <h1 className="text-title font-signika text-2xl">Franch</h1>
        </div>
        <ButtonRoadmap />
      </div>

      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Salad className="text-yellow-300" />
          <h1 className="text-title font-signika text-2xl">Netherlands</h1>
        </div>
        <ButtonRoadmap />
      </div>

      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Utensils className="text-yellow-300" />
          <h1 className="text-title font-signika text-2xl">Spain</h1>
        </div>
        <ButtonRoadmap />
      </div>
    </div>
  )
}
