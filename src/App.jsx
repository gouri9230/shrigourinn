import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, BriefcaseBusiness, Code2,
  Github, Globe2, GraduationCap, Linkedin, Mail, Menu, Palette,
  Sparkles, X, Languages, Heart
} from 'lucide-react'
import proj1 from './images/proj1.png';
import proj2 from './images/proj2.png';
import proj3 from './images/proj3.png';
import photo1 from './images/photo1.jpeg';


const profile = {
  name: 'Shrigouri Navaratna',
  role: 'Data Analyst | Data Engineer',
  location: 'Leipzig, Germany',
  phone: '+49 159 06134354',
  email: 'shrigouri.navaratna@gmail.com',
  about: 'I am naturally curious about how things work and what the data behind them can reveal. I enjoy exploring complex problems, connecting the dots, and finding patterns that might otherwise go unnoticed.\
          My journey from engineering to data analytics has shaped the way I approach challenges: with analytical thinking, attention to detail, and a focus on finding meaningful solutions rather than just quick answers.',
  image: photo1,
  github: 'https://github.com/gouri9230',
  linkedin: 'https://www.linkedin.com/in/shrigouri-navaratna/',
}
const skillGroups = [
  {
    name: 'Programming & Data Analysis',
    skills: ['Python', 'SQL', 'PySpark', 'Pandas', 'Advanced Excel']
  },
  {
    name: 'Data Engineering & Warehousing',
    skills: ['ETL/ELT', 'Data Warehousing', 'Data Modeling','Azure Databricks','dbt']
  },
  {
    name: 'BI & Visualization',
    skills: ['Power BI', 'Dashboard Design', 'KPI Dashboards', 'Data Visualization']
  },
  {
    name: 'Databases & Cloud',
    skills: ['Microsoft Azure', 'Azure Data Factory (ADF)', 'Azure Data Lake Storage (ADLS)',
            'Azure Databricks', 'Azure SQL Database', 'PostgreSQL']
  },
  {
    name: 'Development Tools & Methodologies',
    skills: ['Git', 'Docker', 'Jira', 'Kanban', 'Agile Methodology']
  },
  {
    name: 'AI & LLM Technologies',
    skills: ['OpenAI API', 'Large Language Models (LLMs)', 'Claude', 'GitHub Copilot', 'Kiro']
  },
  {
    name: 'Professional Skills',
    skills: ['Communication', 'Leadership', 'Teamwork', 'Self-directed Learning', 'Problem Solving', 'Root Cause Analysis']
  }
];

