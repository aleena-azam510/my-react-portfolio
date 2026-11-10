
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  motion, AnimatePresence, useReducedMotion, useScroll, useSpring, useTransform
} from 'framer-motion';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness,
  CheckCircle2, ChevronDown, Code2, Database, ExternalLink, Github, GraduationCap,
  Layers3, Linkedin, Mail, Menu, Microscope, Network, ShieldCheck, Sparkles, X,
  Cpu, Workflow, Globe2, Activity, GitMerge, Scan, Download, Copy, Check, Timer
} from 'lucide-react';
import Scene from './Scene.jsx';

const profileUrl = 'https://www.linkedin.com/in/aleena-azam-321780322/';
const githubUrl = 'https://github.com/aleena-azam510';
const email = 'aleenaazamchandio12@gmail.com';
const resumeUrl = '/Aleena-Azam-Resume.pdf';

const experiences = [
  {
    role: 'Application Implementation & Technical Support Engineer',
    company: 'Liaquat University of Medical and Health Sciences',
    type: 'Full-time · On-site',
    date: 'Jan 2026 – Nov 2026',
    place: 'Jamshoro, Sindh, Pakistan',
    points: [
      'Supported implementation, configuration, testing and continuous improvement of enterprise academic applications, including SIM, Moodle LMS and the TAO Assessment Platform.',
      'Worked with software development teams to identify application defects, document technical requirements, troubleshoot system issues and coordinate enhancements.',
      'Assisted with system integration, functional testing, issue validation and application deployment across university platforms.',
      'Delivered technical training, application support and user onboarding for faculty and students under the Digital Transformation & System Integration Project.'
    ]
  },
  {
    role: 'Software Systems Engineer',
    company: 'JAM Web Services',
    type: 'Full-time · Remote',
    date: 'Jan 2026 – Nov 2026',
    place: 'Australia',
    points: [
      'Coordinated project activities across university applications: Student Information Management System (SIM), Moodle LMS and TAO Assessment Platform.',
      'Facilitated communication between development teams, stakeholders and university representatives.',
      'Monitored application progress, tracked tasks, documented issues and followed up on deliverables against project timelines.',
      'Supported digital transformation and system integration through application coordination, issue reporting, user support and progress documentation.'
    ]
  },
  {
    role: 'AI Developer Intern',
    company: 'Evolvian Softwares (Pvt.) Ltd.',
    type: 'Internship · Remote',
    date: 'Jul 2025 – Oct 2025',
    place: 'Islamabad, Pakistan',
    points: [
      'Contributed to AI-driven applications, focusing on machine learning integration and backend functionality.',
      'Assisted with backend components, RESTful APIs and database operations for scalable web applications.',
      'Collaborated on model integration, data preprocessing, debugging and performance optimization.',
      'Participated in SDLC activities including requirements analysis, coding, functional testing and technical documentation.'
    ]
  },
  {
    role: 'Backend Software Engineer Intern',
    company: 'Mehran Sugar Mills Limited',
    type: 'Internship · On-site',
    date: 'Jun 2025 – Aug 2025',
    place: 'Pakistan',
    points: [
      'Assisted in designing, developing and maintaining backend components for enterprise web applications and internal business systems.',
      'Supported RESTful API development, database integration and server-side functionality.',
      'Collaborated with software teams to troubleshoot issues, debug code and implement backend enhancements.',
      'Participated in requirements analysis, functional testing, code optimization and technical documentation.'
    ]
  }
];

