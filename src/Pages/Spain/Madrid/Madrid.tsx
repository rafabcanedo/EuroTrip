import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button/Button'
import { CardPlace } from '../../../components/CardPlace/CardPlace'
import { CardHome } from '../../../components/CardHome/CardHome'

export default function Madrid() {
  return (
    <section className="md:pl-6 pr-6">
      <div>
        <span className="text-title font-signika text-2xl underline decoration-button pl-4">
          Our Home
        </span>
        <CardHome />
      </div>
      <div className="flex flex-col justify-center md:pl-6">
        <span className="text-title font-signika text-2xl underline decoration-button pl-4">
          Important Places
        </span>
        <div className="flex flex-col gap-4">
          <CardPlace
            image="https://lh3.googleusercontent.com/p/AF1QipN56H3adjy-m10miChOwBn9tx0dgndriqi_EEYl=s680-w680-h510"
            name="Santiago Bernabéu"
            address="Av. de Concha Espina, 1, Chamartín, 28036"
          />
          <CardPlace
            image="https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/f_i_pg_111009_puerta_sol_-1.jpg?itok=Vpd3Vop6"
            name="Puerta del Sol"
            address="Centro, Madrid"
          />
          <CardPlace
            image="https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg"
            name="Plaza Mayor"
            address="Pl. Mayor, Centro, 28012 Madrid"
          />
        </div>
        <div className="flex w-96 justify-end">
          <Link to="/spain/madrid/places">
            <span className="text-title font-signika hover:underline hover:decoration-button">
              Know More
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center md:pl-6">
        <span className="text-title font-signika text-2xl underline decoration-button">
          Delicious Restaurants
        </span>
        <div className="flex flex-col gap-4">
          <CardPlace
            image="https://media-cdn.tripadvisor.com/media/photo-s/0f/38/04/7c/puerta-de-entrada-al.jpg"
            name="Mu Restaurant"
            address="Calle de Chinchilla, 3, Centro, Madrid"
          />
          <CardPlace
            image="https://media-cdn.tripadvisor.com/media/photo-s/07/83/2b/8f/la-carmela.jpg"
            name="La Carmella"
            address="C. de la Victoria, 4, LOCAL 1, Centro, Madrid"
          />
          <CardPlace
            image="https://images.schlouk-map.com/cache/gallery/uploads/images/places/casa-lucio-6409c24111afb1.33120930.PNG"
            name="Casa Lucio"
            address="C. de la Cava Baja, 35, Centro, Madrid"
          />
        </div>
        <div className="flex w-96 justify-end">
          <Link to="/spain/madrid/restaurants">
            <span className="text-title font-signika hover:underline hover:decoration-button">
              Know More
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <span className="text-title font-signika text-2xl">
          Cities in Spain
        </span>
        <div className="flex flex-row gap-2 mb-12">
          <Link to="/spain/madrid">
            <Button size="lg">Madrid</Button>
          </Link>
          <Link to="/spain/barcelona">
            <Button size="lg">Barcelona</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
