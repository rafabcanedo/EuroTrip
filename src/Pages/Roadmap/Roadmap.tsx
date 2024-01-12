import { Pizza, Croissant, Salad, Utensils } from 'lucide-react'
import { CardRoadmap } from '../../components/CardCountry/CardRoadmap/CardRoadmap'

export default function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-title text-4xl font-semibold underline decoration-button">
        Roadmap
      </h1>
      <div className="flex flex-col gap-2 mt-8">
        <CardRoadmap title="Italy" icon={Pizza} />
        <CardRoadmap title="France" icon={Croissant} />
        <CardRoadmap title="Netherlands" icon={Salad} />
        <CardRoadmap title="Spain" icon={Utensils} />
      </div>
    </div>
  )
}
