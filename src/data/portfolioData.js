export const portfolioData = {
  personal: {
    name: "Shashank Suthrave",
    shortName: "SS",
    title: "AI/ML Engineer & Explainable AI Researcher",
    tagline: "Building interpretable ML systems, agentic AI workflows, and scalable backend applications.",
    bio: "I am a Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning at Kommuri Pratap Reddy Institute of Technology (CGPA 7.9). I build machine learning systems that explain their own decisions instead of acting as black boxes. My published research achieves 99.4% accuracy in railway threat classification using SBERT and interpretable RuleFit models. I also engineer multi-agent systems using LangGraph & RAG alongside full-stack backend solutions.",
    location: "Hyderabad, India",
    email: "sutraveshashank@gmail.com",
    phone: "+91 9550200833",
    status: "Open for AI/ML & Software Engineering Roles",
    social: {
      github: "https://github.com/sutraveshashank",
      linkedin: "https://www.linkedin.com/in/shashank-suthrave-9313a62a4",
      email: "mailto:sutraveshashank@gmail.com"
    },
    metrics: [
      { label: "Research Model Accuracy", value: "99.4%", description: "Railway Threat Detection" },
      { label: "B.Tech CGPA", value: "8.0", description: "CSE - AIML Specialization" },
      { label: "Projects Completed", value: "6+", description: "AI, ML & Full-Stack Apps" },
      { label: "Audio Model Accuracy", value: "95%", description: "MFCC & FFT Analysis" }
    ],
    typingTitles: [
      "AI/ML Engineer",
      "Published Explainable AI Researcher",
      "Full-Stack Python & Node.js Engineer"
    ]
  },

  skills: {
    categories: [
      { id: "all", name: "All Skills" },
      { id: "aiml", name: "AI & Machine Learning" },
      { id: "agentic", name: "Agentic AI & LLMs" },
      { id: "programming", name: "Languages & Frameworks" },
      { id: "data", name: "Data & Visualization" }
    ],
    items: [
      { name: "Python", category: "programming", level: 95, icon: "Code2", tag: "Primary" },
      { name: "LangGraph & LangChain", category: "agentic", level: 90, icon: "Bot", tag: "Agentic AI" },
      { name: "RAG & Prompt Engineering", category: "agentic", level: 88, icon: "Cpu", tag: "GenAI" },
      { name: "Sentence-BERT (SBERT)", category: "aiml", level: 92, icon: "Brain", tag: "NLP / Research" },
      { name: "RuleFit & Decision Trees", category: "aiml", level: 90, icon: "Network", tag: "Explainable AI" },
      { name: "TensorFlow & PyTorch", category: "aiml", level: 85, icon: "Layers", tag: "Deep Learning" },
      { name: "Scikit-learn & Random Forest", category: "aiml", level: 92, icon: "Binary", tag: "ML Algorithms" },
      { name: "Node.js & Express.js", category: "programming", level: 85, icon: "Server", tag: "Backend" },
      { name: "Django & Flask", category: "programming", level: 88, icon: "Terminal", tag: "Python Backend" },
      { name: "SQL & MongoDB", category: "data", level: 90, icon: "Database", tag: "Databases" },
      { name: "Power BI & Analytics", category: "data", level: 85, icon: "BarChart3", tag: "BI & Reporting" },
      { name: "Java & C", category: "programming", level: 80, icon: "FileCode", tag: "Core CS" },
      { name: "Pandas & NumPy", category: "data", level: 95, icon: "Table", tag: "Data Processing" },
      { name: "REST APIs & OOP", category: "programming", level: 92, icon: "Webhook", tag: "Architecture" },
      { name: "Git & Data Validation", category: "data", level: 88, icon: "GitBranch", tag: "Tools" }
    ]
  },

  projects: [
    {
      id: "railway-threat-detection",
      title: "Contextual Embedding-Based Railway Communication Threat Detection",
      subtitle: "Published Research in Explainable AI",
      category: "aiml",
      featured: true,
      accuracy: "99.4% Accuracy",
      summary: "An intelligent, interpretable railway communication threat detection system using Sentence-BERT (SBERT) embeddings and transparent models (RuleFit, DNDT, Decision Tree CCP) integrated into a Django web application.",
      description: "Railway communication systems generate large volumes of signaling logs and message transmissions. This project presents an intelligent and interpretable threat detection system using Sentence-BERT (SBERT) contextual embeddings and transparent machine learning models (RuleFit, DNDT, Decision Trees). Implemented as a Django web application performing real-time classification of communication messages into Secure vs. Not Secure with 99.4% accuracy while ensuring all predictions remain auditable for safety-critical railway environments.",
      technologies: ["Python", "Sentence-BERT (SBERT)", "RuleFit", "Decision Trees", "Django", "Explainable AI (XAI)", "SQL"],
      links: {
        github: "https://github.com/sutraveshashank/Contextual-Embedding-Based-Railway-Communication-Threat-Detection-with-Transparent-AI-Models"
      },
      highlights: [
        "Contextual embedding generation using SBERT for semantic understanding of railway messages",
        "Transparent prediction with RuleFit, DNDT & Decision Tree CCP achieving ~99.4% threat detection accuracy",
        "Django-based web platform with real-time threat monitoring and confidence score visualization",
        "Replaces opaque black-box deep learning with auditable, Explainable AI (XAI) safety metrics"
      ]
    },
    {
      id: "agentic-blog-engine",
      title: "AgenticBlog Engine (BlogBoard AI Article Generator)",
      subtitle: "Multi-Agent LangGraph & Groq Pipeline",
      category: "agentic",
      featured: true,
      accuracy: "LangGraph & Groq",
      summary: "An end-to-end autonomous blogging platform powered by LangGraph for stateful multi-agent execution and Groq for blazing-fast LLM inference, publishing deep-dive technical articles via GitHub Actions.",
      description: "BlogBoard (AgenticBlog Engine) is an end-to-end, fully automated AI blogging platform. It autonomously schedules, writes, formats, and publishes deep-dive technical articles on Machine Learning and Artificial Intelligence. Powered by LangGraph for stateful multi-agent workflow execution and Groq for high-speed LLM inference, it utilizes a multi-stage architecture featuring a Tutorial Agent for content generation and a Validator Agent for review and iterative quality refinement.",
      technologies: ["LangGraph", "LangChain", "Groq API", "Multi-Agent AI", "GitHub Actions", "Python", "RAG"],
      links: {
        github: "https://github.com/sutraveshashank/AgenticBlog-Engine"
      },
      highlights: [
        "Multi-Agent architecture featuring Tutorial Agent (content generation) & Validator Agent (review & feedback loops)",
        "Stateful graph-based agent orchestration designed with LangGraph",
        "Blazing-fast LLM inference integration using Groq API",
        "Automated article scheduling, dynamic topic selection, and static frontend publishing via GitHub Actions"
      ]
    },
    {
      id: "messaging-system",
      title: "Inter-Trainer Messaging System",
      subtitle: "Flask, MongoDB, Vue 3 & Vite Platform",
      category: "backend",
      featured: true,
      accuracy: "Flask + Vue 3",
      summary: "A modern full-stack inter-trainer communication platform built with Flask, MongoDB, Vue 3, Vite, and Tailwind CSS for managing course announcements, direct messaging, and subject directories.",
      description: "Designed for academic institutions and training organizations to streamline internal communication. Built with a Flask REST API backend connected to MongoDB via Flask-PyMongo, and a reactive Vue 3 (Composition API) frontend with Vite and Tailwind CSS. Features authentication, real-time trainer metrics dashboards, rich message composition with recipient selection, inbox/outbox search filtering, subjects directory, and automated MongoDB database seeding.",
      technologies: ["Python", "Flask", "MongoDB", "Vue 3", "Vite", "Tailwind CSS", "REST APIs", "CORS"],
      links: {
        github: "https://github.com/sutraveshashank/Messaging-System"
      },
      highlights: [
        "Flask REST API backend connected to MongoDB with Flask-PyMongo & CORS integration",
        "Vue 3 (Composition API) & Vite frontend styled with modern dark glassmorphism Tailwind UI",
        "Features trainer dashboards, inbox search, outbox timeline, and 1-click quick demo login",
        "Automated MongoDB database auto-seeding logic and subjects/trainers directory catalog"
      ]
    },
    {
      id: "audio-classification-model",
      title: "Spectrogram Analysis & Time-Frequency Audio Visualization",
      subtitle: "STFT, MFCC & Spectrogram Signal Processing",
      category: "aiml",
      featured: false,
      accuracy: "95.0% Accuracy",
      summary: "Audio signal processing and machine learning pipeline using STFT, MFCC, and Fast Fourier Transform (FFT) spectrogram techniques to extract time-frequency patterns and classify audio samples.",
      description: "This project transforms raw audio signals into high-resolution time-frequency visualizations using spectrogram analysis techniques. Utilizing Short-Time Fourier Transform (STFT) for localized frequency analysis, Fast Fourier Transform (FFT) for spectral composition, and Mel-Frequency Cepstral Coefficients (MFCC) for perceptually relevant sound features, this pipeline extracts features to classify audio signals with 95% accuracy.",
      technologies: ["Python", "Short-Time Fourier Transform (STFT)", "MFCC", "FFT Spectrograms", "Random Forest", "Scikit-Learn", "Librosa"],
      links: {
        github: "https://github.com/sutraveshashank/Spectrogram-Analysis-Techniques-for-Visualizing-Time-Frequency-Patterns-in-Audio"
      },
      highlights: [
        "Converts raw audio signals into high-resolution time-frequency spectrogram visualizations",
        "Applies Short-Time Fourier Transform (STFT) & Mel-Frequency Cepstral Coefficients (MFCC) feature extraction",
        "Identifies hidden audio patterns, harmonic components, and frequency characteristics",
        "Achieved 95.0% classification accuracy using Random Forest and signal processing pipelines"
      ]
    },
    {
      id: "medical-anomaly-detection",
      title: "Anomaly Detection in Medical Devices Using ML Approaches",
      subtitle: "Isolation Forest & Supervised/Unsupervised ML",
      category: "aiml",
      featured: false,
      accuracy: "Isolation Forest & ML",
      summary: "Machine learning framework to identify abnormal operational patterns in medical device continuous telemetry data, enhancing device reliability and healthcare safety.",
      description: "Medical devices generate continuous streams of telemetry data that must be monitored to ensure patient safety and proper equipment operation. This project leverages supervised and unsupervised machine learning algorithms (such as Isolation Forest and clustering techniques) to identify abnormal patterns deviating from normal behavior, enabling early fault detection and system reliability.",
      technologies: ["Python", "Scikit-learn", "Isolation Forest", "Unsupervised Learning", "Pandas", "NumPy", "Seaborn"],
      links: {
        github: "https://github.com/sutraveshashank/Anomaly-Detection-in-Medical-Devices-Using-Machine-Learning-Approaches"
      },
      highlights: [
        "Preprocessing, cleaning, and normalization of medical device telemetry data streams",
        "Implements supervised & unsupervised algorithms (Isolation Forest, clustering) for anomaly detection",
        "Extracts critical sensor features to detect early equipment malfunction and data corruption",
        "Evaluated across accuracy, precision, recall, and device anomaly visualization"
      ]
    },
    {
      id: "student-performance-analytics",
      title: "Student Performance Analytics & Dashboard",
      subtitle: "SQL + Python + Power BI",
      category: "data",
      featured: false,
      accuracy: "1,000+ Records",
      summary: "Data pipeline and interactive Power BI dashboards analyzing 1,000+ student academic records to identify actionable performance trends.",
      description: "Extracted, cleaned, and transformed 1,000+ student performance records using SQL and Pandas, establishing structured data pipelines and visually rich Power BI dashboards.",
      technologies: ["SQL", "Python", "Pandas", "NumPy", "Power BI", "Data Preprocessing"],
      links: {
        github: "https://github.com/sutraveshashank/SQL-Project"
      },
      highlights: [
        "Processed and validated 1,000+ raw student academic records",
        "Applied data cleaning, transformation, and statistical aggregation",
        "Designed executive Power BI dashboards with dynamic KPI slicers"
      ]
    }
  ],

  experience: [
    {
      role: "Application Development Intern",
      company: "NexaNova-ProTech",
      period: "Apr 2025 – Aug 2025 (5 months)",
      location: "Hyderabad, India",
      type: "Internship",
      description: "Focused on full-stack backend development, operational data processing, and API design.",
      bullets: [
        "Developed Node.js Express server with Mongoose ODM to create a comprehensive trainer and subject management system with 8+ RESTful API endpoints.",
        "Built MongoDB schema relationships and population features establishing automated referencing to streamline data retrieval.",
        "Implemented error handling, logging mechanisms, and CORS integration delivering 99%+ backend service uptime for concurrent client requests.",
        "Developed Python, Flask, SQL, and MongoDB solutions for business workflows and performed data preprocessing with Pandas and SQL."
      ]
    }
  ],

  education: [
    {
      degree: "B-Tech in Computer Science – AI & ML",
      institution: "Kommuri Pratap Reddy Institute of Technology (KPRIT)",
      period: "Aug 2023 – Jun 2026",
      location: "Hyderabad, India",
      grade: "CGPA: 8.0 / 10.0",
      details: "Specializing in Artificial Intelligence and Machine Learning. Relevant coursework: Python, C, SQL, Data Structures & Algorithms, Java, Operating Systems, Machine Learning, Deep Learning, Natural Language Processing."
    },
    {
      degree: "Diploma of Education in Mechanical Engineering",
      institution: "Govt. Polytechnic College",
      period: "June 2020 – March 2023",
      location: "India",
      grade: "Completed",
      details: "Strong foundational technical and analytical background in engineering principles and mathematics."
    }
  ],

  certifications: [
    {
      title: "AI/ML Engineer Certification",
      issuer: "SAP & Edunet Foundation",
      date: "2025",
      badge: "AI/ML Certified"
    },
    {
      title: "AI Engineer Certification",
      issuer: "One Roadmap",
      date: "2025",
      badge: "AI Specialist"
    },
    {
      title: "Data Visualisation Simulation",
      issuer: "Tata Group (TCS)",
      date: "2024",
      badge: "Empowering Business Insights"
    }
  ]
};
