import { ButtonList } from '../../components/ButtonList/ButtonList'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { mapStyles } from '../../mapStyles'

export default function Home() {
  return (
    <div>
      <h1 className="text-lg text-red-500">Home</h1>
      <ButtonList />
    </div>
  )
}
