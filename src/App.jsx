import { useState, useEffect, useRef, useCallback } from "react";
import { COURSES } from "./data/courses.js";
import "./index.css";
import "./App.css";

// ── Helpers ───────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function HeroSection({ onExplore }) {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="hero-content animate-fade-up">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>12-Month Industry Programs</span>
        </div>
        <h1 className="hero-title">
          Choose Your{" "}
          <span className="gradient-text">Career Path</span>
        </h1>
        <p className="hero-subtitle">
          Immersive, project-driven curricula built for the modern tech industry.
          Master full-stack development, mobile, DevOps, or AI — with real-world
          projects and placement training.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">7</span>
            <span className="stat-label">Tracks</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">29</span>
            <span className="stat-label">Modules</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">12</span>
            <span className="stat-label">Months</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">2</span>
            <span className="stat-label">Live Projects</span>
          </div>
        </div>
        <button className="btn-primary" onClick={onExplore} id="hero-explore-btn">
          Explore Courses
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}

function CourseCard({ course, isActive, onClick }) {
  const rgb = hexToRgb(course.color);
  return (
    <button
      id={`course-card-${course.id}`}
      className={`course-card${isActive ? " course-card--active" : ""}`}
      style={{
        "--course-color": course.color,
        "--course-rgb": rgb,
      }}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`${course.subtitle} course`}
    >
      <div className="course-card-glow" />
      <div className="course-card-inner">
        <div className="course-card-icon">{course.icon}</div>
        <div className="course-card-body">
          <h3 className="course-card-subtitle">{course.subtitle}</h3>
          <p className="course-card-tagline">{course.tagline}</p>
          <div className="course-card-stack">
            {course.stack.slice(0, 3).map((s) => (
              <span key={s} className="stack-tag">{s}</span>
            ))}
            {course.stack.length > 3 && (
              <span className="stack-tag stack-tag--more">+{course.stack.length - 3}</span>
            )}
          </div>
        </div>
        <div className="course-card-meta">
          <span className="meta-pill">{course.modules} Modules</span>
          <span className="meta-pill">{course.duration}</span>
        </div>
      </div>
    </button>
  );
}

function SemesterTab({ semester, isActive, onClick, color }) {
  return (
    <button
      className={`sem-tab${isActive ? " sem-tab--active" : ""}`}
      style={{ "--tab-color": color }}
      onClick={onClick}
      id={`sem-tab-${semester.num}`}
    >
      <span className="sem-tab-num">Sem {semester.num}</span>
      <span className="sem-tab-subtitle">{semester.subtitle}</span>
    </button>
  );
}

function TopicItem({ topic, color, index }) {
  return (
    <li
      className="topic-item"
      style={{
        "--topic-color": color,
        animationDelay: `${index * 0.03}s`,
      }}
    >
      <span className="topic-dot" />
      <span>{topic}</span>
    </li>
  );
}

