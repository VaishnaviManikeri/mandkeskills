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
  FileText,
  Target,
  Star,
  Heart,
  Smile,
  MessageCircle,
  UserCheck,
  Shield,
  Crown
} from 'lucide-react';

const PersonalityPage = () => {
  return (
    <div className="personality-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/personality.png" alt="Personality Development Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <span className="hero-badge">
                <Sparkles className="inline-icon" /> MILES GROOMING
              </span>
              <h1 className="hero-title">
                Grooming for
                <span>Personality Development</span>
              </h1>
              <p className="hero-description">
                Look sharp, speak confidently, and own every room
              </p>
              <div className="hero-tags">
                <span className="tag">
                  <Star className="tag-icon" /> Soft Skills
                </span>
                <span className="tag">
                  <Briefcase className="tag-icon" /> Corporate Ready
                </span>
                <span className="tag">
                  <Calendar className="tag-icon" /> Weekend Course
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
              <h3>4</h3>
              <p>Weeks Duration</p>
            </div>
            <div className="stat-card">
              <Calendar size={32} />
              <h3>Weekend</h3>
              <p>Only Batches</p>
            </div>
            <div className="stat-card">
              <Users size={32} />
              <h3>10-15</h3>
              <p>Batch Size</p>
            </div>
            <div className="stat-card">
              <Award size={32} />
              <h3>Yes</h3>
              <p>Certificate of Completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About This Course</span>
            <h2>Transform Your Personality</h2>
            <p>
              A short, power-packed weekend course on personal grooming, professional etiquette, 
              confidence building, and corporate mannerisms. Because first impressions matter — 
              and this is how you nail them.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>For Who</h3>
              <p>Graduate students and freshers preparing to enter the corporate world</p>
            </div>
            <div className="feature-card">
              <BookOpen size={28} className="feature-icon" />
              <h3>Pre-Req</h3>
              <p>None</p>
            </div>
            <div className="feature-card">
              <Clock size={28} className="feature-icon" />
              <h3>Duration</h3>
              <p>4 Weeks</p>
            </div>
            <div className="feature-card">
              <Calendar size={28} className="feature-icon" />
              <h3>Schedule</h3>
              <p>Weekend-only batches</p>
            </div>
            <div className="feature-card">
              <Monitor size={28} className="feature-icon" />
              <h3>Session</h3>
              <p>2 hours</p>
            </div>
            <div className="feature-card">
              <Building2 size={28} className="feature-icon" />
              <h3>Mode</h3>
              <p>Offline / Classroom</p>
            </div>
            <div className="feature-card">
              <Users size={28} className="feature-icon" />
              <h3>Batch Size</h3>
              <p>10 – 15 students</p>
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
            <p>Essential skills for professional success</p>
          </div>
          <div className="courses-grid">
            {[
              'Personal Hygiene & Self-Care',
              'Dressing Appropriately — What to Wear & What Not to Wear',
              'Professional Etiquettes & Mannerisms',
              'Confidence Building & Body Language',
              'Corporate Mannerisms & Workplace Behaviour'
            ].map((item, index) => (
              <div key={index} className="course-card">
                <CheckCircle size={32} />
                <h3>{item}</h3>
                <p>Practical training with real-world scenarios</p>
                <button>Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="focus-section">
        <div className="container">
          <div className="section-header">
            <span>Focus Areas</span>
            <h2>What Makes This Program Special</h2>
            <p>Holistic personality development for corporate success</p>
          </div>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon-wrapper">
                <Heart size={32} className="focus-icon" />
              </div>
              <h3>Personal Grooming</h3>
              <p>Hygiene, self-care, and personal presentation</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon-wrapper">
                <Crown size={32} className="focus-icon" />
              </div>
              <h3>Dressing Sense</h3>
              <p>Professional attire for different environments</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon-wrapper">
                <Smile size={32} className="focus-icon" />
              </div>
              <h3>Etiquette</h3>
              <p>Professional manners and workplace behavior</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon-wrapper">
                <MessageCircle size={32} className="focus-icon" />
              </div>
              <h3>Communication</h3>
              <p>Verbal and non-verbal communication skills</p>
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
            <p>Professional skills that create lasting impressions</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Sparkles className="skill-icon" />
              </div>
              <h3>First Impression</h3>
              <p>First impression and professional presence</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <UserCheck className="skill-icon" />
              </div>
              <h3>Dressing Skills</h3>
              <p>Dressing for different environments</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Shield className="skill-icon" />
              </div>
              <h3>Corporate Etiquette</h3>
              <p>Corporate etiquette and communication</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Heart className="skill-icon" />
              </div>
              <h3>Self-Confidence</h3>
              <p>Confidence and self-presentation skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Hires Section */}
      <section className="hires-section">
        <div className="container">
          <Building2 className="hires-icon" />
          <h2>Who Hires From This Course</h2>
          <p>All industries — especially customer-facing, corporate, and hospitality roles</p>
          <div className="hires-grid">
            <div className="hire-card">
              <Building2 size={24} />
              <span>Corporate</span>
            </div>
            <div className="hire-card">
              <Users size={24} />
              <span>Customer-Facing</span>
            </div>
            <div className="hire-card">
              <Star size={24} />
              <span>Hospitality</span>
            </div>
            <div className="hire-card">
              <Briefcase size={24} />
              <span>All Industries</span>
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
            <p>Transform your personality and career prospects</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Star className="benefit-icon" />
              </div>
              <h3>Weekend Course</h3>
              <p>Convenient weekend-only batches</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap className="benefit-icon" />
              </div>
              <h3>Quick Results</h3>
              <p>See immediate improvement in just 4 weeks</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Target className="benefit-icon" />
              </div>
              <h3>Practical Training</h3>
              <p>Hands-on practice and real-world scenarios</p>
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
          <p>Get in touch with MILES today and start your personality transformation!</p>
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
      

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        .personality-page {
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
          background: rgba(2, 6, 23, 0.7);
          padding: 50px;
          border-radius: 24px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 50px;
          background: rgba(26, 86, 219, 0.15);
          border: 1px solid rgba(26, 86, 219, 0.3);
          color: #1a56db;
          font-weight: 600;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .inline-icon {
          width: 20px;
          height: 20px;
          color: #1a56db;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: #ffffff;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-title span {
          display: block;
          color: #1a56db;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-description {
          margin-top: 25px;
          color: #e2e8f0;
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
          color: #ffffff;
          font-weight: 500;
          font-size: 14px;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .tag-icon {
          width: 18px;
          height: 18px;
          color: #1a56db;
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
            #1a56db,
            #1e40af
          );
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
          box-shadow: 0 15px 35px rgba(26, 86, 219, 0.35);
          font-family: "Poppins", sans-serif;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
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
          background: #ffffff;
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
          color: #1a56db;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-top: 15px;
          color: #1a2332;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .stat-card p {
          color: #1a2332;
          font-family: "Poppins", sans-serif;
        }

        /* SECTION HEADER */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: auto;
        }

        .section-header span {
          color: #1a56db;
          font-weight: 700;
          font-family: "Poppins", sans-serif;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-top: 15px;
          color: #1a2332;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .section-header p {
          margin-top: 20px;
          color: #1a2332;
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
          background: #ffffff;
          border: 1px solid #e2e8f0;
          transition: 0.4s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          font-family: "Poppins", sans-serif;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: #1a56db;
        }

        .feature-icon {
          color: #1a56db;
        }

        .feature-card h3 {
          margin: 15px 0 10px;
          color: #1a2332;
          font-size: 16px;
          font-family: "Times New Roman", "Poppins", serif;
          font-weight: 700;
        }

        .feature-card p {
          color: #1a2332;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .course-card {
          background: #ffffff;
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
          color: #1a56db;
        }

        .course-card h3 {
          margin: 20px 0 10px;
          color: #1a2332;
          font-size: 18px;
          font-family: "Times New Roman", "Poppins", serif;
          font-weight: 700;
        }

        .course-card p {
          color: #1a2332;
          font-size: 14px;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
        }

        .course-card button {
          margin-top: 20px;
          border: none;
          background: transparent;
          color: #1a56db;
          font-weight: 600;
          display: flex;
          gap: 8px;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
        }

        /* FOCUS AREAS */
        .focus-section {
          padding: 120px 0;
          background: #ffffff;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .focus-card {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 20px;
          transition: 0.4s;
          border: 1px solid #e2e8f0;
        }

        .focus-card:hover {
          transform: translateY(-10px);
          border-color: #1a56db;
          box-shadow: 0 20px 40px rgba(26, 86, 219, 0.1);
        }

        .focus-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #ffffff;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .focus-icon {
          color: #1a56db;
        }

        .focus-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1a2332;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .focus-card p {
          color: #1a2332;
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
          border-color: #1a56db;
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
          color: #1a56db;
        }

        .skill-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1a2332;
          margin: 0 0 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .skill-card p {
          font-size: 14px;
          color: #1a2332;
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
            #1e3a5f
          );
          text-align: center;
          color: #ffffff;
        }

        .hires-icon {
          width: 64px;
          height: 64px;
          color: #1a56db;
          margin-bottom: 20px;
        }

        .hires-section h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: "Times New Roman", "Poppins", serif;
          color: #ffffff;
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
          color: #ffffff;
        }

        .hire-card svg {
          color: #1a56db;
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
          border-color: #1a56db;
        }

        .benefit-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #ffffff;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .benefit-icon {
          color: #1a56db;
          width: 32px;
          height: 32px;
        }

        .benefit-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1a2332;
          margin-bottom: 10px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .benefit-card p {
          color: #1a2332;
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
            #020617,
            #0f172a
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
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .cta-primary {
          background: linear-gradient(135deg, #1a56db, #1e40af);
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
          box-shadow: 0 15px 35px rgba(26, 86, 219, 0.3);
        }

        .cta-primary:hover {
          transform: translateY(-5px);
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
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.2);
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

          .hero-content {
            padding: 30px;
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

          .focus-grid {
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
            padding: 30px 20px;
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

          .focus-grid {
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

          .hero-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default PersonalityPage;