/* ---------- Projects ---------- */
const projects = [
  {
    title: 'Multimodal Skin Disease Detection and Diagnosis Support System',
    category: 'AI & HEALTHCARE',
    status: 'FEATURED PROJECT',
    summary: 'An AI-based diagnosis support system combining skin-image analysis with patient-reported symptoms to provide a more informed classification signal.',
    points: [
      'Led development of a multimodal AI system integrating skin image analysis with patient-reported symptoms.',
      'Implemented YOLOv12s-based deep learning for automated skin lesion detection and classification.',
      'Developed a late-fusion approach combining visual model predictions with symptom-based classification using Logistic Regression.',
      'Reported 79.17% diagnostic accuracy, a 12% improvement over the image-only approach.',
      'Built backend components with Django REST Framework and PostgreSQL for application data management.'
    ],
    stack: ['Python', 'PyTorch', 'YOLOv12s', 'Logistic Regression', 'Django REST Framework', 'PostgreSQL'],
    accuracy: 79.17,
    accuracyLabel: 'DIAGNOSTIC ACCURACY',
    artLabel: 'MULTIMODAL AI',
    artSubLabel: 'COMPUTER VISION + CLINICAL FEATURES',
    visual: 'multimodal',
    disclaimer: 'Research / decision-support prototype — not a substitute for professional medical diagnosis.',
    links: [
      { label: 'Read Published Paper', href: 'https://journal.50sea.com/index.php/IJIST/article/view/1723' },
      {label: 'View Code on GitHub', href: 'https://github.com/aleena-azam510/multimodal-skin-disease-detectionn'}
    ]
  },
  {
    title: 'Cognifile AI — Document Intelligence Platform',
    category: 'AI · DOCUMENT INTELLIGENCE',
    status: 'FEATURED PROJECT',
    summary: 'An AI-powered document intelligence platform that transforms PDF files into searchable knowledge using semantic retrieval and Retrieval-Augmented Generation (RAG).',
    points: [
      'Built a FastAPI backend for PDF ingestion, text extraction, chunking, document management and question-answering workflows.',
      'Generated 384-dimensional semantic embeddings with Sentence Transformers and indexed document chunks in a Qdrant vector database.',
      'Implemented similarity-based retrieval to provide relevant document context with page and chunk source references.',
      'Developed a React and TypeScript dashboard for document uploads, document management, topic exploration and AI-assisted question answering.',
      'Added Gemini API integration for LLM-based response generation; final live verification remains pending.'
    ],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Qdrant', 'Sentence Transformers', 'PyMuPDF', 'SQLite', 'Gemini API'],
    artLabel: 'DOCUMENT INTELLIGENCE',
    artSubLabel: 'PDF INGESTION · SEMANTIC SEARCH · RAG',
    visual: 'cognifile',
    links: [
      { label: 'View Code on GitHub', href: 'https://github.com/aleena-azam510/Cognifile-AI' }
    ]
  },
  {
    title: 'Digital Testing & Assessment Platform',
    category: 'WEB · FULL-STACK',
    status: 'PROJECT',
    summary: 'A full-stack assessment platform with role-based access for admins, test creators, and participants — supporting timed tests, auto-grading, and adaptive learning feedback.',
    points: [
      'Designed and developed a full-stack web application for managing online assessments with role-based access for administrators, test creators, and participants.',
      'Implemented test creation, editing, deletion, JSON-based question uploads, and support for multiple-choice and open-ended questions.',
      'Developed timed assessment functionality, answer submission, automated score calculation, and results management.',
      'Integrated relational database operations using Flask-SQLAlchemy and SQLAlchemy, with SQLite for local development and PostgreSQL production configuration.',
      'Implemented topic-based performance feedback and adaptive learning recommendations to help participants identify weaker areas and access relevant practice resources.'
    ],
    stack: ['Python', 'Flask', 'Flask-SQLAlchemy', 'SQLAlchemy', 'SQLite', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    artLabel: 'ASSESSMENT ENGINE',
    artSubLabel: 'TIMED TESTS · AUTO-GRADING · RBAC',
    visual: 'testing',
    links: [
      { label: 'View Code on GitHub', href: 'https://github.com/aleena-azam510/Digital-Testing-Service' }
    ]


  }
];

const certifications = [
  { name: 'Google IT Automation with Python Professional Certificate', org: 'Coursera', date: 'Apr 2026', id: '', tags: ['python', 'cloud'] },
  { name: 'Google IT Automation with Python', org: 'Google', date: 'Oct 2025', id: '3A2HRFCSNYUM', tags: ['python', 'cloud'] },
  { name: 'Automating Real-World Tasks with Python', org: 'Google', date: 'Oct 2025', id: '1OFWF2912BOU', tags: ['python'] },
  { name: 'Configuration Management and the Cloud', org: 'Google', date: 'Oct 2025', id: 'I8V0MJCLO2WF', tags: ['cloud'] },
  { name: 'Troubleshooting and Debugging Techniques', org: 'Google', date: 'Oct 2025', id: '4ZJLTK4P319S', tags: ['python'] },
  { name: 'Internship Certificate', org: 'Mehran Sugar Mills Limited', date: 'Aug 2025', id: '', tags: ['backend'] },
  { name: 'Introduction to Git and GitHub', org: 'Google', date: 'Sep 2025', id: '1KMVU1TSL3GT', tags: ['tools'] },
  { name: 'Using Python to Interact with the Operating System', org: 'Google', date: 'Sep 2025', id: 'WUOMLPCSCRJB', tags: ['python'] },
  { name: 'Crash Course on Python', org: 'Google', date: 'Aug 2025', id: '8J2A3S2OOL43', tags: ['python'] },
  { name: 'Data Analytics Internship', org: 'DevelopersHub Corporation©', date: 'Apr 2025', id: '', tags: ['data'] },
  { name: 'Joining Data with Pandas', org: 'DataCamp', date: 'Mar 2025', id: '', tags: ['data', 'python'] },
  { name: 'Data Manipulation with pandas', org: 'DataCamp', date: 'Mar 2025', id: '#39,648,186', tags: ['data', 'python'] },
  { name: 'Intermediate Python', org: 'DataCamp', date: 'Mar 2025', id: '', tags: ['python'] },
  { name: 'HTML 5, Python and Flask', org: 'Udemy', date: 'Mar 2025', id: 'UC-b408eb72-e182-4592-a95f-6b081e5439fc', tags: ['python', 'backend'] },
  { name: 'Introduction to Python', org: 'DataCamp', date: 'Mar 2025', id: '', tags: ['python'] },
  { name: 'Data Analytics Essentials', org: 'Cisco Networking Academy', date: 'Feb 2025', id: '', tags: ['data'] },
  { name: 'Python Essentials 2', org: 'Cisco Networking Academy', date: 'Jan 2025', id: '', tags: ['python'] },
  { name: 'Python Essentials 1', org: 'Cisco Networking Academy', date: 'Jan 2025', id: '', tags: ['python'] },
  { name: 'Introduction to Data Science', org: 'Cisco Networking Academy', date: 'Jan 2025', id: '', tags: ['data', 'ai'] },
  { name: 'Introduction to Modern AI', org: 'Cisco Networking Academy', date: 'Jan 2025', id: '', tags: ['ai'] },
  { name: 'Freelancing', org: 'NS Training (SMC-PRIVATE) Limited', date: 'Sep 2024', id: '', tags: ['soft'] },
  { name: 'Participation Certificate — TechVerve 2024', org: 'Institute of Mathematics & Computer Science', date: 'Feb 2024', id: '', tags: ['soft'] },
  { name: 'Data Analyst', org: 'Institute of Mathematics & Computer Science', date: 'May 2024', id: '', tags: ['data'] },
  { name: 'Social Media Marketing', org: 'NS Training (SMC-PRIVATE) Limited', date: 'Sep 2024', id: '', tags: ['soft'] },
  { name: 'Graphic Designing', org: 'NS Training (SMC-PRIVATE) Limited', date: 'Sep 2024', id: '', tags: ['soft'] },
  { name: 'Content Writing', org: 'NS Training (SMC-PRIVATE) Limited', date: 'Sep 2024', id: '', tags: ['soft'] }
];

const certFilters = [
  { key: 'all', label: 'All' },
  { key: 'python', label: 'Python' },
  { key: 'data', label: 'Data' },
  { key: 'ai', label: 'AI' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
  { key: 'soft', label: 'Soft Skills' }
];

const skillGroups = [
  { icon: Code2, title: 'Backend Engineering', items: ['Python', 'Django REST Framework', 'RESTful APIs', 'Flask', 'Server-side development'] },
  { icon: BrainCircuit, title: 'AI & Machine Learning', items: ['Artificial Intelligence', 'Machine Learning', 'PyTorch', 'YOLOv12s', 'Logistic Regression'] },
  { icon: Database, title: 'Data & Databases', items: ['PostgreSQL', 'SQL', 'Pandas', 'NumPy', 'Data Analysis & Visualization'] },
  { icon: Workflow, title: 'Systems & Delivery', items: ['System Integration', 'SDLC', 'Functional Testing', 'Troubleshooting', 'Technical Documentation'] },
  { icon: Layers3, title: 'Web & Tools', items: ['Web Development', 'HTML5', 'Git & GitHub', 'Moodle LMS', 'TAO Assessment Platform'] },
  { icon: Globe2, title: 'Professional Skills', items: ['Team Leadership', 'Project Management', 'Stakeholder Coordination', 'User Training', 'Communication'] }
];

const nav = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Research', 'research'],
  ['Education', 'education'],
  ['Contact', 'contact']
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ---------- Hook: count up ---------- */
function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

/* ---------- Hook: scramble ---------- */
function useScramble(text, inView) {
  const [display, setDisplay] = useState(text);
  const reduced = useReducedMotion();
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    if (!inView || reduced) { setDisplay(text); return; }
    let frame = 0;
    let iterations = 0;
    const total = text.length * 3 + 10;
    const id = setInterval(() => {
      setDisplay(text.split('').map((c, i) => {
        if (c === ' ') return ' ';
        if (i < iterations) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      iterations += 0.6;
      frame++;
      if (frame > total) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [inView, text, reduced]);

  return display;
}

/* ---------- Hook: magnetic tilt ---------- */
function useMagneticTilt(strength = 8) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    ref.current.style.transform = `perspective(900px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) scale(1.015)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return { ref, onMove, onLeave };
}

/* ---------- Background Orbs ---------- */
function BackgroundOrbs() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div className="bg-orbs" aria-hidden>
      <motion.div
        className="orb orb-purple"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-cyan"
        animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-warm"
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ---------- Animated Hero Headline ---------- */
function AnimatedHeadline() {
  const reduced = useReducedMotion();
  const lines = [
    [{ text: 'Building the' }],
    [{ text: 'intelligent', className: 'gradient-text' }, { text: ' digital' }],
    [{ text: 'future' }]
  ];
  let charIndex = 0;

  const renderWords = (words) =>
    words.map((w, wi) => (
      <span key={wi} className={`word ${w.className || ''}`}>
        {w.text.split('').map((ch, ci) => {
          const i = charIndex++;
          return (
            <motion.span
              key={ci}
              initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: '0.6em', rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.15 + i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline-block' }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          );
        })}
      </span>
    ));

  return (
    <h1>
      {renderWords(lines[0])}<br />
      {renderWords(lines[1])}<br />
      {renderWords(lines[2])}
      <motion.span
        className="accent-dot"
        initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5, type: 'spring', stiffness: 400 }}
      >.</motion.span>
    </h1>
  );
}

/* ---------- Typing Roles ---------- */
function TypingRoles() {
  const roles = useMemo(() => [
    'Software Engineering',
    'AI Development',
    'Backend Systems',
    'Machine Learning',
  ], []);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) { setText(roles[0]); return; }
    const current = roles[idx];
    const speed = deleting ? 40 : 90;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, roles, reduced]);

  return (
    <div className="typing-roles" aria-live="polite">
      <span className="typing-prefix">FOCUSED ON</span>
      <span className="typing-value">{text}</span>
      <motion.span
        className="typing-caret"
        animate={reduced ? {} : { opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}

/* ---------- Section Heading ---------- */
function SectionHeading({ eyebrow, title, text, scramble = true }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const scrambled = useScramble(eyebrow, inView && scramble);

  return (
    <motion.div
      ref={ref}
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <span className="eyebrow">{scrambled}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

/* ---------- Spotlight Card ---------- */
function SpotlightCard({ children, className = '', as: As = 'div', ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <As ref={ref} className={`spotlight ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </As>
  );
}

/* ---------- Magnetic Project Wrapper ---------- */
function MagneticProject({ children }) {
  const { ref, onMove, onLeave } = useMagneticTilt(2.5);
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="magnetic-wrap">
      {children}
    </div>
  );
}

/* ---------- Interactive Multimodal Visualizer (Project 01) ---------- */
function MultimodalVisualizer() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(null);
  const [fusing, setFusing] = useState(false);

  const activate = (which) => { setHovered(which); setFusing(true); };
  const release = () => { setHovered(null); setFusing(false); };

  return (
    <div className={`multimodal-visualizer ${fusing ? 'is-fusing' : ''}`}>
      <motion.div
        className={`visualizer-card vision-card ${hovered === 'vision' ? 'is-active' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onHoverStart={() => activate('vision')}
        onHoverEnd={release}
      >
        <div className="card-tag"><Scan size={12} /> YOLOv12s Vision Stream</div>
        <div className="bounding-box-demo">
          {!reduced && (
            <motion.div
              className="scan-line"
              animate={{ y: [0, 60, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <div className="bbox bbox-1"><span>Lesion #01</span></div>
          <div className="bbox bbox-2"><span>Conf: 94.2%</span></div>
        </div>
      </motion.div>

      <div className="fusion-stream">
        <svg viewBox="0 0 100 80" className="stream-svg" preserveAspectRatio="none">
          <path d="M 10 20 Q 50 20 90 40" className={`stream-path ${hovered === 'vision' ? 'active purple' : ''}`} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          <path d="M 10 60 Q 50 60 90 40" className={`stream-path ${hovered === 'symptom' ? 'active cyan' : ''}`} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        </svg>
      </div>

      <motion.div
        className={`visualizer-card symptom-card ${hovered === 'symptom' ? 'is-active' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        onHoverStart={() => activate('symptom')}
        onHoverEnd={release}
      >
        <div className="card-tag"><Activity size={12} /> Clinical Features</div>
        <div className="symptom-bars">
          <div className="bar-row"><span>Eczema</span>
            <motion.div
              className="bar-fill"
              animate={reduced ? {} : { width: ['40%', '75%', '40%'] }}
              style={{ width: '40%' }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <div className="bar-row"><span>Rosacea</span>
            <motion.div
              className="bar-fill cyan"
              animate={reduced ? {} : { width: ['60%', '90%', '60%'] }}
              style={{ width: '60%' }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fusion-node"
        animate={reduced ? {} : {
          scale: fusing ? 1.12 : [1, 1.05, 1],
          boxShadow: fusing
            ? '0 0 40px rgba(255,184,107,0.55)'
            : ['0 0 15px rgba(161,138,255,0.2)', '0 0 30px rgba(99,229,244,0.4)', '0 0 15px rgba(161,138,255,0.2)']
        }}
        transition={{ duration: 3, repeat: fusing ? 0 : Infinity }}
      >
        <GitMerge size={18} />
        <span>LATE FUSION</span>
        <small>+12% Gain</small>
      </motion.div>

      <div className="visualizer-hint">Hover a stream to inspect the fusion</div>
    </div>
  );
}

/* ---------- Cognifile AI Visual (Project 02) ---------- */
function CognifileVisualizer() {
  return (
    <div className="testing-visualizer">
      <motion.div
        className="test-card question-card"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-tag">
          <BrainCircuit size={12} /> RAG QUESTION
          <span className="test-timer">PDF → ANSWER</span>
        </div>
        <div className="question-text">
          Ask questions. Retrieve relevant knowledge.
        </div>
        <div className="question-options">
          <div className="opt is-selected"><span className="opt-dot" /> Semantic retrieval</div>
          <div className="opt"><span className="opt-dot" /> Document context</div>
          <div className="opt"><span className="opt-dot" /> Source references</div>
        </div>
      </motion.div>

      <motion.div
        className="test-card score-card"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="card-tag"><Database size={12} /> RETRIEVAL PIPELINE</div>
        <div className="score-topics">
          <div className="topic-row"><span>Embeddings</span><b>384-D</b></div>
          <div className="topic-row"><span>Vector store</span><b>Qdrant</b></div>
          <div className="topic-row"><span>Grounding</span><b>Page refs</b></div>
        </div>
      </motion.div>

      <motion.div
        className="db-pills"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span><Workflow size={11} /> FastAPI · RAG</span>
        <span><BrainCircuit size={11} /> Gemini API</span>
      </motion.div>

      <div className="visualizer-hint">PDF ingestion · semantic search · document intelligence</div>
    </div>
  );
}

/* ---------- Testing Platform Visual (Project 02) ---------- */
function TestingPlatformVisual() {
  const reduced = useReducedMotion();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (reduced) { setScore(85); return; }
    const id = setInterval(() => {
      setScore(s => (s >= 85 ? 0 : s + 5));
    }, 200);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="testing-visualizer">
      {/* Question Card */}
      <motion.div
        className="test-card question-card"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-tag">
          <Activity size={12} /> Question 04 / 12
          <span className="test-timer"><Timer size={11} /> 02:34</span>
        </div>
        <div className="question-text">
          Which HTTP method is <em>idempotent</em> and used to update a resource?
        </div>
        <div className="question-options">
          <div className="opt"><span className="opt-dot" /> POST</div>
          <div className="opt is-selected"><span className="opt-dot" /> PUT</div>
          <div className="opt"><span className="opt-dot" /> PATCH</div>
        </div>
      </motion.div>

      {/* Score Card */}
      <motion.div
        className="test-card score-card"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="card-tag"><Award size={12} /> Auto-Graded Result</div>
        <div className="score-circle">
          <svg viewBox="0 0 60 60" className="score-svg">
            <circle cx="30" cy="30" r="26" className="score-track" />
            <circle
              cx="30" cy="30" r="26"
              className="score-fill"
              strokeDasharray={2 * Math.PI * 26}
              strokeDashoffset={2 * Math.PI * 26 * (1 - score / 100)}
              style={{ transition: reduced ? 'none' : 'stroke-dashoffset 0.25s ease' }}
            />
          </svg>
          <span className="score-value">{score}%</span>
        </div>
        <div className="score-topics">
          <div className="topic-row"><span>REST APIs</span><b>92%</b></div>
          <div className="topic-row"><span>Databases</span><b>78%</b></div>
        </div>
      </motion.div>

      {/* DB Pills */}
      <motion.div
        className="db-pills"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span><Database size={11} /> SQLite · Dev</span>
        <span><Database size={11} /> PostgreSQL · Prod</span>
      </motion.div>

      <div className="visualizer-hint">Full-stack assessment engine · auto-graded</div>
    </div>
  );
}

/* ---------- Reusable Project Feature ---------- */
function ProjectFeature({ project, index }) {
  const visual = project.visual === 'cognifile'
    ? <CognifileVisualizer />
    : project.visual === 'testing'
      ? <TestingPlatformVisual />
      : <MultimodalVisualizer />;

  return (
    <MagneticProject>
      <motion.article
        className="project-feature"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
                <div className="project-art">
          <div className="project-art-grid" />
          
          {/* Top Label Row */}
          <div className="art-label-row art-label-top">
            <span>{project.artLabel} <span> / {String(index + 1).padStart(3, '0')}</span></span>
            {project.accuracy != null && (
              <div className="accuracy-bubble">
                <AnimatedPercent target={project.accuracy} />
                <span>{project.accuracyLabel}</span>
              </div>
            )}
          </div>

          {/* Centered Visualizer */}
          <div className="art-visual-center">
            {visual}
          </div>

          {/* Bottom Label Row */}
          <div className="art-label-row art-label-bottom">
            <span><span className="live-dot" /> {project.artSubLabel}</span>
          </div>
        </div>

        <div className="project-details">
          <div className="project-kicker">
            <span>{String(index + 1).padStart(2, '0')} / {project.category}</span>
            <span className="project-status">{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <ul className="project-points">
            {project.points.map(p => <li key={p}>{p}</li>)}
          </ul>
          <div className="tech-stack">
            {project.stack.map(x => <span key={x}>{x}</span>)}
          </div>
          {project.disclaimer && (
            <div className="project-disclaimer">{project.disclaimer}</div>
          )}
          {project.links && (
            <div className="project-links">
              {project.links.map(l => (
                <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    </MagneticProject>
  );
}

/* ---------- Stat ---------- */
function Stat({ value, numeric, suffix, label }) {
  const { ref, value: n } = useCountUp(numeric || 0);
  return (
    <motion.div className="stat" ref={ref} variants={fadeInUp}>
      <strong>{numeric ? `${n}${suffix || ''}` : value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

/* ---------- Animated Percent ---------- */
function AnimatedPercent({ target = 79.17, suffix = '%' }) {
  const { ref, value } = useCountUp(Math.round(target * 100), 1600);
  return (
    <strong ref={ref} className="accuracy-counter">
      {(value / 100).toFixed(2)}{suffix}
    </strong>
  );
}

/* ---------- Copy Email ---------- */
function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button className="button button-ghost" onClick={onClick} aria-live="polite">
      {copied ? <Check size={17} /> : <Copy size={17} />}
      {copied ? 'Copied!' : 'Copy Email'}
    </button>
  );
}

/* ---------- Cert Card ---------- */
function CertCard({ name, org, date, id, index }) {
  const { ref, onMove, onLeave } = useMagneticTilt(4);
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="cert-card"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.04 }}
    >
      <div className="cert-icon"><ShieldCheck size={17} /></div>
      <div className="cert-info">
        <strong>{name}</strong>
        <span>{org}</span>
        <small>Issued {date}{id ? ` · ID: ${id}` : ''}</small>
      </div>
    </motion.div>
  );
}

/* ---------- App ---------- */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [certFilter, setCertFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('about');
  const reduced = useReducedMotion();

  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  useEffect(() => {
    const sections = nav.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const filteredCerts = useMemo(() => {
    if (certFilter === 'all') return certifications;
    return certifications.filter((c) => c.tags.includes(certFilter));
  }, [certFilter]);

  const visibleCerts = showAllCerts ? filteredCerts : filteredCerts.slice(0, 8);

  useEffect(() => { setShowAllCerts(false); }, [certFilter]);

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden />
      <BackgroundOrbs />
      <div className="noise" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">A<span>.</span></span>
          <span>ALEENA AZAM</span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href={resumeUrl} download>
            Résumé <Download size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="availability">
              <span className="status-dot" /> SOFTWARE ENGINEER · AI DEVELOPER
            </motion.div>
            <AnimatedHeadline />
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              I'm <strong>Aleena Azam</strong> — a Software Engineer and BSCS Gold Medalist crafting reliable backend systems and AI-powered applications.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <TypingRoles />
            </motion.div>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button button-ghost" href={resumeUrl} download>
                <Download size={16} /> Download Résumé
              </a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
              <span><Award size={15} /> BSCS GOLD MEDALIST</span><i /> <span><Microscope size={15} /> PUBLISHED RESEARCH AUTHOR</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" style={{ y: heroY, opacity: heroOpacity }}>
            <div className="visual-glow" />
            <Scene />
            <motion.div
              className="orbit-label orbit-top"
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="orbit-pulse" /> AI / ML
            </motion.div>
            <motion.div
              className="orbit-label orbit-bottom"
              animate={reduced ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              PYTHON · BACKEND · SYSTEMS
            </motion.div>
            <motion.div
              className="floating-chip chip-one"
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <Cpu size={15} /> Intelligent systems
            </motion.div>
            <motion.div
              className="floating-chip chip-two"
              animate={reduced ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              <Network size={15} /> Connected thinking
            </motion.div>
          </motion.div>

          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
          <div className="hero-index">01 / 07</div>
        </section>

        <section className="ticker" aria-label="Core specialties">
          <div className="ticker-track">
            {['PYTHON ENGINEERING', 'ARTIFICIAL INTELLIGENCE', 'BACKEND SYSTEMS', 'MACHINE LEARNING', 'SYSTEM INTEGRATION', 'PYTHON ENGINEERING', 'ARTIFICIAL INTELLIGENCE', 'BACKEND SYSTEMS'].map((x, i) => (
              <span key={i}>{x}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-number">01 — PROFILE</div>
          <div className="about-layout">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Engineering with<br /><span className="gradient-text">purpose.</span></>} />
            </motion.div>
            <motion.div
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="lead">I'm a Software Engineer and BSCS Gold Medalist from the University of Sindh, with hands-on experience in Python, backend development and AI-driven applications.</motion.p>
              <motion.p variants={fadeInUp}>I enjoy building reliable, data-driven software. My work spans RESTful APIs, database integration and the full software development lifecycle — from requirement analysis and coding to testing, debugging and deployment.</motion.p>
              <motion.p variants={fadeInUp}>Currently, I contribute to a university digital transformation project, implementing, integrating and supporting enterprise academic platforms: a Student Information Management System (SIM), Moodle LMS and the TAO Assessment Platform. I also coordinate with developers and stakeholders and train faculty and students to adopt the new systems.</motion.p>
              <motion.p variants={fadeInUp}>I'm also a published research author. My paper on skin disease detection using YOLOv12s and a late fusion technique appeared in the <em>International Journal of Innovations in Science & Technology (IJIST)</em>.</motion.p>
              <motion.a variants={fadeInUp} className="text-link" href={profileUrl} target="_blank" rel="noreferrer">
                Connect on LinkedIn <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="now-strip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="now-dot" />
            <strong>Currently:</strong>
            <span>building enterprise LMS integrations &amp; learning PyTorch deployment.</span>
          </motion.div>

          <motion.div
            className="stats-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <Stat value="Gold" label="MEDALIST · BSCS" />
            <Stat value="AI +" label="BACKEND ENGINEERING" />
            <Stat value="IJIST" label="PUBLISHED RESEARCH" />
            <Stat numeric={4} suffix="" label="PROFESSIONAL ROLES" />
          </motion.div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-number">02 — EXPERIENCE</div>
          <SectionHeading eyebrow="WHERE I'VE CONTRIBUTED" title={<>Turning technology into<br /><span className="gradient-text">working systems.</span></>} text="Experience across enterprise applications, backend engineering and AI development." />
          <motion.div
            className="timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {experiences.map((job, i) => (
              <motion.article className="timeline-item" key={job.company} variants={fadeInUp}>
                <div className="timeline-marker"><span>{String(i + 1).padStart(2, '0')}</span></div>
                <SpotlightCard className="job-card" as="div">
                  <div className="job-top">
                    <div>
                      <span className="job-date">{job.date}</span>
                      <h3>{job.role}</h3>
                      <div className="company">{job.company}</div>
                    </div>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-place">{job.place}</div>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </SpotlightCard>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-number">03 — CAPABILITIES</div>
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Skills that make<br /><span className="gradient-text">ideas executable.</span></>} text="A practical blend of software engineering, AI, data and delivery skills." />
          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {skillGroups.map(({ icon: Icon, title, items }) => (
              <motion.div key={title} variants={fadeInUp} whileHover={reduced ? {} : { y: -6, transition: { duration: 0.2 } }}>
                <SpotlightCard className="skill-card">
                  <div className="skill-icon"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <div className="tag-list">{items.map(item => <span key={item}>{item}</span>)}</div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="skill-note"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles size={17} />
            <span>Core strengths: Python · Machine Learning · Artificial Intelligence · Web Development · Team Leadership · Project Management</span>
          </motion.div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-number">04 — SELECTED WORK</div>
          <SectionHeading
            eyebrow="PROJECTS"
            title={<>Selected work.<br /><span className="gradient-text">Built for impact.</span></>}
            text="AI research, full-stack engineering, and backend systems — built end-to-end."
          />
          <div className="projects-list">
            {projects.map((project, i) => (
              <ProjectFeature key={project.title} project={project} index={i} />
            ))}
          </div>
          <div className="add-project-note">
            <span className="add-icon">+</span>
            <div>
              <strong>More projects coming soon</strong>
              <p>This portfolio is structured so additional projects can be added as new cards.</p>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-number">05 — RESEARCH</div>
          <SectionHeading
            eyebrow="PEER-REVIEWED PUBLICATION"
            title={<>Research that<br /><span className="gradient-text">ships.</span></>}
            text="A peer-reviewed paper combining deep learning and multimodal fusion for skin disease detection."
          />
          <motion.article
            className="research-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="research-icon"><Microscope size={25} /></div>
            <div className="research-copy">
              <span className="eyebrow">PUBLISHED RESEARCH · IJIST</span>
              <h2>
                Skin Diseases Detection and Diagnosis Support System Using
                YOLOv12s and Late Fusion Technique
              </h2>
              <p className="research-journal">
                <em>International Journal of Innovative Science and Technology (IJIST)</em>
                <span className="research-meta-dot" />
                Vol. 7, Issue 10
                <span className="research-meta-dot" />
                pp. 55–67
              </p>

              <div className="research-tags">
                <span>Deep Learning</span>
                <span>Computer Vision</span>
                <span>Multimodal AI</span>
                <span>Late Fusion</span>
              </div>

              <div className="research-contribution">
                <strong>Contribution:</strong>
                <span>Research Author &amp; FYP Group Leader</span>
              </div>

              <div className="research-actions">
                <a
                  className="button button-primary"
                  href="https://journal.50sea.com/index.php/IJIST/article/view/1723"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Published Paper <ArrowUpRight size={15} />
                </a>
                <a
                  className="button button-ghost"
                  href="https://journal.50sea.com/index.php/IJIST/article/view/1723"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={15} /> Journal Page
                </a>
              </div>

              <small className="research-note">
                Published in the <em>International Journal of Innovative Science and Technology (IJIST)</em>,
                Vol. 7, Issue 10, pp. 55–67. Opens on the journal's official article page.
              </small>
            </div>
            <div className="research-watermark">IJIST</div>
          </motion.article>
        </section>

        <section className="section education-section" id="education">
          <div className="section-number">06 — EDUCATION &amp; CREDENTIALS</div>
          <SectionHeading eyebrow="ACADEMIC FOUNDATION" title={<>A strong foundation.<br /><span className="gradient-text">A curious mind.</span></>} />
          <motion.div
            className="education-card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-symbol"><GraduationCap size={30} /></div>
            <div className="education-main">
              <span className="job-date">JAN 2022 — DEC 2025</span>
              <h3>University of Sindh, Jamshoro</h3>
              <p>Bachelor of Science in Computer Science (BSCS) · Batch 2022</p>
              <p>Graduated with an <strong>A1 grade and Gold Medalist distinction</strong>, demonstrating outstanding academic performance throughout the program.</p>
              <p>Built a strong foundation in Software Engineering, Artificial Intelligence, Machine Learning, Database Management Systems, Web Development and Software System Design, supported by practical projects, research and technical problem-solving.</p>
            </div>
            <div className="gold-medal"><Award size={24} /><strong>GOLD</strong><span>MEDALIST</span></div>
          </motion.div>

          <div className="cert-heading">
            <div>
              <span className="eyebrow">CONTINUOUS LEARNING</span>
              <h3>Licenses &amp; credentials</h3>
            </div>
            <span className="cert-count">{certifications.length} CREDENTIALS</span>
          </div>

          <div className="cert-filters" role="tablist" aria-label="Filter certifications">
            {certFilters.map((f) => {
              const count = f.key === 'all' ? certifications.length : certifications.filter(c => c.tags.includes(f.key)).length;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={certFilter === f.key}
                  className={`cert-filter ${certFilter === f.key ? 'is-active' : ''}`}
                  onClick={() => setCertFilter(f.key)}
                >
                  {f.label} <small>{count}</small>
                </button>
              );
            })}
          </div>

          <motion.div className="cert-grid" layout>
            <AnimatePresence mode="popLayout">
              {visibleCerts.map((cert, i) => (
                <CertCard key={cert.name} {...cert} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCerts.length > 8 && (
            <button className="button button-outline cert-more" onClick={() => setShowAllCerts(!showAllCerts)}>
              {showAllCerts ? 'Show fewer credentials' : `View all ${filteredCerts.length} credentials`}
              <ChevronDown size={15} className={showAllCerts ? 'rotate' : ''} />
            </button>
          )}
          <p className="cert-footnote">Additional training includes data science and analytics, Pandas, Python, AI, freelancing, graphic design, social media marketing, content writing and TechVerve 2024 participation.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="section-number">07 — LET'S CONNECT</motion.div>
            <motion.span variants={fadeInUp} className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</motion.span>
            <motion.h2 variants={fadeInUp}>Let's build something<br /><span className="gradient-text">meaningful.</span></motion.h2>
            <motion.p variants={fadeInUp}>Interested in backend engineering, AI-driven applications or building reliable digital systems? I'd be glad to connect.</motion.p>
            <motion.div variants={fadeInUp} className="contact-actions">
              <a className="button button-primary" href={profileUrl} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={15} />
              </a>
              <CopyEmail />
            </motion.div>
            <motion.div variants={fadeInUp} className="contact-social">
              <a href={profileUrl} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ExternalLink size={13} />
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ExternalLink size={13} />
              </a>
              <span>Jamshoro, Sindh, Pakistan</span>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark">A<span>.</span></span>
          <span>ALEENA AZAM</span>
        </a>
        <span>Designed &amp; built with intention.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
