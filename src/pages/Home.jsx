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
} from "lucide-react";

export default function Home() {
  const courses = [
    {
      title: "AI & Data Science Excellence Program",
      link: "/courses/ai-data-science",
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Tally Prime Professional",
      link: "/courses/tally",
      icon: <BookOpen size={32} />,
    },
    {
      title: "Cyber Security",
      link: "/courses/ethical-hacking",
      icon: <Award size={32} />,
    },
    {
      title: "Campus To Corporate",
      link: "/courses/personality",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "EXIM Trade Procedures",
      link: "/courses/exim",
      icon: <Calendar size={32} />,
    },
    {
      title: "Digital Skills Programs",
      link: "/courses/personality",
      icon: <Zap size={32} />,
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

              <h1 className="hero-title">
                That Lead to
                <span> Immediate Career Opportunities</span>
              </h1>

              <p className="hero-description">
                Bridging academic knowledge with industry demands through
                practical training, real-world projects, expert mentorship,
                and placement-focused programs.
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
              <h3>1500+</h3>
              <p>Students Trained</p>
            </div>

            <div className="stat-card">
              <Building2 size={40} />
              <h3>150+</h3>
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
              <p>Career Guidance</p>
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

      {/* COURSES */}
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

                <p>
                  Industry-focused training designed to enhance employability
                  and career growth.
                </p>

                <a href={course.link} className="course-link">
                  Learn More
                  <ArrowRight size={16} />
                </a>
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