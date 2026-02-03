import { motion } from 'framer-motion';
import { Clock, Coffee, Users, BookOpen, Award } from 'lucide-react';

const ScheduleTimeline = ({ schedule }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'registration': return Users;
      case 'break': return Coffee;
      case 'lab': return BookOpen;
      case 'closing': return Award;
      default: return Clock;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'registration': return 'text-blue-600 bg-blue-100';
      case 'break': return 'text-orange-600 bg-orange-100';
      case 'lab': return 'text-green-600 bg-green-100';
      case 'closing': return 'text-purple-600 bg-purple-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <section className="py-16 bg-slate-50">>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Schedule</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Detailed timeline of sessions and activities throughout the event
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            {schedule.map((item, index) => {
              const Icon = getIcon(item.type);
              const iconColor = getIconColor(item.type);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${iconColor} border-4 border-white shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="card">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {item.topic}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {item.time}
                        </span>
                      </div>
                      
                      {item.speaker && (
                        <p className="text-slate-600">
                          <span className="font-medium">Speaker:</span> {item.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;