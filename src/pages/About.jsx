import { useEffect } from "react";
import { Link } from "react-router-dom";

// Import images (adjust paths as needed)
import heroImage from "/assets/images/a2.png";
import image1 from "/assets/images/a1.png";
import image2 from "/assets/images/2.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .about-container {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          min-height: 100vh;
        }

        /* ── HERO SECTION ── */
        .about-hero {
          background: #ffffff;
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
          background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .about-hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .about-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .about-hero-text {
          display: flex;
          flex-direction: column;
        }

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e0f2fe;
          border: 1px solid #7dd3fc;
          padding: 8px 20px;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 600;
          color: #0369a1;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          width: fit-content;
        }

        .about-hero-badge svg {
          color: #0ea5e9;
        }

        .about-hero h1 {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(40px, 5vw, 60px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .about-hero h1 span {
          color: #0ea5e9;
        }

        .about-hero p {
          font-size: clamp(16px, 1.2vw, 20px);
          color: #475569;
          max-width: 750px;
          line-height: 1.8;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
        }

        .about-hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-hero-image {
          width: 100%;
          max-width: 500px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(14, 165, 233, 0.15);
          transition: transform 0.3s;
        }

        .about-hero-image:hover {
          transform: scale(1.02);
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
          font-size: 36px;
          font-weight: 800;
          color: #0ea5e9;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-family: 'Poppins', sans-serif;
          margin-top: 4px;
          font-weight: 500;
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
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
          color: #0ea5e9;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
        }

        .section-label::before {
          content: '';
          width: 30px;
          height: 3px;
          background: #0ea5e9;
          border-radius: 99px;
        }

        .section-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(30px, 3vw, 42px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .section-title span {
          color: #0ea5e9;
        }

        .section-subtitle {
          font-size: 17px;
          color: #475569;
          font-family: 'Poppins', sans-serif;
          line-height: 1.8;
          max-width: 700px;
        }

        /* ─── CORE PROPOSITION ─── */
        .core-proposition {
          background: #fafcff;
        }

        .proposition-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 44px;
        }

        .proposition-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          padding: 36px 30px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .proposition-card:hover {
          border-color: #38bdf8;
          box-shadow: 0 8px 35px rgba(56, 189, 248, 0.12);
          transform: translateY(-6px);
        }

        .proposition-icon {
          width: 70px;
          height: 70px;
          background: #e0f2fe;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          color: #0ea5e9;
        }

        .proposition-icon svg {
          width: 34px;
          height: 34px;
          stroke: #0ea5e9;
        }

        .proposition-card h4 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .proposition-card p {
          font-size: 15px;
          color: #64748b;
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
        }

        .proposition-connector {
          text-align: center;
          margin-top: 36px;
        }

        .proposition-connector p {
          font-size: 17px;
          color: #475569;
          font-family: 'Poppins', sans-serif;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 500;
        }

        .proposition-connector span {
          color: #0ea5e9;
          font-weight: 600;
        }

        /* ─── USP SECTION ─── */
        .usp-section {
          background: #ffffff;
        }

        .usp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 44px;
        }

        .usp-card {
          background: #fafcff;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          padding: 36px 30px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .usp-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0ea5e9, #38bdf8);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .usp-card:hover::before {
          transform: scaleX(1);
        }

        .usp-card:hover {
          border-color: #38bdf8;
          box-shadow: 0 8px 35px rgba(56, 189, 248, 0.1);
          transform: translateY(-6px);
        }

        .usp-number {
          font-size: 13px;
          font-weight: 700;
          color: #0ea5e9;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }

        .usp-card h4 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .usp-card p {
          font-size: 15px;
          color: #64748b;
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
        }

        /* ─── IMAGE BREAK SECTION ─── */
        .image-break-section {
          padding: 60px 0;
          background: #fafcff;
        }

        .image-break-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .image-break-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
          transition: all 0.3s;
          aspect-ratio: 4/3;
        }

        .image-break-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 45px rgba(14, 165, 233, 0.12);
        }

        .image-break-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ─── CTA SECTION ─── */
        .cta-section {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          padding: 70px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-section .container {
          position: relative;
          z-index: 2;
        }

        .cta-section h2 {
          font-family: 'Times New Roman', Times, serif;
          font-size: clamp(30px, 3.5vw, 46px);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .cta-section h2 span {
          color: #e0f2fe;
        }

        .cta-section p {
          font-size: 19px;
          color: rgba(255,255,255,0.9);
          font-family: 'Poppins', sans-serif;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 48px;
          background: #ffffff;
          color: #0ea5e9;
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
          background: #fafcff;
        }

        .cta-btn svg {
          width: 22px;
          height: 22px;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-hero-image {
            max-width: 400px;
          }

          .about-hero-text {
            text-align: center;
          }

          .about-hero-badge {
            margin: 0 auto 24px;
          }

          .about-hero p {
            max-width: 100%;
          }

          .about-hero-stats {
            justify-content: center;
          }
        }

        @media (max-width: 992px) {
          .proposition-grid,
          .usp-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .image-break-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .proposition-grid,
          .usp-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .image-break-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .image-break-card {
            aspect-ratio: 16/9;
          }

          .about-hero-stats {
            gap: 28px;
          }

          .about-hero {
            padding: 50px 0 40px;
          }

          .section-padding {
            padding: 50px 0;
          }

          .stat-number {
            font-size: 30px;
          }

          .proposition-card,
          .usp-card {
            padding: 28px 22px;
          }

          .about-hero-badge {
            font-size: 12px;
            padding: 6px 16px;
          }

          .cta-section {
            padding: 50px 0;
          }

          .cta-btn {
            padding: 14px 36px;
            font-size: 16px;
            width: 100%;
            justify-content: center;
            max-width: 400px;
          }

          .about-hero-image {
            max-width: 320px;
          }
        }

        @media (max-width: 480px) {
          .about-hero-stats {
            flex-direction: column;
            gap: 16px;
          }

          .about-hero {
            padding: 40px 0 30px;
          }

          .about-hero h1 {
            font-size: 32px;
          }

          .section-padding {
            padding: 40px 0;
          }

          .proposition-card,
          .usp-card {
            padding: 24px 18px;
          }

          .proposition-icon {
            width: 60px;
            height: 60px;
          }

          .proposition-icon svg {
            width: 28px;
            height: 28px;
          }

          .stat-number {
            font-size: 26px;
          }

          .cta-section h2 {
            font-size: 28px;
          }

          .cta-section p {
            font-size: 16px;
          }

          .cta-btn {
            padding: 12px 28px;
            font-size: 15px;
          }

          .about-hero-image {
            max-width: 280px;
          }

          .image-break-card {
            aspect-ratio: 4/3;
          }

          .image-break-section {
            padding: 30px 0;
          }
        }
      `}</style>

      <div className="about-container">
        {/* ─── HERO SECTION WITH IMAGE ─── */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-grid">
              <div className="about-hero-text">
                <div className="about-hero-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="about-hero-image-wrapper">
                <img 
                  src={heroImage} 
                  alt="MILES Learning Experience" 
                  className="about-hero-image"
                />
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

            <div className="proposition-connector">
              <p>
                Together, we create a <span>collaborative model</span> where education meets employment directly.
              </p>
            </div>
          </div>
        </section>

        {/* ─── IMAGE BREAK SECTION ─── */}
        <section className="image-break-section">
          <div className="container">
            <div className="image-break-grid">
              <div className="image-break-card">
                <img src={image1} alt="MILES Training Session" />
              </div>
              <div className="image-break-card">
                <img src={image2} alt="MILES Students Learning" />
              </div>
              <div className="image-break-card">
                <img src={heroImage} alt="MILES Career Opportunities" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── USP SECTION ─── */}
        <section className="usp-section section-padding">
          <div className="container">
            <div className="section-label">Unique Selling Points</div>
            <h2 className="section-title">
              Unique <span>Selling Points</span>
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