import React from 'react';
import { 
  BarChart3, 
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
  Shield,
  FileText,
  Target,
  DollarSign,
  PieChart,
  Database
} from 'lucide-react';

const TallyPage = () => {
  return (
    <div className="tally-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/tally1.png" alt="Tally Background" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <BarChart3 className="inline-icon" /> MILES TALLY
              </span>
              <h1 className="hero-title">
                Tally Prime 7.0
                <span>Master Business Accounting</span>
              </h1>
              <p className="hero-description">
                Master business accounting with India's most-used software
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Award className="tag-icon" /> Certified
                </span>
                <span className="tag">
                  <Monitor className="tag-icon" /> Online Live
                </span>
                <span className="tag">
                  <FileText className="tag-icon" /> Accounting
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
              <Clock size={32} />
              <h3>3</h3>
              <p>Months Duration</p>
            </div>
            <div className="stat-card">
              <Users size={32} />
              <h3>30</h3>
              <p>Max Batch Size</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>Yes</h3>
              <p>Industry Recognised Certificate</p>
            </div>
            <div className="stat-card">
              <Monitor size={32} />
              <h3>Online</h3>
              <p>Live Learning Mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Complete Tally Prime 7.0 Mastery</h2>
            <p>
              A complete hands-on guide to Tally Prime 7.0 — the software used by thousands of 
              businesses across India. Learn from scratch and walk out with an industry-recognised 
              certificate.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>For Who</h3>
              <p>12th pass students, commerce background preferred</p>
            </div>
            <div className="feature-card">
              <BookOpen size={28} className="feature-icon" />
              <h3>Pre-Req</h3>
              <p>12th pass</p>
            </div>
            <div className="feature-card">
              <Clock size={28} className="feature-icon" />
              <h3>Duration</h3>
              <p>3 Months</p>
            </div>
            <div className="feature-card">
              <Calendar size={28} className="feature-icon" />
              <h3>Schedule</h3>
              <p>Daily sessions</p>
            </div>
            <div className="feature-card">
              <Monitor size={28} className="feature-icon" />
              <h3>Session</h3>
              <p>1.5 hours/day</p>
            </div>
            <div className="feature-card">
              <Monitor size={28} className="feature-icon" />
              <h3>Mode</h3>
              <p>Online – Live</p>
            </div>
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>Batch Size</h3>
              <p>Max 30 students</p>
            </div>
            <div className="feature-card">
              <Award size={28} className="feature-icon" />
              <h3>Certificate</h3>
              <p>Yes — Industry Recognised Certificate</p>
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
            <p>Complete coverage of Tally Prime 7.0 from basics to advanced</p>
          </div>
          <div className="courses-grid">
            {[
              'Fundamentals of Accounting',
              'Introduction to TallyPrime',
              'Chart of Accounts & Ledger Management',
              'Recording Transactions & Banking',
              'GST in Tally',
              'Financial Statements & Reports',
              'Data Security & Company Management'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <CheckCircle size={32} />
                <h3>{item}</h3>
                <p>In-depth coverage of {item.toLowerCase()} with practical examples</p>
                <button>Learn More →</button>
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
            <h2>Why Tally Prime 7.0?</h2>
            <p>Master the most widely used accounting software in India</p>
          </div>
          <div className="features-showcase-grid">
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <DollarSign size={32} />
              </div>
              <h3>Accounting</h3>
              <p>Complete accounting with GST compliance</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <PieChart size={32} />
              </div>
              <h3>Financial Reports</h3>
              <p>Generate accurate financial statements</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Database size={32} />
              </div>
              <h3>Data Management</h3>
              <p>Secure data and company management</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Shield size={32} />
              </div>
              <h3>GST Ready</h3>
              <p>Complete GST entries and compliance</p>
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
            <p>Practical expertise for accounting roles</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <BarChart3 className="skill-icon" />
              </div>
              <h3>End-to-end Accounting</h3>
              <p>Complete accounting using TallyPrime</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FileText className="skill-icon" />
              </div>
              <h3>GST Compliance</h3>
              <p>GST entries and compliance in Tally</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <TrendingUp className="skill-icon" />
              </div>
              <h3>Financial Reporting</h3>
              <p>Financial reporting and MIS</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Database className="skill-icon" />
              </div>
              <h3>Banking Management</h3>
              <p>Banking and data management in Tally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>CA Firms, Small Businesses, Startups, Accounting Agencies</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Building2 size={24} />
              <span>CA Firms</span>
            </div>
            <div className="hire-card">
              <Briefcase size={24} />
              <span>Small Businesses</span>
            </div>
            <div className="hire-card">
              <TrendingUp size={24} />
              <span>Startups</span>
            </div>
            <div className="hire-card">
              <Users size={24} />
              <span>Accounting Agencies</span>
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
            <p>What makes our Tally Prime program stand out</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap className="benefit-icon" />
              </div>
              <h3>Hands-on Training</h3>
              <p>Practical, real-world accounting scenarios</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Award className="benefit-icon" />
              </div>
              <h3>Industry Certificate</h3>
              <p>Recognised certificate for your career</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Monitor className="benefit-icon" />
              </div>
              <h3>Live Online Classes</h3>
              <p>Learn from anywhere with live sessions</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Users className="benefit-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start your journey in accounting!</p>
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

      {/* Footer */}
      {/* <footer className="footer">
        <div className="container">
          <p>© 2026 MILES TALLY. All rights reserved.</p>
        </div>
      </footer> */}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        .tally-page {
          font-family: "Poppins", "Times New Roman", serif;
          overflow-x: hidden;
          background: #ffffff;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: auto;
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
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #a78bfa;
          font-weight: 600;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .inline-icon {
          width: 20px;
          height: 20px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: white;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-title span {
          display: block;
          color: #8b5cf6;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-description {
          margin-top: 25px;
          color: #cbd5e1;
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
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          font-weight: 500;
          font-size: 14px;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .tag-icon {
          width: 18px;
          height: 18px;
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
            #8b5cf6,
            #7c3aed
          );
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s ease;
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.35);
          font-family: "Poppins", sans-serif;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
        }

        .secondary-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          padding: 15px 30px;
          border-radius: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: 0.4s;
          display: flex;
          gap: 10px;
          align-items: center;
          font-family: "Poppins", sans-serif;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.15);
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
          background: white;
          padding: 35px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
        }

        .stat-card:hover {
          transform: translateY(-10px);
        }

        .stat-card svg {
          color: #8b5cf6;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .stat-card p {
          color: #64748b;
          font-family: "Poppins", sans-serif;
        }

        /* SECTION HEADER */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: auto;
        }

        .section-header span {
          color: #8b5cf6;
          font-weight: 700;
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
          color: #64748b;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
        }

        /* ABOUT */
        .about-section {
          padding: 80px 0 120px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 70px;
        }

        .feature-card {
          padding: 28px 24px;
          border-radius: 20px;
          background: white;
          border: 1px solid #e2e8f0;
          transition: 0.4s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          font-family: "Poppins", sans-serif;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: #8b5cf6;
        }

        .feature-icon {
          color: #8b5cf6;
        }

        .feature-card h3 {
          margin: 15px 0 10px;
          color: #0f172a;
          font-size: 16px;
          font-family: "Times New Roman", "Poppins", serif;
          font-weight: 700;
        }

        .feature-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
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
          background: white;
          padding: 35px;
          border-radius: 24px;
          transition: 0.4s;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          font-family: "Poppins", sans-serif;
        }

        .course-card:hover {
          transform: translateY(-12px);
        }

        .course-card svg {
          color: #8b5cf6;
        }

        .course-card h3 {
          margin: 20px 0 10px;
          color: #0f172a;
          font-size: 18px;
          font-family: "Times New Roman", "Poppins", serif;
          font-weight: 700;
        }

        .course-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        .course-card button {
          margin-top: 20px;
          border: none;
          background: transparent;
          color: #7c3aed;
          font-weight: 600;
          display: flex;
          gap: 8px;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
        }

        /* FEATURES SHOWCASE */
        .features-showcase {
          padding: 120px 0;
          background: white;
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
          transition: 0.4s;
          border: 1px solid #e2e8f0;
        }

        .feature-showcase-card:hover {
          transform: translateY(-10px);
          border-color: #8b5cf6;
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.1);
        }

        .feature-showcase-icon {
          display: inline-flex;
          padding: 16px;
          background: white;
          border-radius: 16px;
          margin-bottom: 20px;
          color: #8b5cf6;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .feature-showcase-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .feature-showcase-card p {
          color: #64748b;
          font-size: 14px;
          font-family: "Poppins", sans-serif;
        }

        /* SKILLS */
        .skills-section {
          padding: 120px 0;
          background: #f8fafc;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .skill-card {
          background: white;
          border-radius: 20px;
          padding: 36px 24px;
          text-align: center;
          transition: 0.4s;
          border: 1px solid #e2e8f0;
          font-family: "Poppins", sans-serif;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: #8b5cf6;
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
          color: #8b5cf6;
        }

        .skill-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .skill-card p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        /* HIRES */
        .hires-section {
          padding: 100px 0;
          background: linear-gradient(
            135deg,
            #1e1b4b,
            #312e81,
            #4c1d95
          );
          text-align: center;
          color: white;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #8b5cf6;
          margin-bottom: 20px;
        }

        .hires-section h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hires-section p {
          font-size: 18px;
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
        }

        .hire-card svg {
          color: #8b5cf6;
        }

        /* BENEFITS */
        .benefits-section {
          padding: 120px 0;
          background: white;
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
          border-color: #8b5cf6;
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: white;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .benefit-icon {
          color: #8b5cf6;
          width: 32px;
          height: 32px;
        }

        .benefit-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .benefit-card p {
          color: #64748b;
          font-size: 14px;
          font-family: "Poppins", sans-serif;
          line-height: 1.6;
        }

        /* CTA */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #1e1b4b,
            #312e81
          );
          color: white;
        }

        .cta-section h2 {
          font-size: 3.5rem;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .cta-section p {
          max-width: 700px;
          margin: 25px auto;
          color: #cbd5e1;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .cta-primary {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: white;
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
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
        }

        .cta-primary:hover {
          transform: translateY(-5px);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.2);
        }

        .cta-tertiary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
        }

        .cta-tertiary:hover {
          background: rgba(255,255,255,0.15);
        }

        .cta-note {
          margin-top: 30px;
          font-size: 14px;
          color: #94a3b8;
          font-family: "Poppins", sans-serif;
        }

        /* FOOTER */
        .footer {
          background: #020617;
          padding: 30px 0;
          text-align: center;
          color: #64748b;
          font-size: 14px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-family: "Poppins", sans-serif;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 3rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
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
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            min-height: 80vh;
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

          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(2, 6, 23, 0.92) 0%,
              rgba(15, 23, 42, 0.85) 30%,
              rgba(88, 28, 135, 0.8) 60%,
              rgba(120, 53, 155, 0.7) 100%
            );
          }

          .section-header h2,
          .cta-section h2 {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .features-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .features-showcase-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .hires-grid {
            grid-template-columns: 1fr;
          }

          .stats-section {
            margin-top: -40px;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-card h3 {
            font-size: 1.5rem;
          }

          .feature-card {
            padding: 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary,
          .cta-tertiary {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .tag {
            font-size: 12px;
            padding: 8px 16px;
          }

          .hero-badge {
            font-size: 12px;
            padding: 8px 16px;
          }

          .hero-section {
            min-height: 70vh;
          }
        }
      `}</style>
    </div>
  );
};

export default TallyPage;