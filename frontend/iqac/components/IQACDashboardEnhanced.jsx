import { useState } from 'react';
import { FileText, Clock, CheckCircle, TrendingUp, Plus, Search, Filter, ChevronDown, ChevronUp, Coffee, Plane, Hotel, Wifi, Mic, Image, Users, MapPin, Calendar, DollarSign } from 'lucide-react';
import ProposalCreationModal from '../components/ProposalCreationModal';
import { iqacEventsData } from '../data/iqacEvents';

const IQACDashboardEnhanced = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedRow, setExpandedRow] = useState(null);

  const stats = [
    { label: 'Total Proposals', value: '3', icon: FileText, trend: '+12%' },
    { label: 'Pending Approvals', value: '1', icon: Clock, trend: '-5%' },
    { label: 'Approved Events', value: '1', icon: CheckCircle, trend: '+8%' },
    { label: 'Completion Rate', value: '33%', icon: TrendingUp, trend: '+3%' }
  ];

  const filteredProposals = iqacEventsData.proposals.filter(proposal => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || proposal.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${styles[status]}`}>
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
        <h1 className="text-3xl font-bold text-brand-text mb-2 tracking-tight">IQAC Dashboard</h1>
        <p className="text-brand-muted">Manage event proposals and approvals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-beige/30 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-bold text-brand-text mb-1">{stat.value}</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-medium">{stat.label}</div>
              <div className="mt-4 h-1 bg-brand-beige/30 rounded-full overflow-hidden">
                <div className="h-1 bg-brand-primary rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-brand-border shadow-sm">
        <div className="p-6 border-b border-brand-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-brand-text tracking-tight">Event Proposals</h2>
              <p className="text-sm text-brand-muted mt-1">Track and manage all event proposals</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              New Proposal
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                placeholder="Search proposals by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-brand-muted" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field min-w-[180px]"
              >
                <option value="all">All Status</option>
                <option value="submitted">Submitted</option>
                <option value="hod_approved">HOD Approved</option>
                <option value="principal_approved">Approved</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-brand-beige/20 border-b border-brand-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-text uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-text uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-text uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-text uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-text uppercase tracking-wider">Progress</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-brand-text uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-brand-border">
              {filteredProposals.map((proposal) => (
                <>
                  <tr key={proposal.id} className="hover:bg-brand-soft transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setExpandedRow(expandedRow === proposal.id ? null : proposal.id)}
                          className="p-1 hover:bg-brand-beige/30 rounded transition-colors"
                        >
                          {expandedRow === proposal.id ? (
                            <ChevronUp className="w-5 h-5 text-brand-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-brand-muted" />
                          )}
                        </button>
                        <div>
                          <div className="text-sm font-semibold text-brand-text">{proposal.title}</div>
                          <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{proposal.eventType}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-brand-text font-medium">{proposal.department}</td>
                    <td className="px-6 py-4 text-sm text-brand-text">
                      {new Date(proposal.proposedDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(proposal.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-brand-beige/30 rounded-full overflow-hidden">
                          <div
                            className="h-2 bg-brand-primary rounded-full transition-all duration-500"
                            style={{ width: `${getProgress(proposal.status)}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-brand-muted font-semibold min-w-[40px]">{getProgress(proposal.status)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-sm text-brand-primary hover:text-[#d6282c] font-semibold transition-colors duration-200">
                        View Details →
                      </button>
                    </td>
                  </tr>
                  {expandedRow === proposal.id && (
                    <tr key={`${proposal.id}-details`}>
                      <td colSpan="6" className="px-6 py-6 bg-brand-soft border-t border-brand-border">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-brand-border">
                            <div className="flex items-center gap-2 mb-3">
                              <Users className="w-4 h-4 text-brand-primary" />
                              <h4 className="font-bold text-sm text-brand-text">Basic Info</h4>
                            </div>
                            <div className="space-y-2 text-xs">
                              <p><span className="font-semibold text-brand-muted">Venue:</span> <span className="text-brand-text">{proposal.venue}</span></p>
                              <p><span className="font-semibold text-brand-muted">Participants:</span> <span className="text-brand-text">{proposal.expectedParticipants}</span></p>
                              {proposal.budget && <p><span className="font-semibold text-brand-muted">Budget:</span> <span className="text-brand-text">₹{proposal.budget.toLocaleString()}</span></p>}
                            </div>
                          </div>

                          {proposal.mediaRequirements && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border">
                              <div className="flex items-center gap-2 mb-3">
                                <Image className="w-4 h-4 text-brand-primary" />
                                <h4 className="font-bold text-sm text-brand-text">Media</h4>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {proposal.mediaRequirements.poster && <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-semibold">Poster</span>}
                                {proposal.mediaRequirements.brochure && <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-semibold">Brochure</span>}
                                {proposal.mediaRequirements.photos && <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded text-xs font-semibold">Photos</span>}
                                {proposal.mediaRequirements.videos && <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs font-semibold">Videos</span>}
                                {proposal.mediaRequirements.certificates && <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-semibold">Certificates</span>}
                              </div>
                            </div>
                          )}

                          {proposal.foodRefreshment?.required && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border">
                              <div className="flex items-center gap-2 mb-3">
                                <Coffee className="w-4 h-4 text-brand-primary" />
                                <h4 className="font-bold text-sm text-brand-text">Food & Refreshment</h4>
                              </div>
                              <div className="space-y-2">
                                <div className="flex flex-wrap gap-1">
                                  {proposal.foodRefreshment.isVIP && <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs font-semibold">VIP</span>}
                                  {proposal.foodRefreshment.isGuest && <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-semibold">Guest</span>}
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {proposal.foodRefreshment.breakfast && <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Breakfast</span>}
                                  {proposal.foodRefreshment.lunch && <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Lunch</span>}
                                  {proposal.foodRefreshment.teaBreak && <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Tea</span>}
                                  {proposal.foodRefreshment.dinner && <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Dinner</span>}
                                </div>
                                {proposal.foodRefreshment.count && <p className="text-xs text-brand-text font-semibold">Count: {proposal.foodRefreshment.count}</p>}
                              </div>
                            </div>
                          )}

                          {proposal.guestTravel?.required && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border">
                              <div className="flex items-center gap-2 mb-3">
                                <Plane className="w-4 h-4 text-brand-primary" />
                                <h4 className="font-bold text-sm text-brand-text">Guest Travel</h4>
                              </div>
                              <div className="space-y-1 text-xs">
                                <p><span className="font-semibold text-brand-muted">Mode:</span> <span className="text-brand-text capitalize">{proposal.guestTravel.mode}</span></p>
                                <p><span className="font-semibold text-brand-muted">Route:</span> <span className="text-brand-text">{proposal.guestTravel.from} → {proposal.guestTravel.to}</span></p>
                                {proposal.guestTravel.guestCount && <p><span className="font-semibold text-brand-muted">Guests:</span> <span className="text-brand-text">{proposal.guestTravel.guestCount}</span></p>}
                              </div>
                            </div>
                          )}

                          {proposal.guestAccommodation?.required && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border">
                              <div className="flex items-center gap-2 mb-3">
                                <Hotel className="w-4 h-4 text-brand-primary" />
                                <h4 className="font-bold text-sm text-brand-text">Accommodation</h4>
                              </div>
                              <div className="space-y-1 text-xs">
                                <p><span className="font-semibold text-brand-muted">Hotel:</span> <span className="text-brand-text">{proposal.guestAccommodation.hotelType}</span></p>
                                <p><span className="font-semibold text-brand-muted">Rooms:</span> <span className="text-brand-text">{proposal.guestAccommodation.rooms}</span></p>
                                <p><span className="font-semibold text-brand-muted">Nights:</span> <span className="text-brand-text">{proposal.guestAccommodation.nights}</span></p>
                              </div>
                            </div>
                          )}

                          {proposal.itSupport?.required && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border">
                              <div className="flex items-center gap-2 mb-3">
                                <Wifi className="w-4 h-4 text-brand-primary" />
                                <h4 className="font-bold text-sm text-brand-text">IT Support</h4>
                              </div>
                              <div className="space-y-1 text-xs">
                                <p><span className="font-semibold text-brand-muted">Venue:</span> <span className="text-brand-text">{proposal.itSupport.venue}</span></p>
                                <p><span className="font-semibold text-brand-muted">Desktops:</span> <span className="text-brand-text">{proposal.itSupport.desktops}</span></p>
                                <div className="flex gap-1 mt-2">
                                  {proposal.itSupport.lan && <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">LAN</span>}
                                  {proposal.itSupport.wifi && <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">WiFi</span>}
                                </div>
                              </div>
                            </div>
                          )}

                          {proposal.audioVideoSupport?.required && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border">
                              <div className="flex items-center gap-2 mb-3">
                                <Mic className="w-4 h-4 text-brand-primary" />
                                <h4 className="font-bold text-sm text-brand-text">Audio/Video</h4>
                              </div>
                              <div className="space-y-1 text-xs">
                                <p><span className="font-semibold text-brand-muted">Venue:</span> <span className="text-brand-text">{proposal.audioVideoSupport.venue}</span></p>
                                <p><span className="font-semibold text-brand-muted">Mics:</span> <span className="text-brand-text">{proposal.audioVideoSupport.microphones}</span></p>
                                <p><span className="font-semibold text-brand-muted">Displays:</span> <span className="text-brand-text">{proposal.audioVideoSupport.displays}</span></p>
                                <div className="flex gap-1 mt-2">
                                  {proposal.audioVideoSupport.speakers && <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Speakers</span>}
                                  {proposal.audioVideoSupport.projector && <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Projector</span>}
                                </div>
                              </div>
                            </div>
                          )}

                          {proposal.resourcePersons && (
                            <div className="bg-white rounded-lg p-4 border border-brand-border col-span-3">
                              <h4 className="font-bold text-sm text-brand-text mb-2">Resource Persons</h4>
                              <p className="text-xs text-brand-text leading-relaxed">{proposal.resourcePersons}</p>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
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

export default IQACDashboardEnhanced;
