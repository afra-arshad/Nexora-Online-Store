import React from 'react'
import Home1 from '../components/home/Home1'
import NewArrivals from '../components/home/NewArrivals'
import NewArrival1 from '../components/home/NewArrival1'
import Latest from '../components/home/Latest'
import Latest1 from '../components/home/Latest1'
import Closet from '../components/home/Closet'
import Team from '../components/home/Team'
import Review from '../components/home/Review'
import Review1 from '../components/home/Review1'
import { RiStarSFill } from "react-icons/ri";
import { p } from 'framer-motion/client'


const Home = () => {
  return (
    <div>
      <Home1/>
      <NewArrivals/>
      <div className='flex flex-row gap-5 bg-[#efdecb]'>
        <div className='ml-13'>
      <NewArrival1 
       image={"https://i.pinimg.com/736x/8a/db/ca/8adbca281bc3cfbf331ffd76a9933a90.jpg"}
       paragraph="MEN"
      
      />
        </div>
      <NewArrival1
       image={"https://i.pinimg.com/736x/43/6b/ec/436bec029e28a369210c14570b58f6c9.jpg"}
       paragraph="WOMEN"
      
      />

      <NewArrival1
       image={"https://i.pinimg.com/736x/bf/fc/cc/bffccc90c27ecdc851abea63f8856281.jpg"}
       paragraph="HOODIES"
      
      />

      
      <NewArrival1
       image={"https://i.pinimg.com/1200x/ee/ce/bf/eecebf6686e28a5d932ec24c9ac851dc.jpg"}
       paragraph="COATS"
      
      />

       <NewArrival1
       image={"https://i.pinimg.com/1200x/e8/f0/01/e8f0019621f3129ca4fa8e5dc6c273b3.jpg"}
       paragraph="Accessaries"
      
      />

      </div>
      
      <Closet/>

      <Latest/>
      <div className='bg-[#efdecb]'>
      <div className='flex flex-row ml-13 gap-7 flex-wrap '>
      <Latest1
      
         image={"https://i.pinimg.com/736x/36/1a/2b/361a2b2818a5aaa1a5ea70e6fe16e94a.jpg"}
       paragraph="KNITTED SWEATER"
       price="$89.90"
       details="NEW"
       index={0}
      
      
      />

       <Latest1
      
         image={"https://i.pinimg.com/736x/73/de/a2/73dea27694aac3ed4a6e53a785e85b0e.jpg"}
       paragraph="UTILITY JACKET"
       price="$100.00"
        details="NEW"
        index={1}
      
      
      />


         <Latest1
      
         image={"https://i.pinimg.com/736x/26/e0/6e/26e06e5a47220e775fec54d0e8af553c.jpg"}
       paragraph="LONG TRENCH COAT"
       price="$100.00"
        details="NEW"
        index={2}
      
      
      />

      
         <Latest1
      
         image={"https://i.pinimg.com/736x/40/0d/10/400d10d1e6201c67a5147d3f0e5cd26b.jpg"}
       paragraph="LEATHER JACKET"
       price="$200.50"
        details="NEW"
        index={3}
      
      
      />
       <div className='-mt-20 flex flex-wrap gap-8'>
       <Latest1
      
         image={"https://i.pinimg.com/736x/94/1b/39/941b39654ee9bbbd68f7369d44c4d8df.jpg"}
       paragraph="KNITTED SHIRTS"
       price="$200.50"
        details="NEW"
        index={4}
      
      />

       <Latest1
      
         image={"https://i.pinimg.com/1200x/99/67/2b/99672b3c579df566f55fb97cb6c70cdd.jpg"}
       paragraph="MINIMILIST BRACELET"
       price="$100.50"
        details="NEW"
        index={5}
      
      
      />

       <Latest1
      
         image={"https://i.pinimg.com/736x/3a/07/9c/3a079cc116d29b2aa15e0a43e731764a.jpg"}
       paragraph="GIFT SET"
       price="$200.50"
        details="NEW"
        index={6}
      
      
      />

       <Latest1
      
         image={"https://i.pinimg.com/1200x/18/22/59/182259a175eb89cb026342e6ea5f5307.jpg"}
       paragraph=" SEUDE CAP"
       price="$200.50"
        details="NEW"
        index={7}
      
      
      />
       </div>

      </div>
       </div>
       <Team/>
       <div className='bg-[#efdecb] border border-[#efdecb] '>
       <Review/>
       </div>
        <div className='bg-[#efdecb]'>
       <div className='flex flex-row ml-90 gap-6'>
       
       <Review1
       image="https://i.pinimg.com/736x/de/9f/c0/de9fc0ba86770a116e348b87f9e967b0.jpg"
       text="SARA"
       paragraph={<h1>The attention to detail on the garments  <br />is  incredible.you can genuinely feel the passion  and craftsmanship behind every stitch</h1>}/>

         <Review1
       image="https://i.pinimg.com/736x/41/99/da/4199da886e647680cbe340d93d7561cf.jpg"
       text="ALI"
       paragraph={<h1>From the fabric texture to the minimalist branding is  incredible.everything feels so intentional and high-end</h1>}
      
       
       />

       </div>
       <div className='ml-120 mt-20 '>
       
         <Review1
       image="https://i.pinimg.com/736x/6d/8d/cd/6d8dcdbada45ee9125adc0923b7baa1e.jpg"
       text="AHMAD"
       paragraph={<h1>You can tell a lot of thought goes into designing these pieces.The fit is amazing, the material feels luxurious.</h1>}
      
       
       />
       </div>

       </div>

    </div>
  )
}

export default Home