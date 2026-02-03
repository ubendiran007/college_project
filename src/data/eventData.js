export const eventData = {
  event: {
    id: "EVT-2024-001",
    title: "Advanced Machine Learning Workshop",
    department: "Department of Computer Science & Engineering",
    organizer: "CSE Department, ABC College of Engineering",
    type: "Workshop",
    date: "2024-01-15",
    time: "09:00 AM - 05:00 PM",
    venue: "Seminar Hall, Block A",
    status: "Completed",
    description: "A comprehensive workshop on advanced machine learning techniques and applications in modern industry."
  },
  
  brochure: {
    filename: "ML_Workshop_Brochure.pdf",
    size: "2.4 MB",
    pages: 8,
    downloadUrl: "#"
  },
  
  schedule: [
    {
      time: "09:00 - 09:30",
      topic: "Registration & Welcome",
      speaker: "Event Coordinators",
      type: "registration"
    },
    {
      time: "09:30 - 11:00",
      topic: "Introduction to Deep Learning",
      speaker: "Dr. Sarah Johnson",
      type: "session"
    },
    {
      time: "11:00 - 11:15",
      topic: "Tea Break",
      speaker: "",
      type: "break"
    },
    {
      time: "11:15 - 12:30",
      topic: "Neural Networks & Applications",
      speaker: "Prof. Michael Chen",
      type: "session"
    },
    {
      time: "12:30 - 01:30",
      topic: "Lunch Break",
      speaker: "",
      type: "break"
    },
    {
      time: "01:30 - 03:00",
      topic: "Hands-on Lab Session",
      speaker: "Dr. Sarah Johnson",
      type: "lab"
    },
    {
      time: "03:00 - 04:30",
      topic: "Industry Case Studies",
      speaker: "Mr. Alex Rodriguez",
      type: "session"
    },
    {
      time: "04:30 - 05:00",
      topic: "Q&A & Certificate Distribution",
      speaker: "All Speakers",
      type: "closing"
    }
  ],
  
  registration: {
    total: 156,
    categories: {
      students: 98,
      faculty: 42,
      external: 16
    },
    period: "2024-01-01 to 2024-01-14",
    mode: "Online Registration"
  },
  
  attendance: {
    total: 142,
    percentage: 91.0,
    verified: true,
    uploadDate: "2024-01-16"
  },
  
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      location: "Seminar Hall A",
      timestamp: "2024-01-15 09:30 AM",
      caption: "Opening Session"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      location: "Lab Room 101",
      timestamp: "2024-01-15 02:00 PM",
      caption: "Hands-on Session"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      location: "Seminar Hall A",
      timestamp: "2024-01-15 04:45 PM",
      caption: "Certificate Distribution"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      location: "Conference Room",
      timestamp: "2024-01-15 11:30 AM",
      caption: "Interactive Discussion"
    }
  ],
  
  resourcePersons: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "Senior Research Scientist",
      organization: "Google AI Research",
      expertise: "Deep Learning, Computer Vision",
      linkedinPdf: "sarah_johnson_profile.pdf"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      designation: "Professor & Head",
      organization: "MIT Computer Science Department",
      expertise: "Neural Networks, AI Ethics",
      linkedinPdf: "michael_chen_profile.pdf"
    },
    {
      id: 3,
      name: "Mr. Alex Rodriguez",
      designation: "ML Engineering Manager",
      organization: "Tesla Autopilot Team",
      expertise: "Applied ML, Autonomous Systems",
      linkedinPdf: "alex_rodriguez_profile.pdf"
    }
  ],
  
  participantFeedback: {
    overall: 4.6,
    metrics: {
      contentQuality: 4.7,
      speakerEffectiveness: 4.5,
      overallSatisfaction: 4.6,
      organization: 4.4
    },
    totalResponses: 128,
    comments: [
      "Excellent workshop with practical insights into modern ML techniques.",
      "The hands-on session was particularly valuable for understanding concepts.",
      "Great speakers with industry experience. Highly recommended!",
      "Well organized event with good balance of theory and practice."
    ]
  },
  
  guestFeedback: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Resource Person",
      organization: "Google AI Research",
      feedback: "Impressed by the enthusiasm and technical depth of questions from participants. The college has excellent infrastructure for such technical workshops."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Resource Person", 
      organization: "MIT",
      feedback: "The students showed remarkable engagement and understanding. The organizing team was professional and well-prepared."
    }
  ],
  
  eventReport: {
    filename: "ML_Workshop_Final_Report.pdf",
    size: "5.2 MB",
    highlights: [
      "Successfully conducted with 91% attendance rate",
      "Positive feedback from industry experts",
      "Enhanced industry-academia collaboration",
      "Certificate distribution to 142 participants"
    ]
  },
  
  certificates: {
    template: "participation_certificate_template.pdf",
    issued: 142,
    mediaArchive: {
      photos: 45,
      videos: 3,
      presentations: 8
    }
  }
};