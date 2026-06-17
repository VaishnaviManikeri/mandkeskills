import React from 'react';
import { 
  Shield, 
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
  Lock,
  Cloud,
  Server,
  AlertTriangle,
  FileText,
  Target,
  Key,
  Database,
  Eye
} from 'lucide-react';

const HackingPage = () => {
  return (
    <div className="hacking-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/hacking.png" alt="Ethical Hacking Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Shield className="inline-icon" /> MILES CYBERSECURITY
              </span>
              <h1 className="hero-title">
                Certified
                <span>Ethical Hacking</span>
              </h1>
              <p className="hero-description">
                Learn to hack — legally. Start your cybersecurity career
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Zap className="tag-icon" /> High Demand
                </span>
                <span className="tag">
                  <Cloud className="tag-icon" /> Cybersecurity
                </span>
                <span className="tag">
                  <Target className="tag-icon" /> Practical Skills
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
              <h3>3-4</h3>
              <p>Months Duration</p>
            </div>
            <div className="stat-card">
              <Users size={32} />
              <h3>20</h3>
              <p>Max Batch Size</p>
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

      {/* About Section - Start Your Cybersecurity Career with List */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Start Your Cybersecurity Career</h2>
            <p>
              An entry-point course into the world of cybersecurity. You'll learn cryptography, 
              network security, cloud security, security architecture, and incident response. 
              No prior IT background required — just curiosity and commitment.
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
                <p>IT and non-IT students, final year students, career switchers</p>
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
                <p>3 – 4 Months</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Calendar size={24} />
              </div>
              <div className="detail-content">
                <h3>Schedule</h3>
                <p>3 sessions per week</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Monitor size={24} />
              </div>
              <div className="detail-content">
                <h3>Session</h3>
                <p>2 hours</p>
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
                <p>Max 20 students</p>
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
            <p>Comprehensive coverage of cybersecurity fundamentals</p>
          </div>
          <div className="courses-grid">
            {[
              'Cryptography & Network Security',
              'Cloud Security Fundamentals',
              'Security Architecture',
              'Ethical Hacking Techniques',
              'Incident Response & Threat Analysis'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <Shield size={32} />
                <h3>{item}</h3>
                <p>In-depth coverage of {item.toLowerCase()} with practical labs</p>
                <button>Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Domains */}
      <section className="domains-section">
        <div className="container">
          <div className="section-header">
            <span>Security Domains</span>
            <h2>Areas You'll Master</h2>
            <p>Complete cybersecurity knowledge across key domains</p>
          </div>
          <div className="domains-grid">
            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <Lock size={32} className="domain-icon" />
              </div>
              <h3>Cryptography</h3>
              <p>Encryption, decryption, and secure communication</p>
            </div>
            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <Cloud size={32} className="domain-icon" />
              </div>
              <h3>Cloud Security</h3>
              <p>Secure cloud infrastructure and services</p>
            </div>
            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <Server size={32} className="domain-icon" />
              </div>
              <h3>Network Security</h3>
              <p>Protecting networks from cyber threats</p>
            </div>
            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <AlertTriangle size={32} className="domain-icon" />
              </div>
              <h3>Incident Response</h3>
              <p>Threat analysis and incident handling</p>
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
            <p>Practical cybersecurity expertise for real-world roles</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Shield className="skill-icon" />
              </div>
              <h3>Security Architecture</h3>
              <p>Security architecture and threat modelling</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <AlertTriangle className="skill-icon" />
              </div>
              <h3>Incident Response</h3>
              <p>Incident response skills</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Target className="skill-icon" />
              </div>
              <h3>Hacking Techniques</h3>
              <p>Hands-on hacking and defence techniques</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Briefcase className="skill-icon" />
              </div>
              <h3>Job Ready</h3>
              <p>Job-ready, practical cybersecurity knowledge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-showcase">
        <div className="container">
          <div className="section-header">
            <span>Features</span>
            <h2>Why This Course?</h2>
            <p>What makes our ethical hacking program unique</p>
          </div>
          <div className="features-showcase-grid">
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Key size={32} />
              </div>
              <h3>Hands-on Labs</h3>
              <p>Practical hacking and defence exercises</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Database size={32} />
              </div>
              <h3>Real-world Scenarios</h3>
              <p>Learn from actual cybersecurity cases</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Eye size={32} />
              </div>
              <h3>Threat Analysis</h3>
              <p>Identify and analyze security threats</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Award size={32} />
              </div>
              <h3>Certification</h3>
              <p>Industry-recognized certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>IT & Non-IT industries, Cybersecurity firms, Banks, Government sectors</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Building2 size={24} />
              <span>IT Industries</span>
            </div>
            <div className="hire-card">
              <Shield size={24} />
              <span>Cybersecurity Firms</span>
            </div>
            <div className="hire-card">
              <Building2 size={24} />
              <span>Banks</span>
            </div>
            <div className="hire-card">
              <Server size={24} />
              <span>Government Sectors</span>
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
            <p>What makes our ethical hacking program stand out</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap className="benefit-icon" />
              </div>
              <h3>High Demand</h3>
              <p>Cybersecurity professionals are in huge demand</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Award className="benefit-icon" />
              </div>
              <h3>Industry Certificate</h3>
              <p>Recognized certification for your career</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Target className="benefit-icon" />
              </div>
              <h3>Practical Skills</h3>
              <p>Learn by doing with hands-on exercises</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Users className="benefit-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from cybersecurity professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start your journey in cybersecurity!</p>
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

        .hacking-page {
          font-family: "Poppins", sans-serif;
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
          background: #020617;
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
          color: #c4b5fd;
          font-weight: 600;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
        }

        .inline-icon {
          width: 20px;
          height: 20px;
          color: #a78bfa;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: #000000;
          font-family: "Times New Roman", Times, serif;
        }

        .hero-title span {
          display: block;
          color: #a78bfa;
          font-family: "Times New Roman", Times, serif;
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
          background: #FFFFFF;
          border: 1px solid #a78bfa;
          color: #000000;
          font-weight: 500;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .tag-icon {
          width: 18px;
          height: 18px;
          color: #a78bfa;
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
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.35);
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(139, 92, 246, 0.45);
        }

        .secondary-btn {
           background: linear-gradient(
            135deg,
            #8b5cf6,
            #7c3aed
          );
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.4s;
          display: inline-flex;
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
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }

        .stat-card svg {
          color: #8b5cf6;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", Times, serif;
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
          color: #8b5cf6;
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
          font-family: "Times New Roman", Times, serif;
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
          background: #ffffff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .detail-content {
          flex: 1;
        }

        .detail-content h3 {
          font-family: "Times New Roman", Times, serif;
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
          box-shadow: 0 25px 60px rgba(0,0,0,0.1);
          border-color: #8b5cf6;
        }

        .course-card svg {
          color: #8b5cf6;
        }

        .course-card h3 {
          margin: 20px 0 10px;
          color: #0f172a;
          font-size: 1.2rem;
          font-family: "Times New Roman", Times, serif;
          font-weight: 700;
        }

        .course-card p {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        .course-card button {
          margin-top: 20px;
          border: none;
          background: transparent;
          color: #7c3aed;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .course-card button:hover {
          color: #8b5cf6;
          gap: 12px;
        }

        /* DOMAINS */
        .domains-section {
          padding: 120px 0;
          background: #ffffff;
        }

        .domains-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .domain-card {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 20px;
          transition: all 0.4s;
          border: 1px solid #e2e8f0;
        }

        .domain-card:hover {
          transform: translateY(-10px);
          border-color: #8b5cf6;
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.1);
        }

        .domain-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #ffffff;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .domain-icon {
          color: #8b5cf6;
        }

        .domain-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", Times, serif;
        }

        .domain-card p {
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
          grid-template-columns: repeat(4, 1fr);
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
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 10px;
          font-family: "Times New Roman", Times, serif;
        }

        .skill-card p {
          font-size: 0.9rem;
          color: #475569;
          margin: 0;
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
          border-color: #8b5cf6;
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.1);
        }

        .feature-showcase-icon {
          display: inline-flex;
          padding: 16px;
          background: #ffffff;
          border-radius: 16px;
          margin-bottom: 20px;
          color: #8b5cf6;
        }

        .feature-showcase-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", Times, serif;
        }

        .feature-showcase-card p {
          color: #475569;
          font-size: 0.9rem;
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
          color: #ffffff;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #a78bfa;
          margin-bottom: 20px;
        }

        .hires-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: "Times New Roman", Times, serif;
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
          transition: all 0.3s;
        }

        .hire-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .hire-card svg {
          color: #a78bfa;
        }

        /* BENEFITS */
        .benefits-section {
          padding: 120px 0;
          background: #f8fafc;
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
          background: #ffffff;
          border-radius: 20px;
          transition: all 0.4s;
          border: 1px solid #e2e8f0;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: #8b5cf6;
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.1);
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #f8fafc;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .benefit-icon {
          color: #8b5cf6;
          width: 32px;
          height: 32px;
        }

        .benefit-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", Times, serif;
        }

        .benefit-card p {
          color: #475569;
          font-size: 0.9rem;
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
          color: #ffffff;
        }

        .cta-section h2 {
          font-size: 3.5rem;
          font-family: "Times New Roman", Times, serif;
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
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
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
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
          font-size: 1rem;
        }

        .cta-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(139, 92, 246, 0.4);
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
          color: #cbd5e1;
          font-family: "Poppins", sans-serif;
        }

        /* ========== RESPONSIVE DESIGN ========== */

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
            grid-template-columns: 1fr 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr 1fr;
          }

          .domains-grid {
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

        /* Mobile Landscape & Tablets */
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

          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(2, 6, 23, 0.95) 0%,
              rgba(15, 23, 42, 0.85) 30%,
              rgba(76, 29, 149, 0.8) 60%,
              rgba(139, 92, 246, 0.7) 100%
            );
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
            font-size: 1.1rem;
          }

          .course-card p {
            font-size: 0.85rem;
          }

          .domains-section {
            padding: 80px 0;
          }

          .domains-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .domain-card {
            padding: 30px 20px;
          }

          .domain-card h3 {
            font-size: 1.1rem;
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

        /* Mobile Phones */
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
            font-size: 1rem;
          }

          .domains-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .domain-card {
            padding: 25px 20px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .skill-card {
            padding: 20px;
          }

          .features-showcase-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .feature-showcase-card {
            padding: 25px 20px;
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

        /* Very Small Devices */
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

export default HackingPage;