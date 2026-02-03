import { motion } from 'framer-motion';
import { MapPin, Clock, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';

const GeoGallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Gallery</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Geo-tagged photographs capturing key moments throughout the event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden rounded-xl bg-academic-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium mb-2">{photo.caption}</h3>
                  <div className="flex items-center text-white/80 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{photo.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{photo.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-academic-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <h3 className="font-semibold mb-2">{selectedImage.caption}</h3>
                <div className="flex items-center space-x-4 text-sm text-white/80">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedImage.timestamp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GeoGallery;