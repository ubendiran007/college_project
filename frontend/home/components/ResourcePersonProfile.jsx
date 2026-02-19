import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Mail, Phone, Linkedin } from 'lucide-react';

const ResourcePersonProfile = ({ persons }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Resource Persons</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Distinguished experts and speakers who contributed to the event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {persons.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 text-center"
            >
              <div className="relative inline-block mb-4">
                <img 
                  src={person.photo} 
                  alt={person.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{person.designation}</p>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                  <span>{person.organization}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap className="w-4 h-4 text-green-500" />
                  <span>{person.expertise}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{person.bio}</p>
                
                <div className="flex justify-center gap-3">
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </a>
                  )}
                  {person.phone && (
                    <a href={`tel:${person.phone}`} className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                      <Phone className="w-4 h-4 text-green-600" />
                    </a>
                  )}
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors">
                      <Linkedin className="w-4 h-4 text-indigo-600" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcePersonProfile;
