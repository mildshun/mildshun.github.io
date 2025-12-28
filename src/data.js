export const NAV = [
  { id: "home", label: "Home", path: "/" },
  { id: "experience", label: "Work Experience", path: "/experience" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "education", label: "Education", path: "/education" },
  { id: "certification", label: "Certification", path: "/certification" },
];

export const GREETINGS = [
  "Hello, I'm",
  "你好，我是",
  "Halo, saya",
  "Hola, soy",
  "Hei, olen",
  "Hello, I'm",
];

export const projects = [
  {
    title: "Automating Anime Portrait to Multi-Layered Parts Decomposition",
    drivelink:
      "https://drive.google.com/drive/folders/1bvwiFWTXXRWISg-c1_kTaM9Sxgx-flPP?usp=drive_link",
    slidelink:
      "https://drive.google.com/file/d/1QQ3ax-IAB3ObZkFF-kpvYqRcaMeg_Jrl/view?usp=drive_link",
    date: "Feb 2024 - May 2024",
    tags: "Computer Vision \u00b7 Image Segmentation \u00b7 Research",
    summary:
      "Automated pipeline for decomposing anime-style portraits into multi-layered, editable components for dataset creation and creative workflows.",
  },
  {
    title: "StyleSpire: Stable Diffusion Inpainting for Virtual Try-On",
    drivelink:
      "https://drive.google.com/drive/folders/1GphM3ra2sof3Mgrzg3UHSD-sGO8l8D6Q?usp=drive_link",
    slidelink:
      "https://drive.google.com/file/d/19S6iARa2KOex2tWCI511eJuBUcuYUq3F/view?usp=drive_link",
    date: "Sep 2023 - Dec 2023",
    tags: "Computer Vision \u00b7 AI \u00b7 Research",
    summary:
      "A virtual fashion try-on system that applies new outfits while preserving pose and structure using inpainting and parsing.",
  },
  {
    title: "Market Basket Analysis for 7-Eleven",
    drivelink:
      "https://drive.google.com/drive/folders/1B2cUB-eOsPHX-f_xOraGbqb7lynwUJsl?usp=drive_link",
    slidelink:
      "https://drive.google.com/file/d/1M21y4i6HPEdl6cfoTPt5ePyKToSnnnb_/view?usp=drive_link",
    date: "May 2023 - Jun 2023",
    tags: "Data Mining \u00b7 Data Analysis",
    summary:
      "RFM and FP-Growth analyses to discover cross-sell opportunities and optimize inventory.",
  },
  {
    title:
      "Optimizing Machine Learning Hyperparameters with Evolutionary Algorithm",
    drivelink:
      "https://drive.google.com/drive/folders/13hFUjrXMOddYKdhl9LDMKT2AhQEtsyo8?usp=drive_link",
    slidelink:
      "https://drive.google.com/file/d/1tj8nrzssvyBzusljSaOvYHTl--c7dW0p/view?usp=drive_link",
    date: "Feb 2023 - Jun 2023",
    tags: "Machine Learning \u00b7 Data Analysis \u00b7 Research",
    summary:
      "Comparative study using evolutionary hyperparameter optimization for Decision Trees and Linear SVMs on breast cancer and medical insurance datasets.",
  },
  {
    title: "Sentiment Classification Using Averaged Word2Vec",
    drivelink:
      "https://drive.google.com/drive/folders/1X3TPDKgFdOASOW42-s5H6nYOpPp_sKbh?usp=drive_link",
    slidelink:
      "https://drive.google.com/file/d/121wUlKnVV_6mgYaS_ahadID25wCpxCot/view?usp=drive_link",
    date: "Sep 2022 - Dec 2022",
    tags: "Natural Language Processing \u00b7 Research",
    summary:
      "Averaged Word2Vec embeddings with dense networks for efficient sentiment classification.",
  },
  {
    title: "Two-Step SQL Injection Prevention Using LSTM",
    drivelink:
      "https://drive.google.com/drive/folders/1ScegQKPS12LJkiFfEHxkmj6zqqZoWmJ8?usp=drive_link",
    slidelink:
      "https://drive.google.com/file/d/1DpiKLr5sS-QQvDowDqBcQCGiZe7Bh10T/view?usp=drive_link",
    date: "Sep 2022 - Dec 2022",
    tags: "Cybersecurity \u00b7 Deep Learning \u00b7 Research",
    summary:
      "Two-step detection combining keyword filtering and LSTM sequence classification with high F1 scores.",
  },
];

