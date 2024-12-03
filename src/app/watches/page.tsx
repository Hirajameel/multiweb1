
import React from 'react'

const page = () => {
  const watchData = [
    {id: 1, name: "Rolex Submariner", price: 13000, description: "Luxury dive watch with automatic movement.", image: "/rolex2.jpg"},   
    {id: 2, name: "Omega Seamaster", price: 9500, description: "Iconic dive watch, stainless steel, with a ceramic bezel.", image: "/rolex.jpg"}, 
    {id: 3, name: "Patek Philippe Calatrava", price: 25000, description: "Elegant dress watch with a sleek design and leather strap.", image: "/hemilton.jpg"}, 
    {id: 4, name: "Tag Heuer Monaco", price: 4500, description: "Classic square chronograph, known for its motorsport association.", image: "/hublot.jpg"}, 
    {id: 5, name: "Audemars Piguet Royal Oak", price: 25000, description: "Luxury watch with a distinctive octagonal bezel and integrated bracelet.", image: "/montblank.jpg"}, 
    {id: 6, name: "Cartier Tank", price: 6500, description: "Timeless rectangular watch with a refined look, perfect for formal occasions.", image: "/curren.jpg"},
    {id: 7, name: "Seiko 5", price: 100, description: "Affordable automatic watch, perfect for daily wear.", image: "/saiko.jpg"},
    {id: 8, name: "Michael Kords", price: 100, description: "Affordable automatic watch, perfect for daily wear.", image: "/michael kords.jpg"},

    {id: 9, name: "Omax", price: 100, description: "Affordable automatic watch, perfect for daily wear.", image: "/omax.jpg"},

];
return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
          <div key={watch.id} className='watch-card'>
           <img src={watch.image} alt={watch.name}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
         <div>${watch.price}</div>
         <button>Add to Cart</button>

          </div>

        ))}
      </div>

    </div>
  )
}

export default page