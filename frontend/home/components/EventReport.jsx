import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle, Calendar, Users, Award, TrendingUp } from 'lucide-react';

const EventReport = ({ report }) => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Event Report & Documentation</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive post-event analysis and official documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Official Report</h3>
            <p className="text-gray-600 mb-4">Complete event documentation with analysis</p>
            <div className="flex gap-2">
              <button className="flex-1 btn-primary text-sm inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex-1 btn-secondary text-sm inline-flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">NAAC Documentation</h3>
            <p className="text-gray-600 mb-4">Quality assurance compliant report</p>
            <div className="flex gap-2">
              <button className="flex-1 btn-primary text-sm inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex-1 btn-secondary text-sm inline-flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Report</h3>
            <p className="text-gray-600 mb-4">Detailed metrics and insights</p>
            <div className="flex gap-2">
              <button className="flex-1 btn-primary text-sm inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex-1 btn-secondary text-sm inline-flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Report Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Users, label: 'Total Participants', value: report.participants, color: 'from-blue-500 to-cyan-600' },
              { icon: Award, label: 'Sessions Conducted', value: report.sessions, color: 'from-purple-500 to-pink-600' },
              { icon: CheckCircle, label: 'Completion Rate', value: `${report.completionRate}%`, color: 'from-green-500 to-emerald-600' },
              { icon: TrendingUp, label: 'Satisfaction Score', value: `${report.satisfaction}/5`, color: 'from-orange-500 to-amber-600' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Executive Summary</h4>
              <p className="text-gray-700 leading-relaxed">{report.executiveSummary}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Key Outcomes</h4>
              <ul className="space-y-2">
                {report.keyOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Recommendations</h4>
              <ul className="space-y-2">
                {report.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Report Verified & Approved</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Published: {new Date(report.publishDate).toLocaleDateString()}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventReport;
