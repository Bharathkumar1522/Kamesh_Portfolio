export const personalInfo = {
  name: "V. Kamesh",
  tagline: "Java Backend & Systems Developer",
  status: "Seeking Entry-Level Java Developer Role",
  location: "Nagalapuram, Andhra Pradesh - 517589, India",
  phone: "6302373105",
  formattedPhone: "+91 6302373105",
  email: "kamesh0818@gmail.com",
  linkedIn: "https://linkedin.com/in/v-kamesh",
  linkedInHandle: "linkedin.com/in/v-kamesh",
  gitHub: "https://github.com/Kamesh0818",
  gitHubHandle: "github.com/Kamesh0818",
  resumePath: "/Kamesh-Resume.pdf",
  portraitPath: "/kamesh-portrait.jpg",
  summary: "Detail-oriented MCA graduate (CGPA 8.48) with a strong foundation in Java, Object-Oriented Programming (OOP), REST APIs, Servlets, and JDBC. Experienced in Git/GitHub version control, secure web application development, blockchain-based systems, and cybersecurity through academic projects and corporate internships. Dedicated to engineering reliable, secure, high-concurrency enterprise services.",
};

export const metrics = [
  {
    label: "MCA Academic CGPA",
    value: "8.48",
    detail: "Sri Venkateswara College of Engineering",
    category: "Academic Excellence",
  },
  {
    label: "Clearance Tiers",
    value: "3+",
    detail: "Officer-level RBAC in Aegis Gateway",
    category: "Security Engineering",
  },
  {
    label: "Stakeholder Nodes",
    value: "5",
    detail: "Seed-to-Retailer on Binance Smart Chain",
    category: "Decentralized Architecture",
  },
  {
    label: "Security Test Cases",
    value: "15+",
    detail: "Validated CSP rules & XSS intrusion blocks",
    category: "Quality Assurance",
  },
];

export const skillsData = [
  {
    category: "Languages & Core",
    items: [
      { name: "Java", level: "Advanced", desc: "Core OOP, Collections, Multithreading, Exception Handling, Streams" },
      { name: "Python", level: "Proficient", desc: "Scripting, Web3 integration, Data handling & algorithms" },
      { name: "JavaScript", level: "Intermediate", desc: "ES6+, DOM Manipulation, Async/Await, Web3 API interop" },
    ],
  },
  {
    category: "Enterprise Java & Backend",
    items: [
      { name: "Java Servlets", level: "Advanced", desc: "HTTP request-response lifecycle, session management, security filters" },
      { name: "JDBC", level: "Advanced", desc: "Connection pooling, PreparedStatement, SQL transaction management" },
      { name: "REST APIs", level: "Proficient", desc: "RESTful architecture, JSON payloads, HTTP status semantics, API testing" },
      { name: "OOP & Architecture", level: "Advanced", desc: "SOLID principles, Design Patterns, Modular decoupling, Clean Code" },
    ],
  },
  {
    category: "Security & Distributed Systems",
    items: [
      { name: "Content Security Policy (CSP)", level: "Advanced", desc: "JSCSP implementation, XSS mitigation, script-src whitelisting" },
      { name: "Binance Smart Chain (BSC)", level: "Proficient", desc: "Solidity smart contract execution, gas optimization, blockchain state" },
      { name: "IPFS Storage", level: "Proficient", desc: "Decentralized content-addressable storage, cryptographic CID hashing" },
      { name: "Web3.py / Web3.js", level: "Proficient", desc: "Smart contract RPC calls, transaction signing, blockchain event listeners" },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "MySQL", level: "Advanced", desc: "Relational schema design, indexing, foreign key constraints, complex joins" },
      { name: "Data Analytics", level: "Proficient", desc: "Exploratory data analysis, dataset cleaning, statistical reporting" },
    ],
  },
  {
    category: "Toolchains & Practices",
    items: [
      { name: "IntelliJ IDEA & VS Code", level: "Advanced", desc: "Primary IDEs for enterprise Java debugging & Web3 development" },
      { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching strategies, PR workflows, code reviews" },
      { name: "Data Structures & Algorithms", level: "Proficient", desc: "Arrays, Linked Lists, Trees, Stacks, Queues, Sorting & Searching" },
      { name: "Agile Methodology", level: "Proficient", desc: "Sprint planning, iterative delivery, code refactoring, test-driven mindset" },
    ],
  },
];

