import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-title">MILES - Mandke Skill Development</h3>
            <div className="company-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <p>Mandke Growth Centre, Next to Ideal Colony Metro Station, Paud Road, Kothrud, Pune 411038. Maharashtra, India</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <p>+91 9112220491</p>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <p>mandkeskills@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-subtitle">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About MILES</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/registeration" className="registration-link">Register Now</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <div className="newsletter-section">
              <h3 className="footer-title">GROWTH</h3>
              <p className="newsletter-text">
                Enter your email address
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email for updates" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  Subscribe <span className="btn-icon">→</span>
                </button>
              </div>
              {/* Registration Button */}
              <Link to="/registeration" className="registration-btn">
                Register Now <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2026 Trijja Media Works. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/mandkeskills" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">f</span>
              </a>
              <a href="https://www.instagram.com/mandkeskills" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .footer {
          background: #1c96c5;
          padding: 60px 0 0 0;
          font-family: "Poppins", sans-serif;
          border-top: 1px solid #e8f0fe;
          width: 100%;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #e8f0fe;
        }

        /* Footer Column */
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          font-family: "Times New Roman", Times, serif;
          margin-bottom: 5px;
        }

        .footer-subtitle {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          font-family: "Times New Roman", Times, serif;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }

        /* Company Info */
        .company-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .info-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .info-icon {
          color: #ffffff;
          flex-shrink: 0;
          font-size: 1.1rem;
          margin-top: 2px;
          min-width: 20px;
        }

        .info-item p {
          color: #ffffff;
          font-size: 0.9rem;
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
          margin: 0;
          text-align: left;
        }

        /* Footer Links */
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          display: block;
        }

        .footer-links li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9rem;
          font-family: "Poppins", sans-serif;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }

        .footer-links li a:hover {
          color: #0ea5e9;
          padding-left: 5px;
        }

        .footer-links li a::before {
          content: "›";
          opacity: 0;
          transition: all 0.3s ease;
          margin-right: 0;
          display: inline-block;
        }

        .footer-links li a:hover::before {
          opacity: 1;
          margin-right: 5px;
        }

        /* Registration Link in Quick Links */
        .registration-link {
          background: #ff6b35;
          padding: 4px 15px;
          border-radius: 20px;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }

        .registration-link:hover {
          background: #ff8255 !important;
          color: #ffffff !important;
          padding-left: 20px !important;
          transform: scale(1.05);
        }

        .registration-link::before {
          content: "★" !important;
          opacity: 1 !important;
          margin-right: 5px !important;
          color: #ffffff;
        }

        /* Newsletter */
        .newsletter-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .newsletter-text {
          color: #ffffff;
          font-size: 0.9rem;
          font-family: "Poppins", sans-serif;
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .newsletter-input {
          padding: 12px 16px;
          border: 1px solid #0284c7;
          border-radius: 10px;
          font-size: 0.9rem;
          font-family: "Poppins", sans-serif;
          color: #333;
          background: #ffffff;
          transition: all 0.3s ease;
          width: 100%;
          outline: none;
        }

        .newsletter-input::placeholder {
          color: #94a3b8;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
          background: #ffffff;
        }

        .newsletter-btn {
          background: #e4eef2;
          color: #1c96c5;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.4s ease;
          font-family: "Poppins", sans-serif;
          width: 100%;
        }

        .newsletter-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(30, 58, 95, 0.3);
        }

        .newsletter-btn:active {
          transform: translateY(0);
        }

        /* Registration Button */
        .registration-btn {
          background: #ff6b35;
          color: #ffffff;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.4s ease;
          font-family: "Poppins", sans-serif;
          width: 100%;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .registration-btn:hover {
          background: #ff8255;
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
          color: #ffffff;
        }

        .registration-btn:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .newsletter-btn:hover .btn-icon,
        .registration-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        /* Bottom Footer */
        .footer-bottom {
          padding: 25px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          color: #ffffff;
          font-size: 0.85rem;
          font-family: "Poppins", sans-serif;
          margin: 0;
        }

        .footer-social {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f0f7ff;
          color: #0284c7;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
        }

        .social-link:hover {
          background: #0284c7;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(2, 132, 199, 0.3);
        }

        .social-icon {
          line-height: 1;
          font-size: 1.1rem;
        }

        /* ========== RESPONSIVE DESIGN ========== */

        /* Tablets & Small Laptops */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px;
          }

          .footer-column:last-child {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
            width: 100%;
          }
        }

        /* Mobile Landscape & Tablets */
        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 0 0;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding-bottom: 30px;
          }

          .footer-column:last-child {
            grid-column: 1 / -1;
            max-width: 100%;
            margin: 0;
          }

          .footer-title {
            font-size: 1.1rem;
          }

          .footer-subtitle {
            font-size: 0.9rem;
          }

          .info-item p {
            font-size: 0.85rem;
          }

          .footer-links li a {
            font-size: 0.85rem;
          }

          .newsletter-input {
            padding: 10px 14px;
            font-size: 0.85rem;
          }

          .newsletter-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .registration-btn {
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .copyright {
            font-size: 0.8rem;
          }

          .social-link {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }

          .social-icon {
            font-size: 1rem;
          }
        }

        /* Mobile Phones */
        @media (max-width: 480px) {
          .container {
            width: 95%;
            padding: 0 10px;
          }

          .footer {
            padding: 30px 0 0 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            padding-bottom: 25px;
          }

          .footer-column {
            text-align: left;
            align-items: flex-start;
            width: 100%;
          }

          .footer-column:last-child {
            grid-column: auto;
            max-width: 100%;
            align-items: flex-start;
          }

          .footer-title {
            font-size: 1rem;
          }

          .footer-subtitle {
            font-size: 0.85rem;
          }

          .info-item {
            justify-content: flex-start;
            width: 100%;
          }

          .info-item p {
            font-size: 0.8rem;
            text-align: left;
          }

          .footer-links {
            align-items: flex-start;
            width: 100%;
          }

          .footer-links li a {
            font-size: 0.8rem;
          }

          .registration-link {
            padding: 3px 12px;
            font-size: 0.8rem !important;
          }

          .newsletter-section {
            align-items: flex-start;
            width: 100%;
          }

          .newsletter-text {
            font-size: 0.85rem;
            text-align: left;
          }

          .newsletter-form {
            width: 100%;
          }

          .newsletter-input {
            padding: 10px 12px;
            font-size: 0.8rem;
          }

          .newsletter-btn {
            padding: 10px 16px;
            font-size: 0.85rem;
          }

          .registration-btn {
            padding: 12px 20px;
            font-size: 0.85rem;
          }

          .footer-bottom {
            padding: 20px 0;
          }

          .footer-bottom-content {
            gap: 12px;
            text-align: center;
          }

          .copyright {
            font-size: 0.75rem;
            text-align: center;
          }

          .footer-social {
            gap: 10px;
            justify-content: center;
            width: 100%;
          }

          .social-link {
            width: 32px;
            height: 32px;
            font-size: 0.8rem;
          }

          .social-icon {
            font-size: 0.9rem;
          }
        }

        /* Very Small Devices */
        @media (max-width: 360px) {
          .footer {
            padding: 20px 0 0 0;
          }

          .footer-grid {
            gap: 20px;
            padding-bottom: 20px;
          }

          .footer-title {
            font-size: 0.9rem;
          }

          .footer-subtitle {
            font-size: 0.8rem;
          }

          .info-item p {
            font-size: 0.75rem;
          }

          .footer-links li a {
            font-size: 0.75rem;
          }

          .registration-link {
            padding: 2px 10px;
            font-size: 0.7rem !important;
          }

          .newsletter-input {
            font-size: 0.75rem;
            padding: 8px 10px;
          }

          .newsletter-btn {
            font-size: 0.8rem;
            padding: 8px 14px;
          }

          .registration-btn {
            font-size: 0.8rem;
            padding: 10px 16px;
          }

          .footer-bottom {
            padding: 15px 0;
          }

          .copyright {
            font-size: 0.7rem;
          }

          .social-link {
            width: 28px;
            height: 28px;
            font-size: 0.7rem;
          }

          .social-icon {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;