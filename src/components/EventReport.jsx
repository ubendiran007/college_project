import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle, Award } from 'lucide-react';

const EventReport = ({ eventReport, certificates }) => {
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
          <h2 className="text-3xl font-bold text-academic-900 mb-4">Official Documentation</h2>
          <p className="text-academic-600 max-w-2xl mx-auto">
            Comprehensive event report and certification records for institutional archives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Report */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card">
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <FileText className="w-10 h-10 text-blue-600" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-academic-900 mb-2">
                  Final Event Report
                </h3>
                
                <div className="text-sm text-academic-500 mb-4">
                  {eventReport.filename} • {eventReport.size}
                </div>
              </div>

              {/* Report Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-academic-900 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {eventReport.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-academic-700 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center space-x-2 flex-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Report</span>
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
          </motion.div>

          {/* Certificates & Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <Award className="w-10 h-10 text-purple-600" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-academic-900 mb-2">
                  Certificates & Media
                </h3>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-academic-50 rounded-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-bold text-academic-900 mb-1"
                  >
                    {certificates.issued}
                  </motion.div>
                  <p className="text-sm text-academic-600">Certificates Issued</p>
                </div>
                
                <div className="text-center p-4 bg-academic-50 rounded-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl font-bold text-academic-900 mb-1"
                  >
                    {certificates.mediaArchive.photos}
                  </motion.div>
                  <p className="text-sm text-academic-600">Photos Archived</p>
                </div>
              </div>

              {/* Media Archive Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-academic-700 font-medium">Videos</span>
                  <span className="text-blue-600 font-semibold">{certificates.mediaArchive.videos}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-academic-700 font-medium">Presentations</span>
                  <span className="text-green-600 font-semibold">{certificates.mediaArchive.presentations}</span>
                </div>
              </div>

              {/* Certificate Template Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Award className="w-4 h-4" />
                <span>View Certificate Template</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Institutional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="card bg-academic-900 text-white text-center">
            <h3 className="text-lg font-semibold mb-3">Institutional Archive</h3>
            <p className="text-academic-300 max-w-3xl mx-auto">
              All documentation is maintained in compliance with institutional standards 
              and accreditation requirements. These records serve as official evidence 
              of academic and professional development activities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventReport;