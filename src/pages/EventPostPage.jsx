import { motion } from 'framer-motion';
import EventHero from '../components/EventHero';
import BrochureSection from '../components/BrochureSection';
import ScheduleTimeline from '../components/ScheduleTimeline';
import RegistrationStats from '../components/RegistrationStats';
import AttendanceSection from '../components/AttendanceSection';
import GeoGallery from '../components/GeoGallery';
import ResourceProfiles from '../components/ResourceProfiles';
import FeedbackParticipants from '../components/FeedbackParticipants';
import FeedbackGuests from '../components/FeedbackGuests';
import EventReport from '../components/EventReport';
import { eventData } from '../data/eventData';

const EventPostPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <EventHero event={eventData.event} />
      
      {/* Brochure Section */}
      <BrochureSection brochure={eventData.brochure} />
      
      {/* Schedule Timeline */}
      <ScheduleTimeline schedule={eventData.schedule} />
      
      {/* Registration Statistics */}
      <RegistrationStats registration={eventData.registration} />
      
      {/* Attendance Management */}
      <AttendanceSection 
        attendance={eventData.attendance} 
        registration={eventData.registration} 
      />
      
      {/* Geo-Tagged Gallery */}
      <GeoGallery gallery={eventData.gallery} />
      
      {/* Resource Person Profiles */}
      <ResourceProfiles resourcePersons={eventData.resourcePersons} />
      
      {/* Participant Feedback */}
      <FeedbackParticipants feedback={eventData.participantFeedback} />
      
      {/* Guest Feedback */}
      <FeedbackGuests guestFeedback={eventData.guestFeedback} />
      
      {/* Event Report & Certificates */}
      <EventReport 
        eventReport={eventData.eventReport} 
        certificates={eventData.certificates} 
      />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="section-container text-center">
          <p className="text-gray-300">
            © 2024 ABC College of Engineering. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Event Management System - Post Event Documentation
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default EventPostPage;