import { CardRoadmap } from '../../components/CardCountry/CardRoadmap/CardRoadmap'

export default function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-title text-4xl font-semibold underline decoration-button">
        Roadmap
      </h1>
      <CardRoadmap />
    </div>
  )
}
