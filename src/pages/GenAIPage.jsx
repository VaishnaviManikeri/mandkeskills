import React from 'react';
import { 
  Sparkles,
  Zap, 
  Briefcase, 
  Users, 
  BookOpen, 
  Clock, 
  Calendar, 
  Monitor, 
  Award,
  CheckCircle,
  TrendingUp,
  Building2,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  BarChart3,
  Brain,
  FileText,
  Target,
  Cloud,
  Layers,
  Star,
  Rocket,
  Bot,
  Workflow,
  GitBranch
} from 'lucide-react';

const GenAIPage = () => {
  return (
    <div className="genai-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/gen1.png" alt="GenAI & ML No-Code Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Sparkles className="inline-icon" /> MILES AI
              </span>
              <h1 className="hero-title">
                GenAI & ML
                <span>No-Code</span>
              </h1>
              <p className="hero-description">
                Build AI apps without writing a single line of code
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Code className="tag-icon" /> No Coding
                </span>
                <span className="tag">
                  <Bot className="tag-icon" /> AI Agents
                </span>
                <span className="tag">
                  <Workflow className="tag-icon" /> Automation
                </span>
              </div>
              <div className="hero-buttons">
                <button className="primary-btn">
                  <BookOpen size={20} /> Enroll Now
                </button>
                <button className="secondary-btn">
                  <FileText size={20} /> Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <Sparkles size={32} />
              <h3>3</h3>
              <p>Months Duration</p>
            </div>
            <div className="stat-card">
              <Bot size={32} />
              <h3>AI Agents</h3>
              <p>Build Without Code</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>Yes</h3>
              <p>Certificate of Completion</p>
            </div>
            <div className="stat-card">
              <Monitor size={32} />
              <h3>Offline</h3>
              <p>Classroom Mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Build AI Apps Without Code with List */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Build AI Apps Without Code</h2>
            <p>
              A 3-month no-code AI program that takes you through the full world of AI — from 
              machine learning concepts to building agents, automating workflows with N8N, and 
              deploying AI projects. No coding needed. Just creativity and curiosity.
            </p>
          </div>
          
          {/* Course Details as List */}
          <div className="course-details-list">
            <div className="detail-item">
              <div className="detail-icon">
                <Users size={24} />
              </div>
              <div className="detail-content">
                <h3>For Who</h3>
                <p>Students, freshers, and professionals wanting to work with AI without coding</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <BookOpen size={24} />
              </div>
              <div className="detail-content">
                <h3>Pre-Req</h3>
                <p>None — just curiosity!</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Clock size={24} />
              </div>
              <div className="detail-content">
                <h3>Duration</h3>
                <p>3 Months</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Calendar size={24} />
              </div>
              <div className="detail-content">
                <h3>Schedule</h3>
                <p>2 – 3 sessions per week</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Monitor size={24} />
              </div>
              <div className="detail-content">
                <h3>Session</h3>
                <p>2 – 3 hours</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Building2 size={24} />
              </div>
              <div className="detail-content">
                <h3>Mode</h3>
                <p>Offline / Classroom</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Users size={24} />
              </div>
              <div className="detail-content">
                <h3>Batch Size</h3>
                <p>As per cohort</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Award size={24} />
              </div>
              <div className="detail-content">
                <h3>Certificate</h3>
                <p>Certificate of Completion from MILES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <span>Curriculum</span>
            <h2>What You'll Learn</h2>
            <p>Complete no-code AI curriculum from fundamentals to deployment</p>
          </div>
          <div className="courses-grid">
            {[
              'Foundations of AI & ML',
              'Math & Statistics for AI (Intuition-based)',
              'Excel for Data Analysis & AI Readiness',
              'Data Visualization & Storytelling with Power BI',
              'Machine Learning Concepts Without Code',
              'Generative AI & LLMs',
              'Prompt Engineering for ChatGPT, Gemini, Claude',
              'AI Workflow Automation with N8N',
              'Agentic AI & AI Agent Builder',
              'RAG (Retrieval Augmented Generation) Basics',
              'MCP (Model Context Protocol) Fundamentals',
              'Real-World No-Code AI Projects',
              'Capstone Project + Resume & Interview Prep'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <CheckCircle size={32} />
                <h3>{item}</h3>
                <p>Hands-on learning with practical applications</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-showcase">
        <div className="container">
          <div className="section-header">
            <span>Features</span>
            <h2>Why This No-Code AI Program?</h2>
            <p>Build AI applications without writing code</p>
          </div>
          <div className="features-showcase-grid">
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Bot size={32} />
              </div>
              <h3>AI Agents</h3>
              <p>Build intelligent agents without coding</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Workflow size={32} />
              </div>
              <h3>Workflow Automation</h3>
              <p>Automate workflows with N8N</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Brain size={32} />
              </div>
              <h3>Generative AI</h3>
              <p>Master LLMs and prompt engineering</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <GitBranch size={32} />
              </div>
              <h3>RAG & MCP</h3>
              <p>Advanced AI concepts made simple</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <span>Skills</span>
            <h2>Skills You'll Walk Out With</h2>
            <p>Practical no-code AI expertise for real-world roles</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Brain className="skill-icon" />
              </div>
              <h3>AI/ML Understanding</h3>
              <p>Strong understanding of AI, ML, and Deep Learning concepts</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Sparkles className="skill-icon" />
              </div>
              <h3>Prompt Engineering</h3>
              <p>Prompt engineering for major AI tools</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Bot className="skill-icon" />
              </div>
              <h3>No-Code ML Models</h3>
              <p>Build no-code ML models and AI agents</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Workflow className="skill-icon" />
              </div>
              <h3>Workflow Automation</h3>
              <p>Workflow automation with N8N</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <GitBranch className="skill-icon" />
              </div>
              <h3>RAG & MCP</h3>
              <p>RAG and MCP understanding at applied level</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FileText className="skill-icon" />
              </div>
              <h3>Portfolio Ready</h3>
              <p>Portfolio-ready project and documentation skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section - Sky Blue Footer */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>Leptron, EdgeCareer, AI Startups, Digital Agencies</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Rocket size={24} />
              <span>Leptron</span>
            </div>
            <div className="hire-card">
              <TrendingUp size={24} />
              <span>EdgeCareer</span>
            </div>
            <div className="hire-card">
              <Bot size={24} />
              <span>AI Startups</span>
            </div>
            <div className="hire-card">
              <Building2 size={24} />
              <span>Digital Agencies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span>Why Choose Us</span>
            <h2>Benefits of This Course</h2>
            <p>What makes our No-Code AI program stand out</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Code className="benefit-icon" />
              </div>
              <h3>No Coding Required</h3>
              <p>Build AI apps without writing a single line of code</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap className="benefit-icon" />
              </div>
              <h3>Quick Start</h3>
              <p>Start building AI applications immediately</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Target className="benefit-icon" />
              </div>
              <h3>Real Projects</h3>
              <p>Build portfolio-ready AI projects</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Users className="benefit-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from AI industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Sky Blue Footer */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start building AI apps without code!</p>
          <div className="cta-buttons">
            <button className="cta-primary">
              <Mail size={20} /> Email Us
            </button>
            <button className="cta-secondary">
              <Phone size={20} /> Call Now
            </button>
            <button className="cta-tertiary">
              <MapPin size={20} /> Visit Us
            </button>
          </div>
          <p className="cta-note">Limited seats available. Enroll now to secure your spot!</p>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .genai-page {
          font-family: "Poppins", "Times New Roman", serif;
          overflow-x: hidden;
          background: #ffffff;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* HERO SECTION - Pure White Background */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #ffffff;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
          min-height: 100vh;
          padding: 80px 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 50px;
          background: #dbeafe;
          border: 1px solid #93c5fd;
          color: #1e40af;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
        }

        .inline-icon {
          width: 20px;
          height: 20px;
          color: #2563eb;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: #0f172a;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-title span {
          display: block;
          color: #2563eb;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-description {
          margin-top: 25px;
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 25px;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 50px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          font-weight: 500;
          font-size: 0.9rem;
          font-family: "Poppins", sans-serif;
        }

        .tag-icon {
          width: 18px;
          height: 18px;
          color: #2563eb;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-top: 35px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: linear-gradient(
            135deg,
            #3b82f6,
            #2563eb
          );
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.4s ease;
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.35);
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(59, 130, 246, 0.45);
        }

        .secondary-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 15px 30px;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.4s;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .secondary-btn:hover {
          background: #e2e8f0;
          transform: translateY(-5px);
        }

        .fade-up {
          animation: fadeUp 1s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* STATS */
        .stats-section {
          margin-top: -70px;
          position: relative;
          z-index: 10;
          padding-bottom: 60px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .stat-card {
          background: #ffffff;
          padding: 35px 20px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: all 0.4s;
          font-family: "Poppins", sans-serif;
          border: 1px solid #e2e8f0;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
        }

        .stat-card svg {
          color: #3b82f6;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .stat-card p {
          color: #475569;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
        }

        /* SECTION HEADER */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .section-header span {
          color: #2563eb;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .section-header p {
          margin-top: 20px;
          color: #475569;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        /* ABOUT - LIST STYLES */
        .about-section {
          padding: 80px 0 120px;
          background: #ffffff;
        }

        .course-details-list {
          max-width: 900px;
          margin: 60px auto 0;
          background: #f8fafc;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #e2e8f0;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid #e2e8f0;
          transition: all 0.3s;
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .detail-item:hover {
          padding-left: 8px;
        }

        .detail-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: #dbeafe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          border: 1px solid #93c5fd;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .detail-content {
          flex: 1;
        }

        .detail-content h3 {
          font-family: "Times New Roman", "Poppins", serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .detail-content p {
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* COURSES */
        .courses-section {
          padding: 120px 0;
          background: #f8fafc;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .course-card {
          background: #ffffff;
          padding: 35px 30px;
          border-radius: 24px;
          transition: all 0.4s;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          font-family: "Poppins", sans-serif;
          border: 1px solid #e2e8f0;
        }

        .course-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
          border-color: #3b82f6;
        }

        .course-card svg {
          color: #3b82f6;
        }

        .course-card h3 {
          margin: 20px 0 10px;
          color: #0f172a;
          font-size: 1.1rem;
          font-family: "Times New Roman", "Poppins", serif;
          font-weight: 700;
          line-height: 1.3;
        }

        .course-card p {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        /* FEATURES SHOWCASE */
        .features-showcase {
          padding: 120px 0;
          background: #ffffff;
        }

        .features-showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .feature-showcase-card {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 20px;
          transition: all 0.4s;
          border: 1px solid #e2e8f0;
        }

        .feature-showcase-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .feature-showcase-icon {
          display: inline-flex;
          padding: 16px;
          background: #dbeafe;
          border-radius: 16px;
          margin-bottom: 20px;
          color: #2563eb;
          border: 1px solid #93c5fd;
        }

        .feature-showcase-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .feature-showcase-card p {
          color: #475569;
          font-size: 0.9rem;
          font-family: "Poppins", sans-serif;
        }

        /* SKILLS */
        .skills-section {
          padding: 120px 0;
          background: #f8fafc;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .skill-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 36px 24px;
          text-align: center;
          transition: all 0.4s;
          border: 1px solid #e2e8f0;
          font-family: "Poppins", sans-serif;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .skill-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #dbeafe;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid #93c5fd;
        }

        .skill-icon {
          width: 32px;
          height: 32px;
          color: #2563eb;
        }

        .skill-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .skill-card p {
          font-size: 0.9rem;
          color: #475569;
          margin: 0;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        /* HIRES - Sky Blue Footer */
        .hires-section {
          padding: 100px 0;
          background: linear-gradient(
            135deg,
            #1e3a5f,
            #0f172a,
            #1e293b
          );
          text-align: center;
          color: #ffffff;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #60a5fa;
          margin-bottom: 20px;
        }

        .hires-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: "Times New Roman", "Poppins", serif;
          color: #ffffff;
        }

        .hires-section p {
          font-size: 1.1rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 40px;
          font-family: "Poppins", sans-serif;
        }

        .hires-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .hire-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          font-weight: 500;
          font-family: "Poppins", sans-serif;
          color: #ffffff;
          transition: all 0.3s;
        }

        .hire-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .hire-card svg {
          color: #60a5fa;
        }

        /* BENEFITS */
        .benefits-section {
          padding: 120px 0;
          background: #ffffff;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .benefit-card {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 20px;
          transition: all 0.4s;
          border: 1px solid #e2e8f0;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #dbeafe;
          border-radius: 16px;
          margin-bottom: 20px;
          border: 1px solid #93c5fd;
        }

        .benefit-icon {
          color: #2563eb;
          width: 32px;
          height: 32px;
        }

        .benefit-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .benefit-card p {
          color: #475569;
          font-size: 0.9rem;
          font-family: "Poppins", sans-serif;
          line-height: 1.6;
        }

        /* CTA - Sky Blue Footer */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #1e3a5f,
            #0f172a,
            #1e293b
          );
          color: #ffffff;
        }

        .cta-section h2 {
          font-size: 3.5rem;
          font-family: "Times New Roman", "Poppins", serif;
          color: #ffffff;
        }

        .cta-section p {
          max-width: 700px;
          margin: 25px auto;
          color: #cbd5e1;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .cta-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
          border: none;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.4s;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
          font-size: 1rem;
        }

        .cta-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(59, 130, 246, 0.4);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.4s;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-5px);
        }

        .cta-tertiary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.4s;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .cta-tertiary:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .cta-note {
          margin-top: 30px;
          font-size: 0.95rem;
          color: #94a3b8;
          font-family: "Poppins", sans-serif;
        }

        /* ========== RESPONSIVE DESIGN ========== */

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 60px 0;
          }

          .hero-title {
            font-size: 3rem;
          }

          .courses-grid {
            grid-template-columns: 1fr 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr 1fr;
          }

          .features-showcase-grid {
            grid-template-columns: 1fr 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hires-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .cta-section h2 {
            font-size: 3rem;
          }

          .course-details-list {
            padding: 30px 24px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 80vh;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            min-height: auto;
            padding: 60px 0;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-tags {
            justify-content: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-badge {
            font-size: 0.8rem;
            padding: 10px 18px;
          }

          .hero-description {
            font-size: 1rem;
          }

          .primary-btn,
          .secondary-btn {
            padding: 12px 24px;
            font-size: 0.95rem;
          }

          .tag {
            font-size: 0.8rem;
            padding: 8px 18px;
          }

          .stats-section {
            margin-top: -40px;
            padding-bottom: 40px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .stat-card {
            padding: 25px 15px;
          }

          .stat-card h3 {
            font-size: 1.5rem;
          }

          .stat-card p {
            font-size: 0.85rem;
          }

          .about-section {
            padding: 60px 0 80px;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .section-header p {
            font-size: 0.95rem;
          }

          .course-details-list {
            padding: 24px 16px;
            margin-top: 40px;
          }

          .detail-item {
            padding: 14px 0;
            gap: 16px;
          }

          .detail-icon {
            width: 40px;
            height: 40px;
          }

          .detail-icon svg {
            width: 20px;
            height: 20px;
          }

          .detail-content h3 {
            font-size: 1rem;
          }

          .detail-content p {
            font-size: 0.85rem;
          }

          .courses-section {
            padding: 80px 0;
          }

          .courses-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .course-card {
            padding: 25px 20px;
          }

          .course-card h3 {
            font-size: 1rem;
          }

          .features-showcase {
            padding: 80px 0;
          }

          .features-showcase-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .feature-showcase-card {
            padding: 30px 20px;
          }

          .skills-section {
            padding: 80px 0;
          }

          .skills-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .skill-card {
            padding: 25px 20px;
          }

          .skill-card h3 {
            font-size: 1.1rem;
          }

          .skill-card p {
            font-size: 0.85rem;
          }

          .hires-section {
            padding: 70px 0;
          }

          .hires-section h2 {
            font-size: 2rem;
          }

          .hires-section p {
            font-size: 1rem;
          }

          .hires-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            max-width: 100%;
          }

          .benefits-section {
            padding: 80px 0;
          }

          .benefits-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .benefit-card {
            padding: 30px 20px;
          }

          .cta-section {
            padding: 80px 20px;
          }

          .cta-section h2 {
            font-size: 2.5rem;
          }

          .cta-section p {
            font-size: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary,
          .cta-tertiary {
            width: 100%;
            max-width: 350px;
            justify-content: center;
            padding: 14px 25px;
          }
        }

        @media (max-width: 480px) {
          .container {
            width: 95%;
            padding: 0 10px;
          }

          .hero-section {
            min-height: 70vh;
          }

          .hero-grid {
            padding: 40px 0;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-title span {
            font-size: 2rem;
          }

          .hero-badge {
            font-size: 0.7rem;
            padding: 8px 14px;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .tag {
            font-size: 0.7rem;
            padding: 6px 14px;
          }

          .tag-icon {
            width: 14px;
            height: 14px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
            font-size: 0.9rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .stat-card {
            padding: 20px 10px;
          }

          .stat-card h3 {
            font-size: 1.2rem;
          }

          .stat-card p {
            font-size: 0.8rem;
          }

          .stat-card svg {
            width: 24px;
            height: 24px;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .section-header p {
            font-size: 0.9rem;
          }

          .course-details-list {
            padding: 18px 12px;
          }

          .detail-item {
            padding: 12px 0;
            gap: 12px;
          }

          .detail-icon {
            width: 36px;
            height: 36px;
          }

          .detail-icon svg {
            width: 18px;
            height: 18px;
          }

          .detail-content h3 {
            font-size: 0.95rem;
          }

          .detail-content p {
            font-size: 0.8rem;
          }

          .courses-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .course-card {
            padding: 20px;
          }

          .course-card h3 {
            font-size: 0.95rem;
          }

          .features-showcase-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .feature-showcase-card {
            padding: 25px 20px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .skill-card {
            padding: 20px;
          }

          .hires-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .hire-card {
            padding: 15px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .benefit-card {
            padding: 25px 20px;
          }

          .cta-section {
            padding: 60px 20px;
          }

          .cta-section h2 {
            font-size: 2rem;
          }

          .cta-section p {
            font-size: 0.9rem;
            margin: 20px auto;
          }

          .cta-primary,
          .cta-secondary,
          .cta-tertiary {
            font-size: 0.9rem;
            padding: 12px 20px;
          }

          .cta-note {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .hero-title span {
            font-size: 1.6rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .cta-section h2 {
            font-size: 1.6rem;
          }

          .cta-primary,
          .cta-secondary,
          .cta-tertiary {
            font-size: 0.85rem;
            padding: 10px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default GenAIPage;