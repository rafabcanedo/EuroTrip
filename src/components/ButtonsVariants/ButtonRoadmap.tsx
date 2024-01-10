import { Button } from '../Button/Button'

export function ButtonRoadmap() {
  return (
    <div className="flex flex-row gap-4">
      <Button size="sm" className="bg-transparent border border-hoverbutton">
        Places
      </Button>
      <Button size="sm" className="bg-transparent border border-hoverbutton">
        Food
      </Button>
    </div>
  )
}