const projects = [
  { number: '01', title: 'Spotify Data Lakehouse Pipeline', type: 'Azure Data Pipeline', desc: 'An end-to-end data engineering pipeline built on Azure and Databricks, implementing the Medallion Architecture with real-time incremental loading, data governance, CI/CD, and automated alerting.', tags: ['Microsoft Azure', 'Azure SQL Database', 'PySpark', 'Star Schema', 'Databricks', 'Python', 'SCD Type 2', 'DLT'], github: 'https://github.com/gouri9230/Azure_Spotify_Project', color: 'from-lime-300/20 via-emerald-400/10 to-transparent', image: proj1 },
  { number: '02', title: 'Uber-Style Transportation Data Lakehouse', type: 'Azure Data Pipeline', desc: 'An end-to-end Uber-Style data platform that combines incremental data ingestion, real-time trip processing with Spark Streaming, and dbt transformations to build a medallion-style analytics pipeline in Databricks.', tags: ['PySpark', 'dbt', 'Python', 'SQL', 'Spark Structured Streaming', 'Star Schema', 'dbt Snapshots'], github: 'https://github.com/gouri9230/TravelData_dbt_pyspark', color: 'from-violet-400/20 via-fuchsia-400/10 to-transparent', image: proj2 },
  { number: '03', title: 'SAP Data Pipeline', type: 'ETL/ELT Pipelines', desc: 'An end-to-end data pipeline using Azure Data Factory to replicate 6 SAP tables (MARA, VBAP, VBRK, COSTLIST, INVOICE_LINE_ITEM, PRODUCING_STAT_RATIO_DETAIL) from On-Premise SQL Server into a Medallion Architecture (Bronze/Silver/Gold) on Azure', tags: ['ADF', 'Azure SQL Database', 'ADLS Gen2', 'SQL Server', 'Medallion Architecture'], github: 'https://github.com/gouri9230/SAP-Data-Pipeline', color: 'from-sky-300/20 via-cyan-400/10 to-transparent', image: proj3 },
]
const experienceGroups = [
  {
    name: 'Data Analytics',
    roles: [
      {
        date: '02/2026 – 04/2026',
        role: 'AI Volunteer',
        place: 'FranAgent, Berlin (Remote)',
        highlights: [
          'Designed the state-flow conversation architecture of an outbound AI voice agent, including states, sub-states, and edge cases, using Retell AI for voice and the OpenAI API for dynamic prompt and state generation.',
          'Prototyped a self-service onboarding flow for business clients to import agent templates, customize prompts, and deploy voice agents.',
        ],
      },
      {
        date: '08/2024 – 12/2025',
        role: 'Research Associate',
        place: 'Hochschule Mittweida (Full-time, On-site; fixed-term project)',
        project:
          'Implemented a decentralized alternative to cloud storage that distributes encrypted file fragments across independent providers, supports data recovery using K-of-N fragments, and enables storage proofs for data integrity.',
        highlights: [
          'Cut proof generation and verification time by 67% by replacing an underperforming storage algorithm with an optimized Python implementation.',
          'Reduced processing overhead by 48% with parallel processing, and raised throughput by 20% with multi-proof verification.',
          'Benchmarked upload speed and proof generation on datasets up to 30 GB and documented the results to validate each improvement.',
        ],
      },
      {
        date: '06/2023 – 06/2024',
        role: 'Data Analyst',
        place: 'Mbition GmbH, Berlin (Working Student, Remote)',
        project:
          'Member of the dashboard support team for in-vehicle test data, supporting internal verification, validation, and testing teams in a Kanban workflow with Jira ticketing.',
        highlights: ['Owned ~9 PostgreSQL dashboards of in-vehicle test data for ~30 V&V and testing engineers, fixing slow loads, missing data and incorrect aggregations at the SQL level.',
                     'Resolved 2-3 dashboard issues and requests per week (~100 / year) via Jira, typically closing them within 2 days.',
                    'Wrote advanced SQL (CTEs, time-series analysis, cumulative sums) to produce consistent KPIs that teams could track over time.',
                    'Built a Power BI dashboard for a 6-person team covering workload, sprint progress and open/closed issues, which supported sprint planning.'
        ],
      },
      {
        date: '05/2022 – 01/2023',
        role: 'Student Research Assistant',
        place: 'Hochschule Mittweida, Germany (Working Student, On-site)',
        highlights: [
          'Led lab sessions for the “Foundations of Modern Cryptography” lecture using SageMath (Python).',
          'Developed Solidity smart contracts in Remix IDE for healthcare-use-case stakeholders.',
        ],
      },
    ],
  },
  {
    name: 'Earlier Automotive Experience',
    roles: [
      {
        date: '03/2020 – 07/2020',
        role: 'Technical Leader',
        place: 'KPIT Technologies Limited, India (Full-time, On-site)',
        highlights: [
          'Developed AUTOSAR base software modules for the Eaton customer and generated and analyzed software quality reports for each delivery.',
        ],
      },
      {
        date: '01/2015 – 12/2019',
        role: 'Senior Software Engineer',
        place: 'Robert Bosch, India (Full-time, On-site)',
        highlights: [
          'Served as the sole integration engineer on a multicore hybrid project, owning the software integration lifecycle from module delivery to bench testing using C, AUTOSAR, RTOS, CAN, Vector tools, HIL, and INCA.',
          'Identified a critical core-load imbalance and worked with the resource-management team to redistribute OS tasks across cores, validating the changes with targeted test runs.',
          'Resolved OS errors and customer field issues, including CPU overload and sporadic resets, through root-cause analysis and core resource management.',
          'Led the controller migration from Infineon to the JDP platform at the customer site in South Korea.',
          'Mentored junior engineers and supported requirements handling, task tracking, and on-time delivery.',
        ],
      },
      {
        date: '09/2012 – 12/2014',
        role: 'Software Engineer',
        place: 'Continental Automotives, India (Full-time, On-site)',
        highlights: [
          'Integrated software modules and resolved interface issues during build cycles for a VW 6-cylinder gasoline-engine ECU project.',
          'Wrote and ran white-box and integration tests on hardware benches and produced quality reports for every delivery.',
        ],
      },
    ],
  },
]
const education = [ {date: '10/2026 — Current', degree: 'M.Sc. Web Engineering', school: 'TU Chemnitz, Germany' },
                    {date: '10/2021 — 07/2024', degree: 'M.Sc. Applied Mathematics for Networks and Data Science', school: 'Hochschule Mittweida, Germany'},
                    {date: '2007 — 2011', degree: 'B.E. Information Science', school: 'Visvesvaraya Technological University, India' }, 
                  ]
                   
