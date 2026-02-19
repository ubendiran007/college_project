import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users, DollarSign, FileText, Image, Coffee, Plane, Hotel, Wifi, Mic, Target, AlignLeft, UserCheck } from 'lucide-react';

const ProposalDetailsModal = ({ isOpen, onClose, proposal }) => {
  if (!proposal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" 
          />

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center py-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                onClick={(e) => e.stopPropagation()} 
                className="w-full max-w-4xl bg-[#22283a] rounded-xl shadow-2xl"
              >
                <div className="sticky top-0 bg-[#4a9eff] p-6 rounded-t-xl flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Proposal Details</h2>
                    <p className="text-white/80 text-sm mt-1">{proposal.id}</p>
                  </div>
                  <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                  {/* Basic Information */}
                  <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                    <h3 className="text-lg font-bold text-white mb-4">Basic Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Event Title</label>
                        <p className="text-white font-semibold mt-1">{proposal.title}</p>
                      </div>
                      <div>
                        <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Event Type</label>
                        <p className="text-white font-semibold mt-1">{proposal.eventType}</p>
                      </div>
                      <div>
                        <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Department</label>
                        <p className="text-white font-semibold mt-1">{proposal.department}</p>
                      </div>
                      <div>
                        <label className="text-sm text-[#a0a0b0] uppercase tracking-wider flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Proposed Date
                        </label>
                        <p className="text-white font-semibold mt-1">
                          {new Date(proposal.proposedDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-[#a0a0b0] uppercase tracking-wider flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Venue
                        </label>
                        <p className="text-white font-semibold mt-1">{proposal.venue}</p>
                      </div>
                      <div>
                        <label className="text-sm text-[#a0a0b0] uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Expected Participants
                        </label>
                        <p className="text-white font-semibold mt-1">{proposal.expectedParticipants}</p>
                      </div>
                    </div>
                  </div>

                  {/* Budget */}
                  {proposal.budget && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Budget
                      </h3>
                      <p className="text-white font-semibold text-2xl">₹ {proposal.budget?.toLocaleString()}</p>
                    </div>
                  )}

                  {/* Objective */}
                  <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Objective
                    </h3>
                    <p className="text-white leading-relaxed">{proposal.objective}</p>
                  </div>

                  {/* Description */}
                  {proposal.description && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlignLeft className="w-5 h-5" />
                        Description
                      </h3>
                      <p className="text-white leading-relaxed">{proposal.description}</p>
                    </div>
                  )}

                  {/* Media Requirements */}
                  {proposal.mediaRequirements && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Image className="w-5 h-5" />
                        Media Requirements
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {proposal.mediaRequirements.poster && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">
                            📋 Poster
                          </span>
                        )}
                        {proposal.mediaRequirements.brochure && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">
                            📄 Brochure
                          </span>
                        )}
                        {proposal.mediaRequirements.photos && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">
                            📸 Photos
                          </span>
                        )}
                        {proposal.mediaRequirements.videos && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">
                            🎥 Videos
                          </span>
                        )}
                        {proposal.mediaRequirements.certificates && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">
                            🏅 Certificates
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Venue Requirements */}
                  {proposal.venueRequirements && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Wifi className="w-5 h-5" />
                        Venue & IT Requirements
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Venue Type</label>
                          <p className="text-white font-semibold mt-1">{proposal.venueRequirements.type}</p>
                        </div>
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Capacity</label>
                          <p className="text-white font-semibold mt-1">{proposal.venueRequirements.capacity}</p>
                        </div>
                        {proposal.venueRequirements.wifi && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">WiFi</label>
                            <p className="text-white font-semibold mt-1">Required ({proposal.venueRequirements.expectedUsers} users)</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Food & Refreshment */}
                  {proposal.foodRefreshment && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Coffee className="w-5 h-5" />
                        Food & Refreshment
                      </h3>
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          {proposal.foodRefreshment.isVIP && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">👑 VIP</span>
                          )}
                          {proposal.foodRefreshment.isGuest && (
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">🎭 Guest</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {proposal.foodRefreshment.breakfast && (
                            <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">🍳 Breakfast</span>
                          )}
                          {proposal.foodRefreshment.lunch && (
                            <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">🍱 Lunch</span>
                          )}
                          {proposal.foodRefreshment.teaBreak && (
                            <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">☕ Tea Break</span>
                          )}
                          {proposal.foodRefreshment.dinner && (
                            <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">🍽️ Dinner</span>
                          )}
                        </div>
                        {proposal.foodRefreshment.count && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Count</label>
                            <p className="text-white font-semibold mt-1">{proposal.foodRefreshment.count} people</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Guest Travel */}
                  {proposal.guestTravel && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Plane className="w-5 h-5" />
                        Guest Travel
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Mode</label>
                          <p className="text-white font-semibold mt-1 capitalize">{proposal.guestTravel.mode}</p>
                        </div>
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Route</label>
                          <p className="text-white font-semibold mt-1">{proposal.guestTravel.from} → {proposal.guestTravel.to}</p>
                        </div>
                        {proposal.guestTravel.guestCount && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Guest Count</label>
                            <p className="text-white font-semibold mt-1">{proposal.guestTravel.guestCount}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Guest Accommodation */}
                  {proposal.guestAccommodation && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Hotel className="w-5 h-5" />
                        Guest Accommodation
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Hotel Type</label>
                          <p className="text-white font-semibold mt-1">{proposal.guestAccommodation.hotelType === '3star' ? '⭐⭐⭐ 3 Star' : proposal.guestAccommodation.hotelType === '4star' ? '⭐⭐⭐⭐ 4 Star' : '⭐⭐⭐⭐⭐ 5 Star'}</p>
                        </div>
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Rooms</label>
                          <p className="text-white font-semibold mt-1">{proposal.guestAccommodation.rooms}</p>
                        </div>
                        <div>
                          <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Nights</label>
                          <p className="text-white font-semibold mt-1">{proposal.guestAccommodation.nights}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IT Support */}
                  {proposal.itSupport && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Wifi className="w-5 h-5" />
                        IT Support
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {proposal.itSupport.venue && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Venue</label>
                            <p className="text-white font-semibold mt-1">{proposal.itSupport.venue}</p>
                          </div>
                        )}
                        {proposal.itSupport.desktops && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Desktops</label>
                            <p className="text-white font-semibold mt-1">{proposal.itSupport.desktops}</p>
                          </div>
                        )}
                        {proposal.itSupport.users && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Users</label>
                            <p className="text-white font-semibold mt-1">{proposal.itSupport.users}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        {proposal.itSupport.lan && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">🔌 LAN</span>
                        )}
                        {proposal.itSupport.wifi && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">📶 WiFi</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Audio/Video Support */}
                  {proposal.audioVideoSupport && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Mic className="w-5 h-5" />
                        Audio/Video Support
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {proposal.audioVideoSupport.venue && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Venue</label>
                            <p className="text-white font-semibold mt-1">{proposal.audioVideoSupport.venue}</p>
                          </div>
                        )}
                        {proposal.audioVideoSupport.microphones && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Microphones</label>
                            <p className="text-white font-semibold mt-1">{proposal.audioVideoSupport.microphones}</p>
                          </div>
                        )}
                        {proposal.audioVideoSupport.displays && (
                          <div>
                            <label className="text-sm text-[#a0a0b0] uppercase tracking-wider">Displays</label>
                            <p className="text-white font-semibold mt-1">{proposal.audioVideoSupport.displays}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        {proposal.audioVideoSupport.speakers && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">🔊 Speakers</span>
                        )}
                        {proposal.audioVideoSupport.projector && (
                          <span className="px-3 py-1 bg-[#4a9eff]/20 text-[#4a9eff] rounded-full text-sm font-medium">📽️ Projector</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Resource Persons */}
                  {proposal.resourcePersons && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <UserCheck className="w-5 h-5" />
                        Resource Persons
                      </h3>
                      <p className="text-white leading-relaxed">{proposal.resourcePersons}</p>
                    </div>
                  )}

                  {/* Request Letter */}
                  {proposal.requestLetter && (
                    <div className="bg-[#1a1d2e] rounded-lg p-6 border border-[#2a3142]">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Request Letter
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <p className="text-white font-semibold">{proposal.requestLetter.filename}</p>
                          <p className="text-[#a0a0b0] text-sm mt-1">{proposal.requestLetter.size}</p>
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                          {proposal.requestLetter.status}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 border-t border-[#2a3142] bg-[#1a1d2e] rounded-b-xl">
                  <button
                    onClick={onClose}
                    className="w-full px-6 py-3 bg-[#4a9eff] hover:bg-[#3d8ae5] text-white rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProposalDetailsModal;
