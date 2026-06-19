import React from 'react';
import { 
  Laptop,
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
  Database,
  Layers,
  Star,
  BarChart3
} from 'lucide-react';

const TallyCPage = () => {
  return (
    <div className="tally-c-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/t.png" alt="Tally Comprehensive Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Laptop className="inline-icon" /> MILES TALLY
              </span>
              <h1 className="hero-title">
                Tally Comprehensive
                <span>(All 3 Levels)</span>
              </h1>
              <p className="hero-description">
                Go from accounting basics to GST expert — all in one course
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Layers className="tag-icon" /> 3-Level Course
                </span>
                <span className="tag">
                  <Award className="tag-icon" /> Tally Certified
                </span>
                <span className="tag">
                  <Briefcase className="tag-icon" /> Finance Career
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
              <Layers size={32} />
              <h3>3</h3>
              <p>Levels of Certification</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>Yes</h3>
              <p>Tally Comprehensive Certified</p>
            </div>
            <div className="stat-card">
              <Clock size={32} />
              <h3>Flexible</h3>
              <p>As per curriculum</p>
            </div>
            <div className="stat-card">
              <Monitor size={32} />
              <h3>Offline</h3>
              <p>Classroom Mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Complete Tally Certification with List */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Complete Tally Certification</h2>
            <p>
              Three levels, one complete certification. From fundamentals of accounting to TDS, 
              budgets, cost centres, and GST compliance — this is the most thorough Tally pathway 
              available. Ideal if you want to work in any business's finance team.
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
                <p>Learners with basic accounting knowledge looking for a complete Tally certification</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <BookOpen size={24} />
              </div>
              <div className="detail-content">
                <h3>Pre-Req</h3>
                <p>Basic accounting knowledge recommended</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Clock size={24} />
              </div>
              <div className="detail-content">
                <h3>Duration</h3>
                <p>As per Tally Comprehensive curriculum</p>
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
                <p>2 – 2.5 hours</p>
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
                <p>As per batch</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Award size={24} />
              </div>
              <div className="detail-content">
                <h3>Certificate</h3>
                <p>Tally Comprehensive Certification (Official)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn - 3 Levels */}
      <section className="levels-section">
        <div className="container">
          <div className="section-header">
            <span>Curriculum</span>
            <h2>Three Levels of Mastery</h2>
            <p>Complete Tally certification pathway from basics to expert</p>
          </div>
          <div className="levels-grid">
            <div className="level-card level-1">
              <div className="level-header">
                <span className="level-badge">Level 1</span>
                <h3>Foundation</h3>
              </div>
              <div className="level-content">
                <ul className="level-topics">
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Accounting basics</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>TallyPrime intro</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Chart of Accounts</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>GST basics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="level-card level-2">
              <div className="level-header">
                <span className="level-badge">Level 2</span>
                <h3>Intermediate</h3>
              </div>
              <div className="level-content">
                <ul className="level-topics">
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Inventory management</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Receivables/Payables</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Purchase & Sales Orders</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Cost Centres</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Budgets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="level-card level-3">
              <div className="level-header">
                <span className="level-badge">Level 3</span>
                <h3>Advanced</h3>
              </div>
              <div className="level-content">
                <ul className="level-topics">
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Advanced GST</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>TDS entries</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Business Data Management</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="level-icon" />
                    <span>Year-End Closing</span>
                  </li>
                </ul>
              </div>
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
            <p>Complete Tally expertise for finance roles</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <BarChart3 className="skill-icon" />
              </div>
              <h3>Complete Tally Operations</h3>
              <p>Across all business functions</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FileText className="skill-icon" />
              </div>
              <h3>GST & TDS Compliance</h3>
              <p>GST compliance and TDS entries</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Database className="skill-icon" />
              </div>
              <h3>Inventory Management</h3>
              <p>Inventory and order management</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <TrendingUp className="skill-icon" />
              </div>
              <h3>Budget & Cost Management</h3>
              <p>Budget tracking and cost/profit centre management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-showcase">
        <div className="container">
          <div className="section-header">
            <span>Features</span>
            <h2>What Makes This Course Comprehensive</h2>
            <p>Complete coverage from basics to advanced Tally operations</p>
          </div>
          <div className="features-showcase-grid">
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <DollarSign size={32} />
              </div>
              <h3>Accounting Basics</h3>
              <p>Learn fundamentals of accounting</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <PieChart size={32} />
              </div>
              <h3>GST & TDS</h3>
              <p>Complete compliance training</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Database size={32} />
              </div>
              <h3>Business Data</h3>
              <p>Data management and reporting</p>
            </div>
            <div className="feature-showcase-card">
              <div className="feature-showcase-icon">
                <Award size={32} />
              </div>
              <h3>Official Certification</h3>
              <p>Industry-recognized certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section - Purple Footer */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>CA Firms, Small Businesses, MNCs with India operations, Accounting firms</p>
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
              <span>MNCs</span>
            </div>
            <div className="hire-card">
              <Users size={24} />
              <span>Accounting Firms</span>
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
            <p>What makes our Tally Comprehensive program stand out</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Layers className="benefit-icon" />
              </div>
              <h3>3 Levels Complete</h3>
              <p>From basics to GST expert in one course</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Award className="benefit-icon" />
              </div>
              <h3>Official Certificate</h3>
              <p>Tally Comprehensive Certification</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Monitor className="benefit-icon" />
              </div>
              <h3>Classroom Training</h3>
              <p>Offline interactive sessions</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Star className="benefit-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Purple Footer */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start your journey to becoming a Tally expert!</p>
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

        .tally-c-page {
          font-family: "Poppins", "Times New Roman", serif;
          overflow-x: hidden;
          background: #ffffff;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: auto;
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
          font-size: 14px;
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
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.35);
          font-family: "Poppins", sans-serif;
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
          transition: 0.4s;
          display: flex;
          gap: 10px;
          align-items: center;
          font-family: "Poppins", sans-serif;
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
          background: white;
          padding: 35px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          border: 1px solid #e2e8f0;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 20px 50px rgba(59, 130, 246, 0.15);
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
          color: #2563eb;
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
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* LEVELS */
        .levels-section {
          padding: 120px 0;
          background: #f8fafc;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .level-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          transition: 0.4s;
        }

        .level-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.12);
        }

        .level-1 .level-header {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          padding: 30px 24px;
        }

        .level-2 .level-header {
          background: linear-gradient(135deg, #8b5cf6, #a78bfa);
          padding: 30px 24px;
        }

        .level-3 .level-header {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          padding: 30px 24px;
        }

        .level-badge {
          display: inline-block;
          padding: 4px 16px;
          border-radius: 50px;
          background: rgba(255,255,255,0.2);
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
        }

        .level-header h3 {
          color: white;
          font-size: 24px;
          margin-top: 12px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .level-content {
          padding: 24px;
        }

        .level-topics {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .level-topics li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 14px;
          color: #1e293b;
          font-family: "Poppins", sans-serif;
        }

        .level-topics li:last-child {
          border-bottom: none;
        }

        .level-icon {
          color: #22c55e;
          flex-shrink: 0;
          margin-top: 2px;
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
          transition: 0.4s;
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

        /* FEATURES SHOWCASE */
        .features-showcase {
          padding: 120px 0;
          background: #f8fafc;
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
          background: white;
          border-radius: 20px;
          transition: 0.4s;
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

        /* HIRES - Purple Footer */
        .hires-section {
          padding: 100px 0;
          background: linear-gradient(
            135deg,
            #6d28d9,
            #4c1d95,
            #2e1065
          );
          text-align: center;
          color: white;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #a78bfa;
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
          color: #ddd6fe;
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
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          font-weight: 500;
          font-family: "Poppins", sans-serif;
          transition: all 0.3s;
          color: white;
        }

        .hire-card:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-5px);
        }

        .hire-card svg {
          color: #a78bfa;
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
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #dbeafe;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid #93c5fd;
        }

        .benefit-icon {
          color: #2563eb;
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

        /* CTA - Purple Footer */
        .cta-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #6d28d9,
            #4c1d95,
            #2e1065
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
          color: #ddd6fe;
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
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
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
          box-shadow: 0 15px 35px rgba(109, 40, 217, 0.4);
        }

        .cta-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(109, 40, 217, 0.5);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.12);
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
          transform: translateY(-5px);
        }

        .cta-tertiary {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
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
          background: rgba(255,255,255,0.18);
          transform: translateY(-5px);
        }

        .cta-note {
          margin-top: 30px;
          font-size: 14px;
          color: #c4b5fd;
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

          .levels-grid {
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

          .course-details-list {
            padding: 30px 24px;
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

          .section-header h2,
          .cta-section h2 {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .levels-grid {
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

          .level-header h3 {
            font-size: 20px;
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

          .section-header h2 {
            font-size: 1.8rem;
          }

          .cta-section h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .hero-title span {
            font-size: 1.6rem;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .cta-section h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TallyCPage;