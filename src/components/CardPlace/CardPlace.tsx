import { CardPlaceProps } from '../../@types'
import { Button } from '../Button/Button'

export function CardPlace({ name, image, address }: CardPlaceProps) {
  return (
    <div className="w-96 h-96 bg-[#d8dae6] rounded">
      <div>
        <img
          src={image}
          alt="Image place"
          className="rounded"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-title font-signika">{name}</h3>
        <div>
          🗺️
          <span className="text-zinc-700 font-signika ml-2">{address}</span>
        </div>
        <div className="mt-6">
          <Button size="sm">Look at map</Button>
        </div>
      </div>
    </div>
  )
}
