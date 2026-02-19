export const iqacEventsData = {
  proposals: [
    {
      id: 'PROP-2024-001',
      title: 'International Conference on Artificial Intelligence',
      department: 'Computer Science & Engineering',
      eventType: 'Conference',
      proposedDate: '2024-04-15',
      venue: 'Main Auditorium',
      expectedParticipants: 200,
      budget: 250000,
      objective: 'To provide a platform for researchers and industry experts to share cutting-edge developments in AI and machine learning technologies, fostering collaboration between academia and industry.',
      description: 'This international conference will bring together leading researchers, practitioners, and students to discuss the latest advancements in artificial intelligence, machine learning, deep learning, and their applications across various domains. The event will feature keynote speeches, technical paper presentations, panel discussions, and networking opportunities.',
      resourcePersons: 'Dr. Andrew Ng (Stanford University), Dr. Yoshua Bengio (University of Montreal), Dr. Fei-Fei Li (Stanford University)',
      status: 'principal_approved',
      createdDate: '2024-02-15',
      submittedDate: '2024-02-16',
      approvals: {
        faculty: {
          status: 'approved',
          approvedBy: 'Dr. Rajesh Kumar',
          approvedDate: '2024-02-17',
          comments: 'Excellent proposal with clear objectives and industry relevance.'
        },
        hod: {
          status: 'approved',
          approvedBy: 'Prof. Anita Sharma',
          approvedDate: '2024-02-20',
          comments: 'Approved. Ensure proper coordination with industry partners.'
        },
        principal: {
          status: 'approved',
          approvedBy: 'Dr. Suresh Patel',
          approvedDate: '2024-02-22',
          comments: 'Approved for execution. Excellent initiative for department visibility.'
        }
      },
      requestLetter: {
        filename: 'AI_Conference_Request_Letter.pdf',
        size: '1.2 MB',
        uploadDate: '2024-02-16',
        status: 'approved'
      },
      mediaRequirements: {
        poster: true,
        brochure: true,
        photos: true,
        videos: true,
        certificates: true
      },
      foodRefreshment: {
        required: true,
        isVIP: true,
        isGuest: true,
        breakfast: true,
        lunch: true,
        teaBreak: true,
        dinner: false,
        count: 200
      },
      guestTravel: {
        required: true,
        mode: 'flight',
        from: 'San Francisco',
        to: 'Mumbai',
        guestCount: 5
      },
      guestAccommodation: {
        required: true,
        hotelType: '5star',
        rooms: 5,
        nights: 3
      },
      itSupport: {
        required: true,
        venue: 'Main Auditorium',
        desktops: 10,
        lan: true,
        wifi: true,
        users: 200
      },
      audioVideoSupport: {
        required: true,
        venue: 'Main Auditorium',
        microphones: 5,
        displays: 3,
        speakers: true,
        projector: true
      }
    },
    {
      id: 'PROP-2024-002',
      title: 'Workshop on Sustainable Engineering Practices',
      department: 'Civil Engineering',
      eventType: 'Workshop',
      proposedDate: '2024-03-28',
      venue: 'Seminar Hall B',
      expectedParticipants: 80,
      budget: 75000,
      objective: 'To educate students and faculty about sustainable engineering practices and green building technologies in line with environmental conservation goals.',
      description: 'This workshop will cover sustainable construction materials, energy-efficient building design, waste management in construction, and green building certifications. Participants will gain hands-on experience through case studies and interactive sessions.',
      resourcePersons: 'Prof. Meera Singh (IIT Delhi), Dr. Vikram Joshi (TERI), Ar. Priya Sharma (Green Building Council)',
      status: 'hod_approved',
      createdDate: '2024-02-20',
      submittedDate: '2024-02-21',
      approvals: {
        faculty: {
          status: 'approved',
          approvedBy: 'Prof. Meera Singh',
          approvedDate: '2024-02-22',
          comments: 'Timely and relevant topic for current industry needs.'
        },
        hod: {
          status: 'approved',
          approvedBy: 'Dr. Vikram Joshi',
          approvedDate: '2024-02-25',
          comments: 'Approved. Coordinate with environmental engineering faculty.'
        },
        principal: {
          status: 'pending',
          approvedBy: null,
          approvedDate: null,
          comments: null
        }
      },
      requestLetter: {
        filename: 'Sustainable_Workshop_Request.pdf',
        size: '0.8 MB',
        uploadDate: '2024-02-21',
        status: 'verified'
      },
      mediaRequirements: {
        poster: true,
        brochure: true,
        photos: true,
        videos: false,
        certificates: true
      },
      foodRefreshment: {
        required: true,
        isVIP: false,
        isGuest: true,
        breakfast: false,
        lunch: true,
        teaBreak: true,
        dinner: false,
        count: 80
      },
      guestTravel: {
        required: true,
        mode: 'train',
        from: 'Delhi',
        to: 'Mumbai',
        guestCount: 3
      },
      guestAccommodation: {
        required: true,
        hotelType: '3star',
        rooms: 3,
        nights: 1
      },
      itSupport: {
        required: true,
        venue: 'Seminar Hall B',
        desktops: 5,
        lan: false,
        wifi: true,
        users: 80
      },
      audioVideoSupport: {
        required: true,
        venue: 'Seminar Hall B',
        microphones: 2,
        displays: 1,
        speakers: true,
        projector: true
      }
    },
    {
      id: 'PROP-2024-003',
      title: 'Guest Lecture on Quantum Computing',
      department: 'Physics',
      eventType: 'Guest Lecture',
      proposedDate: '2024-04-05',
      venue: 'Physics Lab Complex',
      expectedParticipants: 60,
      budget: 35000,
      objective: 'To introduce students to the fundamentals of quantum computing and its applications in modern physics and computer science.',
      description: 'An enlightening session on quantum computing fundamentals, quantum algorithms, quantum cryptography, and the future of quantum technologies. The lecture will include live demonstrations and Q&A sessions.',
      resourcePersons: 'Dr. Rajesh Quantum (TIFR Mumbai), Prof. Anita Sharma (IISc Bangalore)',
      status: 'submitted',
      createdDate: '2024-02-28',
      submittedDate: '2024-03-01',
      approvals: {
        faculty: {
          status: 'pending',
          approvedBy: null,
          approvedDate: null,
          comments: null
        },
        hod: {
          status: 'pending',
          approvedBy: null,
          approvedDate: null,
          comments: null
        },
        principal: {
          status: 'pending',
          approvedBy: null,
          approvedDate: null,
          comments: null
        }
      },
      requestLetter: {
        filename: 'Quantum_Computing_Lecture_Request.pdf',
        size: '0.6 MB',
        uploadDate: '2024-03-01',
        status: 'submitted'
      },
      mediaRequirements: {
        poster: false,
        brochure: false,
        photos: true,
        videos: true,
        certificates: false
      },
      foodRefreshment: {
        required: true,
        isVIP: false,
        isGuest: true,
        breakfast: false,
        lunch: true,
        teaBreak: true,
        dinner: false,
        count: 60
      },
      guestTravel: {
        required: true,
        mode: 'flight',
        from: 'Bangalore',
        to: 'Mumbai',
        guestCount: 2
      },
      guestAccommodation: {
        required: true,
        hotelType: '4star',
        rooms: 2,
        nights: 1
      },
      itSupport: {
        required: true,
        venue: 'Physics Lab Complex',
        desktops: 10,
        lan: true,
        wifi: true,
        users: 60
      },
      audioVideoSupport: {
        required: true,
        venue: 'Physics Lab Complex',
        microphones: 2,
        displays: 2,
        speakers: true,
        projector: true
      }
    }
  ],

  eventTypes: [
    'Workshop',
    'Seminar',
    'FDP',
    'Guest Lecture',
    'Conference',
    'Symposium',
    'Technical Event'
  ],

  departments: [
    'Computer Science & Engineering',
    'Electronics & Communication Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Physics',
    'Mathematics',
    'Chemistry',
    'Management Studies'
  ],

  venueTypes: [
    'Auditorium',
    'Seminar Hall',
    'Laboratory',
    'Conference Room',
    'Open Air Theatre',
    'Sports Ground'
  ]
};

export const getProposalById = (proposalId) => {
  return iqacEventsData.proposals.find(proposal => proposal.id === proposalId);
};

export const getProposalsByStatus = (status) => {
  return iqacEventsData.proposals.filter(proposal => proposal.status === status);
};

export const getApprovalProgress = (proposal) => {
  const steps = [
    { key: 'faculty', label: 'Faculty Approval', status: proposal.approvals.faculty.status },
    { key: 'hod', label: 'HOD Approval', status: proposal.approvals.hod.status },
    { key: 'principal', label: 'Principal Approval', status: proposal.approvals.principal.status }
  ];
  
  const completedSteps = steps.filter(step => step.status === 'approved').length;
  const totalSteps = steps.length;
  
  return {
    steps,
    progress: (completedSteps / totalSteps) * 100,
    currentStep: completedSteps,
    isComplete: completedSteps === totalSteps
  };
};