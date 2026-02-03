import { motion } from 'framer-motion';
import { Star, MessageSquare, TrendingUp, Users } from 'lucide-react';

const FeedbackParticipants = ({ feedback }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-academic-300'
        }`}
      />
    ));
  };

  const metrics = [
    { label: 'Content Quality', value: feedback.metrics.contentQuality, color: 'bg-blue-500' },
    { label: 'Speaker Effectiveness', value: feedback.metrics.speakerEffectiveness, color: 'bg-green-500' },
    { label: 'Overall Satisfaction', value: feedback.metrics.overallSatisfaction, color: 'bg-purple-500' },
    { label: 'Organization', value: feedback.metrics.organization, color: 'bg-orange-500' }
  ];

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
          <h2 className="text-3xl font-bold text-academic-900 mb-4">Participant Feedback</h2>
          <p className="text-academic-600 max-w-2xl mx-auto">
            Comprehensive feedback analysis from event participants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-academic-900 mb-2"
            >
              {feedback.overall}
            </motion.div>
            <div className="flex justify-center mb-3">
              {renderStars(feedback.overall)}
            </div>
            <p className="text-academic-600 mb-2">Overall Rating</p>
            <div className="flex items-center justify-center text-sm text-academic-500">
              <Users className="w-4 h-4 mr-1" />
              <span>{feedback.totalResponses} responses</span>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-academic-900 mb-6">Detailed Metrics</h3>
              
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-academic-700">{metric.label}</span>
                      <span className="text-lg font-semibold text-academic-900">
                        {metric.value}/5.0
                      </span>
                    </div>
                    <div className="w-full bg-academic-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(metric.value / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-3 rounded-full ${metric.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="card">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-academic-900">Selected Comments</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feedback.comments.map((comment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 bg-academic-50 rounded-lg border-l-4 border-primary-500"
                >
                  <p className="text-academic-700 italic">"{comment}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackParticipants;