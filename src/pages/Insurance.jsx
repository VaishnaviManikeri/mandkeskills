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
  Home,
  Car,
  Heart,
  Umbrella,
  FileText
} from 'lucide-react';

const InsurancePage = () => {
  return (
    <div className="insurance-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/i.png" alt="Insurance Background" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Shield className="inline-icon" /> MILES INSURANCE
              </span>
              <h1 className="hero-title">
                Insurance
                <span>Essentials</span>
              </h1>
              <p className="hero-description">
                Break into the insurance industry — fast
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Zap className="tag-icon" /> Fast Track
                </span>
                <span className="tag">
                  <Briefcase className="tag-icon" /> Job Ready
                </span>
                <span className="tag">
                  <Building2 className="tag-icon" /> Industry-Focused
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
              <h3>12-15</h3>
              <p>Hours of Training</p>
            </div>
            <div className="stat-card">
              <Calendar size={32} />
              <h3>4</h3>
              <p>Weeks Duration</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>100%</h3>
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

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Your Gateway to Insurance Industry</h2>
            <p>
              A focused course giving you a solid overview of the insurance sector — products, 
              procedures, and operational know-how. Designed to make you job-ready in 4 weeks 
              without overwhelming you.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>For Who</h3>
              <p>Freshers and career switchers with a graduation background</p>
            </div>
            <div className="feature-card">
              <BookOpen size={28} className="feature-icon" />
              <h3>Pre-Req</h3>
              <p>Graduation in any field</p>
            </div>
            <div className="feature-card">
              <Clock size={28} className="feature-icon" />
              <h3>Duration</h3>
              <p>12 – 15 Hours | ~4 Weeks</p>
            </div>
            <div className="feature-card">
              <Calendar size={28} className="feature-icon" />
              <h3>Schedule</h3>
              <p>Daily sessions</p>
            </div>
            <div className="feature-card">
              <Monitor size={28} className="feature-icon" />
              <h3>Session</h3>
              <p>1 hour/day</p>
            </div>
            <div className="feature-card">
              <Building2 size={28} className="feature-icon" />
              <h3>Mode</h3>
              <p>Offline / Classroom</p>
            </div>
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>Batch Size</h3>
              <p>No limit</p>
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
            <p>Comprehensive coverage of all essential insurance topics</p>
          </div>
          <div className="courses-grid">
            {[
              'Insurance Industry Overview',
              'Product Details & Types of Insurance',
              'Procedural and Operational Knowledge',
              'Customer-facing skills in insurance'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <Shield size={32} />
                <h3>{item}</h3>
                <p>In-depth coverage of {item.toLowerCase()} with practical examples</p>
                <button>Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Products Showcase */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <span>Insurance Products</span>
            <h2>Types of Insurance You'll Master</h2>
            <p>Get hands-on knowledge about various insurance products</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon-wrapper">
                <Home size={32} className="product-icon" />
              </div>
              <h3>Home Insurance</h3>
              <p>Protection for properties and assets</p>
            </div>
            <div className="product-card">
              <div className="product-icon-wrapper">
                <Car size={32} className="product-icon" />
              </div>
              <h3>Auto Insurance</h3>
              <p>Vehicle coverage and claims process</p>
            </div>
            <div className="product-card">
              <div className="product-icon-wrapper">
                <Heart size={32} className="product-icon" />
              </div>
              <h3>Health Insurance</h3>
              <p>Medical coverage and policy details</p>
            </div>
            <div className="product-card">
              <div className="product-icon-wrapper">
                <Umbrella size={32} className="product-icon" />
              </div>
              <h3>Life Insurance</h3>
              <p>Life coverage and investment plans</p>
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
            <p>Practical expertise for insurance industry</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FileText className="skill-icon" />
              </div>
              <h3>Procedural Knowledge</h3>
              <p>Operational knowledge for insurance roles</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Shield className="skill-icon" />
              </div>
              <h3>Product Understanding</h3>
              <p>Understanding of insurance products</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Users className="skill-icon" />
              </div>
              <h3>Customer Service</h3>
              <p>Customer service orientation</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <TrendingUp className="skill-icon" />
              </div>
              <h3>Industry Ready</h3>
              <p>Job-ready skills for insurance sector</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>Firms in insurance sector, banks offering insurance products</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Shield size={24} />
              <span>Insurance Firms</span>
            </div>
            <div className="hire-card">
              <Building2 size={24} />
              <span>Banks</span>
            </div>
            <div className="hire-card">
              <Users size={24} />
              <span>Financial Services</span>
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
            <p>What makes our insurance program stand out</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap className="benefit-icon" />
              </div>
              <h3>Fast Track Program</h3>
              <p>Complete in just 4 weeks and start your career quickly</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Briefcase className="benefit-icon" />
              </div>
              <h3>Job Ready</h3>
              <p>Industry-focused curriculum making you job-ready</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Users className="benefit-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry experts with real-world experience</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Award className="benefit-icon" />
              </div>
              <h3>Certificate</h3>
              <p>Get certified by MILES and boost your profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>Get in touch with MILES today and start your journey in the insurance industry!</p>
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

        .insurance-page {
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

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(2, 6, 23, 0.92) 0%,
            rgba(15, 23, 42, 0.85) 30%,
            rgba(23, 37, 84, 0.75) 60%,
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
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #60a5fa;
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
          color: #3b82f6;
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
          color: #3b82f6;
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
          border-color: #3b82f6;
        }

        .feature-icon {
          color: #3b82f6;
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
          color: #3b82f6;
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
          color: #2563eb;
          font-weight: 600;
          display: flex;
          gap: 8px;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
        }

        /* PRODUCTS */
        .products-section {
          padding: 120px 0;
          background: white;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .product-card {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 20px;
          transition: 0.4s;
          border: 1px solid #e2e8f0;
        }

        .product-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
        }

        .product-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: white;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .product-icon {
          color: #3b82f6;
        }

        .product-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .product-card p {
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
          border-color: #3b82f6;
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
          color: #3b82f6;
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
            #1e3a5f,
            #0f172a,
            #1e293b
          );
          text-align: center;
          color: white;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #3b82f6;
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
        }

        .hire-card svg {
          color: #3b82f6;
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
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: white;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .benefit-icon {
          color: #3b82f6;
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
            #1e3a5f,
            #0f172a
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
          background: linear-gradient(135deg, #3b82f6, #2563eb);
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
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
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

          .products-grid {
            grid-template-columns: 1fr 1fr;
          }

          .benefits-grid {
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
              rgba(23, 37, 84, 0.8) 60%,
              rgba(30, 58, 95, 0.7) 100%
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

          .products-grid {
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

export default InsurancePage;