const languages = [
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'B2' },
  { name: 'Kannada', level: 'C1' },
  { name: 'Hindi', level: 'C1'}
];

const interests = [
  'Healthy Living & Fitness',
  'Hiking', 'Reading', 'Traveling',
  'Singing', 'Table-Tennis', 'Badminton',
];              

function SectionHeading({ label, title, copy }) {
  return <div className="mb-12 max-w-2xl"><p className="eyebrow mb-4">{label}</p><h2 className="section-title">{title}</h2>{copy && <p className="muted mt-5 max-w-xl leading-7">{copy}</p>}</div>
}
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#journey']]
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#090b10]/80 backdrop-blur-xl">
    <nav className="container flex h-[76px] items-center justify-between">
      <a href="#home" className="font-display text-xl font-bold tracking-tight">S.N<span className="text-lime-300">.</span></a>
      <div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={label} href={href} className="text-sm text-zinc-400 transition hover:text-lime-300">{label}</a>)}</div>
      <a href="#contact" className="hidden items-center gap-2 rounded-full border border-lime-300/50 px-5 py-2.5 text-sm font-semibold text-lime-200 transition hover:bg-lime-300 hover:text-zinc-950 md:inline-flex">Let’s talk <ArrowUpRight size={15}/></a>
      <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-zinc-200 md:hidden">{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div className="border-t border-white/10 bg-[#0c0f15] px-6 py-5 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href} className="block py-3 text-zinc-300">{label}</a>)}<a onClick={() => setOpen(false)} href="#contact" className="mt-3 inline-flex text-lime-300">Let’s talk <ArrowUpRight size={16}/></a></div>}
  </header>
}
function Hero() {
  return <section id="home" className="relative flex min-h-[850px] items-center overflow-hidden pb-20 pt-32">
    <div className="grid-bg absolute inset-0 opacity-70"/>
    <div className="pointer-events-none absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-lime-300/[.09] blur-[120px]"/>
    <div className="container relative grid items-center gap-16 lg:grid-cols-[1.2fr_.8fr]">
      <div className="reveal">
        <p className="eyebrow mb-5">Hello, I’m {profile.name}</p>
        <h1 className="font-display text-[clamp(1.75rem,3.8vw,3.2rem)] font-semibold leading-[1.15] tracking-[-.045em]">
          I transform complex data into actionable insights<br />
        <span className="bg-gradient-to-r from-lime-200 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
        and build scalable data solutions.
        </span>
      </h1>
        <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-bold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-200">Explore my work <ArrowUpRight size={17}/></a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-lime-300/50 hover:text-lime-200">Get in touch <ArrowDownRight size={17}/></a></div>
        <div className="mt-14 flex items-center gap-5 text-zinc-500"><span className="text-xs uppercase tracking-[.16em]">Find me on</span><a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-lime-300"><Github size={19}/></a><a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-lime-300"><Linkedin size={19}/></a></div>
      </div>
      <div className="relative mx-auto w-full max-w-[410px] reveal [animation-delay:150ms]">
        <div className="absolute -inset-5 rounded-[2rem] border border-lime-300/15 rotate-6"/>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-900"><img src={profile.image} alt="Portrait placeholder for Alex Morgan" className="h-full w-full object-cover grayscale-[25%] transition duration-700 hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#090b10]/80 via-transparent to-transparent"/></div>
        <div className="glass absolute -bottom-7 -left-8 rounded-2xl p-5 shadow-2xl"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300/15 text-lime-300"><Sparkles size={20}/></div><div><p className="font-display text-lg font-semibold">8+ years</p><p className="text-xs text-zinc-400">Software Engineer</p></div></div></div>
        <div className="glass absolute -right-5 top-10 rounded-xl px-4 py-3 text-xs text-zinc-300"><span className="mr-2 text-lime-300">✦</span> {profile.location}</div>
      </div>
    </div>
    <a href="#about" aria-label="Scroll to about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-lime-300 md:block"><ArrowDownRight className="rotate-45" size={22}/></a>
  </section>
}
function About() {
  return (
  <section id="about" className="section border-t border-white/[.06]">
    <div className="container grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
      <div>
        <SectionHeading label="About me" title={<>Curiosity is my<br/>creative engine
        <span className="text-lime-300">.</span></>}/>
      </div>
      <div className="pt-2">
        <p className="text-2xl leading-[1.55] tracking-tight text-zinc-100 md:text-[1.5rem]">{profile.about}</p>
      </div>
    </div>
  </section>
)}

function AboutMe() {
  return (
    <section className="section bg-[#0d1016]">
      <div className="container">
        <SectionHeading
          label="A little more about me"
          title="Beyond the data."
          copy="The languages I speak and the interests that keep me curious."
        />

        <div className="grid gap-5 md:grid-cols-2">

          {/* Languages */}
          <div className="glass rounded-3xl p-7">
            <div className="mb-6 flex items-center gap-3">
              <Languages className="text-lime-300" size={23} />
              <h3 className="font-display text-xl font-semibold">
                Languages
              </h3>
            </div>

            <div className="space-y-5">
              {languages.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-3 border-b border-white/[.06] pb-4 last:border-0 last:pb-0"
                >
                  <p className="font-medium text-zinc-200">
                    {item.name}
                  </p>
                  <span className="text-sm text-lime-200">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="glass rounded-3xl p-7">
            <div className="mb-6 flex items-center gap-3">
              <Heart className="text-lime-300" size={23} />
              <h3 className="font-display text-xl font-semibold">
                Interests & Activities
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section id="skills" className="section bg-[#0d1016]">
      <div className="container">
        <SectionHeading
          label="What I work with"
          title="Tools of the trade."
          copy="A flexible toolkit for exploring data, building insights, and supporting better decisions."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="glass rounded-2xl p-7 transition duration-300 hover:border-lime-300/30"
            >
              <h3 className="mb-5 font-display text-lg font-semibold text-white">
                {group.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-zinc-300 transition hover:border-lime-300/40 hover:text-lime-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
  <section id="projects" className="section">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHeading label="Selected projects" title="A few things I’ve made." copy="Projects showcasing my approach to building pipelines, transforming data, and generating actionable insights."/>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p=><article key={p.number} className="glass group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-2 hover:border-white/20">
        <div className={`relative flex aspect-[1.35] items-center justify-center overflow-hidden bg-gradient-to-br ${p.color}`}>
          <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 50% 50%, rgba(255,255,255,.16), transparent 55%)'}}/>
          <img
            src={p.image}
            alt={`${p.title} project preview`}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute left-6 top-6 text-xs tracking-widest text-white/50">
            {p.number} / 03
          </span>
          <span className="absolute bottom-5 right-6 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">{p.type}</span>
        </div>
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
            <span className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-300"><ArrowUpRight/></span>
          </div>
          <p className="muted mt-3 min-h-[76px] text-sm leading-6">{p.desc}</p>
          {p.github && (<a href={p.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200"><Github size={16}/>View on GitHub<ArrowUpRight size={14} /></a>)}
          <div className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-400">{t}</span>)}</div>
        </div></article>)}
      </div>
    </div>
  </section>
)}

function Journey() {
  return (
    <section
      id="journey"
      className="section border-y border-white/[.06] bg-[#0d1016]"
    >
      <div className="container grid gap-16 lg:grid-cols-2">
        {/* Experience */}
        <div>
          <SectionHeading label="The journey" title="Experience & growth." />

          <div className="space-y-12">
            {experienceGroups.map((group) => (
              <div key={group.name}>
                <h3 className="mb-7 font-display text-2xl font-semibold text-lime-200">
                  {group.name}
                </h3>
                <div className="space-y-8">
                  {group.roles.map((item) => (
                    <div
                      key={item.role}
                      className="relative border-l border-white/10 pb-2 pl-7 last:border-transparent"
                    >
                      <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" />
                      <p className="eyebrow !text-[10px]">{item.date}</p>
                      <h4 className="mt-3 font-display text-xl font-semibold">
                        {item.role}
                      </h4>
                      <p className="mt-1 text-sm text-lime-200">{item.place}</p>
                      {item.project && (
                        <p className="muted mt-3 text-sm leading-7">
                          {item.project}
                        </p>
                      )}
                      <ul className="muted mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <SectionHeading label="Education" title="Always learning." />

          <div className="space-y-5">
            {education.map((item, index) => (
              <div
                key={`${item.school}-${index}`}
                className="glass rounded-3xl p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/10 text-lime-300">
                  <GraduationCap size={23} />
                </div>

                <p className="eyebrow !text-[10px]">{item.date}</p>

                <h3 className="mt-3 font-display text-xl font-semibold">
                  {item.degree}
                </h3>

                <p className="mt-1 text-sm text-lime-200">
                  {item.school}
                </p>

                {item.detail && (
                  <p className="muted mt-4 text-sm leading-7">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-lime-300/[.07] blur-[100px]" />

      <div className="container relative">
        <div className="glass overflow-hidden rounded-[2rem] p-8 md:p-14 lg:p-16">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Main content */}
            <div>
              <p className="eyebrow mb-5">Let's Connect</p>

              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-[-.05em] md:text-6xl">
                Let's create something
                <br />
                <span className="text-lime-300">
                meaningful.
                </span>
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-bold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-200"
              >
                Get in touch <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Contact details */}
            <div className="flex flex-col items-end gap-6 text-right lg:w-[280px]">
              <div className="space-y-1">
                <p className="text-sm text-zinc-200">
                  {profile.name}
                </p>
                <p className="text-sm text-zinc-200">
                  {profile.location}
                </p>
                <a
                  href={`tel:${profile.phone}`}
                  className="block text-sm text-zinc-300 transition hover:text-lime-300"
                >
                  {profile.phone}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="block text-sm text-zinc-300 transition hover:text-lime-300"
                >
                  {profile.email}
                </a>
              </div>

              <p className="text-sm leading-6 text-zinc-400">
                Available for work immediately. Open to relocation and flexible
                about on-site, hybrid, or work-from-home roles.
              </p>

              <div>
                <p className="eyebrow mb-2">Social Profiles</p>

                <div className="flex flex-wrap justify-end gap-4">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-lime-300"
                  >
                    <Linkedin size={17} /> LinkedIn
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-lime-300"
                  >
                    <Github size={17} /> GitHub
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-white/[.06] py-8"><div className="container flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#home" className="transition hover:text-lime-300">Back to top ↑</a></div></footer>
}
export default function App() {
  return <><Navbar/><main><Hero/><About/><Skills/><Projects/><Journey/><AboutMe /><Contact/></main><Footer/></>
}
