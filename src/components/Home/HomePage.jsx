import React from 'react'
import HeroSection from './HeroSection'
import mac from '../../assets/mac-system-cut.jfif'
import iphone from '../../assets/iphone-14-pro.webp'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
      <HeroSection title='buy iPhone' subtitle='the power of latest iPhone' link='/' image={iphone} />

        <FeaturedProducts />

      <HeroSection title='Build the ultimate setup' subtitle='You can add powerful Mac mini to your studio' link='/' image={mac} />
    </div>
  )
}

export default HomePage
