import React from 'react';
import { 
  Globe, 
  Target, 
  FileText, 
  Briefcase, 
  Users, 
  BookOpen, 
  Clock, 
  Calendar, 
  Monitor, 
  Award,
  CheckCircle,
  TrendingUp,
  Truck,
  Building2,
  Mail,
  Phone,
  MapPin,
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const EximPage = () => {
  return (
    <div className="exim-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/e3.png" alt="EXIM Trade Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Sparkles size={18} /> MILES EXIM
              </span>
              <h1 className="hero-title">
                A to Z of
                <span>EXIM Trade</span>
              </h1>
              <p className="hero-description">
                Everything you need to know about Exports & Imports — from zero to ready
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Target size={18} /> Practical
                </span>
                <span className="tag">
                  <FileText size={18} /> Trade & Customs
                </span>
                <span className="tag">
                  <Briefcase size={18} /> Job Ready
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
              <h3>40+</h3>
              <p>Hours of Training</p>
            </div>
            <div className="stat-card">
              <Users size={32} />
              <h3>25</h3>
              <p>Max Batch Size</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>100%</h3>
              <p>Certificate of Completion</p>
            </div>
            <div className="stat-card">
              <Globe size={32} />
              <h3>Hybrid</h3>
              <p>Learning Mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Complete End-to-End Journey with List */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Complete End-to-End Journey</h2>
            <p>
              A complete end-to-end journey through international trade. You'll cover customs processes, 
              shipping documents, INCO terms, payment methods, port operations, and everything in between. 
              Perfect if you want to start a business or build a career in global trade.
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
                <p>Budding entrepreneurs, aspiring exporters, students wanting to work in trade</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <BookOpen size={24} />
              </div>
              <div className="detail-content">
                <h3>Pre-Req</h3>
                <p>Basic English understanding</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Clock size={24} />
              </div>
              <div className="detail-content">
                <h3>Duration</h3>
                <p>40 Hours | ~3.5 Months</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Calendar size={24} />
              </div>
              <div className="detail-content">
                <h3>Schedule</h3>
                <p>2 sessions/week OR Weekend-only batches</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Monitor size={24} />
              </div>
              <div className="detail-content">
                <h3>Session</h3>
                <p>1.5 – 2 hrs per session</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Globe size={24} />
              </div>
              <div className="detail-content">
                <h3>Mode</h3>
                <p>Hybrid</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Users size={24} />
              </div>
              <div className="detail-content">
                <h3>Batch Size</h3>
                <p>Max 25 students</p>
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
            <p>Comprehensive coverage of all essential EXIM trade topics</p>
          </div>
          <div className="courses-grid">
            {[
              'Preparation for Exports',
              'Export Procedures & Documentation',
              'Import Procedures & Documentation',
              'Customs Processes',
              'INCO Terms & Terms of Delivery',
              'Shipping Documents',
              'Payment Terms & Methods'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <div className="course-icon-wrapper">
                  <CheckCircle size={32} />
                </div>
                <h3>{item}</h3>
                <p>In-depth coverage of {item.toLowerCase()} with practical examples</p>
                <button className="course-link">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <span>Skills</span>
            <h2>Skills You'll Walk Out With</h2>
            <p>Practical expertise for the real world</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FileText className="skill-icon" />
              </div>
              <h3>Trade Documents</h3>
              <p>Awareness of all key trade documents</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <TrendingUp className="skill-icon" />
              </div>
              <h3>Current Practices</h3>
              <p>Understanding of current trade practices</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Truck className="skill-icon" />
              </div>
              <h3>Real-World Exposure</h3>
              <p>Practical exposure to real-world EXIM processes</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Globe className="skill-icon" />
              </div>
              <h3>Global Impact</h3>
              <p>Understand the impact of global trade on daily life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>Trade & Customs Houses, Logistics firms, Export-Import companies</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Shield size={24} />
              <span>Trade Houses</span>
            </div>
            <div className="hire-card">
              <Truck size={24} />
              <span>Logistics Firms</span>
            </div>
            <div className="hire-card">
              <Globe size={24} />
              <span>EXIM Companies</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start your journey in international trade!</p>
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

        .exim-page {
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
          padding: 10px 22px;
          border-radius: 50px;
          background: #e0f2fe;
          border: 1px solid #7dd3fc;
          color: #0369a1;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
        }

        .hero-badge svg {
          color: #0ea5e9;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: #0f172a;
          font-family: "Times New Roman", Times, serif;
        }

        .hero-title span {
          display: block;
          color: #0ea5e9;
          font-family: "Times New Roman", Times, serif;
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

        .tag svg {
          color: #0ea5e9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-top: 35px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: #0ea5e9;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 15px 35px rgba(14, 165, 233, 0.3);
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(14, 165, 233, 0.4);
          background: #0284c7;
        }

        .secondary-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 15px 30px;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .secondary-btn:hover {
          background: #e2e8f0;
          transform: translateY(-5px);
          border-color: #0ea5e9;
        }

        /* FADE UP */
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
          padding: 35px 20px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          transition: all 0.3s;
          font-family: "Poppins", sans-serif;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(14, 165, 233, 0.1);
          border-color: #7dd3fc;
        }

        .stat-card svg {
          color: #0ea5e9;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", Times, serif;
          font-weight: 800;
        }

        .stat-card p {
          color: #64748b;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* SECTION HEADER */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .section-header span {
          color: #0ea5e9;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", Times, serif;
          font-weight: 800;
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
          background: #fafcff;
        }

        .course-details-list {
          max-width: 900px;
          margin: 60px auto 0;
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid #f1f5f9;
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
          background: #e0f2fe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0ea5e9;
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
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* COURSES */
        .courses-section {
          padding: 120px 0;
          background: #ffffff;
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
          transition: all 0.3s;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #f1f5f9;
          font-family: "Poppins", sans-serif;
        }

        .course-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(14, 165, 233, 0.08);
          border-color: #7dd3fc;
        }

        .course-icon-wrapper {
          width: 60px;
          height: 60px;
          background: #e0f2fe;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0ea5e9;
          margin-bottom: 16px;
        }

        .course-card h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.2rem;
          font-family: "Times New Roman", Times, serif;
          font-weight: 700;
        }

        .course-card p {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        .course-link {
          margin-top: 20px;
          border: none;
          background: transparent;
          color: #0ea5e9;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .course-link:hover {
          color: #0284c7;
          gap: 14px;
        }

        /* SKILLS */
        .skills-section {
          padding: 120px 0;
          background: #fafcff;
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
          transition: all 0.3s;
          border: 1px solid #f1f5f9;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
          font-family: "Poppins", sans-serif;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: #7dd3fc;
          box-shadow: 0 20px 40px rgba(14, 165, 233, 0.08);
        }

        .skill-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #e0f2fe;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .skill-icon {
          width: 32px;
          height: 32px;
          color: #0ea5e9;
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
          color: #64748b;
          margin: 0;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        /* HIRES */
        .hires-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hires-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08), transparent 70%);
          border-radius: 50%;
        }

        .hires-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.06), transparent 70%);
          border-radius: 50%;
        }

        .hires-section .container {
          position: relative;
          z-index: 2;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #0ea5e9;
          margin-bottom: 20px;
        }

        .hires-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: "Times New Roman", Times, serif;
          color: #ffffff;
        }

        .hires-section p {
          font-size: 1.1rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 40px;
          font-family: "Poppins", sans-serif;
        }

        .hires-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 700px;
          margin: 0 auto;
        }

        .hire-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 22px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          font-weight: 500;
          font-family: "Poppins", sans-serif;
          color: #e2e8f0;
          transition: all 0.3s;
        }

        .hire-card:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-5px);
          border-color: #0ea5e9;
        }

        .hire-card svg {
          color: #0ea5e9;
        }

        /* CTA */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          color: #0f172a;
        }

        .cta-section h2 {
          font-size: 3.5rem;
          font-family: "Times New Roman", Times, serif;
          font-weight: 800;
        }

        .cta-section p {
          max-width: 700px;
          margin: 25px auto;
          color: #475569;
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
          background: #0ea5e9;
          color: white;
          border: none;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.3s;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.25);
          font-size: 1rem;
        }

        .cta-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(14, 165, 233, 0.35);
          background: #0284c7;
        }

        .cta-secondary {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.3s;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .cta-secondary:hover {
          background: #e2e8f0;
          transform: translateY(-5px);
          border-color: #0ea5e9;
        }

        .cta-tertiary {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.3s;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .cta-tertiary:hover {
          background: #e2e8f0;
          transform: translateY(-5px);
          border-color: #0ea5e9;
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
            grid-template-columns: repeat(2, 1fr);
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

          .hires-grid {
            grid-template-columns: repeat(3, 1fr);
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
            padding: 8px 18px;
            margin: 0 auto;
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

          .skills-section {
            padding: 80px 0;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
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
            gap: 20px;
            max-width: 100%;
          }

          .cta-section {
            padding: 80px 20px;
          }

          .cta-section h2 {
            font-size: 2.2rem;
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
            min-height: 60vh;
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
            padding: 6px 14px;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .tag {
            font-size: 0.7rem;
            padding: 6px 14px;
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

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .skill-card {
            padding: 20px;
          }

          .hires-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .hire-card {
            padding: 15px;
          }

          .cta-section {
            padding: 60px 20px;
          }

          .cta-section h2 {
            font-size: 1.8rem;
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
            font-size: 1.5rem;
          }

          .cta-primary,
          .cta-secondary,
          .cta-tertiary {
            font-size: 0.85rem;
            padding: 10px 16px;
          }

          .detail-content h3 {
            font-size: 0.9rem;
          }

          .detail-content p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EximPage;