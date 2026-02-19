import { motion } from 'framer-motion';
import { CheckCircle, Clock, XCircle, User, MessageSquare, Calendar } from 'lucide-react';

const ApprovalTracker = ({ proposal }) => {
  const approvalSteps = [
    {
      key: 'faculty',
      title: 'Faculty Approval',
      description: 'Department faculty review and approval',
      approval: proposal.approvals.faculty
    },
    {
      key: 'hod',
      title: 'HOD Approval', 
      description: 'Head of Department review and approval',
      approval: proposal.approvals.hod
    },
    {
      key: 'principal',
      title: 'Principal Approval',
      description: 'Principal final review and approval',
      approval: proposal.approvals.principal
    }
  ];

  const getStepStatus = (approval) => {
    if (approval.status === 'approved') {
      return {
        icon: CheckCircle,
        color: 'text-green-600 bg-green-50 border-green-200',
        iconColor: 'text-green-600'
      };
    } else if (approval.status === 'rejected') {
      return {
        icon: XCircle,
        color: 'text-red-600 bg-red-50 border-red-200',
        iconColor: 'text-red-600'
      };
    } else {
      return {
        icon: Clock,
        color: 'text-gray-600 bg-gray-50 border-gray-200',
        iconColor: 'text-gray-400'
      };
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Approval Workflow</h3>
      
      <div className="space-y-6">
        {approvalSteps.map((step, index) => {
          const status = getStepStatus(step.approval);
          const StatusIcon = status.icon;
          
          return (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < approvalSteps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200" />
              )}
              
              <div className={`flex items-start space-x-4 p-4 rounded-lg border ${status.color}`}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${status.color}`}>
                  <StatusIcon className={`w-6 h-6 ${status.iconColor}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">{step.title}</h4>
                    {step.approval.status === 'approved' && (
                      <span className="text-xs text-green-600 font-medium">Approved</span>
                    )}
                    {step.approval.status === 'rejected' && (
                      <span className="text-xs text-red-600 font-medium">Rejected</span>
                    )}
                    {step.approval.status === 'pending' && (
                      <span className="text-xs text-gray-500 font-medium">Pending</span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  
                  {step.approval.approvedBy && (
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="font-medium">{step.approval.approvedBy}</span>
                      </div>
                      
                      {step.approval.approvedDate && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{new Date(step.approval.approvedDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      
                      {step.approval.comments && (
                        <div className="flex items-start text-sm text-gray-700">
                          <MessageSquare className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="italic">"{step.approval.comments}"</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {step.approval.status === 'pending' && (
                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-sm text-yellow-800">
                        Awaiting review and approval from {step.title.split(' ')[0].toLowerCase()}.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200"
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Overall Status</h4>
            <p className="text-sm text-gray-600">
              {proposal.status === 'principal_approved' 
                ? 'Proposal fully approved and ready for event creation'
                : 'Proposal is under review process'
              }
            </p>
          </div>
          
          {proposal.status === 'principal_approved' && (
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Create Official Event
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ApprovalTracker;