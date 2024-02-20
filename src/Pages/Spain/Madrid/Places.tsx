import { Link } from 'react-router-dom'
import { CardPlace } from '../../../components/CardPlace/CardPlace'

export default function Places() {
  return (
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
        <CardPlace
          image="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1599212492/post_images/madrid-121/museo-nacional-del-prado-madrid-t.jpg"
          name="Museu do Prado"
          address="Paseo del Prado, Madrid"
        />
        <CardPlace
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Palacio_Real_de_Madrid_-_03.jpg/1200px-Palacio_Real_de_Madrid_-_03.jpg"
          name="Palácio Real de Madrid"
          address="C. de Bailén, s/n, Centro, Madrid"
        />

        <div className="flex flex-row">
          <span>Back to</span>
          <Link to="/spain/madrid">
            <p>Home Madrid</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
