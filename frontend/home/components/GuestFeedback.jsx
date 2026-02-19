import { motion } from 'framer-motion';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';

const GuestFeedback = ({ guestFeedback }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Guest & Expert Feedback</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Valuable insights from resource persons and distinguished guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guestFeedback.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16" />
              
              <Quote className="w-12 h-12 text-blue-600/20 mb-4" />
              
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={guest.photo} 
                  alt={guest.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{guest.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{guest.designation}</p>
                  <p className="text-gray-600 text-sm">{guest.organization}</p>
                  
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${star <= guest.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{guest.feedback}"
              </p>

              <div className="flex flex-wrap gap-2">
                {guest.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-semibold"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-500">Submitted on {new Date(guest.date).toLocaleDateString()}</span>
                <div className="flex items-center gap-2 text-green-600">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">Verified Guest</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestFeedback;