export const projectsData = [
  {
    id: "aegis-gateway",
    title: "Aegis Gateway – Secure Military Communication Platform",
    role: "Java Developer Intern",
    organization: "Gradtwin Services",
    timeline: "Jan 2026 – Apr 2026",
    badge: "Enterprise Security & Java",
    summary: "A robust Java-based secure communication web platform designed for military gateway protection and real-time officer-level messaging, enforcing strict cryptographic defense and access boundaries.",
    highlights: [
      "Architected a Java-based secure gateway web application supporting multiple concurrent officer roles with isolated privilege boundaries.",
      "Engineered strict Content Security Policy (CSP/JSCSP) rules to eliminate Cross-Site Scripting (XSS) attack vectors and block malicious script injection attempts.",
      "Implemented a 3+ tier officer access hierarchy (Commandant, Intelligence Officer, Field Operative) with granular authentication policies.",
      "Designed and executed 15+ rigorous unit and integration test suites validating end-to-end data integrity, session encryption, and access revocation.",
      "Optimized MySQL database transactions via JDBC PreparedStatements, preventing SQL injection and ensuring low-latency message retrieval."
    ],
    techStack: ["Java", "Servlets", "JDBC", "REST APIs", "MySQL", "JavaScript", "HTML5", "CSS3", "CSP Security"],
    architecturalSpecs: {
      securityModel: "Multi-tiered RBAC + Strict JSCSP Header Injection",
      databaseModel: "Normalized MySQL with parameterized connection lifecycle",
      concurrency: "Multi-threaded servlet request handling with session isolation",
      clearanceTiers: [
        { tier: "Level 1: Field Operative", permission: "Send tactical alerts, receive directed encrypted broadcasts" },
        { tier: "Level 2: Intelligence Officer", permission: "Access reconnaissance streams, decrypt regional traffic logs" },
        { tier: "Level 3: Strategic Command", permission: "Full system telemetry, cryptographic key rotation, network kill-switch" }
      ]
    }
  },
  {
    id: "agrichain",
    title: "Blockchain-Based Supply Chain for Indian Agriculture",
    role: "MCA Final Year Academic Capstone Project",
    organization: "Sri Venkateswara College of Engineering",
    timeline: "Academic Year 2025 – 2026",
    badge: "Distributed Ledger & IPFS",
    summary: "A decentralized agricultural provenance and supply chain platform connecting 5 key stakeholder tiers using Binance Smart Chain smart contracts and IPFS for tamper-proof accountability.",
    highlights: [
      "Engineered an automated supply chain state machine on Binance Smart Chain (BSC) smart contracts, reducing dependence on predatory intermediaries.",
      "Built tamper-proof decentralized document storage leveraging InterPlanetary File System (IPFS) for batch quality certificates and lab assays.",
      "Connected 5 distinct supply chain actors: Seed Companies, Farmers, Food Processors, Logistics Distributors, and Retailers into a single immutable ledger.",
      "Employed Web3.py and Web3.js to orchestrate remote RPC calls, automated event subscriptions, and cryptographic wallet signatures.",
      "Conducted comprehensive unit, integration, and system testing validating contract execution across all state transitions from seed dispatch to retail checkout."
    ],
    techStack: ["Python", "Binance Smart Chain (BSC)", "Solidity", "IPFS", "Web3.py", "Web3.js", "JavaScript"],
    architecturalSpecs: {
      consensus: "Proof of Staked Authority (BSC Testnet/Mainnet EVM)",
      storage: "IPFS distributed hashing (CID) for off-chain certificates",
      stakeholderTiers: [
        { role: "1. Seed Companies", action: "Register certified seed lot batches with genetic purity CIDs on IPFS" },
        { role: "2. Farmers", action: "Log cultivation milestones, organic fertilizers used, and harvest timestamp" },
        { role: "3. Processors", action: "Verify agricultural quality grade and append milling/packaging data" },
        { role: "4. Distributors", action: "Record transit temperature, custody transfer, and geo-checkpoint telemetry" },
        { role: "5. Retailers & Consumers", action: "Scan immutable QR verification code to view complete provenance audit trail" }
      ]
    }
  },
  {
    id: "smartfinance",
    title: "SmartFinance – Offline Personal Finance & Ledger Platform",
    role: "Full-Stack Frontend & Systems Architect",
    organization: "Independent Engineering Project",
    timeline: "Live Production Deployment",
    badge: "Live Deployment • Offline-First",
    liveUrl: "https://smartfinance-sepia.vercel.app/",
    summary: "A high-performance, offline-ready personal finance web application built around ledger principles, featuring client-side persistence in localStorage, income & expense classification, monthly budget progress thresholds, savings goal trackers, and interactive Chart.js financial analytics.",
    highlights: [
      "Engineered an offline-first architecture utilizing browser localStorage for complete client-side data persistence, zero-latency transaction updates, and complete data privacy.",
      "Built comprehensive ledger management for tracking income and expenses with categorical tagging, payment method indexing (UPI, Cards, Net Banking, Cash), and date sorting.",
      "Implemented dynamic monthly budgeting algorithms with real-time expenditure thresholds (Under Budget, Warning threshold at 80%, Exceeded threshold at 100%).",
      "Designed interactive savings goal trackers with target timelines, progress bars, and automated milestone completion calculations.",
      "Integrated interactive data visualizations with Chart.js and crafted a clean, distraction-free ledger typography with dual Light/Dark theme support.",
      "Architected the client-side data model to enable seamless future drop-in REST API synchronization with a Spring Boot & MySQL backend."
    ],
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3 / Custom Tokens", "Chart.js", "localStorage API", "Vercel Deployment"],
    architecturalSpecs: {
      storageEngine: "Browser localStorage with JSON relational serialization",
      currency: "Indian Rupee (INR ₹) with tabular-nums formatting",
      features: [
        { name: "Offline-First Ledger", desc: "100% operational without network connection" },
        { name: "Live Budget Guard", desc: "Visual thresholds at 80% and 100% capacity" },
        { name: "Savings Milestones", desc: "Automated progress tracking toward target dates" },
        { name: "Backend Ready", desc: "Designed for Spring Boot + MySQL REST API drop-in" }
      ]
    }
  }
];

