import { Pizza, Croissant, Salad, Utensils } from 'lucide-react'

export function CountryIcon() {
  return (
    <div>
      <div>
        <Pizza className="text-yellow-300" />
        <h1 className="text-title font-signika">Italia</h1>
      </div>

      <div>
        <Croissant className="text-yellow-300" />
        <h1 className="text-title font-signika">Franch</h1>
      </div>

      <div>
        <Salad className="text-yellow-300" />
        <h1 className="text-title font-signika">Netherlands</h1>
      </div>

      <div>
        <Utensils className="text-yellow-300" />
        <h1 className="text-title font-signika">Spain</h1>
      </div>
    </div>
  )
}
