import React from 'react';
import { 
  Brain,
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
  Sparkles,
  FileText,
  Target,
  Cloud,
  Layers,
  Star
} from 'lucide-react';

const AIPage = () => {
  return (
    <div className="ai-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/ai1.png" alt="AI & Data Science Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Brain className="inline-icon" /> MILES AI
              </span>
              <h1 className="hero-title">
                AI & Data Science
                <span>Excellence</span>
              </h1>
              <p className="hero-description">
                Become an AI/ML engineer — even if you're starting from scratch
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Star className="tag-icon" /> Microsoft Program
                </span>
                <span className="tag">
                  <Code className="tag-icon" /> Python + ML
                </span>
                <span className="tag">
                  <Zap className="tag-icon" /> Career Switcher Friendly
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
              <Brain size={32} />
              <h3>AI/ML</h3>
              <p>Excellence Program</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>Microsoft</h3>
              <p>Certified Program</p>
            </div>
            <div className="stat-card">
              <Clock size={32} />
              <h3>Flexible</h3>
              <p>Cohort Schedule</p>
            </div>
            <div className="stat-card">
              <Monitor size={32} />
              <h3>Offline</h3>
              <p>Classroom Mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Master AI & Data Science with List */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Master AI & Data Science</h2>
            <p>
              Microsoft's AI and Data Science Excellence program, delivered with hands-on labs, 
              real datasets, and a capstone project. Covers Python, ML, deep learning, NLP, and 
              model deployment. Top 20% of learners get additional recognition.
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
                <p>Career switchers, students, professionals wanting to enter AI/ML</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <BookOpen size={24} />
              </div>
              <div className="detail-content">
                <h3>Pre-Req</h3>
                <p>Basic computer knowledge</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Clock size={24} />
              </div>
              <div className="detail-content">
                <h3>Duration</h3>
                <p>As per cohort schedule</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Calendar size={24} />
              </div>
              <div className="detail-content">
                <h3>Schedule</h3>
                <p>2 sessions per week</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Monitor size={24} />
              </div>
              <div className="detail-content">
                <h3>Session</h3>
                <p>3 hours</p>
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
                <p>Microsoft AI & Data Science Excellence Certificate</p>
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
            <p>Complete AI & Data Science curriculum from basics to deployment</p>
          </div>
          <div className="courses-grid">
            {[
              'Python for Data Science — NumPy, Pandas, data wrangling',
              'Statistics & Math for Data Science',
              'Data Visualization (Matplotlib, Seaborn, Power BI)',
              'Machine Learning Fundamentals — supervised & unsupervised',
              'Deep Learning & Neural Networks',
              'AI Concepts — NLP, Computer Vision basics',
              'Model Deployment — Flask / Streamlit',
              'Capstone Project — end-to-end AI/ML project'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <CheckCircle size={32} />
                <h3>{item}</h3>
                <p>In-depth coverage with hands-on practice</p>
                <button>Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <span>Tech Stack</span>
            <h2>Tools & Technologies You'll Master</h2>
            <p>Industry-standard tools for AI & Data Science</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <Code size={32} className="tech-icon" />
              </div>
              <h3>Python</h3>
              <p>NumPy, Pandas, Scikit-learn</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <BarChart3 size={32} className="tech-icon" />
              </div>
              <h3>Visualization</h3>
              <p>Matplotlib, Seaborn, Power BI</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <Brain size={32} className="tech-icon" />
              </div>
              <h3>Deep Learning</h3>
              <p>TensorFlow, PyTorch</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <Cloud size={32} className="tech-icon" />
              </div>
              <h3>Deployment</h3>
              <p>Flask, Streamlit</p>
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
            <p>Practical AI/ML expertise for real-world roles</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Code className="skill-icon" />
              </div>
              <h3>Python Programming</h3>
              <p>Python programming for data analysis</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Brain className="skill-icon" />
              </div>
              <h3>ML Models</h3>
              <p>Building and evaluating ML models</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Database className="skill-icon" />
              </div>
              <h3>Data Processing</h3>
              <p>Data cleaning, feature engineering, EDA</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Layers className="skill-icon" />
              </div>
              <h3>Deep Learning</h3>
              <p>Deep learning foundations</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Cloud className="skill-icon" />
              </div>
              <h3>Model Deployment</h3>
              <p>Deploy models using Flask/Streamlit</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <TrendingUp className="skill-icon" />
              </div>
              <h3>Business Value</h3>
              <p>Translating data insights into business value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>Data Science firms, Tech companies, Credenca, Data Solutions companies</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Brain size={24} />
              <span>Data Science Firms</span>
            </div>
            <div className="hire-card">
              <Building2 size={24} />
              <span>Tech Companies</span>
            </div>
            <div className="hire-card">
              <Star size={24} />
              <span>Credenca</span>
            </div>
            <div className="hire-card">
              <Database size={24} />
              <span>Data Solutions</span>
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
            <p>What makes our AI & Data Science program stand out</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Award className="benefit-icon" />
              </div>
              <h3>Microsoft Program</h3>
              <p>Industry-recognized Microsoft certification</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap className="benefit-icon" />
              </div>
              <h3>Career Switcher Friendly</h3>
              <p>Start from scratch and become job-ready</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Target className="benefit-icon" />
              </div>
              <h3>Capstone Project</h3>
              <p>End-to-end real-world AI/ML project</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Users className="benefit-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start your journey in AI & Data Science!</p>
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

        .ai-page {
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

        /* HERO SECTION */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: none;
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

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(2, 6, 23, 0.92) 0%,
            rgba(15, 23, 42, 0.85) 30%,
            rgba(30, 58, 95, 0.75) 60%,
            rgba(30, 58, 95, 0.6) 85%,
            rgba(30, 58, 95, 0.3) 100%
          );
          z-index: 1;
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
          background: rgba(135, 206, 235, 0.15);
          border: 1px solid #000000;
          color: #000000;
          font-weight: 600;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
        }

        .inline-icon {
          width: 20px;
          height: 20px;
          color: #87CEEB;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: #000000;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-title span {
          display: block;
          color: #87CEEB;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-description {
          margin-top: 25px;
          color: #000000;
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
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid #000000;
          color: #000000;
          font-weight: 500;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .tag-icon {
          width: 18px;
          height: 18px;
          color: #000000;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-top: 35px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: linear-gradient(135deg, #87CEEB, #5BA3C9);
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s ease;
          box-shadow: 0 15px 35px rgba(135, 206, 235, 0.35);
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(135, 206, 235, 0.45);
        }

        .secondary-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: 0.4s;
          display: flex;
          gap: 10px;
          align-items: center;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.15);
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
          padding: 0 0 60px 0;
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
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }

        .stat-card svg {
          color: #87CEEB;
        }

        .stat-card h3 {
          font-size: 1.5rem;
          margin-top: 15px;
          color: #000000;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .stat-card p {
          color: #000000;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        /* SECTION HEADER */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .section-header span {
          color: #87CEEB;
          font-weight: 700;
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-top: 15px;
          color: #000000;
          font-family: "Times New Roman", "Poppins", serif;
          line-height: 1.2;
        }

        .section-header p {
          margin-top: 20px;
          color: #000000;
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
          background: #ffffff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #87CEEB;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .detail-content {
          flex: 1;
        }

        .detail-content h3 {
          font-family: "Times New Roman", "Poppins", serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 4px;
        }

        .detail-content p {
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          color: #000000;
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
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .course-card {
          background: #ffffff;
          padding: 30px 25px;
          border-radius: 24px;
          transition: 0.4s;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          font-family: "Poppins", sans-serif;
          border: 1px solid #e2e8f0;
        }

        .course-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.1);
          border-color: #87CEEB;
        }

        .course-card svg {
          color: #87CEEB;
        }

        .course-card h3 {
          margin: 20px 0 10px;
          color: #000000;
          font-size: 0.95rem;
          font-family: "Times New Roman", "Poppins", serif;
          font-weight: 700;
          line-height: 1.3;
        }

        .course-card p {
          color: #000000;
          font-size: 0.9rem;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        .course-card button {
          margin-top: 20px;
          border: none;
          background: transparent;
          color: #87CEEB;
          font-weight: 600;
          display: flex;
          gap: 8px;
          align-items: center;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          padding: 0;
          transition: all 0.3s;
        }

        .course-card button:hover {
          gap: 12px;
          color: #5BA3C9;
        }

        /* TECH STACK */
        .tech-section {
          padding: 120px 0;
          background: #ffffff;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .tech-card {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 20px;
          transition: 0.4s;
          border: 1px solid #e2e8f0;
        }

        .tech-card:hover {
          transform: translateY(-10px);
          border-color: #87CEEB;
          box-shadow: 0 20px 40px rgba(135, 206, 235, 0.1);
        }

        .tech-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #ffffff;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .tech-icon {
          color: #87CEEB;
        }

        .tech-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .tech-card p {
          color: #000000;
          font-size: 0.95rem;
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
          transition: 0.4s;
          border: 1px solid #e2e8f0;
          font-family: "Poppins", sans-serif;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: #87CEEB;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .skill-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #f8fafc;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .skill-icon {
          width: 32px;
          height: 32px;
          color: #87CEEB;
        }

        .skill-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #000000;
          margin: 0 0 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .skill-card p {
          font-size: 0.95rem;
          color: #000000;
          margin: 0;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        /* HIRES */
        .hires-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f172a, #1e293b, #1e3a5f);
          text-align: center;
          color: #ffffff;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #87CEEB;
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
          color: #e2e8f0;
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
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .hire-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .hire-card svg {
          color: #87CEEB;
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
          transition: 0.4s;
          border: 1px solid #e2e8f0;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: #87CEEB;
          box-shadow: 0 20px 40px rgba(135, 206, 235, 0.1);
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #ffffff;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .benefit-icon {
          color: #87CEEB;
          width: 32px;
          height: 32px;
        }

        .benefit-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .benefit-card p {
          color: #000000;
          font-size: 0.95rem;
          font-family: "Poppins", sans-serif;
          line-height: 1.6;
        }

        /* CTA */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
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
          color: #e2e8f0;
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
          background: linear-gradient(135deg, #87CEEB, #5BA3C9);
          color: #ffffff;
          border: none;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 15px 35px rgba(135, 206, 235, 0.3);
          font-size: 1rem;
        }

        .cta-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(135, 206, 235, 0.4);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
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
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
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
          color: #cbd5e1;
          font-family: "Poppins", sans-serif;
        }

        /* ======================================== */
        /* RESPONSIVE DESIGN */
        /* ======================================== */

        /* Tablets & Small Laptops */
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
            grid-template-columns: repeat(2, 1fr);
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hires-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .cta-section h2 {
            font-size: 2.8rem;
          }

          .course-details-list {
            padding: 30px 24px;
          }
        }

        /* Mobile Landscape & Tablets */
        @media (max-width: 768px) {
          .container {
            width: 95%;
            padding: 0 10px;
          }

          .hero-section {
            min-height: auto;
            padding: 40px 0;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            min-height: auto;
            padding: 40px 0;
            gap: 30px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-title span {
            font-size: 2.5rem;
          }

          .hero-badge {
            font-size: 0.8rem;
            padding: 10px 18px;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-tags {
            justify-content: center;
          }

          .tag {
            font-size: 0.8rem;
            padding: 8px 16px;
          }

          .hero-buttons {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(2, 6, 23, 0.92) 0%,
              rgba(15, 23, 42, 0.85) 30%,
              rgba(30, 58, 95, 0.8) 60%,
              rgba(30, 58, 95, 0.7) 100%
            );
          }

          .stats-section {
            margin-top: -40px;
            padding: 0 0 40px 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .stat-card {
            padding: 25px 15px;
          }

          .stat-card h3 {
            font-size: 1.3rem;
          }

          .stat-card p {
            font-size: 0.9rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .section-header p {
            font-size: 0.95rem;
          }

          .about-section {
            padding: 60px 0 80px;
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
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .course-card {
            padding: 25px 20px;
          }

          .course-card h3 {
            font-size: 0.95rem;
          }

          .tech-section {
            padding: 80px 0;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 40px;
          }

          .tech-card {
            padding: 30px 15px;
          }

          .tech-card h3 {
            font-size: 1.1rem;
          }

          .skills-section {
            padding: 80px 0;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 40px;
          }

          .skill-card {
            padding: 25px 18px;
          }

          .skill-card h3 {
            font-size: 1rem;
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
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .hire-card {
            padding: 16px;
            font-size: 0.9rem;
          }

          .benefits-section {
            padding: 80px 0;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 40px;
          }

          .benefit-card {
            padding: 30px 15px;
          }

          .benefit-card h3 {
            font-size: 1rem;
          }

          .cta-section {
            padding: 80px 20px;
          }

          .cta-section h2 {
            font-size: 2rem;
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
            max-width: 300px;
            justify-content: center;
            padding: 14px 25px;
            font-size: 0.95rem;
          }
        }

        /* Mobile Phones */
        @media (max-width: 480px) {
          .container {
            width: 100%;
            padding: 0 12px;
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
            font-size: 0.95rem;
          }

          .hero-tags {
            gap: 10px;
          }

          .tag {
            font-size: 0.7rem;
            padding: 6px 12px;
          }

          .tag-icon {
            width: 14px;
            height: 14px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .stat-card {
            padding: 18px 10px;
          }

          .stat-card svg {
            width: 24px;
            height: 24px;
          }

          .stat-card h3 {
            font-size: 1.1rem;
            margin-top: 10px;
          }

          .stat-card p {
            font-size: 0.8rem;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .section-header span {
            font-size: 0.8rem;
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
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .hires-grid {
            grid-template-columns: 1fr;
          }

          .cta-section h2 {
            font-size: 1.8rem;
          }

          .cta-section p {
            font-size: 0.95rem;
          }

          .cta-primary,
          .cta-secondary,
          .cta-tertiary {
            max-width: 100%;
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }

        /* Very Small Devices */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .hero-title span {
            font-size: 1.6rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .stat-card {
            padding: 14px 8px;
          }

          .stat-card h3 {
            font-size: 1rem;
          }

          .stat-card p {
            font-size: 0.7rem;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .detail-content h3 {
            font-size: 0.9rem;
          }

          .cta-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AIPage;