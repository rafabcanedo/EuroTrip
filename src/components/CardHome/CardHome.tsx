export function CardHome() {
  return (
    <div className="w-96 h-96 bg-[#d8dae6] rounded">
      <div>
        <img
          src="https://a0.muscache.com/im/pictures/f013ce16-ed1c-427e-8558-806532f02a7b.jpg?im_w=960"
          alt="AirBnb photo"
          width={400}
          height={400}
        />
      </div>
      <div>
        🗺️
        <span className="text-zinc-700 font-signika ml-2">
          Calle de Monteleón, 48, Madri
        </span>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="font-signika text-title">Check-in</span>
          <p>sáb, 24 de fev.</p>
        </div>
        <div className="bg-[#dedfe7] h-0.5" />
        <div>
          <span className="font-signika text-title">Checkout</span>
          <p>qua, 28 de fev.</p>
        </div>
      </div>
    </div>
  )
}