export const experienceData = [
  {
    type: "internship",
    title: "Java Developer Intern",
    company: "Gradtwin Services",
    period: "27 Jan 2026 – 28 Apr 2026",
    location: "Corporate Internship",
    details: [
      "Built the core backend for the Aegis Gateway secure communication platform.",
      "Engineered robust Java Servlets and JDBC components for mission-critical message routing.",
      "Enforced CSP security headers, multi-tier officer clearance, and executed 15+ automated test suites."
    ],
    skills: ["Java", "Servlets", "JDBC", "REST APIs", "MySQL", "Cybersecurity", "CSP"]
  },
  {
    type: "internship",
    title: "Data Analytics Intern",
    company: "Internshala (Online Platform)",
    period: "17 Jul 2026 – 18 Aug 2026",
    location: "Virtual Industry Program",
    details: [
      "Completed an intensive industry-certified Data Analytics training curriculum.",
      "Mastered data cleaning, exploratory analysis, hypothesis validation, and dashboard metrics on diverse commercial datasets.",
      "Applied statistical modeling techniques to extract operational insights and automate report generation."
    ],
    skills: ["Data Analytics", "Python", "Data Cleaning", "Statistical Modeling", "Exploratory Data Analysis"]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sri Venkateswara College of Engineering",
    period: "2024 – 2026",
    score: "CGPA: 8.48 / 10",
    badge: "First Class with Distinction",
    details: "Specialized in Advanced Java, Object-Oriented Software Engineering, Distributed Systems, Database Management Systems, and Web Application Security."
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Vedavyasa Degree College",
    period: "2021 – 2024",
    score: "CGPA: 7.90 / 10",
    badge: "First Class",
    details: "Core coursework in Computer Science, Mathematics, Algorithmic Thinking, Data Structures, and Relational Database Systems."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vedavyasa Junior College",
    period: "2019 – 2021",
    score: "Marks: 710",
    badge: "Board Certified",
    details: "Focused on Mathematics, Physics, and Chemistry, establishing strong quantitative reasoning and problem-solving foundations."
  }
];

export const certificationsData = [
  {
    title: "Java Development Internship Credential",
    issuer: "Gradtwin Services",
    focus: "Enterprise Java, Servlets, JDBC, Security Policy & Testing",
    type: "Industry Practical Certification"
  },
  {
    title: "Certified Data Analytics Specialization",
    issuer: "Internshala Online Platform",
    focus: "Data Exploration, Analytics Toolchains & Practical Modeling",
    type: "Professional Verification"
  }
];
