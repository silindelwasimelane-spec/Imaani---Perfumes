import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: 'Essence of Durban',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    description: 'A sophisticated blend capturing the essence of coastal elegance and urban vibrancy.',
  },
  {
    id: 2,
    name: 'Midnight Bloom',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    description: 'Luxurious night fragrance with notes of jasmine, oud, and sandalwood.',
  },
  {
    id: 3,
    name: 'Golden Hour',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    description: 'Warm, sensual scent perfect for evening gatherings and special moments.',
  },
  {
    id: 4,
    name: 'Ocean Whisper',
    price: 1390,
    image: 'https://images.unsplash.com/photo-1595967511519-eab7beeffc9c?w=500&h=500&fit=crop',
    description: 'Fresh and crisp fragrance inspired by the Indian Ocean breezes.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-cream via-cream to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark leading-tight">
                Experience <span className="text-gold">Luxury</span> Fragrance
              </h1>
              <p className="text-lg text-gray-700 font-light leading-relaxed max-w-lg">
                Imaani Perfumes brings you carefully curated, exclusive designer scents that celebrate the spirit of Durban. Each fragrance is a journey of elegance and sophistication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gold text-dark px-8 py-3 rounded-full font-semibold hover:bg-dark hover:text-gold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Shop Now
                </button>
                <button className="border-2 border-dark text-dark px-8 py-3 rounded-full font-semibold hover:bg-dark hover:text-cream transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1610286556014-0674922fd52b?w=600&h=600&fit=crop"
                alt="Premium Perfume"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium fragrances, each telling a unique story of elegance and sophistication.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Mission Section */}
      <section id="about" className="py-20 md:py-28 bg-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Our <span className="text-gold">Brand</span> Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                At Imaani, we believe that fragrance is more than a scent—it's a statement, an experience, and a memory in a bottle. We are committed to bringing luxury fragrances to the vibrant Durban market.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-gold font-bold text-xl">✓</span>
                  <span className="text-gray-300">Exclusive designer scents sourced from around the world</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold font-bold text-xl">✓</span>
                  <span className="text-gray-300">Personalized fragrance consultation and guidance</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold font-bold text-xl">✓</span>
                  <span className="text-gray-300">Premium quality with exceptional customer service</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="h-96">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop"
                alt="Brand Mission"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
