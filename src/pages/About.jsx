import React from 'react'
import About1 from '../components/about/About1'
import About2 from '../components/about/About2'
import Design from '../components/about/Design'

import { LuCircleSlash2 } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { p } from 'framer-motion/client';
import Choose from '../components/about/Choose';
import About3 from '../components/about/About3';
import About4 from '../components/about/About4';

const About = () => {
  return (
    <div className='overflow-hidden'>
      <About3/>
      <div>
      <About2/>
      </div>

      <div className='flex pl-15 gap-8 bg-[#ffeeda]'>
      <Design
       image={"https://i.pinimg.com/736x/9d/93/f1/9d93f116460d155e7db567a5029488cf.jpg"}
       icon={<LuCircleSlash2 />}
       heading="Minimal"
       paragraph={<p>Clean designs.Timeless sllhouette. <br />Always in style.</p>}
        index={0}
      
      />

        <Design
       image={"https://i.pinimg.com/1200x/10/88/4b/10884b0cfdde5061279be5ac6eda22c6.jpg"}
       icon={< IoDiamondOutline />}
       heading="Quality"
       paragraph={<p> Premium fabric.Lasting Comfort. <br />Made to stay.</p>}
       index={1}
      
      />

        <Design
       image={"https://i.pinimg.com/1200x/f0/06/a2/f006a2cfeb0c64326b688e37977e565d.jpg"}
       icon={<FaRegStar />}
       heading="Identity"
       paragraph={<p>Clean designs.Timeless sllhouette. <br />Always in style.</p>}
        index={2}
      
      />
      </div>
      <Choose/>
      <About4/>
     
    </div>
  )
}

export default About