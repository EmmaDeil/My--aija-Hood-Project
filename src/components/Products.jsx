import Layout from "../../../components/shared/Layout/Layout";
import ProductCard from "./ProductCard";

// Example products array for e-commerce
const products = [
  {
    thumbnail: "https://images.unsplash.com/photo-1513708927688-890a1e2b6b94",
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: "$99.99",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1503602642458-232111445657",
    title: "Smart Watch",
    description: "Track your fitness and notifications on the go.",
    price: "$149.99",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: "$59.99",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    title: "DSLR Camera",
    description: "Capture stunning photos with this professional camera.",
    price: "$499.99",
  },
];


const Products = () => {
  return (
    <>
      <Layout>
        <div className="px-12 py-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                thumbnail={product.thumbnail}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;