import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock } from 'lucide-react';

const deals = [
  {
    title: "Family Feast",
    description: "2 Large Pizzas + 4 Burgers + 4 Drinks",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    endsIn: "2d 5h"
  },
  {
    title: "Lunch Special",
    description: "Burger + Fries + Drink",
    price: 12.99,
    originalPrice: 16.99,
    image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    endsIn: "5h 30m"
  }
];

const SpecialDeals = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="deals" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Deals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on our limited-time offers and amazing combo deals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">
                    Limited Time Offer
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-gray-800">{deal.title}</h3>
                  <p className="mt-2 text-gray-600">{deal.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-red-600">${deal.price}</span>
                    <span className="ml-2 text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <div className="mt-4 flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Ends in: {deal.endsIn}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-red-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;