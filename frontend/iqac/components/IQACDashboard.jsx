import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, FileText, Clock, CheckCircle, XCircle, Filter, Search, Coffee, Plane, Hotel, Wifi, Mic, Image, Users, DollarSign, Target, AlignLeft, UserCheck } from 'lucide-react';
import ProposalCard from './ProposalCard';
import ApprovalTracker from './ApprovalTracker';
import ProposalCreationModal from './ProposalCreationModal';
import { iqacEventsData } from '../data/iqacEvents';

const IQACDashboard = () => {
  const [proposals] = useState(iqacEventsData.proposals);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const statusFilters = [
    { key: 'all', label: 'All Proposals', icon: FileText },
    { key: 'submitted', label: 'Under Review', icon: Clock },
    { key: 'principal_approved', label: 'Approved', icon: CheckCircle },
    { key: 'rejected', label: 'Rejected', icon: XCircle }
  ];

  const filteredProposals = proposals.filter(proposal => {
    const matchesStatus = filterStatus === 'all' || proposal.status === filterStatus;
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleViewDetails = (proposal) => {
    setSelectedProposal(proposal);
  };

  const handleCreateProposal = (formData) => {
    console.log('New proposal:', formData);
    setShowCreateModal(false);
  };

  const getStatusStats = () => {
    return {
      total: proposals.length,
      submitted: proposals.filter(p => p.status === 'submitted' || p.status === 'faculty_approved' || p.status === 'hod_approved').length,
      approved: proposals.filter(p => p.status === 'principal_approved').length,
      rejected: proposals.filter(p => p.status === 'rejected').length
    };
  };

  const stats = getStatusStats();

  if (selectedProposal) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => setSelectedProposal(null)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Dashboard
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedProposal.title}</h1>
                <p className="text-gray-600 mb-4">{selectedProposal.department}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Event Type</span>
                    <p className="font-medium">{selectedProposal.eventType}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Proposed Date</span>
                    <p className="font-medium">{new Date(selectedProposal.proposedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Venue</span>
                    <p className="font-medium">{selectedProposal.venue}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Participants</span>
                    <p className="font-medium">{selectedProposal.expectedParticipants}</p>
                  </div>
                </div>

                {selectedProposal.budget && (
                  <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-green-900">Budget</span>
                    </div>
                    <p className="text-2xl font-bold text-green-700">₹ {selectedProposal.budget.toLocaleString()}</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">Objective</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedProposal.objective}</p>
                </div>

                {selectedProposal.description && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <AlignLeft className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedProposal.description}</p>
                  </div>
                )}

                {selectedProposal.resourcePersons && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <UserCheck className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">Resource Persons</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedProposal.resourcePersons}</p>
                  </div>
                )}
              </div>

              {selectedProposal.mediaRequirements && (
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Image className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">Media Requirements</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProposal.mediaRequirements.poster && <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">📋 Poster</span>}
                    {selectedProposal.mediaRequirements.brochure && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">📄 Brochure</span>}
                    {selectedProposal.mediaRequirements.photos && <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">📸 Photos</span>}
                    {selectedProposal.mediaRequirements.videos && <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">🎥 Videos</span>}
                    {selectedProposal.mediaRequirements.certificates && <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">🏅 Certificates</span>}
                  </div>
                </div>
              )}

              {selectedProposal.foodRefreshment?.required && (
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Coffee className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">Food & Refreshment</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      {selectedProposal.foodRefreshment.isVIP && <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">👑 VIP</span>}
                      {selectedProposal.foodRefreshment.isGuest && <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">🎭 Guest</span>}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProposal.foodRefreshment.breakfast && <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">🍳 Breakfast</span>}
                      {selectedProposal.foodRefreshment.lunch && <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">🍱 Lunch</span>}
                      {selectedProposal.foodRefreshment.teaBreak && <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">☕ Tea Break</span>}
                      {selectedProposal.foodRefreshment.dinner && <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">🍽️ Dinner</span>}
                    </div>
                    {selectedProposal.foodRefreshment.count && <p className="text-gray-700 font-semibold">Count: {selectedProposal.foodRefreshment.count} people</p>}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {selectedProposal.guestTravel?.required && (
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Plane className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">Guest Travel</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-gray-600">Mode:</span> <span className="text-gray-900 capitalize">{selectedProposal.guestTravel.mode}</span></p>
                      <p><span className="font-semibold text-gray-600">Route:</span> <span className="text-gray-900">{selectedProposal.guestTravel.from} → {selectedProposal.guestTravel.to}</span></p>
                      {selectedProposal.guestTravel.guestCount && <p><span className="font-semibold text-gray-600">Guests:</span> <span className="text-gray-900">{selectedProposal.guestTravel.guestCount}</span></p>}
                    </div>
                  </div>
                )}

                {selectedProposal.guestAccommodation?.required && (
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Hotel className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">Accommodation</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-gray-600">Hotel:</span> <span className="text-gray-900">{selectedProposal.guestAccommodation.hotelType === '3star' ? '⭐⭐⭐ 3 Star' : selectedProposal.guestAccommodation.hotelType === '4star' ? '⭐⭐⭐⭐ 4 Star' : '⭐⭐⭐⭐⭐ 5 Star'}</span></p>
                      <p><span className="font-semibold text-gray-600">Rooms:</span> <span className="text-gray-900">{selectedProposal.guestAccommodation.rooms}</span></p>
                      <p><span className="font-semibold text-gray-600">Nights:</span> <span className="text-gray-900">{selectedProposal.guestAccommodation.nights}</span></p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {selectedProposal.itSupport?.required && (
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Wifi className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">IT Support</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-gray-600">Venue:</span> <span className="text-gray-900">{selectedProposal.itSupport.venue}</span></p>
                      <p><span className="font-semibold text-gray-600">Desktops:</span> <span className="text-gray-900">{selectedProposal.itSupport.desktops}</span></p>
                      {selectedProposal.itSupport.users && <p><span className="font-semibold text-gray-600">Users:</span> <span className="text-gray-900">{selectedProposal.itSupport.users}</span></p>}
                      <div className="flex gap-2 mt-2">
                        {selectedProposal.itSupport.lan && <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">🔌 LAN</span>}
                        {selectedProposal.itSupport.wifi && <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">📶 WiFi</span>}
                      </div>
                    </div>
                  </div>
                )}

                {selectedProposal.audioVideoSupport?.required && (
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Mic className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">Audio/Video Support</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-gray-600">Venue:</span> <span className="text-gray-900">{selectedProposal.audioVideoSupport.venue}</span></p>
                      <p><span className="font-semibold text-gray-600">Microphones:</span> <span className="text-gray-900">{selectedProposal.audioVideoSupport.microphones}</span></p>
                      <p><span className="font-semibold text-gray-600">Displays:</span> <span className="text-gray-900">{selectedProposal.audioVideoSupport.displays}</span></p>
                      <div className="flex gap-2 mt-2">
                        {selectedProposal.audioVideoSupport.speakers && <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">🔊 Speakers</span>}
                        {selectedProposal.audioVideoSupport.projector && <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">📽️ Projector</span>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {selectedProposal.requestLetter && (
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Letter</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{selectedProposal.requestLetter.filename}</p>
                      <p className="text-sm text-gray-500">{selectedProposal.requestLetter.size}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedProposal.requestLetter.status === 'approved' ? 'bg-green-100 text-green-700' :
                      selectedProposal.requestLetter.status === 'verified' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {selectedProposal.requestLetter.status}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <ApprovalTracker proposal={selectedProposal} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                IQAC – Event Proposal & Approval Portal
              </h1>
              <p className="text-gray-600">
                Manage event proposals through the official approval workflow
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCreateModal(true)}
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Proposal
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Proposals', value: stats.total, color: 'bg-blue-50 text-blue-700', icon: FileText },
              { label: 'Under Review', value: stats.submitted, color: 'bg-yellow-50 text-yellow-700', icon: Clock },
              { label: 'Approved', value: stats.approved, color: 'bg-green-50 text-green-700', icon: CheckCircle },
              { label: 'Rejected', value: stats.rejected, color: 'bg-red-50 text-red-700', icon: XCircle }
            ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${stat.color} rounded-lg p-4`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium opacity-75">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <StatIcon className="w-8 h-8 opacity-75" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              {statusFilters.map(filter => {
                const FilterIcon = filter.icon;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setFilterStatus(filter.key)}
                    className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filterStatus === filter.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FilterIcon className="w-4 h-4 mr-2" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </motion.div>

        {filteredProposals.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-16"
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchTerm || filterStatus !== 'all' ? 'No proposals found' : 'No event proposals available'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Get started by creating your first event proposal'
              }
            </p>
            {!searchTerm && filterStatus === 'all' && (
              <button onClick={() => setShowCreateModal(true)} className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                <Plus className="w-5 h-5 mr-2" />
                Create New Event Proposal
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProposals.map((proposal, index) => (
              <ProposalCard
                key={proposal.id}
                proposal={proposal}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>
      
      <ProposalCreationModal 
        isOpen={showCreateModal} 
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateProposal}
      />
    </div>
  );
};

export default IQACDashboard;