import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  // Get product ID from URL[cite: 1]
  const { id } = useParams();

  // Get products, loading, and addToCart from context[cite: 1]
  const { products, loading, addToCart } = useContext(ProductContext);

  // Loading[cite: 1]
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  // Find product[cite: 1]
  const product = products.find((item) => item.id === Number(id));

  // Product not found[cite: 2]
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#30261f]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-lg border p-8 bg-[#927b62]">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <p className="mb-3 text-sm uppercase  text-gray-400">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-[#927b62]">{product.title}</h1>

          {/* Price */}
          <p className="mb-6 text-2xl font-bold text-[#927b62]">${product.price}</p>

          {/* Description */}
          <p className="mb-6 leading-7 text-gray-400">{product.description}</p>

          {/* Link in place of Add to Cart button */}
            <Link
              to={`/product/${product.id}`}
              className="block rounded-lg bg-[#927b62] px-4 py-2 text-center text-white hover:bg-[#5b4233] duration-300 ease-in-out"
            >
              Add Cart
               </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

