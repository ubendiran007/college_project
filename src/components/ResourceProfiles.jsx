import { motion } from 'framer-motion';
import { User, Building, FileText, ExternalLink } from 'lucide-react';

const ResourceProfiles = ({ resourcePersons }) => {
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
          <h2 className="text-3xl font-bold text-academic-900 mb-4">Resource Persons</h2>
          <p className="text-academic-600 max-w-2xl mx-auto">
            Distinguished speakers and industry experts who contributed to the event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcePersons.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card hover:shadow-lg transition-all duration-300"
            >
              {/* Profile Avatar */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-academic-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-primary-600 font-medium mb-1">
                  {person.designation}
                </p>
              </div>

              {/* Organization */}
              <div className="flex items-center space-x-2 mb-4 p-3 bg-academic-50 rounded-lg">
                <Building className="w-5 h-5 text-academic-500" />
                <span className="text-academic-700 font-medium">
                  {person.organization}
                </span>
              </div>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-academic-700 mb-2">Expertise</h4>
                <p className="text-academic-600 text-sm">{person.expertise}</p>
              </div>

              {/* LinkedIn Profile Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>View LinkedIn Profile PDF</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-academic-900 mb-3">
              Professional Documentation
            </h3>
            <p className="text-academic-600 text-sm">
              All resource person profiles are maintained as official PDF documents 
              for institutional records and accreditation purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceProfiles;