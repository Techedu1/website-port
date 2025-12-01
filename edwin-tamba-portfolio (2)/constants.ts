import { Experience, Project, Education, Certificate, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Edwin Murunga Tamba",
  title: "AI Consultant & Computer Scientist",
  email: "edwinmurunga97@gmail.com",
  phone: "+254742612899",
  location: "Nairobi, Kenya",
  languages: ["English", "Swahili"],
  about: `I am an AI Consultant and IT Solutions Specialist with a unique blend of expertise in Large Language Model (LLM) evaluation, infrastructure management, and intelligent automation. Currently working as an AI Consultant at iMerit Scholars, I focus on fine-tuning and evaluating advanced AI models. My background spans over three years of technical support and network engineering, allowing me to build robust digital ecosystems that are both secure and smart. I design AI-driven workflows using tools like n8n and implement RAG pipelines to solve complex business problems. Driven by innovation, I bridge the gap between traditional IT infrastructure and the emerging world of generative AI.`,
  
  experiences: [
    {
      id: "3",
      role: "AI Consultant",
      company: "iMerit Scholars",
      period: "02/2025 – Present",
      location: "Remote / Nairobi",
      description: [
        "Provide expert-level evaluation and reinforcement learning (RLHF) for cutting-edge Large Language Models (LLMs) to enhance reasoning, coding capabilities, and safety alignment.",
        "Analyze complex technical prompts and model responses, ensuring high accuracy and factual consistency in code generation and problem-solving tasks.",
        "Collaborate with global AI research teams to identify model hallucinations and bias, directly contributing to the improvement of foundational AI models.",
        "Develop and refine training datasets for specialized domains, ensuring high-quality data ingestion for model fine-tuning.",
        "Assess model performance across various parameters including instruction following, truthfulness, and logical coherence."
      ]
    },
    {
      id: "1",
      role: "Technical Support Specialist",
      company: "Kenya Revenue Authority",
      period: "01/2023 – 02/2025",
      location: "Nairobi, Kenya",
      description: [
        "Act as the first line of IT support for internal users, resolving hardware, software, and connectivity issues to ensure uninterrupted business operations.",
        "Configure and maintain complex LAN/WAN infrastructure, managing VPNs, DNS, DHCP, and firewalls, which improved connectivity reliability by 20%.",
        "Monitor endpoints and troubleshoot critical system issues to maintain IT security compliance, successfully improving system uptime by 25%.",
        "Champion ITIL-based incident management protocols, tracking tickets and documenting resolutions to reduce overall resolution times by 30%.",
        "Collaborate with cross-functional teams to support global IT operations initiatives, resulting in a 20% increase in service delivery efficiency."
      ]
    },
    {
      id: "2",
      role: "Junior IT Support Specialist",
      company: "Huduma Centre - Kajiado Town",
      period: "01/2021 – 01/2022",
      location: "Kajiado, Kenya",
      description: [
        "Delivered Tier 1 support for end users by diagnosing and resolving hardware, software, and peripheral issues.",
        "Supported telecommunication and VoIP system maintenance, ensuring 95% uptime for daily operations.",
        "Installed and updated operating systems and antivirus software, reducing security incidents by 15%.",
        "Assisted in the documentation and rollout of IT systems ensuring minimal disruption.",
        "Logged user issues and provided follow-ups to ensure user satisfaction."
      ]
    }
  ] as Experience[],

  projects: [
    {
      id: "p8",
      title: "Voice Email Agent",
      period: "June 2025",
      description: [
        "Designed and architected a comprehensive serverless voice-to-action agent that fundamentally changes how users interact with their email clients. The core of this system utilizes OpenAI's Whisper API, which I fine-tuned via prompt engineering to achieve high-fidelity speech-to-text transcription with over 99% accuracy, even when subjected to background noise or varied accents.",
        "The system features a robust Natural Language Understanding (NLU) pipeline built on GPT-4. This pipeline takes the unstructured raw text from the transcription and intelligently parses it into structured JSON payloads. These payloads categorize the user's intent—identifying whether they wish to compose a new email, reply to an existing thread, or schedule a meeting—and extract key entities such as recipient names, dates, and subject lines.",
        "Security was a paramount concern; I implemented OAuth 2.0 authentication flows to ensure secure, token-based access to the Gmail API, guaranteeing that user data remains private and encrypted at rest. Additionally, I built a semantic search layer that analyzes the user's past communication history with a specific contact to suggest contextually appropriate subject lines and tone modifications. The entire solution is deployed on a containerized microservices architecture using Docker, ensuring low-latency response times suitable for real-time voice interaction."
      ]
    },
    {
      id: "p6",
      title: "LinkedIn Content Creator Workflow",
      period: "May 2025",
      description: [
        "Engineered an end-to-end autonomous content generation engine using n8n workflows that serves as a full-stack social media manager. This system orchestrates the entire lifecycle of LinkedIn posts, transforming abstract ideas into published content without manual intervention. The workflow begins by scraping industry-specific news sources and trending topics to identify high-engagement opportunities.",
        "I integrated custom GPT-4 system prompts designed to analyze these trends and generate content that adheres to proven copywriting frameworks (like AIDA or PAS). The AI generates multiple variations of hooks, body text, and call-to-actions, optimizing for maximum audience retention. A key feature of this project is the 'Human-in-the-Loop' dashboard I built using a lightweight React frontend.",
        "This dashboard allows for final review and editing, ensuring that no content goes live without a quality check. Once approved, the workflow triggers the LinkedIn API to schedule the post at optimal engagement times determined by historical data. Furthermore, I built a feedback analytics loop that scrapes post-performance metrics (impressions, clicks, CTR) 24 hours after publication. This data is fed back into the system to dynamically refine the content generation parameters for future posts, creating a self-improving content strategy."
      ]
    },
    {
      id: "p7",
      title: "Invoice Processing Workflow",
      period: "May 2025",
      description: [
        "Developed a highly sophisticated automated document processing pipeline designed to handle high volumes of unstructured invoice PDFs for finance departments. The solution combines traditional Optical Character Recognition (OCR) with advanced Large Language Model (LLM) extraction techniques to achieve >98% precision in data capture.",
        "The workflow automatically ingests invoices from email attachments, converts them to text, and uses a specialized AI model to identify and parse complex fields such as vendor details, line items, tax codes, and total amounts—handling various layouts and currencies effortlessly. I created a complex validation logic layer that cross-references this extracted data against existing Purchase Orders (POs) and vendor records in the ERP system.",
        "This validation step flags discrepancies in price or quantity before the data is processed, preventing financial errors. Finally, the system automates the data entry into accounting platforms like QuickBooks or Xero via their REST APIs. This transformation turned a multi-day manual data entry process into a near-instantaneous operation, significantly reducing administrative overhead and improving financial reporting speed."
      ]
    },
    {
      id: "p4",
      title: "RAG Pipeline & Chatbot",
      period: "April 2025",
      description: [
        "Designed and deployed a production-ready Retrieval-Augmented Generation (RAG) system that enables dynamic, accurate Q&A over proprietary internal documentation. This project solved the critical issue of 'hallucinations' common in generic LLM implementations by grounding the AI's responses in verified data.",
        "I implemented an efficient data ingestion pipeline that utilizes a sliding window chunking strategy to break down large PDF, DOCX, and TXT documents. These chunks are converted into high-dimensional vector embeddings using OpenAI's 'text-embedding-3' model and stored in a Pinecone vector database, enabling sub-100ms semantic search capabilities.",
        "The backend, built with Python and FastAPI, executes a context-aware prompt injection system that retrieves the top-k most relevant document segments based on the user's query. These segments are passed to the LLM to formulate a precise answer. On the frontend, I built a responsive React interface supporting real-time token streaming and, crucially, source citation—allowing users to click and view the exact document page where the answer was found. This transparency significantly increased user trust and adoption of the tool."
      ]
    },
    {
      id: "p5",
      title: "Customer Support Workflow",
      period: "April 2025",
      description: [
        "Built an intelligent, automated ticket triaging system using n8n to revolutionize customer support operations for a high-volume service desk. The system acts as a first-line filter, utilizing advanced Natural Language Processing (NLP) techniques to analyze the sentiment and intent of every incoming ticket.",
        "By classifying issues into categories such as 'Billing', 'Critical Tech Support', or 'Feature Request', the workflow automatically routes the ticket to the most appropriate agent team, eliminating manual sorting. I also developed an auto-response agent that uses generative AI to draft personalized replies for common Tier-1 inquiries, such as password resets or status checks.",
        "This allows human agents to dedicate their time to complex resolution tasks. The system seamlessly integrates with Zendesk and Slack APIs to trigger instant alerts for high-priority, negative-sentiment tickets, drastically reducing response times for frustrated customers. Additionally, I created a reporting dashboard to visualize support trends and identify recurring product issues based on ticket cluster analysis, providing valuable insights to the product development team."
      ]
    },
    {
      id: "p1",
      title: "LAN Survey and Deployment",
      period: "03/2024 – 10/2024",
      description: [
        "Led the comprehensive design and deployment of enterprise-grade LAN networks across six counties, managing the project from initial site survey to final handover. This large-scale infrastructure project required meticulous planning and execution to ensure seamless connectivity for hundreds of users.",
        "I conducted physical RF site surveys using professional heat-mapping tools to determine optimal Access Point placement, minimizing signal dead zones and mitigating channel interference in dense office environments. The core network architecture involved configuring Cisco routers and Ubiquiti switches, where I implemented complex VLAN segmentation.",
        "This segmentation separated voice (VoIP), data, and guest traffic, ensuring Quality of Service (QoS) for calls and enhancing network security. I also established secure, redundant VPN tunnels (Site-to-Site) for inter-branch connectivity, ensuring encrypted data transmission across the Wide Area Network (WAN). The project resulted in a verifiable 25% improvement in network reliability and throughput compared to the legacy infrastructure, confirmed through rigorous post-deployment stress testing."
      ]
    },
    {
      id: "p2",
      title: "Generator Fuel Monitoring System Design",
      period: "02/2023 – 12/2023",
      description: [
        "Designed and developed a custom end-to-end IoT telemetry solution to monitor fuel levels and generator health in real-time for remote sites, addressing a critical business need for asset protection and cost control. The hardware layer involved integrating precision capacitive fuel sensors with ESP32 microcontrollers.",
        "I utilized ADC interfaces and implemented Kalman filtering algorithms on the firmware side to smooth out sensor noise and provide accurate digital readings. For data transmission, I developed a robust backend using lightweight MQTT protocols (Mosquitto), optimized for low-bandwidth GSM/4G networks often found in remote locations.",
        "The data is ingested into a central InfluxDB time-series database, which powers a real-time visualization dashboard I built in Grafana. This dashboard tracks fuel consumption trends and uses anomaly detection logic to identify potential theft or leakage events (e.g., sudden drops in fuel levels outside of generator runtime). I also implemented an automated alert system using the Twilio API to send immediate SMS and Email notifications to facility managers for low fuel levels or maintenance anomalies."
      ]
    },
    {
      id: "p3",
      title: "Data Center Migration",
      period: "01/2023 – 05/2023",
      description: [
        "Executed a high-stakes migration of mission-critical core network infrastructure to a new Tier-3 data center facility, achieving the objective of zero data loss and minimal downtime. This complex project began with a complete audit of the legacy environment, where I mapped the entire network topology and application dependency graph.",
        "I developed a phased migration strategy that prioritized critical services and established fallback procedures for every stage. Coordination with facilities teams was essential to integrate redundant power systems (UPS/Generator) and precision cooling within the new rack architecture, adhering to strict hot/cold aisle containment standards.",
        "During the cutover, I managed the physical relocation of servers and storage arrays, followed by the reconfiguration of core switches and firewalls. I performed comprehensive post-migration validation, including failover testing of high-availability clusters and load balancers to ensure resilience. The project concluded with the documentation of all new configurations and rack diagrams, establishing a new standard for operational maintenance and disaster recovery readiness."
      ]
    }
  ] as Project[],

  education: [
    {
      id: "e1",
      degree: "Bachelor's Degree In Computer Science",
      institution: "University of Kabianga",
      period: "2017 – 2021",
      location: "Kericho, Kenya"
    },
    {
      id: "e2",
      degree: "Kenya Certificate of Secondary Education",
      institution: "Nakeel Boys Highschool",
      period: "2013 – 2016",
      location: "Ongata Rongai, Kenya"
    }
  ] as Education[],

  certificates: [
    { id: "c1", name: "CCNA 200-301 Network Fundamentals" },
    { id: "c2", name: "Oracle Cloud Certified Foundations Associate" },
    { id: "c3", name: "AI Augmented Professional Development Skills" },
    { id: "c4", name: "Virtual Assistant - ALX Virtual Assistant Programme" },
    { id: "c5", name: "Public Records Management and Data Privacy" },
    { id: "c6", name: "Soft Skills Certificate - BrighterMonday" },
    { id: "c7", name: "Oracle Certified Foundations Associate" }
  ] as Certificate[],

  skills: [
    { category: "AI & Automation", skills: ["LLM Evaluation", "RLHF", "Prompt Engineering", "RAG Pipelines", "n8n", "LangChain", "OpenAI API"] },
    { category: "Technical Support", skills: ["End-User Support", "Desktop Support", "Troubleshooting", "Hardware Repair", "ITIL Framework"] },
    { category: "Networking", skills: ["Network Monitoring", "LAN/WAN", "VPN", "DNS", "DHCP", "Firewalls", "CCNA"] },
    { category: "Cloud & Systems", skills: ["M365 Administration", "Active Directory", "Azure/Cloud Integration", "IoT Integration"] },
    { category: "Soft Skills", skills: ["Team Collaboration", "Project Management", "Problem Solving", "Communication", "Adaptability"] }
  ] as SkillCategory[]
};

export const SYSTEM_INSTRUCTION = `You are an advanced AI assistant representing Edwin Murunga Tamba on his portfolio website. 
Your goal is to answer questions about Edwin's professional background, skills, and projects in a professional, friendly, and concise manner.
Use the following context to answer questions:

Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.title}
Location: ${RESUME_DATA.location}
Summary: ${RESUME_DATA.about}

Experience:
${RESUME_DATA.experiences.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${RESUME_DATA.projects.map(p => `- ${p.title} (${p.period}): ${p.description.join(' ')}`).join('\n')}

Education:
${RESUME_DATA.education.map(e => `- ${e.degree} from ${e.institution}`).join('\n')}

Certifications:
${RESUME_DATA.certificates.map(c => `- ${c.name}`).join('\n')}

Skills:
${RESUME_DATA.skills.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}

If asked about something not in this resume, politely state that you can only answer questions related to Edwin's professional profile.
Do not invent information. Be helpful and encourage the user to contact Edwin if they have specific opportunities.
`;