function ModuleAccordion({ mod, paperColor, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  const contentRef = useRef(null);

  return (
    <div className={`module-accordion${open ? " module-accordion--open" : ""}`} id={`module-${mod.num}`}>
      <button
        className="module-header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ "--mod-color": paperColor }}
      >
        <div className="module-header-left">
          <span className="module-num">M{mod.num}</span>
          <span className="module-title">{mod.title}</span>
        </div>
        <div className="module-header-right">
          {mod.topics && (
            <span className="module-topic-count">{mod.topics.length} topics</span>
          )}
          <span className="module-chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </button>
      {open && mod.topics && (
        <div className="module-body animate-fade-up" ref={contentRef}>
          <ul className="topic-list" role="list">
            {mod.topics.map((t, i) => (
              <TopicItem key={i} topic={t} color={paperColor} index={i} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PaperSection({ paper, courseColor, defaultExpanded }) {
  const [expanded, setExpanded] = useState(defaultExpanded || false);

  return (
    <div className="paper-section" id={`paper-${paper.num}`}>
      <button
        className={`paper-header${expanded ? " paper-header--open" : ""}`}
        onClick={() => setExpanded((e) => !e)}
        style={{ "--paper-color": paper.color }}
        aria-expanded={expanded}
      >
        <div className="paper-header-left">
          <div className="paper-badge" style={{ background: paper.color }}>
            P{paper.num}
          </div>
          <div className="paper-info">
            <h3 className="paper-title">{paper.title}</h3>
            <span className="paper-meta">{paper.modules.length} module{paper.modules.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
        <span className="paper-chevron" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {expanded && (
        <div className="paper-body animate-scale">
          {paper.modules.map((mod, mi) => (
            <ModuleAccordion
              key={mi}
              mod={mod}
              paperColor={paper.color}
              defaultOpen={mi === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CourseDetail({ course }) {
  const [activeSem, setActiveSem] = useState(0);
  const rgb = hexToRgb(course.color);

  const semester = course.semesters[activeSem];

  return (
    <div
      className="course-detail animate-fade"
      style={{ "--course-color": course.color, "--course-rgb": rgb }}
      key={course.id}
    >
      {/* Course Header */}
      <div className="detail-header">
        <div className="detail-header-top">
          <div className="detail-icon-wrap">
            <span className="detail-icon">{course.icon}</span>
          </div>
          <div className="detail-title-group">
            <p className="detail-category">{course.title}</p>
            <h2 className="detail-title">{course.subtitle}</h2>
            <p className="detail-tagline">{course.tagline}</p>
          </div>
        </div>

        <div className="detail-highlights">
          {course.highlights.map((h) => (
            <span key={h} className="highlight-tag">{h}</span>
          ))}
        </div>

        <div className="detail-stats-row">
          <div className="detail-stat">
            <span className="detail-stat-icon">📦</span>
            <span className="detail-stat-val">{course.modules}</span>
            <span className="detail-stat-label">Modules</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-icon">📄</span>
            <span className="detail-stat-val">{course.papers}</span>
            <span className="detail-stat-label">Papers</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-icon">⏱</span>
            <span className="detail-stat-val">{course.duration}</span>
            <span className="detail-stat-label">Duration</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-icon">🗂</span>
            <span className="detail-stat-val">{course.semesters.length}</span>
            <span className="detail-stat-label">Semesters</span>
          </div>
        </div>
      </div>

      {/* Semester Tabs */}
      <div className="sem-tabs" role="tablist" aria-label="Semesters">
        {course.semesters.map((sem, i) => (
          <SemesterTab
            key={sem.num}
            semester={sem}
            isActive={activeSem === i}
            onClick={() => setActiveSem(i)}
            color={course.color}
          />
        ))}
      </div>

      {/* Papers */}
      <div className="papers-list" key={`sem-${activeSem}`}>
        <div className="papers-list-header">
          <h3 className="papers-list-title">{semester.title} — {semester.subtitle}</h3>
          <span className="papers-list-count">{semester.papers.length} Papers</span>
        </div>
        {semester.papers.map((paper, pi) => (
          <PaperSection
            key={paper.num}
            paper={paper}
            courseColor={course.color}
            defaultExpanded={pi === 0}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCourse, setActiveCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const coursesRef = useRef(null);

  const filtered = COURSES.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.subtitle.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.stack.some((s) => s.toLowerCase().includes(q)) ||
      c.highlights.some((h) => h.toLowerCase().includes(q))
    );
  });

  const handleExplore = useCallback(() => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleCourseClick = useCallback((course) => {
    setActiveCourse((prev) => (prev?.id === course.id ? null : course));
  }, []);

  // Auto-select first filtered result when search changes
  useEffect(() => {
    if (filtered.length === 1) setActiveCourse(filtered[0]);
    else if (filtered.length === 0) setActiveCourse(null);
  }, [searchQuery]);

  return (
    <div className="app">
      <HeroSection onExplore={handleExplore} />

      {/* Course Explorer */}
      <section className="explorer" ref={coursesRef} aria-label="Course explorer">
        <div className="explorer-header">
          <h2 className="section-title">
            Pick Your <span className="gradient-text">Track</span>
          </h2>
          <p className="section-sub">
            Every track shares the same structured approach: foundations → core dev → projects → placement.
          </p>

          {/* Search */}
          <div className="search-wrap">
            <label htmlFor="course-search" className="sr-only">Search courses</label>
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              id="course-search"
              type="search"
              className="search-input"
              placeholder="Search by stack, topic or language…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery("")} aria-label="Clear search">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            )}
          </div>
        </div>

        <div className="explorer-layout">
          {/* Course cards sidebar */}
          <div className="cards-sidebar" role="list" aria-label="Available courses">
            {filtered.length === 0 ? (
              <div className="no-results">
                <span className="no-results-icon">🔍</span>
                <p>No courses match "<strong>{searchQuery}</strong>"</p>
                <button className="btn-ghost" onClick={() => setSearchQuery("")}>Clear search</button>
              </div>
            ) : (
              filtered.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  isActive={activeCourse?.id === course.id}
                  onClick={() => handleCourseClick(course)}
                />
              ))
            )}
          </div>

          {/* Detail panel */}
          <div className="detail-panel">
            {activeCourse ? (
              <CourseDetail course={activeCourse} />
            ) : (
              <div className="detail-empty">
                <div className="detail-empty-icon">←</div>
                <h3>Select a course</h3>
                <p>Choose any track from the list to explore the full curriculum, semesters, papers, and modules.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-brand">Workfolio</p>
          <p className="footer-copy">© {new Date().getFullYear()} · Curriculum Explorer · All tracks include AI integration & placement training</p>
        </div>
      </footer>
    </div>
  );
}
