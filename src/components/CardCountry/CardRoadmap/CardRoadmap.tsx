import { ButtonRoadmap } from '../../ButtonsVariants/ButtonRoadmap'
import { CardRoadmapProps } from '../../../@types'

export function CardRoadmap({ icon: Icon, title }: CardRoadmapProps) {
  return (
    <div className="bg-neutral-200 w-80 h-32 rounded">
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Icon className="text-yellow-300" />
          <h1 className="text-title font-signika text-2xl">{title}</h1>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="bg-hoverbutton px-4 h-6 rounded-lg font-mono">
            Know More
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <ButtonRoadmap />
        </div>
      </div>
    </div>
  )
}
