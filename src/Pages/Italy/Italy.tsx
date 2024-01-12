import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { CardPlace } from '../../components/CardPlace/CardPlace'

export default function Italy() {
  return (
    <section>
      <div>
        <h3 className="text-title font-signika text-2xl">Our Home</h3>
      </div>
      <div>
        <span className="text-title font-signika text-2xl">
          Important Places
        </span>
        <div>
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
      </div>
      <div>
        <span className="text-title font-signika text-2xl">
          Delicious Restaurants
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-title font-signika text-2xl">
          Cities in Spain
        </span>
        <div className="flex flex-row gap-2">
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
