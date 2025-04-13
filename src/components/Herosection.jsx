import CustomImg from "./CustomImg"

   const images =[
    "img/gallery/burger.jpg",
    "img/gallery/curry.jpg",
    "img/gallery/dumplings.jpg",
    "img/gallery/logo.jpg",
    "img/gallery/macncheese.jpg",
    "img/gallery/pizza.jpg",
    "img/gallery/schnitzel.jpg",
    "img/gallery/tomato-salad.jpg",
]
export default function Herosection() {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title"> What are our goal?</h1>
        <p className="info">Kamdra foods is a place where you can satisfy your cravings and belly with sumptous food recepies of all cuisine. Our services is relatively free, so take a walk through</p>
        <button className="btn">Explore now</button>
      </div>
      <div className="col gallery">
       { images.map((src, index) => (
            <CustomImg key= {index} pt={"85%"} imgSrc={src}  />
       ))}
      </div>
    </div>
  )
}
