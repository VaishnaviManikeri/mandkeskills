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
  Shield
} from 'lucide-react';

const EximPage = () => {
  return (
    <div className="exim-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-background">
          <img src="/assets/images/exim.png" alt="EXIM Trade Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Globe className="inline-icon" /> MILES EXIM
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
                  <Target className="tag-icon" /> Practical
                </span>
                <span className="tag">
                  <FileText className="tag-icon" /> Trade & Customs
                </span>
                <span className="tag">
                  <Briefcase className="tag-icon" /> Job Ready
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

      {/* About Section */}
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
          <div className="features-grid">
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>For Who</h3>
              <p>Budding entrepreneurs, aspiring exporters, students wanting to work in trade</p>
            </div>
            <div className="feature-card">
              <BookOpen size={28} className="feature-icon" />
              <h3>Pre-Req</h3>
              <p>Basic English understanding</p>
            </div>
            <div className="feature-card">
              <Clock size={28} className="feature-icon" />
              <h3>Duration</h3>
              <p>40 Hours | ~3.5 Months</p>
            </div>
            <div className="feature-card">
              <Calendar size={28} className="feature-icon" />
              <h3>Schedule</h3>
              <p>2 sessions/week OR Weekend-only batches</p>
            </div>
            <div className="feature-card">
              <Monitor size={28} className="feature-icon" />
              <h3>Session</h3>
              <p>1.5 – 2 hrs per session</p>
            </div>
            <div className="feature-card">
              <Globe size={28} className="feature-icon" />
              <h3>Mode</h3>
              <p>Hybrid</p>
            </div>
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>Batch Size</h3>
              <p>Max 25 students</p>
            </div>
            <div className="feature-card">
              <Award size={28} className="feature-icon" />
              <h3>Certificate</h3>
              <p>Certificate of Completion from MILES</p>
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
                <CheckCircle size={32} />
                <h3>{item}</h3>
                <p>In-depth coverage of {item.toLowerCase()} with practical examples</p>
                <button>Learn More →</button>
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
          opacity: 0.3;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(2, 6, 23, 0.95) 0%,
            rgba(2, 6, 23, 0.7) 40%,
            rgba(2, 6, 23, 0.3) 70%,
            rgba(2, 6, 23, 0.1) 100%
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
          background: rgba(249, 115, 22, 0.15);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: #fb923c;
          font-weight: 600;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
          font-size: 0.9rem;
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
          font-family: "Times New Roman", Times, serif;
        }

        .hero-title span {
          display: block;
          color: #f97316;
          font-family: "Times New Roman", Times, serif;
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
          font-size: 0.9rem;
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
            #f97316,
            #ea580c
          );
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: all 0.4s ease;
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.35);
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(249, 115, 22, 0.45);
        }

        .secondary-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
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
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: all 0.4s;
          font-family: "Poppins", sans-serif;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }

        .stat-card svg {
          color: #f97316;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-top: 15px;
          color: #0f172a;
          font-family: "Times New Roman", Times, serif;
        }

        .stat-card p {
          color: #64748b;
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
          color: #f97316;
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
          color: #64748b;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }

        /* ABOUT */
        .about-section {
          padding: 80px 0 120px;
          background: #ffffff;
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
          transition: all 0.4s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          font-family: "Poppins", sans-serif;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: #f97316;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .feature-icon {
          color: #f97316;
        }

        .feature-card h3 {
          margin: 15px 0 10px;
          color: #0f172a;
          font-size: 1.1rem;
          font-family: "Times New Roman", Times, serif;
          font-weight: 700;
        }

        .feature-card p {
          color: #64748b;
          font-size: 0.9rem;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .course-card {
          background: white;
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
          border-color: #f97316;
        }

        .course-card svg {
          color: #f97316;
        }

        .course-card h3 {
          margin: 20px 0 10px;
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

        .course-card button {
          margin-top: 20px;
          border: none;
          background: transparent;
          color: #2563eb;
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
          color: #f97316;
          gap: 12px;
        }

        /* SKILLS */
        .skills-section {
          padding: 120px 0;
          background: white;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .skill-card {
          background: #f8fafc;
          border-radius: 20px;
          padding: 36px 24px;
          text-align: center;
          transition: all 0.4s;
          border: 1px solid #e2e8f0;
          font-family: "Poppins", sans-serif;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: #f97316;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .skill-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: white;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .skill-icon {
          width: 32px;
          height: 32px;
          color: #f97316;
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
          background: linear-gradient(
            135deg,
            #020617,
            #0f172a,
            #172554
          );
          text-align: center;
          color: white;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #f97316;
          margin-bottom: 20px;
        }

        .hires-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: "Times New Roman", Times, serif;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 600px;
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
          transition: all 0.3s;
        }

        .hire-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
        }

        .hire-card svg {
          color: #f97316;
        }

        /* CTA */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #172554,
            #020617
          );
          color: white;
        }

        .cta-section h2 {
          font-size: 3.5rem;
          font-family: "Times New Roman", Times, serif;
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
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
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
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.3);
          font-size: 1rem;
        }

        .cta-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(249, 115, 22, 0.4);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
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
          color: white;
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

        /* FOOTER */
       

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

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
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
              rgba(2, 6, 23, 0.8) 50%,
              rgba(2, 6, 23, 0.6) 100%
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

          .features-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 40px;
          }

          .feature-card {
            padding: 20px;
          }

          .feature-card h3 {
            font-size: 1rem;
          }

          .feature-card p {
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

          .footer {
            padding: 20px 0;
            font-size: 0.85rem;
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

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .feature-card {
            padding: 18px 16px;
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

          .footer {
            font-size: 0.75rem;
            padding: 15px 0;
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

          .feature-card {
            padding: 15px;
          }

          .feature-card h3 {
            font-size: 0.95rem;
          }

          .feature-card p {
            font-size: 0.8rem;
          }

          .course-card h3 {
            font-size: 0.95rem;
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

export default EximPage;