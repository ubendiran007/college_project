import { motion } from 'framer-motion';
import { Calendar, Building, Users, FileText, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import { getApprovalProgress } from '../data/iqacEvents';

const ProposalCard = ({ proposal, index, onViewDetails }) => {
  const approvalProgress = getApprovalProgress(proposal);
  
  const getStatusConfig = (status) => {
    const configs = {
      draft: { color: 'bg-gray-100 text-gray-700', icon: FileText, label: 'Draft' },
      submitted: { color: 'bg-blue-100 text-blue-700', icon: Clock, label: 'Under Review' },
      faculty_approved: { color: 'bg-yellow-100 text-yellow-700', icon: AlertCircle, label: 'Faculty Approved' },
      hod_approved: { color: 'bg-orange-100 text-orange-700', icon: AlertCircle, label: 'HOD Approved' },
      principal_approved: { color: 'bg-green-100 text-green-700', icon: CheckCircle, label: 'Approved' },
      rejected: { color: 'bg-red-100 text-red-700', icon: XCircle, label: 'Rejected' }
    };
    return configs[status] || configs.draft;
  };

  const statusConfig = getStatusConfig(proposal.status);
  const StatusIcon = statusConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
              {proposal.title}
            </h3>
            <p className="text-sm text-gray-600">{proposal.department}</p>
          </div>
          
          <div className="ml-4 flex flex-col items-end space-y-2">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
              <StatusIcon className="w-3 h-3 mr-1" />
              {statusConfig.label}
            </span>
            <span className="text-xs text-gray-500">ID: {proposal.id}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span>{new Date(proposal.proposedDate).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Building className="w-4 h-4 mr-2 text-gray-400" />
            <span>{proposal.eventType}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-gray-400" />
            <span>{proposal.expectedParticipants} participants</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="w-4 h-4 mr-2 text-gray-400" />
            <span>{proposal.venue}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-700">Approval Progress</span>
            <span className="text-xs text-gray-500">{approvalProgress.currentStep}/3 completed</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${approvalProgress.progress}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className={`h-2 rounded-full ${
                approvalProgress.isComplete ? 'bg-green-500' : 'bg-blue-500'
              }`}
            />
          </div>
          
          <div className="flex justify-between mt-2">
            {approvalProgress.steps.map((step, stepIndex) => (
              <div key={step.key} className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${
                  step.status === 'approved' ? 'bg-green-500' : 
                  step.status === 'pending' ? 'bg-gray-300' : 'bg-red-500'
                }`} />
                <span className="text-xs text-gray-500 mt-1">{step.label.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {proposal.objective}
        </p>

        <button
          onClick={() => onViewDetails(proposal)}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default ProposalCard;