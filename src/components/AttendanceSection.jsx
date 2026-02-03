import { motion } from 'framer-motion';
import { Users, CheckCircle, Upload, Calendar, TrendingUp } from 'lucide-react';

const AttendanceSection = ({ attendance, registration }) => {
  const attendanceRate = (attendance.total / registration.total * 100).toFixed(1);

  return (
    <section className="py-16 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Attendance Management</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Verified attendance records and participation analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">Attendance Overview</h3>
                {attendance.verified && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-bold text-slate-900 mb-1"
                  >
                    {attendance.total}
                  </motion.div>
                  <p className="text-slate-600">Total Attendees</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl font-bold text-green-600 mb-1"
                  >
                    {attendanceRate}%
                  </motion.div>
                  <p className="text-slate-600">Attendance Rate</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg font-semibold text-slate-900 mb-1"
                  >
                    {new Date(attendance.uploadDate).toLocaleDateString()}
                  </motion.div>
                  <p className="text-slate-600">Last Updated</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Attendance Progress</span>
                  <span>{attendanceRate}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${attendanceRate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-green-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Attendance Records</h3>
              
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-slate-600 mb-3">
                  CSV attendance file uploaded
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-sm"
                >
                  View Records
                </motion.button>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Records verified and processed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceSection;