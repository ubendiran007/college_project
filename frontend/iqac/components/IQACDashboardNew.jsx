import { useState } from 'react';
import { FileText, Clock, CheckCircle, TrendingUp, Plus, Search, Filter } from 'lucide-react';
import ProposalCreationModal from '../components/ProposalCreationModal';
import { iqacEventsData } from '../data/iqacEvents';

const IQACDashboardNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = [
    { label: 'Total Proposals', value: '3', icon: FileText, color: 'blue' },
    { label: 'Pending Approvals', value: '1', icon: Clock, color: 'yellow' },
    { label: 'Approved Events', value: '1', icon: CheckCircle, color: 'green' },
    { label: 'Completion Rate', value: '33%', icon: TrendingUp, color: 'indigo' }
  ];

  const getStatusBadge = (status) => {
    const styles = {
      submitted: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      hod_approved: 'bg-blue-50 text-blue-700 border-blue-200',
      principal_approved: 'bg-green-50 text-green-700 border-green-200'
    };
    const labels = {
      submitted: 'Submitted',
      hod_approved: 'HOD Approved',
      principal_approved: 'Approved'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const getProgress = (status) => {
    const progress = {
      submitted: 33,
      hod_approved: 66,
      principal_approved: 100
    };
    return progress[status] || 0;
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">IQAC Dashboard</h1>
        <p className="text-gray-600">Manage event proposals and approvals</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg bg-${stat.color}-50 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className={`mt-3 h-1 bg-${stat.color}-100 rounded-full`}>
                <div className={`h-1 bg-${stat.color}-600 rounded-full`} style={{ width: '70%' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Event Proposals</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Proposal
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="submitted">Submitted</option>
              <option value="hod_approved">HOD Approved</option>
              <option value="principal_approved">Approved</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {iqacEventsData.proposals.map((proposal) => (
                <tr key={proposal.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{proposal.title}</div>
                    <div className="text-xs text-gray-500">{proposal.eventType}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{proposal.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(proposal.proposedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(proposal.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-blue-600 rounded-full transition-all"
                          style={{ width: `${getProgress(proposal.status)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600">{getProgress(proposal.status)}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProposalCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export default IQACDashboardNew;
