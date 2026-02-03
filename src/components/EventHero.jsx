import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventHero = ({ event }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-100 border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              {event.status}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            {event.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100 mb-2"
          >
            {event.department}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-blue-200 mb-8"
          >
            {event.organizer}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Date</p>
                <p className="font-semibold">{new Date(event.date).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Time</p>
                <p className="font-semibold">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Venue</p>
                <p className="font-semibold">{event.venue}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Type</p>
                <p className="font-semibold">{event.type}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EventHero;