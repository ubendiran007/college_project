import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, MessageSquare, ThumbsUp } from 'lucide-react';

const ParticipantFeedback = ({ feedback }) => {
  const avgRating = (feedback.ratings.reduce((a, b) => a + b, 0) / feedback.ratings.length).toFixed(1);
  
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: feedback.ratings.filter(r => r === star).length,
    percentage: (feedback.ratings.filter(r => r === star).length / feedback.ratings.length * 100).toFixed(0)
  }));

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Participant Feedback</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights and testimonials from event participants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star className="w-10 h-10 text-white fill-white" />
            </div>
            <div className="text-5xl font-black gradient-text mb-2">{avgRating}</div>
            <p className="text-gray-600 font-semibold">Average Rating</p>
            <div className="flex justify-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className={`w-5 h-5 ${star <= Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-black gradient-text mb-2">{feedback.totalResponses}</div>
            <p className="text-gray-600 font-semibold">Total Responses</p>
            <p className="text-sm text-gray-500 mt-2">{feedback.responseRate}% response rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <ThumbsUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-black gradient-text mb-2">{feedback.satisfaction}%</div>
            <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
            <p className="text-sm text-gray-500 mt-2">Would recommend</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Rating Distribution</h3>
            <div className="space-y-4">
              {ratingDistribution.map((item, index) => (
                <div key={item.star} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="font-semibold text-gray-900">{item.star}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 w-16 text-right">{item.count} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Participant Testimonials</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {feedback.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className={`w-4 h-4 ${star <= testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic mb-2">"{testimonial.comment}"</p>
                  <p className="text-xs text-gray-600 font-semibold">- {testimonial.name}, {testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantFeedback;
