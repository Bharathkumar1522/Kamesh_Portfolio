export const personalInfo = {
  name: "V. Kamesh",
  tagline: "Java Backend & Systems Developer",
  status: "Seeking Entry-Level Java Developer Role",
  location: "Nagalapuram, Andhra Pradesh, India",
  phone: "6302373105",
  formattedPhone: "+91 6302373105",
  email: "kamesh0818@gmail.com",
  linkedIn: "https://linkedin.com/in/v-kamesh",
  linkedInHandle: "linkedin.com/in/v-kamesh",
  gitHub: "https://github.com/Kamesh0818",
  gitHubHandle: "github.com/Kamesh0818",
  resumePath: "/Kamesh-Resume.pdf",
  portraitPath: "/kamesh-portrait.jpg",
  summary: "Detail-oriented Java Developer (MCA CGPA 8.48) engineering high-reliability backend services, military-grade communication gateways, and distributed blockchain protocols.",
};

export const metrics = [
  {
    label: "MCA Academic CGPA",
    value: "8.48",
    detail: "Sri Venkateswara College of Engineering",
    category: "Academic Pedigree",
  },
  {
    label: "Clearance Tiers",
    value: "3+",
    detail: "Officer-level RBAC in Aegis Gateway",
    category: "Access Security",
  },
  {
    label: "Stakeholder Nodes",
    value: "5",
    detail: "Seed-to-Retailer on Binance Smart Chain",
    category: "Distributed Consensus",
  },
  {
    label: "Security Test Suites",
    value: "15+",
    detail: "Validated CSP policies & XSS mitigation",
    category: "Quality Assurance",
  },
];

