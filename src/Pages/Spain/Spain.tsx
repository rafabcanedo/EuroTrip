import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { CardPlace } from '../../components/CardPlace/CardPlace'

export default function Spain() {
  return (
    <section className="md:pl-6 pr-6">
      <div>
        <h3 className="text-title font-signika text-2xl">Our Home</h3>
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
            image="https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg"
            name="Plaza Mayor"
            address="Pl. Mayor, Centro, 28012 Madrid"
          />
          <CardPlace
            image="https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg"
            name="Plaza Mayor"
            address="Pl. Mayor, Centro, 28012 Madrid"
          />
          <CardPlace
            image="https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg"
            name="Plaza Mayor"
            address="Pl. Mayor, Centro, 28012 Madrid"
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
