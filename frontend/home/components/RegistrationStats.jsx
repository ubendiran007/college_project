import { motion } from 'framer-motion';
import { Users, GraduationCap, Building, Globe } from 'lucide-react';

const RegistrationStats = ({ registration }) => {
  const stats = [
    {
      icon: Users,
      label: 'Total Registrations',
      value: registration.total,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: GraduationCap,
      label: 'Students',
      value: registration.categories.students,
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Building,
      label: 'Faculty',
      value: registration.categories.faculty,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Globe,
      label: 'External',
      value: registration.categories.external,
      color: 'text-orange-600 bg-orange-100'
    }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive breakdown of event registrations by participant categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {stat.value}
                  </motion.span>
                </div>
                <h3 className="font-semibold text-gray-700">{stat.label}</h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">Registration Period</h3>
            <p className="text-gray-600">{registration.period}</p>
          </div>
          
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">Registration Mode</h3>
            <p className="text-gray-600">{registration.mode}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationStats;