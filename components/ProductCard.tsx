'use client';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button className="absolute bottom-4 right-4 bg-gold text-dark px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-serif font-semibold text-dark hover:text-gold transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-serif font-bold text-gold">
            R{price.toLocaleString()}
          </span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-gold"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}