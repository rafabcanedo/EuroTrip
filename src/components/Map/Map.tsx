import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBcFdfKHN-sq-Xfmzn6F_3Zxx6VuWyTJU',
  })

  const position = {
    lat: 41.89895,
    lng: 12.4895,
  }

  return (
    <div className="h-screen">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: 'Main Position',
                className: 'mt-[-30px]',
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
