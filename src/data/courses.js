export const COURSES = [
  {
    id: "mern",
    title: "Full Stack Web Development",
    subtitle: "MERN Stack",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: "🌐",
    gradient: "from-emerald-500 to-teal-400",
    color: "#3DD68C",
    bgDark: "#0D1F17",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Build responsive, modern full-stack web applications",
    highlights: ["REST APIs", "React Hooks", "MongoDB Atlas", "JWT Auth", "Microservices", "AI Integration"],
    semesters: [
      {
        num: 1,
        title: "Semester 1",
        subtitle: "Foundation to Full Stack",
        papers: [
          {
            num: 1,
            title: "Foundation & Web Design",
            color: "#3DD68C",
            modules: [
              {
                num: 1,
                title: "JavaScript Fundamentals & Logical Thinking",
                topics: [
                  "JavaScript basics — execution flow, browser & Node.js runtime",
                  "Variables: var, let, const — primitive & reference types",
                  "Operators: arithmetic, relational, logical, ternary",
                  "Control flow — if/else, switch, ternary operator",
                  "Loops — for, while, do-while, for...of, for...in",
                  "Arrays — declaration, indexing, push/pop/shift/unshift",
                  "Array methods — map, filter, reduce",
                  "Functions — declaration, expression, arrow functions, parameters",
                  "Problem-solving — linear search, reversals, sorting basics",
                  "Objects — key-value, nested objects & arrays",
                  "AI/LLM Awareness — what LLMs can & cannot do, prompt basics",
                ]
              },
              {
                num: 2,
                title: "HTML & CSS Fundamentals",
                topics: [
                  "HTML document structure — DOCTYPE, head, body, semantic tags",
                  "Text, media & linking — headings, images, hyperlinks",
                  "Forms & tables — input types, validation attributes",
                  "CSS fundamentals — selectors, cascade, specificity",
                  "Box model — margin, border, padding, content",
                  "Display & positioning — block, inline, flex, grid",
                  "Flexbox — container, items, alignment, gap",
                  "CSS Grid — rows, columns, template areas",
                  "Responsive design — media queries, mobile-first approach",
                  "Animations & transitions — keyframes, hover effects",
                  "Using AI for HTML/CSS — prompting for layout ideas",
                ]
              },
              {
                num: 3,
                title: "Advanced JavaScript & Browser Programming",
                topics: [
                  "ES6+ features — destructuring, spread/rest, optional chaining",
                  "Short-circuit evaluation — ||, &&, ??",
                  "Modules — import/export, ES modules",
                  "Advanced arrays — map, filter, reduce, find, forEach, Set, Map",
                  "Error handling — try/catch/finally/throw",
                  "DOM manipulation — selection, traversal, mutation",
                  "Event handling — listeners, bubbling, delegation",
                  "Async JavaScript — callbacks, Promises, async/await",
                  "OOP — classes, constructors, inheritance, encapsulation",
                  "Higher-order functions & closures",
                  "Debugging with browser DevTools & AI assistance",
                ]
              },
            ]
          },
          {
            num: 2,
            title: "Core Development",
            color: "#22C55E",
            modules: [
              {
                num: 4,
                title: "MongoDB",
                topics: [
                  "NoSQL vs SQL — when to choose MongoDB",
                  "Collections & documents — flexible schema model",
                  "CRUD operations — insertOne, find, updateOne, deleteOne",
                  "Data types — strings, numbers, arrays, nested objects",
                  "Query operators — $eq, $gt, $lt, $in, $and, $or",
                  "Indexing — why it matters, createIndex, performance impact",
                  "Aggregation pipeline — $match, $group, $sort, $project",
                  "Relationships — embedding vs referencing",
                  "Data modeling — real-world entity design",
                  "AI-assisted query generation & schema suggestions",
                ]
              },
              {
                num: 5,
                title: "Node.js",
                topics: [
                  "Node.js runtime — event loop, non-blocking I/O model",
                  "Built-in modules — fs, path, http, os",
                  "NPM — package management, package.json, dependencies",
                  "HTTP server — request/response handling, status codes",
                  "Express.js — setup, routing, middleware",
                  "REST API — GET, POST, PUT, DELETE endpoints",
                  "Middleware — JSON parsing, static files, custom middleware",
                  "MongoDB + Mongoose — connection, models, CRUD",
                  "Error handling — global error middleware, structured responses",
                  "MVC pattern — routes, controllers, models separation",
                  "Prompt chaining — generating APIs with AI constraints",
                ]
              },
              {
                num: 6,
                title: "React — Core Concepts",
                topics: [
                  "Project setup with Vite — project structure, build process",
                  "Virtual DOM vs actual DOM — reconciliation, SPA vs MPA",
                  "JSX — syntax, expressions, conditional rendering",
                  "Components — functional components, reusability",
                  "Props — passing data, prop types, default props",
                  "State — useState hook, state updates, re-renders",
                  "useEffect — side effects, dependency array, cleanup",
                  "useRef — DOM access, persisting values",
                  "Event handling — onClick, onChange, onSubmit",
                  "React Router — BrowserRouter, Route, useNavigate",
                  "Dynamic list rendering with map()",
                ]
              },
              {
                num: 7,
                title: "React — Optimisation & Advanced",
                topics: [
                  "Re-render problem — identifying unnecessary renders",
                  "useMemo — memoising computed values",
                  "useCallback — memoising callback functions",
                  "React.memo — preventing component re-renders",
                  "useReducer — complex state logic",
                  "Context API — useContext, avoiding prop drilling",
                  "Server state vs UI state — separation of concerns",
                  "Code splitting — React.lazy, Suspense, dynamic imports",
                  "Performance profiling with React DevTools",
                  "AI-assisted component generation & refactoring",
                ]
              },
            ]
          },
          {
            num: 3,
            title: "First Project",
            color: "#F59E0B",
            modules: [
              {
                num: 8,
                title: "Project Planning",
                topics: [
                  "AI as thinking partner — idea generation, feature breakdown",
                  "Writing structured prompts for planning",
                  "Defining problem statement & user roles",
                  "Tech stack selection & justification",
                  "Wireframing core screens",
                ]
              },
              {
                num: 9,
                title: "Project Development 1",
                topics: [
                  "Setting up monorepo structure",
                  "Backend scaffolding — routes, models, controllers",
                  "Frontend scaffold — pages, components, routing",
                  "Debugging with AI — identifying & fixing logic errors",
                  "Unit tests — Jest basics, what & why to test",
                  "Writing 2–3 unit tests for backend logic",
                ]
              },
              {
                num: 10,
                title: "Project Development 2",
                topics: [
                  "API endpoint testing — success & failure cases",
                  "Validation logic tests",
                  "Handling valid & invalid input scenarios",
                  "Difference between unit test & API test",
                ]
              },
              {
                num: 11,
                title: "Project Development 3",
                topics: [
                  "TDD approach — write test first, then implement",
                  "How TDD improves code clarity",
                  "At least 1 feature built using TDD",
                  "Refactoring with test coverage safety net",
                ]
              },
              {
                num: 12,
                title: "Project Development 4",
                topics: [
                  "Integration tests — multiple APIs + database flow",
                  "Validate complete feature end-to-end",
                  "Unit vs integration testing — key differences",
                  "Test coverage review",
                ]
              },
              {
                num: 13,
                title: "Project Hosting",
                topics: [
                  "Run all tests before deployment",
                  "Fix failing test cases",
                  "Deploy backend to cloud (Render/Railway)",
                  "Deploy frontend (Vercel/Netlify)",
                  "Environment variables & secrets management",
                  "Student explains: what was tested & why",
                ]
              },
            ]
          },
          {
            num: 4,
            title: "DSA & Type Safety",
            color: "#8B5CF6",
            modules: [
              {
                num: 14,
                title: "DSA — Arrays, Strings, Algorithms",
                topics: [
                  "Arrays as data structures — memory layout, indexing",
                  "Strings — traversal, comparison, immutability",
                  "Algorithm characteristics — correctness, efficiency",
                  "Time & space complexity — Big O basics",
                  "Linear search — concept, implementation, use cases",
                  "Binary search — sorted prerequisite, divide & conquer",
                  "Bubble sort — comparisons, passes, time complexity",
                  "Selection sort — min selection, in-place sorting",
                  "Insertion sort — building sorted subarray",
                  "Pattern recognition — identifying problem types",
                ]
              },
              {
                num: 15,
                title: "DSA — Conceptual & Application",
                topics: [
                  "Stack (LIFO) — push/pop/peek, call stack, undo",
                  "Queue (FIFO) — enqueue/dequeue, task scheduling",
                  "Hash Tables — key-value, hashing, collision handling",
                  "Trees — nodes, root, binary tree, BST concept",
                  "Graphs — nodes & edges, directed vs undirected",
                  "Heap — min-heap, max-heap, priority queues",
                  "Trie — prefix storage, autocomplete use case",
                  "Choosing structures — Stack vs Queue, Array vs Hash",
                  "Real-world scenario analysis",
                ]
              },
            ]
          },
        ]
      },
      {
        num: 2,
        title: "Semester 2",
        subtitle: "AI, Architecture & Placement",
        papers: [
          {
            num: 5,
            title: "AI in Detail",
            color: "#06B6D4",
            modules: [
              {
                num: 16,
                title: "Building with AI & LLMs",
                topics: [
                  "How AI systems work — input → LLM → response flow",
                  "System prompts vs user prompts — internal wrapping",
                  "Context injection & conversation memory",
                  "Prompt templates for consistent outputs",
                  "Multi-step prompt pipelines",
                  "Frontend → Backend → LLM integration flow",
                  "Text generation, smart autocomplete, AI search",
                  "Agent-like systems — AI + tools concept",
                  "MCP — Model Context Protocol (concept level)",
                  "Hallucination handling — validation, constraints, fallbacks",
                  "Token optimisation — cost vs performance",
                ]
              },
              {
                num: 17,
                title: "Advanced Agentic Workflows",
                topics: [
                  "Single-step vs multi-step AI workflows",
                  "Role-based execution — Planner → Executor → Validator",
                  "Sequential vs conditional workflow design",
                  "Tool usage — AI interacting with APIs & databases",
                  "Function calling basics",
                  "Passing outputs between steps",
                  "Handling intermediate step failures",
                  "Designing: Input → steps → output clearly",
                ]
              },
              {
                num: 18,
                title: "Retrieval & Knowledge-Based AI",
                topics: [
                  "Static LLM knowledge limitations",
                  "RAG — Retrieval Augmented Generation flow",
                  "Query → retrieve → augment → generate",
                  "Direct prompting vs context-augmented prompting",
                  "Combining user input + retrieved data + AI response",
                  "Reducing hallucinations with relevant context",
                  "Handling irrelevant or noisy retrieved data",
                  "Comparing output: with vs without context",
                ]
              },
              {
                num: 19,
                title: "AI Evaluation, Optimisation & Debugging",
                topics: [
                  "Identifying incorrect, vague or incomplete AI outputs",
                  "Comparing multiple outputs for the same input",
                  "Structured test cases for prompts",
                  "Consistency testing across multiple inputs",
                  "Reducing token usage & improving prompt clarity",
                  "Controlling output format & length",
                  "Debugging — prompt issue vs context issue vs logic issue",
                  "Iterative improvement workflow",
                ]
              },
            ]
          },
          {
            num: 6,
            title: "Design & Architecture",
            color: "#F97316",
            modules: [
              {
                num: 20,
                title: "TypeScript & Code Quality",
                topics: [
                  "TypeScript vs JavaScript — why type safety matters",
                  "Basic types — string, number, boolean, array, tuple",
                  "Type inference vs explicit typing",
                  "Functions — typed params, return values, optional params",
                  "Interfaces & type aliases — defining contracts",
                  "Optional & readonly properties, nested objects",
                  "Generics — basic concept & use cases",
                  "Utility types — Partial, Pick, Record",
                  "SOLID principles — high-level understanding",
                  "KISS, DRY, YAGNI — applied in code",
                  "ESLint setup & Husky pre-commit hooks",
                  "AI-assisted TypeScript refactoring",
                ]
              },
              {
                num: 21,
                title: "Microservices — Foundations",
                topics: [
                  "Monolith vs Microservices — tradeoffs",
                  "Single Responsibility Principle at service level",
                  "Bounded context & domain boundaries",
                  "Service granularity — how big/small a service should be",
                  "Loose coupling & high cohesion",
                  "Database per service pattern",
                  "Shared database anti-pattern",
                  "Stateless vs stateful services",
                  "Eventual consistency concept",
                  "Monorepo — Turborepo & Nx introduction",
                ]
              },
              {
                num: 22,
                title: "Microservices — Communication",
                topics: [
                  "Sync communication — HTTP/REST between services",
                  "Async communication — events, message queues",
                  "API Gateway — routing, request aggregation, auth",
                  "Service discovery — client-side vs server-side",
                  "Publish-subscribe pattern",
                  "Event-driven architecture",
                  "Saga pattern (distributed transactions)",
                  "Circuit breaker & retry mechanisms",
                  "Graceful degradation & partial failure handling",
                  "JWT authentication across services",
                  "Docker basics for containerisation",
                ]
              },
              {
                num: 23,
                title: "High-Level Design & System Design",
                topics: [
                  "What is HLD — components, boundaries, data flow",
                  "Functional vs non-functional requirements",
                  "Vertical vs horizontal scaling",
                  "Load balancing concepts",
                  "Stateless vs stateful system design",
                  "Database scaling — read replicas, sharding basics",
                  "Caching — purpose, layers, cache invalidation",
                  "CAP theorem — consistency, availability, partition tolerance",
                  "Fault tolerance & redundancy",
                  "Trade-off analysis — speed vs consistency",
                  "Designing a complete real-world system",
                ]
              },
            ]
          },
          {
            num: 7,
            title: "Second Project",
            color: "#EC4899",
            modules: [
              {
                num: 24,
                title: "System Architecture & Product Design",
                topics: [
                  "Define problem, features & user roles",
                  "Figma UI/UX — main screens & navigation flows",
                  "Architecture decision — monolith vs microservices",
                  "Service/module breakdown with responsibilities",
                  "Database schema per module — entities & relationships",
                  "API design — endpoints, request/response contracts",
                  "Service communication — REST vs events",
                  "AI integration planning — feature list + prompt samples",
                  "Final system blueprint — all deliverables compiled",
                ]
              },
              {
                num: 25,
                title: "Project Development — Phase 1",
                topics: [
                  "Monorepo setup — Turborepo or Nx",
                  "App/service scaffolding with shared code",
                  "TDD — unit tests with Jest before implementation",
                  "API testing with Supertest",
                  "Integration test for complete feature flow",
                  "AI tools — Cursor, Codex for development support",
                  "AI-generated test cases — validate before using",
                  "ESLint + Husky — code quality automation",
                ]
              },
              {
                num: 26,
                title: "Project Development — Phase 2",
                topics: [
                  "Continue TDD — test → implement → validate",
                  "Cover success & failure scenarios",
                  "AI-assisted architecture decisions",
                  "Prompt optimisation for development",
                  "Critical thinking — validating AI suggestions",
                  "Refactoring with constraints",
                  "Detecting inefficiencies in AI-suggested code",
                ]
              },
              {
                num: 27,
                title: "Project Hosting & Final Review",
                topics: [
                  "Run all test cases before deployment",
                  "Fix failing tests & ensure stability",
                  "Validate critical features using tests",
                  "Deploy full microservices or modular system",
                  "Student explains: what is tested & what is not",
                  "Final project presentation & review",
                ]
              },
            ]
          },
          {
            num: 8,
            title: "Placement Training",
            color: "#F59E0B",
            modules: [
              {
                num: 28,
                title: "Professional Branding & Job Search",
                topics: [
                  "Modern tech industry demand — recruiter expectations",
                  "Job portals — LinkedIn, Naukri, startup platforms",
                  "Profile optimisation — LinkedIn headline, summary, skills",
                  "GitHub presence — repo management, README, contributions",
                  "Project portfolio — problem statement, outcomes, ownership",
                  "AI-assisted job search — role matching, JD analysis",
                  "AI for resume customisation & cover letters",
                  "Cold outreach strategy — recruiter messaging",
                  "Self-introduction — HR, interview, networking scenarios",
                  "Non-verbal communication — posture, eye contact, voice",
                  "Phone etiquette — inbound & outbound professional calls",
                ]
              },
              {
                num: 29,
                title: "Workplace Readiness & Interview Prep",
                topics: [
                  "Offer letter anatomy — CTC, variable pay, notice period",
                  "Tax awareness — deductions, Form 16 basics",
                  "Health insurance — coverage, network hospitals",
                  "Red flags — job scams, fake recruiters, suspicious offers",
                  "HR interview prep — behavioural & situational questions",
                  "SDLC & Agile — sprints, standups, retrospectives",
                  "Workplace communication — updates, blockers, escalations",
                  "Salary negotiation basics",
                  "Aptitude — logical, analytical, structured problem-solving",
                  "Active listening & client requirement gathering",
                  "Mock interviews — HR + technical simulations",
                ]
              },
            ]
          },
        ]
      }
    ]
  },
  {
    id: "mean",
    title: "Full Stack Web Development",
    subtitle: "MEAN Stack",
    stack: ["MongoDB", "Express.js", "Angular", "Node.js"],
    icon: "🔺",
    gradient: "from-red-500 to-orange-400",
    color: "#DD0031",
    bgDark: "#1A0D0D",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Enterprise-grade web apps with Angular & Node.js",
    highlights: ["Angular 17+", "RxJS", "TypeScript", "MongoDB", "REST APIs", "AI Integration"],
    semesters: [
      {
        num: 1, title: "Semester 1", subtitle: "Foundation to Full Stack",
        papers: [
          { num: 1, title: "Foundation & Web Design", color: "#DD0031",
            modules: [
              { num: 1, title: "JavaScript Fundamentals & Logical Thinking", topics: ["JavaScript basics, variables, operators", "Control flow — conditionals & loops", "Arrays, functions, problem-solving", "Objects & data structuring", "AI/LLM awareness & prompt basics"] },
              { num: 2, title: "HTML & CSS Fundamentals", topics: ["HTML structure, semantic tags, forms", "CSS selectors, box model, positioning", "Flexbox & Grid layouts", "Responsive design & media queries"] },
              { num: 3, title: "Advanced JavaScript & DOM", topics: ["ES6+ features, destructuring, spread/rest", "Async JavaScript — Promises, async/await", "DOM manipulation & event handling", "OOP — classes, inheritance, encapsulation"] }
            ]
          },
          { num: 2, title: "Core Development", color: "#F97316",
            modules: [
              { num: 4, title: "MongoDB", topics: ["NoSQL concepts, CRUD operations", "Query operators & aggregation pipeline", "Indexing & performance basics", "Relationships — embedding vs referencing"] },
              { num: 5, title: "Node.js", topics: ["Event loop, NPM, Express.js", "REST API development", "Mongoose & MongoDB integration", "MVC architecture"] },
              { num: 6, title: "Angular — Core Concepts", topics: ["Components, modules, templates", "Data binding — interpolation, property, event, two-way", "Angular Router & navigation", "Services & Dependency Injection", "Structural directives: *ngIf, *ngFor", "Lifecycle hooks: ngOnInit, ngOnDestroy"] },
              { num: 7, title: "Angular — Advanced & RxJS", topics: ["Change detection strategy", "RxJS Observables & operators (map, filter, switchMap)", "HttpClient & API integration", "Reactive Forms — FormControl, FormGroup", "Lazy loading & feature modules", "Scalable folder architecture"] }
            ]
          },
          { num: 3, title: "First Project", color: "#F59E0B",
            modules: [
              { num: 8, title: "Project Planning", topics: ["AI-assisted ideation & feature breakdown", "Tech stack selection", "API design planning"] },
              { num: "9–13", title: "Development & Hosting", topics: ["Backend & frontend development sprints", "Unit & integration testing with Jest", "TDD approach on one feature", "Deployment to cloud"] }
            ]
          },
          { num: 4, title: "DSA & Type Safety", color: "#8B5CF6",
            modules: [
              { num: 14, title: "DSA — Arrays, Strings, Algorithms", topics: ["Searching — linear & binary search", "Sorting — bubble, selection, insertion sort", "Time & space complexity basics"] },
              { num: 15, title: "DSA — Conceptual", topics: ["Stack, Queue, Hash Tables, Trees, Graphs", "Heap & Trie concepts", "Choosing the right data structure"] }
            ]
          }
        ]
      },
      {
        num: 2, title: "Semester 2", subtitle: "AI, Architecture & Placement",
        papers: [
          { num: 5, title: "AI in Detail", color: "#06B6D4", modules: [
            { num: 16, title: "Building with AI & LLMs", topics: ["LLM integration in web apps", "Prompt engineering for production", "Agentic thinking & workflows"] },
            { num: "17–19", title: "Agentic & RAG Systems", topics: ["Multi-step AI workflows", "RAG — retrieval augmented generation", "AI evaluation & optimisation"] }
          ]},
          { num: 6, title: "Design & Architecture", color: "#F97316", modules: [
            { num: 20, title: "TypeScript & Code Quality", topics: ["Types, interfaces, generics", "SOLID, DRY, KISS principles", "ESLint & Husky automation"] },
            { num: "21–23", title: "Microservices & System Design", topics: ["Service decomposition & boundaries", "Sync & async communication", "HLD, caching, scalability"] }
          ]},
          { num: 7, title: "Second Project", color: "#EC4899", modules: [
            { num: "24–27", title: "Build & Deploy", topics: ["Monorepo with Turborepo", "TDD all the way", "Full microservices deployment"] }
          ]},
          { num: 8, title: "Placement Training", color: "#F59E0B", modules: [
            { num: "28–29", title: "Job Search & Interview Prep", topics: ["LinkedIn & GitHub optimisation", "Mock HR + technical interviews", "Workplace readiness & Agile"] }
          ]}
        ]
      }
    ]
  },
  {
    id: "django",
    title: "Full Stack Web Development",
    subtitle: "Python + Django",
    stack: ["Python", "Django", "DRF", "React", "PostgreSQL"],
    icon: "🐍",
    gradient: "from-yellow-400 to-green-500",
    color: "#F7C843",
    bgDark: "#181208",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Scalable Python backends with React frontends",
    highlights: ["Python OOP", "Django ORM", "REST APIs", "React", "PostgreSQL", "JWT Auth"],
    semesters: [
      { num: 1, title: "Semester 1", subtitle: "Python to Full Stack",
        papers: [
          { num: 1, title: "Foundation & Web Design", color: "#F7C843", modules: [
            { num: 1, title: "Python Fundamentals & Logic", topics: ["Python execution, variables, data types", "Conditionals, loops, list comprehensions", "Functions, *args, **kwargs, lambda", "Error handling — try/except/finally", "File handling & JSON processing"] },
            { num: 2, title: "HTML & CSS Fundamentals", topics: ["HTML structure, semantic elements, forms", "CSS — box model, flexbox, grid, responsive"] },
            { num: 3, title: "Advanced Python & OOP", topics: ["OOP — classes, inheritance, polymorphism", "Functional programming — map, filter, reduce", "Modules, virtual environments, packaging", "Async basics — async/await concept"] }
          ]},
          { num: 2, title: "Core Development", color: "#22C55E", modules: [
            { num: 4, title: "Database & SQL", topics: ["Relational databases — tables, keys, normalization", "SQL — SELECT, INSERT, UPDATE, DELETE", "JOINs, aggregate functions, GROUP BY", "Database design & indexing"] },
            { num: 5, title: "ORM & Data Modeling", topics: ["ORM vs raw SQL — abstraction benefits", "Models, fields, relationships in ORM", "Migrations — schema evolution", "N+1 query problem & optimisation"] },
            { num: 6, title: "Django + Django REST Framework", topics: ["Django project structure, MVT pattern", "URL routing, views, templates", "Django ORM — queries, relationships", "DRF — serializers, viewsets, routers", "Authentication — JWT concept", "Async & background tasks concept"] },
            { num: 7, title: "JavaScript & React for Django Frontend", topics: ["Modern JS for React — ES6+, async", "React setup with Vite", "Components, state, hooks", "API integration with Django backend"] }
          ]},
          { num: 3, title: "First Project", color: "#F59E0B", modules: [
            { num: "8–13", title: "Project Development & Hosting", topics: ["Full-stack Django + React project", "Testing with pytest & Jest", "TDD feature development", "Cloud deployment"] }
          ]},
          { num: 4, title: "DSA & Type Safety", color: "#8B5CF6", modules: [
            { num: "14–15", title: "DSA Fundamentals", topics: ["Arrays, strings, searching, sorting", "Stack, queue, trees, graphs conceptually"] }
          ]}
        ]
      },
      { num: 2, title: "Semester 2", subtitle: "AI, Architecture & Placement",
        papers: [
          { num: 5, title: "AI in Detail", color: "#06B6D4", modules: [{ num: "16–19", title: "AI Integration", topics: ["LLM APIs, agentic workflows, RAG systems", "AI evaluation & optimisation"] }]},
          { num: 6, title: "Design & Architecture", color: "#F97316", modules: [{ num: "20–23", title: "TypeScript, Microservices & HLD", topics: ["TypeScript & code quality", "Microservices design & communication", "System design principles"] }]},
          { num: 7, title: "Second Project", color: "#EC4899", modules: [{ num: "24–27", title: "Second Project", topics: ["Full architecture design & build", "TDD & monorepo", "Cloud deployment"] }]},
          { num: 8, title: "Placement Training", color: "#F59E0B", modules: [{ num: "28–29", title: "Placement Prep", topics: ["LinkedIn, GitHub, portfolio", "Mock interviews & workplace readiness"] }]}
        ]
      }
    ]
  },
  {
    id: "flutter",
    title: "Mobile App Development",
    subtitle: "Flutter",
    stack: ["Dart", "Flutter", "Firebase", "REST APIs"],
    icon: "📱",
    gradient: "from-blue-500 to-cyan-400",
    color: "#027DFD",
    bgDark: "#080D1A",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Cross-platform iOS & Android apps with one codebase",
    highlights: ["Dart OOP", "Widget System", "State Management", "Firebase", "BLoC", "Deep Linking"],
    semesters: [
      { num: 1, title: "Semester 1", subtitle: "Dart to Cross-Platform",
        papers: [
          { num: 1, title: "Foundations & Dart Programming", color: "#027DFD", modules: [
            { num: 1, title: "Foundation & Web Basics", topics: ["Computing & software fundamentals", "HTML/CSS for mobile-first thinking", "Responsive UI design principles"] },
            { num: 2, title: "Dart Programming Fundamentals", topics: ["Variables, data types, type conversion", "Operators, control flow, loops", "Collections — List, Set, Map", "Functions, default & optional params", "Logical thinking problems"] },
            { num: 3, title: "OOP with Dart", topics: ["Classes, objects, constructors", "Encapsulation, inheritance, polymorphism", "Named & factory constructors", "Mixins, extensions, sealed classes", "Null safety — nullable types, ?. operator"] }
          ]},
          { num: 2, title: "Flutter Fundamentals", color: "#00C2E0", modules: [
            { num: 4, title: "Flutter Core", topics: ["Flutter architecture, widget tree", "Stateless vs Stateful widgets", "Layout — Row, Column, Container, Stack", "UI components — Text, Button, Image, TextField"] },
            { num: 5, title: "Navigation & Deep Linking", topics: ["Navigator, named routes, data passing", "ListView, GridView, custom widgets", "Form handling & validation", "Deep linking & universal links"] },
            { num: 6, title: "Local Storage & Databases", topics: ["Shared Preferences for settings", "SQLite / local database CRUD", "Repository pattern for data access", "Secure storage for credentials"] },
            { num: 7, title: "Device Features & Native Integration", topics: ["Camera, gallery, location services", "Runtime permissions handling", "Platform channels — Flutter ↔ native", "Method channels for native APIs"] }
          ]},
          { num: 3, title: "First Project", color: "#F59E0B", modules: [{ num: "8–13", title: "Project Development & Hosting", topics: ["Cross-platform mobile project", "Widget & integration testing", "App store preparation basics"] }]},
          { num: 4, title: "DSA & Type Safety", color: "#8B5CF6", modules: [{ num: "14–15", title: "DSA Fundamentals", topics: ["Arrays, strings, searching, sorting", "Data structures for mobile apps"] }]}
        ]
      },
      { num: 2, title: "Semester 2", subtitle: "Advanced Mobile & Placement",
        papers: [
          { num: 5, title: "Advanced Flutter & AI", color: "#06B6D4", modules: [
            { num: 16, title: "State Management", topics: ["BLoC / Cubit pattern", "Riverpod for state", "Provider basics", "State-driven UI design"] },
            { num: 17, title: "Networking & Firebase", topics: ["Dio & http packages", "REST API integration", "Firebase Auth, Firestore, Storage", "Push notifications (FCM)"] },
            { num: "18–19", title: "AI in Mobile Apps", topics: ["On-device AI features", "LLM API integration", "Smart features — autocomplete, suggestions"] }
          ]},
          { num: 6, title: "Architecture & Design", color: "#F97316", modules: [{ num: "20–23", title: "Clean Architecture & HLD", topics: ["Clean architecture for Flutter", "SOLID principles in mobile", "Scalable app structure"] }]},
          { num: 7, title: "Second Project", color: "#EC4899", modules: [{ num: "24–27", title: "Second Mobile Project", topics: ["Full-featured cross-platform app", "CI/CD for mobile (Fastlane)", "App store deployment"] }]},
          { num: 8, title: "Placement Training", color: "#F59E0B", modules: [{ num: "28–29", title: "Placement Prep", topics: ["Portfolio, GitHub, mock interviews", "Mobile developer-specific HR prep"] }]}
        ]
      }
    ]
  },
  {
    id: "kotlin",
    title: "Mobile App Development",
    subtitle: "Kotlin Android",
    stack: ["Kotlin", "Jetpack Compose", "Android SDK", "Room DB"],
    icon: "🤖",
    gradient: "from-purple-600 to-pink-500",
    color: "#7F52FF",
    bgDark: "#0D0814",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Native Android development with modern Kotlin & Compose",
    highlights: ["Kotlin OOP", "Jetpack Compose", "ViewModel", "Room DB", "Coroutines", "Material Design 3"],
    semesters: [
      { num: 1, title: "Semester 1", subtitle: "Kotlin to Native Android",
        papers: [
          { num: 1, title: "Kotlin Programming Foundations", color: "#7F52FF", modules: [
            { num: 1, title: "Kotlin Fundamentals", topics: ["Variables (val, var), data types", "Operators, control flow, when expression", "Loops, arrays, collections", "Functions, default arguments", "Logical thinking problems"] },
            { num: 2, title: "Advanced Kotlin & OOP", topics: ["Classes, objects, data classes", "OOP — encapsulation, inheritance, polymorphism", "Sealed classes, enums, companion objects", "Lambda, higher-order functions", "Null safety — ?., !!, Elvis operator", "Scope functions — let, apply, run, also"] }
          ]},
          { num: 2, title: "Android Fundamentals", color: "#E44857", modules: [
            { num: 3, title: "Android Studio & Fundamentals", topics: ["Android ecosystem & architecture", "Activity lifecycle, intents, manifest", "Gradle build system", "Screen sizes & responsive design"] },
            { num: 4, title: "Jetpack Compose", topics: ["Declarative UI vs XML", "Composable functions & hierarchy", "Column, Row, Box, LazyColumn", "Text, Button, Image, TextField, Card", "State — remember, mutableStateOf"] },
            { num: 5, title: "Navigation & Material Design", topics: ["Navigation component & routing", "Data passing between screens", "Material Design 3 theming", "LazyColumn, LazyRow, Grid layouts", "Form handling & validation"] },
            { num: 6, title: "State Management — ViewModel & StateFlow", topics: ["ViewModel — lifecycle awareness", "StateFlow — reactive state updates", "UI state — Loading, Success, Error, Empty", "State ownership & data flow patterns"] }
          ]},
          { num: 3, title: "Data Persistence", color: "#3B82F6", modules: [
            { num: 7, title: "DataStore & Preferences", topics: ["Preference DataStore vs SharedPreferences", "Saving & reading preferences", "Flow-based reactive updates", "Offline user experience"] },
            { num: 8, title: "Room Database & SQLite", topics: ["Room entities, DAO, Database class", "CRUD with Room", "Entity relationships", "Repository pattern with ViewModel"] },
            { num: 9, title: "Kotlin Coroutines", topics: ["Coroutines vs threads", "launch, async, Dispatchers", "Flow & StateFlow", "Exception handling in coroutines"] }
          ]},
          { num: 4, title: "DSA & Type Safety", color: "#8B5CF6", modules: [{ num: "10–11", title: "DSA Fundamentals", topics: ["Arrays, searching, sorting", "Data structures conceptually"] }]}
        ]
      },
      { num: 2, title: "Semester 2", subtitle: "Advanced Android & Placement",
        papers: [
          { num: 5, title: "Networking & AI", color: "#06B6D4", modules: [
            { num: 12, title: "Networking & APIs", topics: ["Retrofit + OkHttp", "REST API consumption", "Error handling, loading states"] },
            { num: "13–15", title: "AI in Android", topics: ["LLM API integration in apps", "On-device ML (ML Kit)", "Smart feature implementation"] }
          ]},
          { num: 6, title: "Architecture & Testing", color: "#F97316", modules: [{ num: "16–19", title: "Clean Architecture & DI", topics: ["Hilt dependency injection", "Clean architecture layers", "Unit & UI testing with Espresso"] }]},
          { num: 7, title: "Second Project", color: "#EC4899", modules: [{ num: "20–24", title: "Second Android Project", topics: ["Full native Android app", "Google Play Store preparation", "Performance optimisation"] }]},
          { num: 8, title: "Placement Training", color: "#F59E0B", modules: [{ num: "25–29", title: "Placement Prep", topics: ["Android-specific interview prep", "Mock technical + HR interviews", "GitHub portfolio, LinkedIn"] }]}
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    subtitle: "DevOps",
    stack: ["Linux", "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
    icon: "⚙️",
    gradient: "from-orange-500 to-red-500",
    color: "#F97316",
    bgDark: "#1A0D00",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Master CI/CD, containers, cloud & infrastructure automation",
    highlights: ["Linux CLI", "Docker & K8s", "Ansible", "Jenkins", "Terraform", "AWS/GCP"],
    semesters: [
      { num: 1, title: "Semester 1", subtitle: "Foundation to Automation",
        papers: [
          { num: 1, title: "Foundation & Programming", color: "#F97316", modules: [
            { num: 1, title: "DevOps Foundation", topics: ["Modern software architecture & DevOps role", "SDLC — dev → test → deploy → monitor", "CI/CD concept & automation importance", "Infrastructure types — physical, virtual, cloud"] },
            { num: 2, title: "Linux Fundamentals", topics: ["Linux filesystem & navigation", "File operations — ls, cd, mkdir, rm, cp, mv", "Users, groups, permissions — chmod, chown, sudo", "Process management — ps, top, kill", "Package management — apt/yum", "Shell scripting — variables, conditions, loops", "Networking — ping, curl, netstat, ss"] },
            { num: 3, title: "Python for DevOps", topics: ["Python for automation — scripting, files, JSON", "System interaction — subprocess, os, env vars", "Error handling & logging", "API interactions — HTTP requests, JSON parsing", "Reusable automation utilities"] },
            { num: 4, title: "Git & Version Control", topics: ["Repositories, commits, history", "Branching & merging, conflict resolution", "Remote repos — push, pull, clone", "Feature branch workflow & pull requests", "Git in CI/CD workflows"] }
          ]},
          { num: 2, title: "Infrastructure & Automation", color: "#EF4444", modules: [
            { num: 5, title: "Networking & System Fundamentals", topics: ["IP, ports, DNS, HTTP/HTTPS, TCP/UDP", "SSH basics, client-server communication", "Reverse proxy, SSL/TLS concepts", "Linux networking tools — curl, traceroute, nslookup"] },
            { num: 6, title: "Ansible", topics: ["Configuration management concepts", "Inventory files, YAML basics", "Playbooks — tasks, variables, handlers", "Automating package, service & file management", "Ansible roles for reusable automation", "Idempotency & repeatable operations"] },
            { num: 7, title: "CI/CD & Automation Workflows", topics: ["Jenkins — pipelines, agents, jobs", "Build → test → deploy pipeline stages", "Git integration with CI/CD", "GitHub Actions concept", "Artifact management & rollback", "Blue-green & canary deployment concepts"] },
            { num: 8, title: "Code Quality & DevOps Practices", topics: ["Clean automation code standards", "Linting & pre-commit hooks", "Infrastructure code organisation", "Monorepo vs polyrepo for infrastructure"] }
          ]},
          { num: 3, title: "Containers & Kubernetes", color: "#3B82F6", modules: [
            { num: 9, title: "Docker & Containerisation", topics: ["What is Docker, why containers", "Dockerfile — images, layers, caching", "Docker commands — run, build, push, pull", "Docker Compose — multi-container apps", "Container networking & volumes", "Docker Hub & private registries"] },
            { num: "10–11", title: "Kubernetes", topics: ["K8s architecture — master, nodes, pods", "Deployments, Services, ConfigMaps", "Namespaces, RBAC basics", "Ingress controllers", "Helm charts — package management for K8s", "Scaling & self-healing"] }
          ]},
          { num: 4, title: "Cloud & Infrastructure", color: "#8B5CF6", modules: [{ num: "12–15", title: "Cloud Platforms & IaC", topics: ["AWS core services — EC2, S3, RDS, VPC, IAM", "GCP fundamentals", "Terraform — infrastructure as code", "Terraform state management"] }]}
        ]
      },
      { num: 2, title: "Semester 2", subtitle: "Advanced Cloud & Placement",
        papers: [
          { num: 5, title: "Monitoring & Security", color: "#06B6D4", modules: [{ num: "16–19", title: "Observability & Security", topics: ["Prometheus & Grafana", "ELK stack basics", "Security scanning, secrets management (Vault)", "Compliance & hardening concepts"] }]},
          { num: 6, title: "Advanced Architecture", color: "#F97316", modules: [{ num: "20–23", title: "Site Reliability & Architecture", topics: ["SRE principles", "High availability design", "Disaster recovery", "Cost optimisation in cloud"] }]},
          { num: 7, title: "Projects", color: "#EC4899", modules: [{ num: "24–27", title: "DevOps Projects", topics: ["Full CI/CD pipeline project", "Kubernetes deployment project", "IaC with Terraform"] }]},
          { num: 8, title: "Placement Training", color: "#F59E0B", modules: [{ num: "28–29", title: "Placement Prep", topics: ["DevOps-specific interview prep", "Certification roadmap guidance", "Mock interviews & portfolio"] }]}
        ]
      }
    ]
  },
  {
    id: "ml",
    title: "AI & Machine Learning",
    subtitle: "Machine Learning",
    stack: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "SQL"],
    icon: "🧠",
    gradient: "from-violet-600 to-purple-500",
    color: "#8B5CF6",
    bgDark: "#0D0814",
    modules: 29,
    papers: 8,
    duration: "12 Months",
    tagline: "Build intelligent systems that learn from data",
    highlights: ["Statistics", "ML Algorithms", "Deep Learning", "NLP", "MLOps", "LLM Integration"],
    semesters: [
      { num: 1, title: "Semester 1", subtitle: "Foundations to ML",
        papers: [
          { num: 1, title: "Foundations of Programming & Data", color: "#8B5CF6", modules: [
            { num: 1, title: "ML Foundation Week", topics: ["AI vs ML vs Deep Learning", "ML lifecycle — collect → prepare → train → evaluate", "Structured vs unstructured data", "Features, labels, training & test sets", "Dev environment — Python, Jupyter notebooks"] },
            { num: 2, title: "Python Programming", topics: ["Variables, control flow, functions", "Collections — lists, dicts, sets", "File handling & CSV processing", "OOP for ML code organisation", "Modules, packages, virtual environments"] },
            { num: 3, title: "Maths, Statistics & Probability", topics: ["Linear algebra — vectors, matrices, operations", "Statistics — mean, median, mode, variance, std dev", "Probability — events, conditional probability", "Data distributions — normal, skew", "Correlation vs causation"] },
            { num: 4, title: "Data Structures & Algorithms for ML", topics: ["Arrays, strings — traversal & transformation", "Searching & sorting for data processing", "Hash tables for lookup patterns", "Efficient data processing strategies"] }
          ]},
          { num: 2, title: "Data Engineering", color: "#06B6D4", modules: [
            { num: 5, title: "SQL Fundamentals", topics: ["Relational databases — tables, keys, relationships", "SQL — SELECT, JOINs, GROUP BY, aggregations", "Window functions — ranking, partitioning", "Subqueries & CTEs"] },
            { num: 6, title: "Advanced SQL & Data Modeling", topics: ["Advanced SQL — window functions, CTEs", "Data warehousing concepts — fact/dimension tables", "Star schema basics", "Query optimisation & indexing"] },
            { num: 7, title: "Data Wrangling & Preparation", topics: ["Loading & exploring datasets with Pandas", "Handling missing values & duplicates", "Feature engineering — encoding, scaling, normalisation", "Data leakage prevention concept"] },
            { num: 8, title: "EDA & Visualisation", topics: ["Exploratory Data Analysis workflow", "Matplotlib & Seaborn for charts", "Correlation heatmaps, distribution plots", "Story-telling with data"] }
          ]},
          { num: 3, title: "Core ML Algorithms", color: "#EC4899", modules: [
            { num: 9, title: "Supervised Learning", topics: ["Linear regression — gradient descent", "Logistic regression — classification", "Decision trees & random forests", "SVM — support vector machines", "K-Nearest Neighbours", "Evaluation — accuracy, precision, recall, F1, ROC-AUC"] },
            { num: 10, title: "Unsupervised Learning", topics: ["K-Means clustering", "DBSCAN & hierarchical clustering", "Dimensionality reduction — PCA", "Association rules — Apriori concept"] },
            { num: "11–13", title: "Deep Learning & NLP", topics: ["Neural networks — layers, activations, backprop", "CNNs for image classification", "RNNs & LSTMs for sequences", "NLP — tokenisation, embeddings, text classification", "Transformer architecture basics"] }
          ]},
          { num: 4, title: "MLOps & Deployment", color: "#F59E0B", modules: [
            { num: "14–15", title: "MLOps Foundations", topics: ["Model versioning & experiment tracking (MLflow)", "REST API with FastAPI for model serving", "Docker for ML deployment", "Monitoring model drift"] }
          ]}
        ]
      },
      { num: 2, title: "Semester 2", subtitle: "Advanced AI & Placement",
        papers: [
          { num: 5, title: "LLMs & Generative AI", color: "#06B6D4", modules: [
            { num: "16–19", title: "LLMs & RAG", topics: ["LLM APIs — OpenAI, Gemini, Hugging Face", "Prompt engineering & fine-tuning concepts", "RAG pipelines — embeddings & vector stores", "AI evaluation & benchmarking"] }
          ]},
          { num: 6, title: "Advanced MLOps & Architecture", color: "#F97316", modules: [{ num: "20–23", title: "Production ML Systems", topics: ["Distributed training concepts", "Feature stores, data pipelines", "A/B testing ML models", "Cloud ML platforms — AWS SageMaker, GCP Vertex"] }]},
          { num: 7, title: "Capstone Projects", color: "#EC4899", modules: [{ num: "24–27", title: "ML Projects", topics: ["End-to-end ML pipeline project", "LLM-powered application", "Real-world dataset challenge"] }]},
          { num: 8, title: "Placement Training", color: "#F59E0B", modules: [{ num: "28–29", title: "Placement Prep", topics: ["ML interview — theory + coding + case studies", "Portfolio & research paper presentation", "Mock interviews"] }]}
        ]
      }
    ]
  },
];
