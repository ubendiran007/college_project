import { motion } from 'framer-motion';
import { Quote, User, Building } from 'lucide-react';

const FeedbackGuests = ({ guestFeedback }) => {
  return (
    <section className="py-16 bg-academic-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-academic-900 mb-4">Guest Feedback</h2>
          <p className="text-academic-600 max-w-2xl mx-auto">
            Testimonials from distinguished resource persons and industry experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {guestFeedback.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="card hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Feedback Content */}
              <div className="pt-4">
                <blockquote className="text-academic-700 text-lg leading-relaxed mb-6 italic">
                  "{guest.feedback}"
                </blockquote>

                {/* Guest Info */}
                <div className="border-t border-academic-200 pt-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-primary-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-academic-900 mb-1">
                        {guest.name}
                      </h4>
                      <p className="text-primary-600 font-medium text-sm mb-1">
                        {guest.role}
                      </p>
                      <div className="flex items-center text-academic-500 text-sm">
                        <Building className="w-4 h-4 mr-1" />
                        <span>{guest.organization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="card max-w-2xl mx-auto bg-primary-50 border-primary-200">
            <div className="flex items-center justify-center mb-3">
              <Quote className="w-6 h-6 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-primary-900">
                Professional Endorsements
              </h3>
            </div>
            <p className="text-primary-700 text-sm">
              These testimonials serve as official endorsements for institutional 
              documentation and quality assurance processes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackGuests;