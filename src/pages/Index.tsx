import { MapPin, Phone, Clock } from "lucide-react";

const Index = () => {
  const pizzas = [
    {
      name: "Margherita",
      description: "Fresh tomatoes, mozzarella, basil, olive oil",
      price: "€9.90",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80",
    },
    {
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesan, fontina",
      price: "€12.90",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
    },
    {
      name: "Diavola",
      description: "Spicy salami, tomatoes, mozzarella, chili",
      price: "€11.90",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80",
    },
    {
      name: "Prosciutto e Funghi",
      description: "Ham, mushrooms, tomatoes, mozzarella",
      price: "€11.90",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[60vh] bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50">
          <div className="container h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up">
              Bella Italia Pizzeria
            </h1>
            <p className="text-xl md:text-2xl animate-fade-up">
              Authentic Italian Experience
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Us</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Bella Italia Pizzeria offers authentic Italian pizzas made with fresh ingredients. 
            Located in the heart of Košice, we bring a slice of Italy to Slovakia.
            Our passion for traditional Italian cuisine and commitment to quality make
            every pizza a masterpiece.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Menu</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {pizzas.map((pizza, index) => (
              <div key={index} className="menu-card flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="w-full md:w-1/3">
                  <img 
                    src={pizza.image} 
                    alt={pizza.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 text-left">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{pizza.name}</h3>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <p className="text-xl font-semibold text-secondary">{pizza.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <p>Hlavná 1, Košice 040 01, Slovakia</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <p>+421 123 456 789</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <p>Mon-Sun: 11:00 - 22:00</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p>&copy; 2024 Bella Italia Pizzeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;