// props application
interface CardInfo {
    title: string,
    info: string,
    price: string
}

const Card = ({title, info, price}: CardInfo) => {
  return (
    <div className="m-3.5 w-35  bg-indigo-300 rounded-xl p-4">
        <h3 className="text-2xl font-extrabold">{title}</h3>
        <p>{info}</p>
        <p>{price}</p>
        <button className="px-3 py-1 font-bold rounded-md
         bg-indigo-600 hover:bg-indigo-400">BUY NOW</button>

    </div>
  )
}

export default Card