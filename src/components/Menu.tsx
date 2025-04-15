import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart } from 'lucide-react';

const menuCategories = [
  {
    name: 'Burgers',
    items: [
      { name: 'Classic Cheeseburger', price: 8.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
      { name: 'Spicy Chicken Burger', price: 9.99, image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
      { name: 'Veggie Supreme', price: 7.99, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    ]
  },
  {
    name: 'Pizzas',
    items: [
      { name: 'Margherita', price: 12.99, image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
      { name: 'Pepperoni', price: 14.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
      { name: 'BBQ Chicken', price: 15.99, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    ]
  },
  {
    name: 'Drinks',
    items: [
      { name: 'Classic Milkshake', price: 4.99, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
      { name: 'Iced Coffee', price: 3.99, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
      { name: 'Fresh Lemonade', price: 2.99, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    ]
  }
];

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of mouth-watering dishes, crafted with love and the finest ingredients
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-red-600">${item.price}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                        >
                          <ShoppingCart className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;