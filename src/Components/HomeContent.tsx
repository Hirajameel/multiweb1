import React from 'react'

const HomeContent = () => {
  return (<div>
   <div>
    <section className='hero' style={{backgroundImage:"url(about.bg.jpg)"}}>
   
    <div className="hero">
    <section className="hero-content">
        <h1 className="fade-in">Welcome to WatchZone</h1>
        <p>Find the perfect watch for you at WatchZone</p>
        
        {/* Subheading */}
        <h2>Your ultimate destination for premium watches</h2>
        
        {/* Features List */}
        <ul className="features-list">
            <li>✨ Select Premium Watches</li>
            <li>🚚 Free Shipping Worldwide</li>
            <li>💬 24/7 Customer Support</li>
            <li>🎁 Gift Wrapping Available</li>
        </ul>
        
      <button>Shop know</button>
    </section>
</div>

    </section>
    
   </div>
</div>        

  
  )
}
export default HomeContent
