import { motion } from 'framer-motion';
import { MapPin, Image, CheckCircle, Calendar } from 'lucide-react';

const GeoTagPhotos = ({ photos }) => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Geo-Tagged Event Photos</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Location-verified photographs documenting the event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-4 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-gray-900">Verified</span>
                </div>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{photo.title}</h3>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{photo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span>{new Date(photo.timestamp).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs">GPS: {photo.coordinates}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeoTagPhotos;
