import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Times+New+Roman&display=swap');

        .about-container {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          min-height: 100vh;
        }

        /* ── HERO SECTION ── */
        .about-hero {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .about-hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .about-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(56,189,248,0.15);
          border: 1px solid rgba(56,189,248,0.3);
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
          color: #7DD3FC;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
        }

        .about-hero h1 {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .about-hero h1 span {
          background: linear-gradient(135deg, #38BDF8, #7DD3FC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero p {
          font-size: clamp(16px, 1.2vw, 20px);
          color: #CBD5E1;
          max-width: 700px;
          line-height: 1.7;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
        }

        .about-hero-stats {
          display: flex;
          gap: 48px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: 'Times New Roman', Times, serif;
          font-size: 32px;
          font-weight: 700;
          color: #38BDF8;
          line-height: 1;
        }

        .stat-label {
          font-size: 13px;
          color: #94A3B8;
          font-family: 'Poppins', sans-serif;
          margin-top: 4px;
        }

        /* ── SECTION COMMON ── */
        .section-padding {
          padding: 80px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #38BDF8;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 2px;
          background: #38BDF8;
          border-radius: 99px;
        }

        .section-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .section-title span {
          color: #38BDF8;
        }

        .section-subtitle {
          font-size: 16px;
          color: #64748B;
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
          max-width: 700px;
        }

        /* ── IMAGE PLACEHOLDER ── */
        .image-placeholder {
          width: 100%;
          height: 200px;
          background: #E2E8F0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          border: 2px dashed #CBD5E1;
          margin-bottom: 16px;
        }

        .image-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        /* ─── CORE PROPOSITION ─── */
        .core-proposition {
          background: #F8FAFC;
        }

        .proposition-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .proposition-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
        }

        .proposition-card:hover {
          border-color: #7DD3FC;
          box-shadow: 0 8px 30px rgba(56,189,248,0.1);
          transform: translateY(-4px);
        }

        .proposition-icon {
          width: 64px;
          height: 64px;
          background: #E0F2FE;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #0284C7;
        }

        .proposition-icon svg {
          width: 32px;
          height: 32px;
          stroke: #0284C7;
        }

        .proposition-card h4 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .proposition-card p {
          font-size: 14px;
          color: #64748B;
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
        }

        /* ─── USP SECTION ─── */
        .usp-section {
          background: #ffffff;
        }

        .usp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .usp-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .usp-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #38BDF8, #7DD3FC);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .usp-card:hover::before {
          transform: scaleX(1);
        }

        .usp-card:hover {
          border-color: #7DD3FC;
          box-shadow: 0 8px 30px rgba(56,189,248,0.1);
          transform: translateY(-4px);
        }

        .usp-number {
          font-size: 12px;
          font-weight: 700;
          color: #38BDF8;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
          font-family: 'Poppins', sans-serif;
        }

        .usp-card h4 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .usp-card p {
          font-size: 14px;
          color: #64748B;
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
        }

        /* ─── FOUNDERS SECTION ─── */
        .founders-section {
          background: #0F172A;
          padding: 80px 0;
        }

        .founders-section .section-title {
          color: #ffffff;
        }

        .founders-section .section-subtitle {
          color: #94A3B8;
        }

        .founders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 40px;
        }

        .founder-card {
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s;
        }

        .founder-card:hover {
          border-color: #38BDF8;
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(56,189,248,0.1);
        }

        .founder-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38BDF8, #7DD3FC);
          margin-bottom: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .founder-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .founder-image-placeholder {
          color: #ffffff;
          font-size: 32px;
          font-family: 'Times New Roman', Times, serif;
          font-weight: 700;
        }

        .founder-card h4 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .founder-role {
          font-size: 14px;
          color: #7DD3FC;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 10px;
        }

        .founder-card p {
          font-size: 14px;
          color: #CBD5E1;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
        }

        /* ─── CTA SECTION ─── */
        .cta-section {
          background: linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%);
          padding: 60px 0;
          text-align: center;
        }

        .cta-section h2 {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .cta-section h2 span {
          color: #0F172A;
        }

        .cta-section p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          font-family: 'Poppins', sans-serif;
          margin-bottom: 28px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 40px;
          background: #0F172A;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(15,23,42,0.3);
          background: #1E293B;
        }

        .cta-btn svg {
          width: 20px;
          height: 20px;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 992px) {
          .proposition-grid,
          .usp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .proposition-grid,
          .usp-grid {
            grid-template-columns: 1fr;
          }

          .founders-grid {
            grid-template-columns: 1fr;
          }

          .about-hero-stats {
            gap: 24px;
          }

          .about-hero {
            padding: 60px 0 40px;
          }

          .section-padding {
            padding: 60px 0;
          }

          .stat-number {
            font-size: 28px;
          }

          .proposition-card,
          .usp-card {
            padding: 24px 20px;
          }

          .founder-card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .about-hero-stats {
            flex-direction: column;
            gap: 16px;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="about-container">
        {/* ─── HERO SECTION ─── */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Empowering Employability
            </div>
            <h1>
              Welcome to <span>MILES</span>
            </h1>
            <p>
              MILES (Mandke Institute for Learning Employable Skills) is a hub for employability-focused learning - a platform that is a direct pipeline between education and industry. We curate and deliver short-term, high-impact courses designed by top industry trainers and experts, helping learners gain skills that lead directly to ready job opportunities.
            </p>
            <div className="about-hero-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Industry-Aligned Courses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Job-Ready Focus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Expert</span>
                <span className="stat-label">Industry Trainers</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CORE PROPOSITION ─── */}
        <section className="core-proposition section-padding">
          <div className="container">
            <div className="section-label">Our Core Proposition</div>
            <h2 className="section-title">
              Our <span>Core Proposition</span>
            </h2>
            <p className="section-subtitle">
              MILES is not just another training institute – it is an ecosystem for employability. We connect:
            </p>

            <div className="proposition-grid">
              <div className="proposition-card">
                <div className="proposition-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4>Learners</h4>
                <p>Who want to upskill and secure meaningful jobs and build rewarding careers</p>
              </div>

              <div className="proposition-card">
                <div className="proposition-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4>Industry Experts</h4>
                <p>Who bring real-world insights and relevant training</p>
              </div>

              <div className="proposition-card">
                <div className="proposition-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h4>Employers</h4>
                <p>Seeking skilled, job-ready and dependable talent</p>
              </div>
            </div>

            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <p style={{ 
                fontSize: '16px', 
                color: '#475569', 
                fontFamily: 'Poppins, sans-serif',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Together, we create a collaborative model where education meets employment directly.
              </p>
            </div>
          </div>
        </section>

        {/* ─── USP SECTION ─── */}
        <section className="usp-section section-padding">
          <div className="container">
            <div className="section-label">Unique Selling Points</div>
            <h2 className="section-title">
              Unique <span>Selling Points (USPs)</span>
            </h2>

            <div className="usp-grid">
              <div className="usp-card">
                <div className="usp-number">01</div>
                <h4>Ready Jobs, Not Just Courses</h4>
                <p>
                  Every MILES program is aligned with actual market demand - designed to prepare learners for specific, available job roles. Our strong network of hiring partners ensures that training leads to real employment opportunities.
                </p>
              </div>

              <div className="usp-card">
                <div className="usp-number">02</div>
                <h4>Industry-Education Collaboration</h4>
                <p>
                  Programs are co-created with industry professionals and employers, ensuring relevance and currency. This means learners don't just learn theory - they gain the exact skills employers are looking for.
                </p>
              </div>

              <div className="usp-card">
                <div className="usp-number">03</div>
                <h4>Expert Trainers & Mentors</h4>
                <p>
                  MILES brings together top trainers and practitioners across domains - from corporate professionals to entrepreneurs and technical specialists - offering deep, practical learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOUNDERS SECTION ─── */}
     
        {/* ─── CTA SECTION ─── */}
        <section className="cta-section">
          <div className="container">
            <h2>Come join <span>MILES</span>' Course to Career path</h2>
            <p>and be MILES ahead of the Competition</p>
            <Link to="/courses" className="cta-btn">
              Explore Our Courses
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}