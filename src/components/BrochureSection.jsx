import { motion } from 'framer-motion';
import { FileText, Download, Eye, File } from 'lucide-react';

const BrochureSection = ({ brochure }) => {
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Brochure</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Official event documentation and detailed information brochure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6"
              >
                <FileText className="w-10 h-10 text-red-600" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {brochure.filename}
              </h3>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center space-x-1">
                  <File className="w-4 h-4" />
                  <span>{brochure.size}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>{brochure.pages} pages</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center space-x-2 flex-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>View PDF</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary flex items-center justify-center space-x-2 flex-1"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureSection;