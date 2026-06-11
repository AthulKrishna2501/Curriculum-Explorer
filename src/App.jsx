import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronDown, ChevronRight, ArrowRight, BookOpen, Clock, Layers, Award, TrendingUp, Users, CheckCircle, Menu, Star, Zap, Code2, Shield, Globe, Smartphone, Server, Brain, Gamepad2, Cpu, Target } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────────────────── */
const C = {
  bg:        "#080808",   // pure near-black canvas
  surface:   "#0F0F0F",   // section surface
  card:      "#161616",   // card background
  cardHov:   "#1E1E1E",   // card hover
  border:    "#282828",   // subtle border
  borderHov: "#3A3A3A",   // hover border
  g1:        "#1A6B35",   // brand green (kept)
  g2:        "#28944A",   // brand green (kept)
  g3:        "#47B368",   // brand green (kept)
  g4:        "#85D9A0",   // brand green (kept)
  gold:      "#FFD166",   // gold accent (kept)
  goldD:     "#C4A030",
  white:     "#FFFFFF",
  tPrime:    "#E2E2E2",   // neutral off-white text
  tSub:      "#868686",   // neutral mid-grey text
  tMuted:    "#4D4D4D",   // neutral dark-grey text
  red:       "#E05555",
};

/* ─────────────────────────────────────────────────────────
   CSS ANIMATIONS & GLOBAL STYLES
───────────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:${C.bg};color:${C.white};overflow-x:hidden}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:${C.surface}}
::-webkit-scrollbar-thumb{background:${C.g1};border-radius:10px}

@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes slideInUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.55}}
@keyframes bgShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes scanLine{0%{top:-2px}100%{top:100%}}
@keyframes borderGlow{0%,100%{box-shadow:0 0 0 1px rgba(71,179,104,.15),0 4px 20px rgba(0,0,0,.4)}50%{box-shadow:0 0 0 1px rgba(71,179,104,.45),0 4px 30px rgba(71,179,104,.12)}}

.fadeUp{animation:fadeUp .6s ease forwards}
.fadeUp-1{animation:fadeUp .6s .1s ease both}
.fadeUp-2{animation:fadeUp .6s .2s ease both}
.fadeUp-3{animation:fadeUp .6s .3s ease both}
.fadeUp-4{animation:fadeUp .6s .4s ease both}

.card-hover{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;cursor:pointer}
.card-hover:hover{transform:translateY(-7px);box-shadow:0 24px 60px rgba(0,0,0,.55),0 0 0 1px rgba(71,179,104,.3)}

.skill-tag{display:inline-block;padding:4px 11px;background:rgba(71,179,104,.09);border:1px solid rgba(71,179,104,.22);border-radius:20px;font-size:.73rem;font-weight:500;color:${C.g4};transition:all .2s ease}
.skill-tag:hover{background:rgba(71,179,104,.18);border-color:rgba(71,179,104,.5)}

.btn-gold{background:${C.gold};color:#000;border:none;padding:13px 26px;border-radius:8px;font-weight:700;font-size:.875rem;cursor:pointer;transition:transform .2s,box-shadow .2s;letter-spacing:.02em;font-family:inherit}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(255,209,102,.38)}
.btn-outline{background:transparent;color:${C.gold};border:1.5px solid ${C.gold};padding:11px 22px;border-radius:8px;font-weight:600;font-size:.875rem;cursor:pointer;transition:all .2s ease;letter-spacing:.02em;font-family:inherit}
.btn-outline:hover{background:rgba(255,209,102,.1);transform:translateY(-1px)}

.paper-row{border:1px solid ${C.border};border-radius:12px;overflow:hidden;margin-bottom:10px;transition:border-color .2s ease}
.paper-row:hover{border-color:${C.g2}}
.paper-header{padding:16px 18px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;background:${C.card};transition:background .2s ease}
.paper-header:hover{background:${C.cardHov}}
.module-card{padding:13px 16px;border-radius:8px;background:rgba(255,255,255,.025);border:1px solid transparent;transition:all .2s ease;margin-bottom:7px}
.module-card:hover{background:rgba(255,255,255,.045);border-color:rgba(255,255,255,.12)}

.roadmap-card{background:${C.card};border:1px solid ${C.border};border-radius:14px;padding:20px;transition:all .3s ease;cursor:default}
.roadmap-card:hover{border-color:${C.g2};transform:translateY(-5px);box-shadow:0 16px 48px rgba(0,0,0,.45)}

.nav-link{color:${C.tSub};text-decoration:none;font-size:.875rem;font-weight:500;padding:7px 12px;border-radius:6px;transition:all .2s ease;cursor:pointer;background:transparent;border:none;font-family:inherit}
.nav-link:hover{color:${C.white};background:rgba(255,255,255,.06)}

@media(max-width:1024px){
  .courses-grid{grid-template-columns:repeat(2,1fr) !important}
}
@media(max-width:768px){
  .courses-grid{grid-template-columns:1fr !important}
  .hero-title{font-size:2.8rem !important}
  .stats-strip{grid-template-columns:1fr 1fr !important}
  .roadmap-grid{grid-template-columns:1fr !important}
  .detail-layout{flex-direction:column !important}
  .desktop-nav{display:none !important}
  .mob-btn{display:flex !important}
}
@media(max-width:480px){
  .hero-title{font-size:2rem !important}
  .stats-strip{grid-template-columns:1fr !important}
}
`;

/* ─────────────────────────────────────────────────────────
   COURSE DATA  (8 tracks)
───────────────────────────────────────────────────────── */
const COURSES = [
  {
    id:"mern", title:"MERN Stack", sub:"Full-Stack Web Development",
    badge:"Most Popular", badgeC:"#61DAFB", badgeTC:"#000",
    accent:"#61DAFB", icon:"⚡",
    grad:"linear-gradient(145deg,#071825 0%,#0E2D45 100%)",
    desc:"Master end-to-end web applications with MongoDB, Express.js, React & Node.js. Build scalable, production-grade apps from zero to deployment.",
    skills:["JavaScript","React.js","Node.js","MongoDB","Express","TypeScript","REST APIs","Microservices","AI Integration","DSA"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Core", mods:15, papers:[
        { id:"P1", title:"Foundation & Web Design", accent:"#61DAFB", mods:[
          { name:"JavaScript Fundamentals & Logical Thinking", desc:"Variables, data types, control flow, functions, arrays, objects, problem-solving patterns & AI literacy" },
          { name:"HTML & CSS Fundamentals", desc:"Document structure, CSS box model, flexbox, grid, responsive design, animations & UI principles" },
          { name:"Advanced JavaScript & Browser Programming", desc:"ES6+, DOM manipulation, closures, async/await, OOP, higher-order functions & error handling" }
        ]},
        { id:"P2", title:"Core Development", accent:"#4BBFE6", mods:[
          { name:"MongoDB", desc:"NoSQL fundamentals, CRUD operations, aggregation pipeline, indexing, data modeling & Mongoose" },
          { name:"Node.js & Express", desc:"Event loop, REST APIs, middleware, MVC architecture, Mongoose integration & error handling" },
          { name:"React — Core Concepts", desc:"JSX, components, hooks (useState, useEffect, useRef), React Router, event handling" },
          { name:"React — Advanced Concepts", desc:"useCallback, useMemo, Context API, useReducer, code splitting, lazy loading & performance" }
        ]},
        { id:"P3", title:"First Project", accent:"#2E90B5", mods:[
          { name:"Project Planning", desc:"AI-assisted ideation, feature decomposition, structured planning & database design" },
          { name:"Project Development — 4 Sprints", desc:"Full-stack TDD, unit tests with Jest, API testing with Supertest, integration tests" },
          { name:"Project Hosting", desc:"Deployment pipeline, test validation, environment configuration & production launch" }
        ]},
        { id:"P4", title:"DSA & Type Safety", accent:"#1D6580", mods:[
          { name:"Arrays, Strings & Algorithms", desc:"Linear & binary search, bubble/selection/insertion sort, time complexity analysis" },
          { name:"DSA — Conceptual Understanding", desc:"Stacks, queues, hash tables, trees, graphs, heaps, tries — real-world use cases" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced & Career", mods:14, papers:[
        { id:"P5", title:"AI in Detail", accent:"#61DAFB", mods:[
          { name:"Building with AI + LLMs", desc:"Prompt engineering, AI-powered app features, agentic thinking, MCP concepts, tool usage" },
          { name:"Advanced Agentic Workflows", desc:"Multi-step AI systems, planner-executor-validator pattern, tool-connected AI agents" },
          { name:"Retrieval & Knowledge-Based AI", desc:"RAG systems, context injection, knowledge augmentation, hallucination reduction" },
          { name:"AI Evaluation & Optimization", desc:"Testing AI outputs, prompt efficiency, token optimization, debugging AI behavior" }
        ]},
        { id:"P6", title:"Design & Architecture", accent:"#4BBFE6", mods:[
          { name:"TypeScript & Code Quality", desc:"Types, interfaces, generics, SOLID principles, DRY/KISS, ESLint & Husky automation" },
          { name:"Microservices — Foundations", desc:"Service decomposition, bounded context, database-per-service, monorepo vs polyrepo" },
          { name:"Microservices — Communication & Reliability", desc:"API gateway, event-driven architecture, circuit breaker, Docker, Kubernetes basics" },
          { name:"High-Level System Design", desc:"Scalability, load balancing, caching, CAP theorem, trade-off analysis & real-world HLD" }
        ]},
        { id:"P7", title:"Second Project", accent:"#2E90B5", mods:[
          { name:"System Architecture & Product Design", desc:"Figma wireframes, microservices architecture, API documentation, AI feature planning" },
          { name:"Project Development — 2 Sprints", desc:"Monorepo with Turborepo, TDD, AI-assisted dev, code quality with ESLint & Husky" },
          { name:"Project Hosting & Launch", desc:"CI/CD pipeline, comprehensive testing, production deployment & documentation" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#1D6580", mods:[
          { name:"Professional Branding & Job Search", desc:"LinkedIn optimization, GitHub portfolio, resume building, AI-assisted job applications" },
          { name:"Workplace Readiness & Interviews", desc:"HR mock interviews, SDLC/Agile, client handling, aptitude & mock assessments" }
        ]}
      ]}
    ]
  },
  {
    id:"mean", title:"MEAN Stack", sub:"Enterprise Angular Development",
    badge:"Enterprise Ready", badgeC:"#DD0031", badgeTC:"#fff",
    accent:"#DD0031", icon:"🔺",
    grad:"linear-gradient(145deg,#1A0007 0%,#2D000F 100%)",
    desc:"Build enterprise-grade web platforms with MongoDB, Express.js, Angular & Node.js. Ideal for structured, scalable business applications.",
    skills:["TypeScript","Angular","Node.js","MongoDB","RxJS","NgRx","REST APIs","Microservices","AI Integration","DSA"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Core", mods:15, papers:[
        { id:"P1", title:"Foundation & Web Design", accent:"#DD0031", mods:[
          { name:"JavaScript Fundamentals & Logical Thinking", desc:"Variables, data types, control flow, functions, arrays, objects, problem-solving patterns" },
          { name:"HTML & CSS Fundamentals", desc:"Document structure, responsive layouts, flexbox, grid, animations & UI best practices" },
          { name:"Advanced JavaScript & Browser Programming", desc:"ES6+, DOM, closures, async/await, OOP, higher-order functions & error handling" }
        ]},
        { id:"P2", title:"Core Development", accent:"#B5002A", mods:[
          { name:"MongoDB", desc:"NoSQL databases, CRUD, aggregation pipeline, indexing, data modeling & Mongoose" },
          { name:"Node.js & Express", desc:"Event loop, REST APIs, middleware, MVC pattern, authentication & scalable backends" },
          { name:"Angular — Core Concepts", desc:"Components, modules, services, data binding, directives, routing & lifecycle hooks" },
          { name:"Angular — Advanced Concepts", desc:"RxJS observables, HttpClient, reactive forms, lazy loading & change detection" }
        ]},
        { id:"P3", title:"First Project", accent:"#8E001F", mods:[
          { name:"Project Planning", desc:"Angular + Node architecture, UI/UX wireframes, database schema, AI-assisted planning" },
          { name:"Project Development — 4 Sprints", desc:"Full-stack Angular development with TDD, Jasmine/Karma, API testing" },
          { name:"Project Hosting", desc:"Build optimization, deployment, CI/CD basics, production readiness" }
        ]},
        { id:"P4", title:"DSA & Type Safety", accent:"#6B0018", mods:[
          { name:"Arrays, Strings & Algorithms", desc:"Search algorithms, sorting, time/space complexity analysis in TypeScript" },
          { name:"DSA — Conceptual Understanding", desc:"Stacks, queues, hash tables, trees, graphs — choosing the right data structure" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced & Career", mods:14, papers:[
        { id:"P5", title:"AI in Detail", accent:"#DD0031", mods:[
          { name:"Building with AI + LLMs", desc:"Integrating AI into Angular apps, prompt engineering, agentic patterns" },
          { name:"Advanced Agentic Workflows", desc:"Multi-step AI pipelines, tool-connected agents, workflow design" },
          { name:"Retrieval & Knowledge-Based AI", desc:"RAG systems, context-augmented prompting, knowledge integration" },
          { name:"AI Evaluation & Optimization", desc:"Output testing, prompt efficiency, hallucination mitigation" }
        ]},
        { id:"P6", title:"Design & Architecture", accent:"#B5002A", mods:[
          { name:"TypeScript & Code Quality", desc:"Advanced TypeScript, SOLID principles, DRY/KISS, clean code, automation tools" },
          { name:"Microservices — Foundations", desc:"Service decomposition, domain-driven design, data ownership strategies" },
          { name:"Microservices — Communication & Reliability", desc:"API gateway, event-driven patterns, fault tolerance, Docker & Kubernetes" },
          { name:"High-Level System Design", desc:"Scalability patterns, caching, distributed systems, design trade-off analysis" }
        ]},
        { id:"P7", title:"Second Project", accent:"#8E001F", mods:[
          { name:"System Architecture & Design", desc:"Full system design, Figma, API docs, microservices, AI feature integration" },
          { name:"Project Development — 2 Sprints", desc:"TDD, AI-assisted development, monorepo management, code quality" },
          { name:"Project Hosting & Launch", desc:"Deployment pipeline, testing, production launch" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#6B0018", mods:[
          { name:"Professional Branding & Job Search", desc:"Portfolio, LinkedIn, GitHub, AI-powered resume & cover letters" },
          { name:"Workplace Readiness & Interviews", desc:"HR interviews, Agile/SDLC, mock assessments, client communication" }
        ]}
      ]}
    ]
  },
  {
    id:"python", title:"Python Django + React", sub:"Python Full-Stack Development",
    badge:"Versatile", badgeC:"#44C997", badgeTC:"#000",
    accent:"#44C997", icon:"🐍",
    grad:"linear-gradient(145deg,#041A0C 0%,#082A15 100%)",
    desc:"Python-powered backend with Django REST Framework paired with a modern React frontend. The complete full-stack toolkit for versatile developers.",
    skills:["Python","Django","DRF","React.js","PostgreSQL","Django ORM","JWT Auth","REST APIs","AI Integration","DSA"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Core", mods:15, papers:[
        { id:"P1", title:"Foundation & Web Design", accent:"#44C997", mods:[
          { name:"Python Fundamentals & Logical Thinking", desc:"Variables, data types, collections, control flow, functions, error handling & OOP intro" },
          { name:"HTML & CSS Fundamentals", desc:"Document structure, CSS, flexbox, grid, responsive design, media queries" },
          { name:"Advanced Python & Application Programming", desc:"Comprehensions, generators, OOP, file handling, async basics, modules & packages" }
        ]},
        { id:"P2", title:"Core Development", accent:"#37A07A", mods:[
          { name:"Database Fundamentals & SQL", desc:"Relational databases, SQL queries, JOINs, aggregation, schema design & data quality" },
          { name:"ORM & Data Modeling", desc:"Django ORM, model relationships, migrations, query optimization, N+1 problem" },
          { name:"Django + Django REST Framework", desc:"MVT pattern, URL routing, DRF serializers, CRUD APIs, authentication & JWT" },
          { name:"JavaScript & React — Core Concepts", desc:"ES6+, JSX, hooks, components, React Router, state management & event handling" },
          { name:"React — Advanced Concepts", desc:"Context API, useReducer, performance optimization, code splitting & lazy loading" }
        ]},
        { id:"P3", title:"First Project", accent:"#2A7A5D", mods:[
          { name:"Project Planning", desc:"Django+React architecture, API design, database modeling, AI-assisted planning" },
          { name:"Project Development — 4 Sprints", desc:"Full-stack development with Pytest, Django test client, React Testing Library" },
          { name:"Project Hosting", desc:"Deployment, environment configuration, gunicorn/nginx setup, production readiness" }
        ]},
        { id:"P4", title:"DSA & Type Safety", accent:"#1D5542", mods:[
          { name:"Arrays, Strings & Algorithms", desc:"Searching, sorting, time complexity — implemented in Python" },
          { name:"DSA — Conceptual Understanding", desc:"Stacks, queues, trees, graphs — practical Python applications" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced & Career", mods:14, papers:[
        { id:"P5", title:"AI in Detail", accent:"#44C997", mods:[
          { name:"Building with AI + LLMs", desc:"AI features in Django apps, prompt engineering, LLM API integration" },
          { name:"Advanced Agentic Workflows", desc:"Multi-step AI pipelines, Celery for async tasks, tool-connected agents" },
          { name:"Retrieval & Knowledge-Based AI", desc:"RAG with Django backend, vector concepts, knowledge augmentation" },
          { name:"AI Evaluation & Optimization", desc:"Testing AI outputs, prompt optimization, integration validation" }
        ]},
        { id:"P6", title:"Design & Architecture", accent:"#37A07A", mods:[
          { name:"TypeScript & Code Quality", desc:"TypeScript in React, Python type hints, clean code & SOLID principles" },
          { name:"Microservices — Foundations", desc:"Breaking Django monolith into services, domain design & data boundaries" },
          { name:"Microservices — Communication", desc:"API gateway, Celery, Docker, Kubernetes & async task management" },
          { name:"High-Level System Design", desc:"Scaling Django apps, Redis caching, Celery queues & system design patterns" }
        ]},
        { id:"P7", title:"Second Project", accent:"#2A7A5D", mods:[
          { name:"System Architecture & Design", desc:"Full system design, Figma, microservices, API documentation, AI features" },
          { name:"Project Development — 2 Sprints", desc:"TDD, AI-assisted development, Docker containerization, code quality" },
          { name:"Project Hosting & Launch", desc:"CI/CD, deployment, monitoring, production launch" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#1D5542", mods:[
          { name:"Professional Branding & Job Search", desc:"Portfolio, LinkedIn, GitHub, AI-powered job applications" },
          { name:"Workplace Readiness & Interviews", desc:"Technical interviews, HR mock sessions, Agile workplace skills" }
        ]}
      ]}
    ]
  },
  {
    id:"devops", title:"DevOps Engineering", sub:"Cloud, CI/CD & Infrastructure",
    badge:"High Demand", badgeC:"#2496ED", badgeTC:"#fff",
    accent:"#2496ED", icon:"🔧",
    grad:"linear-gradient(145deg,#060F1A 0%,#0C1D30 100%)",
    desc:"Master the complete DevOps lifecycle — Linux, Python automation, Git, CI/CD pipelines, Docker, Kubernetes & cloud infrastructure management.",
    skills:["Linux","Python","Git","Jenkins","Docker","Kubernetes","Ansible","AWS/GCP","Terraform","Prometheus/Grafana"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Automation", mods:15, papers:[
        { id:"P1", title:"Foundation & Programming", accent:"#2496ED", mods:[
          { name:"Foundation Week — DevOps Concepts", desc:"SDLC, CI/CD overview, DevOps mindset, OS basics, networking fundamentals" },
          { name:"Linux Fundamentals", desc:"Filesystem, CLI commands, permissions, users, process management & shell scripting" },
          { name:"Python for DevOps", desc:"Automation scripts, file handling, API interactions, system commands & subprocess" },
          { name:"Git & Version Control", desc:"Repositories, branching, merging, pull requests, GitHub/GitLab team workflows" }
        ]},
        { id:"P2", title:"Infrastructure & Automation", accent:"#1B7CC7", mods:[
          { name:"Networking & System Fundamentals", desc:"IP, DNS, ports, HTTP/HTTPS, TCP/UDP, SSH, server infrastructure concepts" },
          { name:"Configuration Management — Ansible", desc:"Playbooks, inventory, roles, YAML automation, idempotent remote management" },
          { name:"CI/CD & Automation Workflows", desc:"Jenkins pipelines, GitHub Actions, build automation, artifact management" },
          { name:"Code Quality & DevOps Practices", desc:"Linters, pre-commit hooks, monorepo practices, reliability engineering" }
        ]},
        { id:"P3", title:"Containers & Kubernetes", accent:"#1362A0", mods:[
          { name:"Docker & Containerization", desc:"Container fundamentals, Dockerfile, images, docker-compose, multi-container apps" },
          { name:"Kubernetes Fundamentals", desc:"Pods, deployments, services, config maps, ingress, namespaces & kubectl" },
          { name:"Container Orchestration Project", desc:"Containerizing apps, K8s deployment, scaling, health checks & CI/CD integration" }
        ]},
        { id:"P4", title:"First DevOps Project", accent:"#0C4B7A", mods:[
          { name:"Infrastructure Architecture Planning", desc:"Pipeline design, tool selection, environment setup & documentation" },
          { name:"Full Pipeline Implementation", desc:"Complete CI/CD pipeline, containerization, automation & monitoring setup" }
        ]}
      ]},
      { name:"Semester 2", tag:"Cloud & Advanced", mods:14, papers:[
        { id:"P5", title:"Cloud & Platform Engineering", accent:"#2496ED", mods:[
          { name:"Cloud Fundamentals — AWS/GCP", desc:"Compute, storage, networking, IAM, managed services, cost management" },
          { name:"Infrastructure as Code — Terraform", desc:"IaC concepts, reproducible infrastructure, modules, state management" },
          { name:"Advanced CI/CD & GitOps", desc:"GitOps workflows, ArgoCD concepts, progressive delivery, feature flags" },
          { name:"Platform Engineering", desc:"Internal developer platforms, self-service infrastructure, developer experience" }
        ]},
        { id:"P6", title:"Observability & Security", accent:"#1B7CC7", mods:[
          { name:"Monitoring & Observability", desc:"Prometheus, Grafana, structured logging, distributed tracing, alerting, SLOs" },
          { name:"DevSecOps Fundamentals", desc:"Secrets management, SAST/DAST, vulnerability scanning, secure pipelines" },
          { name:"Site Reliability Engineering", desc:"Error budgets, toil reduction, incident response, postmortems, SLI/SLO" },
          { name:"Advanced Kubernetes", desc:"Helm charts, operators, autoscaling, stateful sets, service mesh introduction" }
        ]},
        { id:"P7", title:"Second Project", accent:"#1362A0", mods:[
          { name:"Cloud Architecture Design", desc:"Full cloud architecture, IaC, security considerations, monitoring plan" },
          { name:"Production Implementation", desc:"Production-grade deployment with all DevOps practices applied" },
          { name:"Documentation & Runbooks", desc:"SLA/SLO definitions, architecture walkthrough, operational playbooks" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#0C4B7A", mods:[
          { name:"Professional Branding & Job Search", desc:"DevOps portfolio, certifications roadmap, GitHub Actions showcase" },
          { name:"Workplace Readiness & Interviews", desc:"DevOps interview prep, system design Q&A, on-call culture, mock sessions" }
        ]}
      ]}
    ]
  },
  {
    id:"flutter", title:"Flutter Mobile Dev", sub:"Cross-Platform App Development",
    badge:"Cross-Platform", badgeC:"#54C5F8", badgeTC:"#000",
    accent:"#54C5F8", icon:"📱",
    grad:"linear-gradient(145deg,#071525 0%,#0D2545 100%)",
    desc:"Build beautiful iOS & Android apps with a single codebase. Master Dart, Flutter widgets, state management, Firebase & App Store publishing.",
    skills:["Dart","Flutter","Bloc/Riverpod","Firebase","REST APIs","SQLite","Native Channels","Animations","CI/CD","App Publishing"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Core", mods:15, papers:[
        { id:"P1", title:"Foundations & Dart Programming", accent:"#54C5F8", mods:[
          { name:"Foundation Week — Mobile Concepts", desc:"Computing basics, mobile app fundamentals, client-server model, API overview" },
          { name:"Web Fundamentals & Responsive Design", desc:"HTML/CSS basics, responsive layouts, mobile-first design, UI principles" },
          { name:"Dart Programming Fundamentals", desc:"Variables, control flow, collections, functions, null safety, problem-solving" },
          { name:"OOP with Dart", desc:"Classes, inheritance, polymorphism, null safety, error handling, Dart-specific features" }
        ]},
        { id:"P2", title:"Flutter Fundamentals", accent:"#2FA8DC", mods:[
          { name:"Flutter Core — Widgets & Layouts", desc:"Widget tree, stateless/stateful, Row/Column/Stack, pubspec.yaml, pub packages" },
          { name:"Navigation, UI Components & Deep Linking", desc:"Navigator, named routes, ListView, GridView, forms, validation, deep linking" },
          { name:"Local Storage & Secure Data", desc:"SharedPreferences, SQLite, CRUD, data modeling, secure credential storage" },
          { name:"Device Features & Native Integration", desc:"Camera, location, sensors, permissions, method channels, platform-specific code" }
        ]},
        { id:"P3", title:"First Project", accent:"#1880B5", mods:[
          { name:"Project Planning & Architecture", desc:"App architecture, screen flow design, data model, API planning, Figma" },
          { name:"Project Development — 3 Sprints", desc:"Full Flutter app with state management, local storage, unit & widget tests" },
          { name:"App Publishing Basics", desc:"Build configuration, testing, Play Store/App Store preparation" }
        ]},
        { id:"P4", title:"State Management & Architecture", accent:"#105E8A", mods:[
          { name:"State Management — Bloc/Riverpod", desc:"Reactive state, BLoC pattern, Riverpod providers, clean architecture" },
          { name:"Advanced Architecture Patterns", desc:"MVVM, Clean Architecture, dependency injection, separation of concerns" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced & Career", mods:14, papers:[
        { id:"P5", title:"Networking & Firebase", accent:"#54C5F8", mods:[
          { name:"REST API Integration — Dio & Retrofit", desc:"HTTP calls, interceptors, error handling, response parsing, loading states" },
          { name:"Firebase Integration", desc:"Firestore, Authentication, Cloud Storage, real-time listeners, FCM notifications" },
          { name:"Push Notifications & Background Services", desc:"FCM, local notifications, background fetch, app lifecycle management" },
          { name:"Advanced UI & Animations", desc:"Implicit/explicit animations, Hero widget, custom painters, 60fps optimization" }
        ]},
        { id:"P6", title:"Advanced Flutter & AI", accent:"#2FA8DC", mods:[
          { name:"AI Integration in Flutter", desc:"LLM API calls, prompt engineering, AI-powered app features" },
          { name:"Testing & Quality Assurance", desc:"Unit, widget & integration tests, mocking, golden tests, code coverage" },
          { name:"CI/CD for Mobile", desc:"Fastlane, GitHub Actions for mobile, automated builds, TestFlight distribution" },
          { name:"Code Quality & Performance", desc:"Linting rules, code generation, package management, Flutter DevTools profiling" }
        ]},
        { id:"P7", title:"Second Project", accent:"#1880B5", mods:[
          { name:"Architecture & Product Design", desc:"Complex app design, design system, Figma prototyping, AI feature planning" },
          { name:"Full App Development", desc:"Production Flutter app with CI/CD, comprehensive testing, Firebase backend" },
          { name:"App Store Publishing & Launch", desc:"Store submission, metadata, screenshots, ASO, launch strategy" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#105E8A", mods:[
          { name:"Professional Branding & Job Search", desc:"Flutter portfolio apps on stores, GitHub, LinkedIn, app showcase" },
          { name:"Workplace Readiness & Interviews", desc:"Mobile dev interviews, technical assessments, HR prep, mock sessions" }
        ]}
      ]}
    ]
  },
  {
    id:"kotlin", title:"Kotlin Android Dev", sub:"Native Android Engineering",
    badge:"Google Preferred", badgeC:"#9D75FF", badgeTC:"#000",
    accent:"#9D75FF", icon:"🤖",
    grad:"linear-gradient(145deg,#100820 0%,#1C1038 100%)",
    desc:"Build professional native Android apps with Kotlin, Jetpack Compose & modern architecture components. Google's preferred technology stack.",
    skills:["Kotlin","Jetpack Compose","Android SDK","ViewModel","StateFlow","Room DB","Coroutines","Hilt/DI","Firebase","Material Design 3"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Core", mods:15, papers:[
        { id:"P1", title:"Kotlin Programming Foundations", accent:"#9D75FF", mods:[
          { name:"Kotlin Fundamentals & Logical Thinking", desc:"Variables, data types, control flow, collections, functions, problem-solving" },
          { name:"Advanced Kotlin & OOP", desc:"Data classes, sealed classes, null safety, higher-order functions, scope functions" }
        ]},
        { id:"P2", title:"Android Fundamentals", accent:"#845FE8", mods:[
          { name:"Android Studio & Android Basics", desc:"Activity lifecycle, intents, manifest, Gradle, Android architecture overview" },
          { name:"Jetpack Compose Fundamentals", desc:"Composable functions, layouts, UI components, state with remember, recomposition" },
          { name:"Navigation, Material Design 3 & UI", desc:"Nav components, Material Design 3, LazyColumn, forms, multi-screen apps" },
          { name:"State Management — ViewModel & StateFlow", desc:"ViewModel lifecycle, StateFlow/SharedFlow, MVVM pattern, reactive UI" }
        ]},
        { id:"P3", title:"Data Persistence & Engineering", accent:"#6A48D0", mods:[
          { name:"Local Storage with DataStore", desc:"Preference DataStore, reactive data, Flow-based updates, user settings" },
          { name:"Room Database & SQLite", desc:"Entities, DAOs, database queries, relationships, Room with ViewModel" },
          { name:"Kotlin Coroutines & Concurrency", desc:"Coroutines, suspend functions, Dispatchers, structured concurrency, Flow" }
        ]},
        { id:"P4", title:"First Project", accent:"#5032AF", mods:[
          { name:"Project Planning & Design", desc:"App architecture, Figma screens, data model, API design, feature planning" },
          { name:"Full App Development", desc:"Complete Android app with MVVM, Room, ViewModel, Coroutines, unit tests" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced & Career", mods:14, papers:[
        { id:"P5", title:"Networking & Advanced Features", accent:"#9D75FF", mods:[
          { name:"REST APIs with Retrofit & OkHttp", desc:"API integration, interceptors, error handling, response modeling, auth tokens" },
          { name:"Firebase Integration", desc:"Firestore, Authentication, Realtime DB, Cloud Storage, FCM notifications" },
          { name:"Dependency Injection with Hilt", desc:"Hilt modules, component scoping, constructor injection, testing with Hilt" },
          { name:"Advanced Compose & Animations", desc:"Custom animations, gestures, Canvas drawing, performance optimization" }
        ]},
        { id:"P6", title:"Architecture & Quality", accent:"#845FE8", mods:[
          { name:"Clean Architecture in Android", desc:"Data/domain/presentation layers, use cases, repository pattern, SOLID" },
          { name:"AI Integration in Android", desc:"LLM APIs, on-device ML with TFLite, AI-powered Android features" },
          { name:"Testing in Android", desc:"JUnit unit tests, Espresso/Compose UI tests, MockK mocking, coverage" },
          { name:"Performance & Security", desc:"App profiling, security best practices, ProGuard, code obfuscation" }
        ]},
        { id:"P7", title:"Second Project", accent:"#6A48D0", mods:[
          { name:"Architecture & Product Design", desc:"Clean Architecture, Figma, component library, AI feature integration" },
          { name:"Production App Development", desc:"Hilt, Clean Architecture, comprehensive tests, CI/CD pipeline" },
          { name:"Play Store Publishing", desc:"App signing, store listing, beta testing, analytics setup, launch" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#5032AF", mods:[
          { name:"Professional Branding & Job Search", desc:"Published Android apps, GitHub, LinkedIn, developer portfolio" },
          { name:"Workplace Readiness & Interviews", desc:"Android interviews, Kotlin assessments, HR prep, mock sessions" }
        ]}
      ]}
    ]
  },
  {
    id:"unity", title:"Unity Game Development", sub:"Professional Game Engineering",
    badge:"Creative Tech", badgeC:"#A78BFA", badgeTC:"#000",
    accent:"#A78BFA", icon:"🎮",
    grad:"linear-gradient(145deg,#0A0818 0%,#130D2A 100%)",
    desc:"Create professional 2D & 3D games with Unity and C#. From core mechanics to publishing on Steam, Play Store & App Store.",
    skills:["C#","Unity Engine","Physics Systems","UI/UX","Animation","Shader Graph","Level Design","AI/NavMesh","Multiplayer","Steam Publishing"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Core", mods:15, papers:[
        { id:"P1", title:"Programming & Game Foundations", accent:"#A78BFA", mods:[
          { name:"C# Fundamentals & Logical Thinking", desc:"Variables, control flow, methods, arrays, collections & game-oriented problem solving" },
          { name:"Advanced C# & OOP", desc:"Classes, inheritance, interfaces, delegates, events & event-driven programming" },
          { name:"Game Mathematics & Problem Solving", desc:"Vectors, transformations, trigonometry, physics math, state-based game logic" }
        ]},
        { id:"P2", title:"Unity Fundamentals", accent:"#8B6FE8", mods:[
          { name:"Unity Engine Fundamentals", desc:"Unity Editor, scenes, assets, GameObjects, components, Transform, workflow" },
          { name:"GameObjects, Components & Scripting", desc:"MonoBehaviour lifecycle, prefabs, object interaction, gameplay scripting" },
          { name:"Physics, Input Systems & Gameplay", desc:"Rigidbody, colliders, triggers, player controls, game loops, event mechanics" },
          { name:"UI Systems, Animation & Audio", desc:"Canvas, HUD, Animator Controller, character animations, audio, game feel" }
        ]},
        { id:"P3", title:"Intermediate Game Development", accent:"#6F54CE", mods:[
          { name:"Scene Management & Asset Management", desc:"Multi-scene workflows, prefab variants, resource management, modular systems" },
          { name:"Data Persistence & Save Systems", desc:"PlayerPrefs, JSON save files, serialization, game state persistence" },
          { name:"First Game Project", desc:"Complete 2D/3D game with mechanics, UI, audio & polished gameplay loops" }
        ]},
        { id:"P4", title:"Optimization & Deployment", accent:"#5038AE", mods:[
          { name:"Game Optimization & Performance", desc:"Draw call reduction, texture compression, LOD, profiler, mobile optimization" },
          { name:"Game Build & Initial Release", desc:"Platform builds, build settings, QA testing, publishing basics" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced & Career", mods:14, papers:[
        { id:"P5", title:"Advanced Game Systems", accent:"#A78BFA", mods:[
          { name:"Advanced AI & Enemy Behavior", desc:"NavMesh pathfinding, state machines, behavior trees, enemy patterns & boss fights" },
          { name:"Shader Graph & Visual Effects", desc:"Shader Graph, particle systems, VFX Graph, post-processing, visual polish" },
          { name:"Advanced Physics & Procedural Generation", desc:"Complex physics, procedural level generation, noise functions, randomness" },
          { name:"Multiplayer Foundations", desc:"Networking concepts, Unity Netcode, lobby systems, client-server model" }
        ]},
        { id:"P6", title:"Architecture & AI Integration", accent:"#8B6FE8", mods:[
          { name:"Game Architecture Patterns", desc:"Game manager patterns, event systems, ScriptableObjects, SOLID in games" },
          { name:"AI in Game Development", desc:"AI for asset generation, level design assistance, procedural dialogue systems" },
          { name:"Level Design & Game Feel", desc:"Level design principles, juiciness, feedback loops, playtesting methodology" },
          { name:"Monetization & Analytics", desc:"Ad integration, IAP, analytics events, retention mechanics, live ops basics" }
        ]},
        { id:"P7", title:"Final Game Project", accent:"#6F54CE", mods:[
          { name:"Game Concept & Production Planning", desc:"GDD creation, scope management, timeline, asset pipeline, AI feature planning" },
          { name:"Full Polished Game Development", desc:"Complete game with AI features, all systems integrated, QA testing" },
          { name:"Publishing & Launch", desc:"Steam/itch.io/Play Store submission, trailer, press kit, launch strategy" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#5038AE", mods:[
          { name:"Professional Branding & Job Search", desc:"Game dev portfolio, itch.io/Steam presence, GitHub, studio outreach" },
          { name:"Workplace Readiness & Interviews", desc:"Game company interviews, technical assessments, portfolio presentation" }
        ]}
      ]}
    ]
  },
  {
    id:"ml", title:"Machine Learning", sub:"AI & Data Science Engineering",
    badge:"Future Tech", badgeC:"#FF8C38", badgeTC:"#000",
    accent:"#FF8C38", icon:"🧠",
    grad:"linear-gradient(145deg,#1A0A00 0%,#2C1500 100%)",
    desc:"Build real-world ML models & AI systems. Master the complete pipeline — from data wrangling and model training to deployment and production ML.",
    skills:["Python","NumPy/Pandas","Scikit-learn","TensorFlow/PyTorch","SQL","Statistics","Deep Learning","NLP","Computer Vision","MLOps"],
    stats:{duration:"12 Months",papers:"8 Papers",modules:"29 Modules",projects:"2 Projects"},
    sems:[
      { name:"Semester 1", tag:"Foundation & Data Engineering", mods:15, papers:[
        { id:"P1", title:"Programming & Data Foundations", accent:"#FF8C38", mods:[
          { name:"Foundation Week — AI & ML Overview", desc:"AI vs ML vs DL, ML lifecycle, data types, features/labels, environment setup, Jupyter" },
          { name:"Python Programming", desc:"Variables, control flow, collections, functions, file handling, modules, exception handling" },
          { name:"Mathematics, Statistics & Probability", desc:"Linear algebra, stats, probability, distributions, correlation & regression intro" },
          { name:"Data Structures & Algorithms for ML", desc:"Arrays, sorting, hash tables, trees — applied to data processing challenges" }
        ]},
        { id:"P2", title:"Data Engineering Foundations", accent:"#E07520", mods:[
          { name:"Database & SQL Fundamentals", desc:"Relational DBs, SQL queries, JOINs, aggregations, data quality & cleaning" },
          { name:"Advanced SQL & Data Modeling", desc:"CTEs, window functions, subqueries, schema design, data warehouse concepts" },
          { name:"Data Wrangling & Preparation", desc:"Pandas, missing values, duplicates, feature engineering, encoding, normalization" },
          { name:"Exploratory Data Analysis & Visualization", desc:"EDA, Matplotlib/Seaborn, histograms, scatter plots, correlation, storytelling" }
        ]},
        { id:"P3", title:"ML Foundations", accent:"#C05E12", mods:[
          { name:"Introduction to Machine Learning", desc:"Supervised/unsupervised learning, train/test split, overfitting, evaluation metrics" },
          { name:"Regression Algorithms", desc:"Linear/polynomial regression, regularization (Ridge/Lasso), cross-validation" },
          { name:"Classification Algorithms", desc:"Logistic regression, decision trees, random forests, SVM, KNN, confusion matrix" }
        ]},
        { id:"P4", title:"First ML Project", accent:"#9A4808", mods:[
          { name:"Data Project Planning", desc:"Problem framing, dataset selection, EDA, feature engineering, model strategy" },
          { name:"Model Development & Evaluation", desc:"End-to-end ML project, hyperparameter tuning, model comparison, documentation" }
        ]}
      ]},
      { name:"Semester 2", tag:"Advanced ML & Career", mods:14, papers:[
        { id:"P5", title:"Advanced Machine Learning", accent:"#FF8C38", mods:[
          { name:"Unsupervised Learning & Clustering", desc:"K-Means, hierarchical clustering, PCA, dimensionality reduction, anomaly detection" },
          { name:"Neural Networks & Deep Learning", desc:"Perceptrons, backpropagation, CNNs, RNNs, transfer learning, TensorFlow/PyTorch" },
          { name:"Natural Language Processing", desc:"Text preprocessing, TF-IDF, word embeddings, sentiment analysis, text classification" },
          { name:"Computer Vision Fundamentals", desc:"Image processing, CNNs for vision, object detection, image classification pipelines" }
        ]},
        { id:"P6", title:"MLOps & AI Engineering", accent:"#E07520", mods:[
          { name:"Model Deployment & Serving", desc:"Flask/FastAPI for ML, model serialization, REST APIs for predictions, Docker for ML" },
          { name:"MLOps Fundamentals", desc:"Experiment tracking with MLflow, model versioning, feature stores, monitoring" },
          { name:"Building with LLMs & AI APIs", desc:"LLM API usage, prompt engineering, RAG systems, AI-powered applications" },
          { name:"Data Engineering at Scale", desc:"Pipelines, feature engineering at scale, batch vs streaming, data quality" }
        ]},
        { id:"P7", title:"Capstone ML Project", accent:"#C05E12", mods:[
          { name:"Project Planning & Design", desc:"Problem definition, dataset acquisition, architecture design, evaluation framework" },
          { name:"Full ML Pipeline Development", desc:"End-to-end pipeline — preprocessing, training, evaluation, serving API" },
          { name:"Deployment & Presentation", desc:"Production deployment, monitoring dashboard, technical presentation" }
        ]},
        { id:"P8", title:"Placement Training", accent:"#9A4808", mods:[
          { name:"Professional Branding & Job Search", desc:"ML portfolio on Kaggle/GitHub, LinkedIn, research papers, technical blog" },
          { name:"Workplace Readiness & Interviews", desc:"ML/Data Science interviews, stats Q&A, case studies, mock sessions" }
        ]}
      ]}
    ]
  }
];

/* ─────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────── */
function useCountUp(target, duration = 2200, active = false) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, active]);
  return val;
}

function useInView(threshold = 0.2) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ─────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────── */
function Navbar({ onCoursesClick, onRoadmapClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = { background: scrolled ? "rgba(8,8,8,.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? `1px solid ${C.border}` : "none",
    position:"fixed", top:0, left:0, right:0, zIndex:100,
    transition:"all .3s ease", padding:"0 max(5%,24px)" };

  return (
    <nav style={nav}>
      <div style={{ maxWidth:1240, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:72 }}>
        {/* Logo */}
        <img
          src="https://website-main.blr1.cdn.digitaloceanspaces.com/marketing-landingpage-files/BrototypeLogos/brototype_without_tagline_white_log_svg.svg"
          alt="Brototype Logo"
          style={{ height: "32px", display: "block" }}
        />

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:4 }}>
          <button className="nav-link" onClick={onCoursesClick}>Courses</button>
          <button className="nav-link" onClick={onRoadmapClick}>Roadmap</button>
          <button className="nav-link" onClick={() => document.getElementById("placements")?.scrollIntoView({ behavior:"smooth" })}>Placements</button>
        </div>

        {/* Mobile */}
        <button className="mob-btn" style={{ display:"none", background:"none", border:"none", color:C.white, cursor:"pointer" }} onClick={() => setMob(p => !p)}>
          {mob ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {mob && (
        <div style={{ background:"rgba(8,8,8,.97)", borderTop:`1px solid ${C.border}`, padding:"16px max(5%,24px) 20px", display:"flex", flexDirection:"column", gap:4 }}>
          {[["Courses", onCoursesClick], ["Roadmap", onRoadmapClick], ["Placements", () => document.getElementById("placements")?.scrollIntoView({ behavior:"smooth" })]].map(([l, fn]) => (
            <button key={l} className="nav-link" style={{ textAlign:"left" }} onClick={() => { fn(); setMob(false); }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────── */
function Hero({ onCoursesClick, onRoadmapClick }) {
  return (
    <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"120px 24px 80px", position:"relative", overflow:"hidden" }}>
      {/* bg mesh */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,107,53,.35) 0%, transparent 70%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(71,179,104,.06) 1px, transparent 1px)", backgroundSize:"38px 38px", pointerEvents:"none" }}/>

      <div style={{ position:"relative", maxWidth:860, zIndex:1 }}>
        {/* eyebrow */}
        <div className="fadeUp" style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(71,179,104,.1)", border:`1px solid rgba(71,179,104,.25)`, borderRadius:24, padding:"7px 16px", marginBottom:28 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:C.g3, animation:"pulse 2s infinite" }}/>
          <span style={{ color:C.g4, fontSize:".8rem", fontWeight:600, letterSpacing:.04*14+"px" }}>12-Month Software Engineering Program</span>
        </div>

        <h1 className="fadeUp-1 hero-title" style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"4.2rem", lineHeight:1.08, letterSpacing:"-2px", marginBottom:22 }}>
          BROTOTYPE
        </h1>

        <p className="fadeUp-2" style={{ fontSize:"1.15rem", color:C.tSub, lineHeight:1.7, marginBottom:42, maxWidth:640, margin:"0 auto 42px" }}>
          From zero to placed software engineer in 12 months. Real skills, real projects, real results — with a community that has your back every step of the way.
        </p>

        <div className="fadeUp-3" style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:64 }}>
          <button className="btn-gold" style={{ fontSize:"1rem", padding:"15px 32px", display:"flex", alignItems:"center", gap:8 }} onClick={onCoursesClick}>
            Explore Courses <ArrowRight size={16}/>
          </button>
          <button className="btn-outline" style={{ fontSize:"1rem", padding:"15px 32px" }} onClick={onRoadmapClick}>
            View Roadmap
          </button>
        </div>

        {/* quick stats */}
        <div className="fadeUp-4" style={{ display:"flex", gap:36, justifyContent:"center", flexWrap:"wrap" }}>
          {[["2,351+","Students Placed"],["4.7 LPA","Average CTC"],["35 LPA","Highest CTC"],["98%","Placement Rate"]].map(([n,l]) => (
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"1.6rem", color:C.gold, letterSpacing:"-1px" }}>{n}</div>
              <div style={{ fontSize:".75rem", color:C.tMuted, marginTop:3, fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
        <span style={{ fontSize:".7rem", color:C.tMuted, letterSpacing:".1em" }}>SCROLL</span>
        <div style={{ width:1, height:40, background:`linear-gradient(${C.g3}, transparent)` }}/>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PLACEMENT STATS
───────────────────────────────────────────────────────── */
function StatsSection() {
  const [ref, vis] = useInView(0.3);
  const p1 = useCountUp(2351, 2000, vis);
  const p2 = useCountUp(896, 1800, vis);
  const p3 = useCountUp(767, 1900, vis);
  const p4 = useCountUp(688, 2000, vis);

  return (
    <section id="placements" ref={ref} style={{ padding:"96px 24px", background:C.surface, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ color:C.g3, fontSize:".75rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>Proven Results</span>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"2.6rem", marginTop:12, letterSpacing:"-1.5px" }}>
            Numbers that <span style={{ color:C.gold }}>speak for themselves</span>
          </h2>
        </div>

        <div className="stats-strip" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20, marginBottom:40 }}>
          {[
            { n:p1, suf:"", label:"Total Placements", sub:"FY 2024-25", c:C.gold },
            { n:"4.7", suf:" LPA", label:"Average CTC", sub:"Lakhs Per Annum", c:C.g3 },
            { n:"35", suf:" LPA", label:"Highest CTC", sub:"Top Package", c:C.g3 },
            { n:"30", suf:" LPA", label:"Highest (Plus Two)", sub:"No-degree background", c:C.g3 },
          ].map(({ n, suf, label, sub, c }) => (
            <div key={label} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"28px 20px", textAlign:"center", animation: vis ? "fadeUp .6s ease both" : "none" }}>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"2.4rem", color:c, letterSpacing:"-1.5px" }}>{n}{suf}</div>
              <div style={{ fontWeight:600, fontSize:".9rem", marginTop:8, color:C.tPrime }}>{label}</div>
              <div style={{ fontSize:".75rem", color:C.tMuted, marginTop:4 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {[
            { cat:"Plus Two", count:p2, avg:"4.67", high:"30 LPA", c:"#52B788" },
            { cat:"Non-IT Background", count:p3, avg:"4.69", high:"35 LPA", c:C.gold },
            { cat:"CS Degree Holders", count:p4, avg:"4.75", high:"18 LPA", c:"#60A5FA" },
          ].map(({ cat, count, avg, high, c }) => (
            <div key={cat} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"22px 18px", display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ width:52, height:52, borderRadius:12, background:`${c}18`, border:`1px solid ${c}33`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Users size={22} color={c}/>
              </div>
              <div>
                <div style={{ fontSize:".75rem", color:C.tMuted, fontWeight:500 }}>{cat}</div>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"1.6rem", color:c, letterSpacing:"-1px", lineHeight:1.1 }}>{count}</div>
                <div style={{ fontSize:".73rem", color:C.tSub, marginTop:3 }}>Avg {avg} LPA &nbsp;·&nbsp; Highest {high}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   COURSE CARD
───────────────────────────────────────────────────────── */
function CourseCard({ course, onClick }) {
  const CourseIcon = { mern:Zap, mean:Globe, python:Code2, devops:Server, flutter:Smartphone, kotlin:Cpu, unity:Gamepad2, ml:Brain }[course.id] || BookOpen;
  return (
    <div className="card-hover" onClick={() => onClick(course)}
      style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:18, overflow:"hidden", display:"flex", flexDirection:"column" }}>

      {/* header gradient */}
      <div style={{ background:course.grad, padding:"26px 22px 20px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-30, right:-30, width:120, height:120, borderRadius:"50%", background:"rgba(255,255,255,.04)" }}/>
        <div style={{ position:"absolute", bottom:-20, right:20, width:70, height:70, borderRadius:"50%", background:"rgba(255,255,255,.04)" }}/>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div style={{ width:46, height:46, borderRadius:12, background:"rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <CourseIcon size={22} color={course.accent}/>
          </div>
          <span style={{ background:course.badgeC, color:course.badgeTC, padding:"4px 10px", borderRadius:20, fontSize:".68rem", fontWeight:700, letterSpacing:".05em" }}>{course.badge}</span>
        </div>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1.2rem", lineHeight:1.2, marginBottom:5 }}>{course.title}</h3>
        <p style={{ fontSize:".78rem", color:"rgba(255,255,255,.55)", fontWeight:500 }}>{course.sub}</p>
      </div>

      {/* body */}
      <div style={{ padding:"18px 22px", flex:1, display:"flex", flexDirection:"column" }}>
        <p style={{ fontSize:".83rem", color:C.tSub, lineHeight:1.65, marginBottom:16, flex:1 }}>{course.desc}</p>

        {/* skills */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:18 }}>
          {course.skills.slice(0,5).map(s => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
          {course.skills.length > 5 && <span className="skill-tag" style={{ color:C.tMuted }}>+{course.skills.length-5}</span>}
        </div>

        {/* stats row */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:18 }}>
          {Object.entries(course.stats).map(([k,v]) => (
            <div key={k} style={{ background:C.surface, borderRadius:8, padding:"8px 10px" }}>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:".85rem", color:course.accent }}>{v}</div>
              <div style={{ fontSize:".68rem", color:C.tMuted, marginTop:1, textTransform:"capitalize" }}>{k}</div>
            </div>
          ))}
        </div>

        <button className="btn-gold" style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontSize:".85rem" }}
          onClick={(e) => { e.stopPropagation(); onClick(course); }}>
          Explore Curriculum <ChevronRight size={15}/>
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   COURSES SECTION
───────────────────────────────────────────────────────── */
function CoursesSection({ onSelect, coursesRef }) {
  const [ref, vis] = useInView(0.1);
  return (
    <section ref={(el) => { ref.current = el; if (coursesRef) coursesRef.current = el; }} id="courses" style={{ padding:"96px 24px" }}>
      <div style={{ maxWidth:1240, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ color:C.g3, fontSize:".75rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>8 Career Tracks</span>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"2.6rem", marginTop:12, letterSpacing:"-1.5px", lineHeight:1.15 }}>
            Choose your <span style={{ color:C.gold }}>engineering path</span>
          </h2>
          <p style={{ color:C.tSub, marginTop:14, fontSize:"1rem", maxWidth:560, margin:"14px auto 0" }}>
            Every track is designed for job readiness — deep technical skills, real projects, AI integration & placement training built in from day one.
          </p>
        </div>

        <div className="courses-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
          {COURSES.map((c, i) => (
            <div key={c.id} style={{ animation: vis ? `fadeUp .5s ${i*0.07}s ease both` : "none", opacity: vis ? undefined : 0 }}>
              <CourseCard course={c} onClick={onSelect}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   ROADMAP SECTION
───────────────────────────────────────────────────────── */
function RoadmapSection({ roadmapRef }) {
  const [ref, vis] = useInView(0.1);
  const steps = [
    { icon:Star, label:"Days 1–10", title:"Foundation Workshop", desc:"Personal development, technical sessions & communication training across 3 focused pillars", c:C.gold },
    { icon:Award, label:"Day 10", title:"Foundation Exam", desc:"10-mark assessment. Score 3+ to pass. Score 7+ to unlock Pay After Placement (PAP)", c:"#F97316" },
    { icon:Target, label:"Day 15", title:"Batch Intake", desc:"PAP students join on zero upfront fees. Upfront-payment students join immediately after exam", c:C.g3 },
    { icon:BookOpen, label:"Month 1–6", title:"Semester 1", desc:"4 papers · 15 modules. Foundation, core development, first full-stack project & DSA", c:C.g3 },
    { icon:Globe, label:"Mid-Year", title:"Industrial Visit + Sem Break", desc:"Real-world industry exposure between semesters to see how engineering orgs operate", c:"#3B82F6" },
    { icon:Layers, label:"Month 7–12", title:"Semester 2", desc:"4 papers · 14 modules. AI in detail, system architecture, second project & placement training", c:C.g3 },
    { icon:TrendingUp, label:"Month 12", title:"Final Exam", desc:"Comprehensive exam covering the full 12-month curriculum. Must clear all 8 paper exams first", c:"#8B5CF6" },
    { icon:CheckCircle, label:"Post-Exam", title:"Placement Support", desc:"Official placement support unlocked. 24-month window total with quarterly supplementary exams", c:C.gold },
  ];

  return (
    <section ref={(el) => { ref.current = el; if (roadmapRef) roadmapRef.current = el; }} id="roadmap" style={{ padding:"96px 24px", background:C.surface, borderTop:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ color:C.g3, fontSize:".75rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>The Journey</span>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"2.6rem", marginTop:12, letterSpacing:"-1.5px" }}>
            10 Days → 12 Months → <span style={{ color:C.gold }}>Placement</span>
          </h2>
          <p style={{ color:C.tSub, marginTop:14, fontSize:"1rem" }}>
            Structured for maximum accountability and real-world readiness
          </p>
        </div>

        {/* Program stats bar */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:12, marginBottom:56, background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"20px 24px" }}>
          {[["10","Workshop Days"],["12","Total Months"],["2","Semesters"],["8","Total Papers"],["29","Total Modules"],["2","Projects"]].map(([n,l]) => (
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"1.8rem", color:C.gold, letterSpacing:"-1px" }}>{n}</div>
              <div style={{ fontSize:".7rem", color:C.tMuted, marginTop:4, fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div className="roadmap-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
          {steps.map(({ icon: Icon, label, title, desc, c }, i) => (
            <div key={i} className="roadmap-card"
              style={{ animationDelay:`${i*0.08}s`, animation: vis ? `fadeUp .5s ${i*0.07}s ease both` : "none", opacity: vis ? undefined : 0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:`${c}18`, border:`1px solid ${c}30`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Icon size={16} color={c}/>
                </div>
                <span style={{ fontSize:".7rem", color:c, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase" }}>{label}</span>
              </div>
              <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1rem", marginBottom:8, lineHeight:1.3 }}>{title}</h4>
              <p style={{ fontSize:".8rem", color:C.tSub, lineHeight:1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Supplementary window note */}
        <div style={{ marginTop:28, background:"rgba(255,209,102,.06)", border:`1px solid rgba(255,209,102,.2)`, borderRadius:12, padding:"16px 20px", display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:32, height:32, borderRadius:8, background:"rgba(255,209,102,.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <Award size={16} color={C.gold}/>
          </div>
          <p style={{ fontSize:".83rem", color:C.tSub, lineHeight:1.6 }}>
            <span style={{ color:C.gold, fontWeight:700 }}>24-Month Maximum Timeline</span> — Students have up to 12 months of supplementary exam windows after hub exit. Supplementary exams run every 3 months, exclusively for failed papers. All papers must be cleared before the Final Exam.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   COURSE DETAIL OVERLAY
───────────────────────────────────────────────────────── */
function CourseDetail({ course, onClose }) {
  const [sem, setSem] = useState(0);
  const [expanded, setExpanded] = useState(new Set(["P1"]));
  const CourseIcon = { mern:Zap, mean:Globe, python:Code2, devops:Server, flutter:Smartphone, kotlin:Cpu, unity:Gamepad2, ml:Brain }[course.id] || BookOpen;
  const togglePaper = useCallback((id) => {
    setExpanded(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }, []);
  const activeSem = course.sems[sem];
  const a = course.accent;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:C.bg, overflow:"hidden" }} onClick={onClose}>
      <div style={{ position:"absolute", inset:0, overflowY:"auto" }} onClick={e => e.stopPropagation()}>

        {/* ── STICKY NAV BAR ── */}
        <div style={{ position:"sticky", top:0, zIndex:10, backdropFilter:"blur(14px)", background:"rgba(8,8,8,.96)", borderBottom:`1px solid ${a}22`, padding:"0 max(5%,24px)" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${a}, ${a}30)` }}/>
          <div style={{ maxWidth:1240, margin:"0 auto", display:"flex", alignItems:"center", gap:12, height:62 }}>
            <div style={{ width:34, height:34, borderRadius:8, background:`${a}18`, border:`1px solid ${a}32`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <CourseIcon size={15} color={a}/>
            </div>
            <div style={{ flex:1 }}>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:".98rem", lineHeight:1, color:C.white }}>{course.title}</h2>
              <p style={{ fontSize:".7rem", color:C.tMuted, marginTop:2 }}>{course.sub}</p>
            </div>
            <button onClick={onClose}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", borderRadius:7,
                background:"rgba(255,255,255,.04)", border:`1px solid ${C.border}`,
                color:C.tSub, cursor:"pointer", fontSize:".78rem", fontWeight:500, fontFamily:"inherit" }}>
              <X size={13}/> Back
            </button>
          </div>
        </div>

        {/* ── COURSE HERO BANNER ── */}
        <div style={{ background:course.grad, position:"relative", overflow:"hidden", padding:"40px max(5%,24px) 48px" }}>
          {/* decorative circles */}
          <div style={{ position:"absolute", top:-90, right:-90, width:300, height:300, borderRadius:"50%", background:"rgba(255,255,255,.04)", pointerEvents:"none" }}/>
          <div style={{ position:"absolute", bottom:-60, right:140, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,.03)", pointerEvents:"none" }}/>
          <div style={{ position:"absolute", top:40, left:-40, width:120, height:120, borderRadius:"50%", background:"rgba(255,255,255,.025)", pointerEvents:"none" }}/>
          {/* fade to content bg */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80, background:`linear-gradient(to bottom, transparent, ${C.bg})`, pointerEvents:"none" }}/>

          <div style={{ maxWidth:1240, margin:"0 auto", position:"relative" }}>
            <span style={{ display:"inline-block", padding:"4px 12px", borderRadius:20, background:"rgba(0,0,0,.28)", border:"1px solid rgba(255,255,255,.18)", fontSize:".68rem", fontWeight:700, letterSpacing:".06em", color:"rgba(255,255,255,.82)", marginBottom:20 }}>
              {course.badge}
            </span>

            <div style={{ display:"flex", alignItems:"flex-start", gap:20, marginBottom:18, flexWrap:"wrap" }}>
              <div style={{ width:68, height:68, borderRadius:18, background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.18)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <CourseIcon size={30} color="#fff"/>
              </div>
              <div>
                <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"2.1rem", letterSpacing:"-1.2px", lineHeight:1.1, color:"#fff" }}>{course.title}</h1>
                <p style={{ fontSize:".88rem", color:"rgba(255,255,255,.55)", marginTop:6 }}>{course.sub}</p>
              </div>
            </div>

            <p style={{ fontSize:".95rem", color:"rgba(255,255,255,.68)", lineHeight:1.75, maxWidth:660, marginBottom:28 }}>{course.desc}</p>

            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              {Object.entries(course.stats).map(([k,v]) => (
                <div key={k} style={{ padding:"8px 16px", borderRadius:8, background:"rgba(0,0,0,.32)", border:"1px solid rgba(255,255,255,.16)", backdropFilter:"blur(8px)" }}>
                  <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:".92rem", color:"#fff" }}>{v}</span>
                  <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.45)", marginLeft:7 }}>{k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SKILLS STRIP ── */}
        <div style={{ background:`${a}07`, borderBottom:`1px solid ${a}16`, padding:"14px max(5%,24px)" }}>
          <div style={{ maxWidth:1240, margin:"0 auto", display:"flex", gap:7, flexWrap:"wrap", alignItems:"center" }}>
            <span style={{ fontSize:".68rem", color:C.tMuted, fontWeight:600, marginRight:4, flexShrink:0, letterSpacing:".08em" }}>SKILLS COVERED</span>
            {course.skills.map(s => (
              <span key={s} style={{ display:"inline-block", padding:"4px 10px", background:`${a}10`, border:`1px solid ${a}28`, borderRadius:20, fontSize:".72rem", fontWeight:500, color:a }}>{s}</span>
            ))}
          </div>
        </div>

        {/* ── CURRICULUM ── */}
        <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 max(5%,24px) 60px" }}>

          {/* Semester tabs */}
          <div style={{ display:"flex", gap:8, padding:"24px 0 20px", borderBottom:`1px solid ${a}16` }}>
            {course.sems.map((s, i) => (
              <button key={i}
                onClick={() => { setSem(i); setExpanded(new Set([course.sems[i].papers[0].id])); }}
                style={{
                  padding:"10px 22px", borderRadius:10, cursor:"pointer",
                  border:`1.5px solid ${sem===i ? a : C.border}`,
                  background: sem===i ? `${a}14` : "transparent",
                  color: sem===i ? a : C.tSub,
                  fontWeight: sem===i ? 700 : 500,
                  fontSize:".875rem", transition:"all .22s", fontFamily:"inherit"
                }}>
                {s.name}
                <span style={{ marginLeft:8, padding:"2px 9px", background: sem===i ? `${a}20` : "rgba(255,255,255,.05)", borderRadius:10, fontSize:".7rem", color: sem===i ? a : C.tMuted }}>
                  {s.mods} modules
                </span>
              </button>
            ))}
          </div>

          {/* Semester subtitle + controls */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 0 14px", flexWrap:"wrap", gap:12 }}>
            <p style={{ fontSize:".82rem", color:C.tMuted }}>
              <span style={{ color:a, fontWeight:600 }}>{activeSem.tag}</span>
              {" "}·{" "}{activeSem.papers.length} papers · {activeSem.mods} modules
            </p>
            <div style={{ display:"flex", gap:8 }}>
              {[["Expand all", () => setExpanded(new Set(activeSem.papers.map(p => p.id)))],
                ["Collapse all", () => setExpanded(new Set())]].map(([label, fn]) => (
                <button key={label}
                  style={{ padding:"6px 13px", borderRadius:7, background:"rgba(255,255,255,.04)", border:`1px solid ${C.border}`, color:C.tSub, fontSize:".75rem", cursor:"pointer", fontFamily:"inherit" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor=a; e.currentTarget.style.color=a; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.color=C.tSub; }}
                  onClick={fn}>{label}</button>
              ))}
            </div>
          </div>

          {/* Paper accordion */}
          {activeSem.papers.map((paper) => {
            const isOpen = expanded.has(paper.id);
            return (
              <div key={paper.id} style={{ border:`1px solid ${isOpen ? paper.accent+"40" : C.border}`, borderRadius:13, overflow:"hidden", marginBottom:10, transition:"border-color .25s ease" }}>

                {/* Paper header row */}
                <div onClick={() => togglePaper(paper.id)}
                  style={{ padding:"15px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", cursor:"pointer",
                    background: isOpen ? `${paper.accent}09` : C.card, transition:"background .2s ease" }}
                  onMouseOver={e => { if(!isOpen) e.currentTarget.style.background=`${paper.accent}05`; }}
                  onMouseOut={e => { if(!isOpen) e.currentTarget.style.background=C.card; }}>

                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:38, height:38, borderRadius:10, background:`${paper.accent}16`, border:`1.5px solid ${paper.accent}35`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:".72rem", color:paper.accent }}>{paper.id}</span>
                    </div>
                    <div>
                      <h4 style={{ fontWeight:600, fontSize:".92rem", color:C.tPrime, lineHeight:1.2 }}>{paper.title}</h4>
                      <p style={{ fontSize:".71rem", color: isOpen ? paper.accent : C.tMuted, marginTop:3, transition:"color .2s" }}>
                        {paper.mods.length} module{paper.mods.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    {/* module dot indicators */}
                    <div style={{ display:"flex", gap:4 }}>
                      {paper.mods.map((_, mi) => (
                        <div key={mi} style={{ width:6, height:6, borderRadius:"50%", background:paper.accent, opacity: isOpen ? 1 : .28, transition:"opacity .22s" }}/>
                      ))}
                    </div>
                    {/* chevron box */}
                    <div style={{ width:26, height:26, borderRadius:7, background: isOpen ? `${paper.accent}16` : "rgba(255,255,255,.05)", border:`1px solid ${isOpen ? paper.accent+"38" : C.border}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .25s" }}>
                      <ChevronDown size={13} color={isOpen ? paper.accent : C.tSub} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition:"transform .25s ease" }}/>
                    </div>
                  </div>
                </div>

                {/* Modules grid */}
                {isOpen && (
                  <div style={{ padding:"14px 18px 18px", background:`${paper.accent}04`, animation:"fadeIn .2s ease" }}>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(295px,1fr))", gap:8 }}>
                      {paper.mods.map((mod, mi) => (
                        <div key={mi}
                          style={{ padding:"12px 14px", background:"rgba(255,255,255,.026)", border:`1px solid rgba(255,255,255,.06)`, borderLeft:`3px solid ${paper.accent}55`, borderRadius:"0 9px 9px 0", transition:"background .18s ease" }}
                          onMouseOver={e => e.currentTarget.style.background="rgba(255,255,255,.042)"}
                          onMouseOut={e => e.currentTarget.style.background="rgba(255,255,255,.026)"}>
                          <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                            <div style={{ width:20, height:20, borderRadius:5, background:`${paper.accent}18`, border:`1px solid ${paper.accent}30`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                              <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:".62rem", color:paper.accent }}>{mi+1}</span>
                            </div>
                            <div>
                              <h5 style={{ fontWeight:600, fontSize:".84rem", color:C.tPrime, lineHeight:1.35, marginBottom:4 }}>{mod.name}</h5>
                              <p style={{ fontSize:".75rem", color:C.tSub, lineHeight:1.6 }}>{mod.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* bottom back link */}
          <div style={{ paddingTop:24, borderTop:`1px solid ${a}16` }}>
            <button onClick={onClose} style={{ display:"flex", alignItems:"center", gap:7, background:"none", border:"none", color:C.tSub, cursor:"pointer", fontSize:".83rem", fontWeight:500, padding:0, fontFamily:"inherit", transition:"color .2s" }}
              onMouseOver={e => e.currentTarget.style.color=a}
              onMouseOut={e => e.currentTarget.style.color=C.tSub}>
              <ChevronRight size={14} style={{ transform:"rotate(180deg)" }}/> Back to all courses
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:C.surface, borderTop:`1px solid ${C.border}`, padding:"56px max(5%,24px) 36px" }}>
      <div style={{ maxWidth:1240, margin:"0 auto" }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:40, marginBottom:48 }}>
          <div style={{ minWidth:240, flex:1 }}>
            <img
              src="https://website-main.blr1.cdn.digitaloceanspaces.com/marketing-landingpage-files/BrototypeLogos/brototype_without_tagline_white_log_svg.svg"
              alt="Brototype Logo"
              style={{ height: "28px", display: "block", marginBottom: 16 }}
            />
            <p style={{ fontSize:".83rem", color:C.tMuted, lineHeight:1.7, maxWidth:280 }}>BROTOTYPE. A 12-month software engineering program built for real placement outcomes.</p>
          </div>
          <div style={{ minWidth:160 }}>
            <h5 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:".82rem", marginBottom:14, color:C.tPrime, letterSpacing:".04em" }}>COURSES</h5>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {["MERN Stack","MEAN Stack","Python Django + React","DevOps Engineering","Flutter Mobile Dev","Kotlin Android Dev","Unity Game Development","Machine Learning"].map(l => (
                <span key={l} style={{ color:C.tMuted, fontSize:".8rem" }}>{l}</span>
              ))}
            </div>
          </div>
          <div style={{ minWidth:160 }}>
            <h5 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:".82rem", marginBottom:14, color:C.tPrime, letterSpacing:".04em" }}>PROGRAM</h5>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {["12-Month Journey","10-Day Workshop","Semester Structure","PAP Model","Placement Support","2,351+ Placed"].map(l => (
                <span key={l} style={{ color:C.tMuted, fontSize:".8rem" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:".75rem", color:C.tMuted }}>© 2025 Brototype. All rights reserved.</p>
          <p style={{ fontSize:".75rem", color:C.tMuted }}>2,351+ engineers placed and counting.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────────────────── */
export default function App() {
  const [selected, setSelected] = useState(null);
  const coursesRef = useRef(null);
  const roadmapRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior:"smooth", block:"start" });

  // Inject CSS
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <div style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Inter',system-ui,sans-serif", color:C.white }}>
      <Navbar onCoursesClick={() => scrollTo(coursesRef)} onRoadmapClick={() => scrollTo(roadmapRef)}/>
      <Hero onCoursesClick={() => scrollTo(coursesRef)} onRoadmapClick={() => scrollTo(roadmapRef)}/>
      <StatsSection/>
      <CoursesSection onSelect={setSelected} coursesRef={coursesRef}/>
      <RoadmapSection roadmapRef={roadmapRef}/>
      <Footer/>
      {selected && <CourseDetail course={selected} onClose={() => setSelected(null)}/>}
    </div>
  );
}
