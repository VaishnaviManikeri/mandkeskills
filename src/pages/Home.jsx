import "./Home.css";
import heroImage from "/assets/images/cover.png";
import image1 from "/assets/images/1.png";
import image2 from "/assets/images/2.png";
import image3 from "/assets/images/3.png";
import image4 from "/assets/images/4.png";
import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  TrendingUp,
  BookOpen,
  Calendar,
  BarChart3,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  // Updated courses array with new career tracks and job roles
  const courses = [
    {
      title: "Accounting Career Track",
      link: "/courses/tally",
      subtitle: "Tally Essentials",
      readyFor: ["Junior Accountant", "Accounts Assistant"],
      icon: <BookOpen size={32} />,
    },
    {
      title: "Technology Career Track",
      link: "/courses/ethical-hacking",
      subtitle: "Cyber Security",
      readyFor: ["Security Support Roles"],
      icon: <Award size={32} />,
    },
    {
      title: "AI Career Track",
      link: "/courses/genai-ml",
      subtitle: "No-Code AI",
      readyFor: ["AI-enabled workplace roles"],
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Business Career Track",
      link: "/courses/exim",
      subtitle: "Export Import",
      readyFor: ["Export Executive roles"],
      icon: <TrendingUp size={32} />,
    },
  ];

  const features = [
    {
      title: "Industry-Relevant Training",
      description:
        "Courses designed with industry experts to match current market requirements.",
    },
    {
      title: "Hands-On Learning",
      description:
        "Live projects, practical sessions and real-world implementation.",
    },
    {
      title: "Placement Assistance",
      description:
        "Career guidance and job opportunities through industry collaborations.",
    },
    {
      title: "Expert Mentors",
      description:
        "Learn from professionals with extensive industry experience.",
    },
  ];

  const whyChooseImages = [image1, image2, image3, image4];

  // FAQ Data with expanded state
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do I need coding knowledge?",
      answer: "No. This course starts with fundamentals. We begin with the basics and gradually build up your skills, making it accessible for complete beginners."
    },
    {
      id: 2,
      question: "Is this only for IT students?",
      answer: "No. Beginners from any stream can explore cybersecurity. Our programs are designed to be inclusive and accessible to students from all academic backgrounds."
    },
    {
      id: 3,
      question: "Will this guarantee a job?",
      answer: "The course builds practical skills and career readiness; employment depends on individual performance, opportunities and continued learning. We provide placement assistance and industry connections to help you succeed."
    },
    {
      id: 4,
      question: "What is the duration of the course?",
      answer: "Course durations vary by program. Most of our career tracks are designed to be completed in 3-6 months with flexible learning options to suit your schedule."
    },
    {
      id: 5,
      question: "Do I get a certificate after completion?",
      answer: "Yes, upon successful completion of the course, you will receive an industry-recognized certificate from MILES that validates your skills and enhances your employability."
    },
    {
      id: 6,
      question: "Is there any placement support?",
      answer: "Absolutely! We provide comprehensive placement assistance including resume building, interview preparation, and connections with our network of hiring partners."
    }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-grid">

            <div className="hero-text fade-up">
              <span className="hero-badge">
                <Sparkles size={16} />
                A Hub for Job-Ready Courses
              </span>

              <h5 className="hero-title">
Courses Designed With Industry Needs.
                <span> Careers Built For Future Growth.</span>
              </h5>

              <p className="hero-description">
                Industry-aligned certification programs in Finance,
                Technology, AI, Cyber Security & Business Skills with 
                practical training and career guidance.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">
                  Explore Courses
                  <ArrowRight size={18} />
                </button>

                <button className="secondary-btn">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-glow"></div>

              <img
                src={heroImage}
                alt="MILES Hero"
                className="hero-image"
              />
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-card">
              <Users size={40} />
              <h3>250+</h3>
              <p>Students Trained</p>
            </div>

            <div className="stat-card">
              <Building2 size={40} />
              <h3>10+</h3>
              <p>Hiring Partners</p>
            </div>

            <div className="stat-card">
              <Briefcase size={40} />
              <h3>500+</h3>
              <p>Job Opportunities</p>
            </div>

            <div className="stat-card">
              <GraduationCap size={40} />
              <h3>100%</h3>
              <p>Guidance for Job Readiness</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="container">
          {/* Top Section - Images Left, Content Right */}
          <div className="why-choose-top">
            {/* Left side - Images Grid */}
            <div className="why-choose-images">
              <div className="images-grid">
                {whyChooseImages.map((img, index) => (
                  <div key={index} className="image-card">
                    <img src={img} alt={`Why Choose MILES ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="why-choose-content">
              <div className="section-header-left">
                <span>BRIDGING KNOWLEDGE & INDUSTRY SKILLS</span>
                <h2>Why Students Choose MILES</h2>
                <p>
                  MILES is dedicated to empowering students with practical,
                  industry-focused skills that enhance employability and career
                  growth in today's competitive job market.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Feature Cards in Single Row */}
          <div className="features-section">
            <div className="features-grid-single-row">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES - Updated with new career tracks */}
      <section className="courses-section">
        <div className="container">

          <div className="section-header">
            <span>FEATURED PROGRAMS</span>
            <h2>Popular Career-Focused Courses</h2>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-icon-wrapper">
                  {course.icon}
                </div>

                <h3>{course.title}</h3>
                <p className="course-subtitle">{course.subtitle}</p>

                <div className="course-ready-for">
                  <span className="ready-label">Become ready for:</span>
                  <ul>
                    {course.readyFor.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>

                <a href={course.link} className="course-link">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* USP SECTION */}
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
                1.Every MILES program is aligned with actual market demand - designed to prepare learners for specific, available job roles.
Our strong network of hiring partners ensures that training leads to real employment opportunities.
              </p>
            </div>

            <div className="usp-card">
              <div className="usp-number">02</div>
              <h4>Industry-Education Collaboration</h4>
              <p>
2.Programs are co-created with industry professionals and employers, ensuring relevance and currency.
This means learners don't just learn theory - they gain the exact skills employers are looking for.                </p>
            </div>

            <div className="usp-card">
              <div className="usp-number">03</div>
              <h4>Expert Trainers & Mentors</h4>
              <p>
3.MILES brings together top trainers and practitioners across domains - from corporate professionals to entrepreneurs and technical specialists - offering deep, practical learning experiences.                </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Professional Accordion Style */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="faq-badge">STUDENT FAQ</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Find answers to the most common questions about our programs
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="faq-question">
                  <div className="faq-question-content">
                    <div className="faq-icon">
                      <HelpCircle size={22} />
                    </div>
                    <h4>{faq.question}</h4>
                  </div>
                  <div className="faq-toggle">
                    {activeFaq === faq.id ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </div>
                </div>
                <div className={`faq-answer ${activeFaq === faq.id ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">

          <h2>Start Building Your Future Today</h2>

          <p>
            Join MILES and gain the practical skills, industry exposure,
            and confidence needed to succeed in your dream career.
          </p>

          <button className="primary-btn">
            Enroll Now
          </button>

        </div>
      </section>

    </div>
  );
}