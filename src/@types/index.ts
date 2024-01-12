import { ElementType } from 'react'

export interface CardProps {
  title: string
  image: string
}

export interface CardRoadmapProps {
  icon: ElementType
  title: string
}

export interface CardPlaceProps {
  name: string
  image: string
  address: string
}
