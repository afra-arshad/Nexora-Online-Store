import React from 'react'
import { useContext } from "react";
import {Link} from 'react-router-dom'
import { ProductContext } from "../../context/ProductContext";
import { motion } from 'framer-motion';
import { Animation, SlideLeft } from '../../utility/Animation';




const Card = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#30261f]">
      <h1 className="mb-6 text-4xl font-bold text ml-9 text-[#9c8972]">Products</h1>

      <div

      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product,index) => (
          <motion.div key={product.id}
             variants={Animation(index*0.1)}
           initial="hidden"
           whileInView="visible"
          viewport={{ once: true }}

           className="flex flex-col justify-between h-full rounded-lg border p-4 shadow-lg bg-[#927b62] border-[#645042]">
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 h-48 w-full object-contain"
            />

            <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-[#29211c]">
              {product.title}
            </h2>

            <p className="mb-2 text-sm text-gray-800">{product.category}</p>

            <p className="mb-4 text-xl font-bold text-[#241d17]">${product.price}</p>

            {/* View Details Button */}
            <Link
              to={`/product/${product.id}`}
              className="block rounded-lg  px-4 py-3 text-center text-white hover:bg-[#2e251d]  bg-[#46382d] border border-[#241c17] duration-300 ease-in-out"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



export default Card