export const skillsData = [
  {
    category: "Languages & Core",
    items: [
      { name: "Java", level: "Advanced", desc: "OOP • Collections • Multithreading • Streams" },
      { name: "Python", level: "Proficient", desc: "Scripting • Web3 • Data Handling" },
      { name: "JavaScript", level: "Intermediate", desc: "ES6+ • DOM APIs • Async/Await" },
    ],
  },
  {
    category: "Enterprise Java & Backend",
    items: [
      { name: "Java Servlets", level: "Advanced", desc: "HTTP Lifecycle • Sessions • Security Filters" },
      { name: "JDBC", level: "Advanced", desc: "Connection Pooling • PreparedStatements • SQL" },
      { name: "REST APIs", level: "Proficient", desc: "RESTful Endpoints • JSON Payloads • HTTP Semantics" },
      { name: "OOP Architecture", level: "Advanced", desc: "SOLID Principles • Design Patterns • Clean Architecture" },
    ],
  },
  {
    category: "Security & Distributed",
    items: [
      { name: "Content Security Policy (CSP)", level: "Advanced", desc: "JSCSP Injection • XSS Elimination • Whitelisting" },
      { name: "Binance Smart Chain (BSC)", level: "Proficient", desc: "Solidity Contracts • EVM • State Machines" },
      { name: "IPFS Storage", level: "Proficient", desc: "Content Hashing • Cryptographic CIDs" },
      { name: "Web3.py / Web3.js", level: "Proficient", desc: "RPC Calls • Event Subscriptions • Signatures" },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "MySQL", level: "Advanced", desc: "Normalized Schemas • Foreign Keys • Query Optimization" },
      { name: "Data Analytics", level: "Proficient", desc: "Data Cleaning • Statistical Modeling • Metrics" },
    ],
  },
  {
    category: "Toolchains & Practices",
    items: [
      { name: "IntelliJ IDEA & VS Code", level: "Advanced", desc: "Enterprise Java Debugging • Development" },
      { name: "Git & GitHub", level: "Advanced", desc: "Version Control • Branching • PR Workflows" },
      { name: "Data Structures & Algorithms", level: "Proficient", desc: "Trees • Stacks • Queues • Sorting Algorithms" },
      { name: "Agile Practices", level: "Proficient", desc: "Sprint Delivery • Code Refactoring • Unit Testing" },
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
    badge: "Enterprise Defense System",
    summary: "Military gateway communication platform enforcing granular multi-tier officer clearance, strict Content Security Policy (JSCSP) headers, and parameterized transaction persistence.",
    highlights: [
      "Multi-Tier Clearance RBAC: Built 3+ officer privilege levels (Commandant, Intelligence Officer, Field Operative) with session-isolated access in Java Servlets.",
      "Defense-Grade CSP Policy: Injected strict JSCSP headers eliminating 100% of Cross-Site Scripting (XSS) attack vectors and unauthorized script executions.",
      "Hardened Persistence: Validated 15+ automated security test suites and secured MySQL transactions using parameterized JDBC PreparedStatements to prevent SQL injection."
    ],
    techStack: ["Java", "Java Servlets", "JDBC", "REST APIs", "MySQL", "CSP Security"],
    architecturalSpecs: {
      securityModel: "Multi-tiered RBAC + Strict JSCSP Header Injection",
      databaseModel: "Normalized MySQL with parameterized connection lifecycle",
      concurrency: "Multi-threaded servlet request handling with session isolation",
      clearanceTiers: [
        { tier: "Level 1: Field Operative", permission: "Send tactical alerts, receive encrypted regional dispatches" },
        { tier: "Level 2: Intelligence Officer", permission: "Access surveillance logs, decrypt tactical intelligence streams" },
        { tier: "Level 3: Strategic Command", permission: "Full system telemetry, cryptographic key rotation, network kill-switch" }
      ]
    }
  },
  {
    id: "agrichain",
    title: "Blockchain-Based Supply Chain for Indian Agriculture",
    role: "Final Year Capstone Project",
    organization: "Sri Venkateswara College of Engineering",
    timeline: "2025 – 2026",
    badge: "Decentralized Provenance",
    summary: "Decentralized provenance platform connecting 5 key agricultural stakeholder tiers using Binance Smart Chain smart contracts and IPFS for tamper-proof accountability.",
    highlights: [
      "Automated State Machine: Engineered EVM smart contracts on Binance Smart Chain to eliminate predatory intermediaries and automate handoffs.",
      "Decentralized Storage: Leveraged IPFS content-addressable storage (CID) for immutable crop batch quality and laboratory certificates.",
      "5-Tier Verification: Synchronized Seed Companies, Farmers, Processors, Distributors, and Retailers with end-to-end QR provenance audit trails."
    ],
    techStack: ["Binance Smart Chain", "Solidity", "IPFS", "Python", "Web3.py", "JavaScript"],
    architecturalSpecs: {
      consensus: "Proof of Staked Authority (BSC EVM)",
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
    role: "Systems Architect & Developer",
    organization: "Independent Engineering Project",
    timeline: "Production Deployment",
    badge: "Offline-First Fintech",
    liveUrl: "https://smartfinance-sepia.vercel.app/",
    summary: "Offline-ready personal finance platform built around ledger principles, client-side localStorage persistence, real-time threshold calculations, and Chart.js analytics.",
    highlights: [
      "Offline-First Engine: Architected 100% client-side data persistence in browser localStorage, delivering instant 0ms transaction read/write latency with complete data privacy.",
      "Dynamic Budget Guard: Built automated monthly expenditure algorithms with live visual threshold warnings at 80% capacity and 100% budget limit.",
      "Visual Analytics & API Ready: Integrated interactive financial graphs via Chart.js with a schema designed for drop-in Spring Boot + MySQL REST API synchronization."
    ],
    techStack: ["JavaScript (ES6+)", "Chart.js", "localStorage API", "HTML5", "CSS3 Tokens"],
    architecturalSpecs: {
      storageEngine: "Browser localStorage with JSON relational serialization",
      currency: "Indian Rupee (INR ₹) with tabular-nums formatting",
      features: [
        { name: "Offline Ledger", desc: "100% operational without network connection" },
        { name: "Live Budget Guard", desc: "Visual alerts at 80% warning and 100% limit" },
        { name: "Savings Goals", desc: "Automated progress tracking toward milestone dates" },
        { name: "API Ready", desc: "Designed for Spring Boot + MySQL drop-in sync" }
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
      "Developed core Java Servlets and JDBC components for the Aegis Gateway secure communication platform.",
      "Enforced strict Content Security Policy (CSP) headers and validated 15+ automated security test suites."
    ],
    skills: ["Java", "Servlets", "JDBC", "REST APIs", "MySQL", "CSP Security"]
  },
  {
    type: "internship",
    title: "Data Analytics Intern",
    company: "Internshala",
    period: "17 Jul 2026 – 18 Aug 2026",
    location: "Industry Program",
    details: [
      "Executed data cleaning, exploratory analysis, and hypothesis validation across diverse commercial datasets.",
      "Built automated statistical reporting models and metric dashboards using Python analytical toolchains."
    ],
    skills: ["Data Analytics", "Python", "Data Cleaning", "Statistical Modeling"]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sri Venkateswara College of Engineering",
    period: "2024 – 2026",
    score: "CGPA: 8.48 / 10",
    badge: "First Class with Distinction",
    details: "Advanced Java, Distributed Systems, Relational Database Engineering, and Application Security."
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Vedavyasa Degree College",
    period: "2021 – 2024",
    score: "CGPA: 7.90 / 10",
    badge: "First Class",
    details: "Computer Science, Algorithmic Thinking, Data Structures, and Mathematics."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vedavyasa Junior College",
    period: "2019 – 2021",
    score: "Marks: 710",
    badge: "Board Certified",
    details: "Mathematics, Physics, and Chemistry."
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