export const experiences = [
  {
    role: "Backend Developer",
    company: "TAO Digital Taiwan",
    location: "Taipei, Taiwan",
    date: "Feb 2025 - Current",
    bullets: [
      "Built Databricks (Spark/Delta Lake) batch pipelines to sync and update records with third-party platforms.",
      "Processed millions of records with validation, multi-field formatting, and correctness checks.",
      "Implemented Java Spring Boot Kafka listeners and authored unit tests for reliable processing.",
    ],
  },
  {
    role: "Software Developer",
    company: "Broalux Taiwan Limited",
    location: "Taipei, Taiwan",
    date: "Sept 2024 - Feb 2025",
    bullets: [
      "Built microservices for device-server communication for an IoT telemetry project.",
      "Automated deployments with Ansible and Kubernetes; implemented Grafana dashboards.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Pegatron Corporation",
    location: "Taipei, Taiwan",
    date: "Jun 2024 - Aug 2024",
    bullets: [
      "Developed a chatbot AI agent and backend APIs for user-agent communication.",
      "Project won first place in the 2024 Pegatron Summer Internship competition.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "CLV Mitra Indonesia",
    location: "Batam, Indonesia",
    date: "Sept 2021 - Aug 2024",
    bullets: [
      "Delivered delivery-integration web app with real-time order tracking and menu uploads.",
      "Built a queue web board and OCR microservice for automated document scanning.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Remote Worker Indonesia",
    location: "Bandung, Indonesia",
    date: "Jun 2020 - Aug 2020",
    bullets: [
      "Implemented CRUD features for an education-sector information storage app using Flutter.",
    ],
  },
];

export const certs = [
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    issued: "09 Aug 2021",
    expires: "09 Aug 2024",
    link: "https://www.credential.net/fa512e37-9008-42a4-98cd-9b67f5519ca6#acc.KUSTlsmZ",
  },
  {
    title: "Mathematics for Machine Learning",
    issuer: "Coursera",
    issued: "25 Mar 2021",
    expires: null,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/T2CCW2HQZWLB",
  },
  {
    title: "TensorFlow: Data and Deployment",
    issuer: "Coursera",
    issued: "14 Mar 2021",
    expires: null,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HEHQKFCS6NNX",
  },
  {
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    issued: "13 Apr 2021",
    expires: null,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/E6KKXPH8DTTD",
  },
  {
    title: "Google IT Support",
    issuer: "Coursera",
    issued: "13 Mar 2021",
    expires: null,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3KHBE356EZUL",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera",
    issued: "14 Mar 2021",
    expires: null,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MPBHW3ZM8YQA",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    issued: "01 Dec 2025",
    expires: null,
    link: "https://skillbuilder.aws/a75db95c-1f42-4dad-8bdf-f2209658efcd",
  },
  {
    title: "Data Engineering on AWS - Foundations",
    issuer: "AWS Skill Builder",
    issued: "01 Dec 2025",
    expires: null,
    link: "https://skillbuilder.aws/5b4a1f1a-c4ad-43d8-a091-46dbc7d6b84a",
  },
  {
    title: "Developing Generative Artificial Intelligence Solutions",
    issuer: "AWS Skill Builder",
    issued: "01 Dec 2025",
    expires: null,
    link: "https://skillbuilder.aws/f8a2cfc6-a8a8-44c1-afc9-8db231c92c43",
  },
  {
    title: "Fundamentals of Analytics on AWS - Part 1",
    issuer: "AWS Skill Builder",
    issued: "01 Dec 2025",
    expires: null,
    link: "https://skillbuilder.aws/434a968c-0f73-4d55-bb05-ca7e5457ed42",
  },
  {
    title: "Fundamentals of Generative AI",
    issuer: "AWS Skill Builder",
    issued: "01 Dec 2025",
    expires: null,
    link: "https://skillbuilder.aws/7a1eb7ae-7f51-4cb6-a3c5-a41914ab312a",
  },
  {
    title: "Introduction to Generative AI - Art of the Possible",
    issuer: "AWS Skill Builder",
    issued: "01 Dec 2025",
    expires: null,
    link: "https://skillbuilder.aws/022b2e86-9e4b-40ed-b6a9-d08b00dfe819",
  },
];
