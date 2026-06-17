import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const courses = [
  { id: 1, title: "A to Z of EXIM Trade", icon: "🌐", tag: "Business", path: "/courses/exim" },
  { id: 2, title: "Insurance Essentials", icon: "🛡️", tag: "Finance", path: "/courses/insurance" },
  { id: 3, title: "Tally Prime 7.0", icon: "📊", tag: "Accounting", path: "/courses/tally" },
  { id: 4, title: "Tally Comprehensive (All 3 Levels)", icon: "📈", tag: "Accounting", path: "/courses/tally-c" },
  { id: 5, title: "Certified Ethical Hacking", icon: "🔐", tag: "Cybersecurity", path: "/courses/ethical-hacking" },
  { id: 6, title: "AI & Data Science Excellence", icon: "🤖", tag: "Technology", path: "/courses/ai-data-science" },
  { id: 7, title: "GenAI & ML — No-Code", icon: "✨", tag: "AI / ML", path: "/courses/genai-ml" },
  { id: 8, title: "Grooming for Personality Development", icon: "🌟", tag: "Soft Skills", path: "/courses/personality" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const courseBtnRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // Update active page based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActivePage("Home");
    } else if (path === "/courses") {
      setActivePage("Courses");
    } else if (path === "/contact") {
      setActivePage("Contact");
    } else if (path === "/about") {
      setActivePage("About");
    } else if (path.startsWith("/courses/")) {
      setActivePage("Courses");
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        courseBtnRef.current &&
        !courseBtnRef.current.contains(e.target)
      ) {
        setCoursesOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setShowSearchDropdown(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.tag.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
    setShowSearchDropdown(filtered.length > 0);
  }, [searchQuery]);

  const handleNavigation = (path) => {
    navigate(path);
    setCoursesOpen(false);
    setMobileOpen(false);
    setMobileCoursesOpen(false);
    setShowSearchDropdown(false);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setActivePage("Home");
    setMobileOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    } else {
      setSearchQuery("");
      setShowSearchDropdown(false);
    }
  };

  const handleCourseClick = (path) => {
    navigate(path);
    setShowSearchDropdown(false);
    setSearchQuery("");
    setMobileOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #ffffff; }

        /* ── NAVBAR ── */
        .navbar-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          border-bottom: 1px solid rgba(56,189,248,0.18);
          transition: box-shadow 0.3s ease;
        }

        .navbar-root.scrolled {
          box-shadow: 0 4px 24px rgba(15,23,42,0.1), 0 1px 0 rgba(56,189,248,0.15);
        }

        /* sky-blue top accent line */
        .accent-bar {
          height: 3.5px;
          background: linear-gradient(90deg, #0F172A 0%, #38BDF8 40%, #7DD3FC 72%, #0F172A 100%);
        }

        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* ── LOGO ── */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
          border: none;
          background: none;
        }

        .logo-img-container {
          width: 200px;
          height: 80px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: box-shadow 0.25s, border-color 0.25s;
        }

        .logo-img-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        /* ── NAV LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          list-style: none;
          flex: 1;
        }

        .nav-link {
          position: relative;
          padding: 9px 20px;
          border-radius: 10px;
          font-size: 14.5px;
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          user-select: none;
          border: none;
          background: transparent;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #0EA5E9;
          background: #F0F9FF;
        }

        .nav-link.active {
          color: #0284C7;
          background: #E0F2FE;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2.5px;
          border-radius: 99px;
          background: #38BDF8;
        }

        .nav-link svg { flex-shrink: 0; opacity: 0.65; }
        .nav-link:hover svg, .nav-link.active svg { opacity: 1; }

        .chevron { transition: transform 0.25s; }
        .chevron.open { transform: rotate(180deg); }

        /* ── SEARCH SECTION ── */
        .search-section {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .search-toggle-btn {
          padding: 8px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
        }

        .search-toggle-btn:hover {
          background: #F0F9FF;
          color: #0EA5E9;
        }

        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .search-input {
          padding: 10px 16px 10px 40px;
          border-radius: 10px;
          border: 2px solid #E2E8F0;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          background: #F8FAFC;
          transition: all 0.3s;
          width: 220px;
          outline: none;
        }

        .search-input:focus {
          border-color: #38BDF8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(56,189,248,0.1);
          width: 280px;
        }

        .search-icon-input {
          position: absolute;
          left: 12px;
          color: #94A3B8;
          pointer-events: none;
        }

        .search-input:focus ~ .search-icon-input {
          color: #38BDF8;
        }

        .search-close-btn {
          position: absolute;
          right: 8px;
          padding: 4px;
          border: none;
          background: transparent;
          color: #94A3B8;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-close-btn:hover {
          background: #F1F5F9;
          color: #475569;
        }

        .search-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: #ffffff;
          border: 1px solid rgba(56,189,248,0.22);
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(15,23,42,0.12);
          max-height: 320px;
          overflow-y: auto;
          z-index: 999;
          animation: dropIn 0.2s cubic-bezier(0.4,0,0.2,1) both;
          min-width: 300px;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid #F1F5F9;
          text-decoration: none;
          color: #1E293B;
        }

        .search-result-item:last-child {
          border-bottom: none;
        }

        .search-result-item:hover {
          background: #F0F9FF;
        }

        .search-result-icon {
          font-size: 20px;
        }

        .search-result-info {
          flex: 1;
        }

        .search-result-title {
          font-size: 13px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }

        .search-result-tag {
          font-size: 11px;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }

        .search-result-path {
          font-size: 11px;
          color: #38BDF8;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .search-no-results {
          padding: 20px 16px;
          text-align: center;
          color: #94A3B8;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
        }

        /* ── MEGA DROPDOWN ── */
        .dropdown-backdrop {
          position: fixed;
          inset: 0;
          z-index: 998;
        }

        .mega-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          width: min(920px, 96vw);
          background: #ffffff;
          border: 1px solid rgba(56,189,248,0.22);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(15,23,42,0.14), 0 4px 16px rgba(56,189,248,0.1);
          z-index: 999;
          animation: dropIn 0.2s cubic-bezier(0.4,0,0.2,1) both;
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E2E8F0;
        }

        .dropdown-title {
          font-size: 11px;
          font-weight: 700;
          color: #38BDF8;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .dropdown-subtitle {
          font-size: 12px;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .course-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 14px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-decoration: none;
        }

        .course-card:hover {
          background: #F0F9FF;
          border-color: #7DD3FC;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(56,189,248,0.15);
        }

        .course-icon { font-size: 22px; line-height: 1; }

        .course-tag {
          display: inline-flex;
          padding: 2px 8px;
          border-radius: 99px;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          background: #E0F2FE;
          color: #0284C7;
          width: fit-content;
        }

        .course-name {
          font-size: 12.5px;
          font-weight: 600;
          color: #1E293B;
          line-height: 1.4;
          font-family: 'Inter', sans-serif;
        }

        .course-card:hover .course-name { color: #0284C7; }

        .course-arrow {
          margin-top: auto;
          color: #CBD5E1;
          font-size: 13px;
          transition: color 0.2s, transform 0.2s;
        }

        .course-card:hover .course-arrow {
          color: #38BDF8;
          transform: translateX(3px);
        }

        .dropdown-footer {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dropdown-footer-text {
          font-size: 11.5px;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 8px;
          border: 1.5px solid #38BDF8;
          color: #0284C7;
          font-size: 12.5px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
          text-decoration: none;
        }

        .view-all-btn:hover {
          background: #E0F2FE;
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 10px;
          background: #F0F9FF;
          border: 1px solid rgba(56,189,248,0.25);
          transition: background 0.2s;
        }

        .hamburger:hover { background: #E0F2FE; }

        .ham-line {
          width: 22px;
          height: 2px;
          border-radius: 99px;
          background: #0F172A;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }

        .hamburger.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          position: fixed;
          top: 83px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          z-index: 997;
          padding: 20px 16px;
          overflow-y: auto;
          border-top: 1px solid #E2E8F0;
          animation: slideDown 0.25s cubic-bezier(0.4,0,0.2,1) both;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          border-radius: 12px;
          margin-bottom: 6px;
          color: #334155;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid transparent;
          text-decoration: none;
        }

        .mobile-nav-item:hover,
        .mobile-nav-item.active {
          background: #F0F9FF;
          border-color: #BAE6FD;
          color: #0284C7;
        }

        .mobile-nav-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #E0F2FE;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .mobile-courses-panel {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 10px;
          margin-bottom: 8px;
        }

        .mobile-course-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s;
          color: #475569;
          font-size: 13.5px;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
        }

        .mobile-course-item:hover {
          background: #E0F2FE;
          color: #0284C7;
        }

        .mobile-course-item span { font-size: 18px; }

        .mobile-divider {
          height: 1px;
          background: #E2E8F0;
          margin: 12px 0;
        }

        .mobile-cta {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(14,165,233,0.3);
          text-decoration: none;
          display: block;
          text-align: center;
        }

        /* Mobile search */
        .mobile-search-wrapper {
          margin-bottom: 12px;
          position: relative;
        }

        .mobile-search-wrapper .search-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
        }

        /* ── RESPONSIVE BREAKPOINTS ── */
        
        /* Large screens (desktop) - keep logo large */
        @media (min-width: 1281px) {
          .navbar-inner {
            max-width: 1400px;
            padding: 0 48px;
            height: 88px;
          }
          
          .nav-link {
            font-size: 16px;
            padding: 10px 24px;
          }
          
          .logo-img-container {
            width: 220px;
            height: 88px;
          }

          .search-input {
            width: 240px;
            font-size: 15px;
          }

          .search-input:focus {
            width: 320px;
          }
        }

        /* Tablets and smaller laptops */
        @media (max-width: 1280px) {
          .navbar-inner {
            padding: 0 24px;
            height: 76px;
          }
          
          .nav-link {
            font-size: 13.5px;
            padding: 8px 14px;
          }
          
          .logo-img-container {
            width: 180px;
            height: 72px;
          }

          .search-input {
            width: 180px;
            font-size: 13px;
          }

          .search-input:focus {
            width: 220px;
          }
        }

        /* Large phones and tablets */
        @media (max-width: 992px) {
          .nav-links, 
          .search-section { 
            display: none !important; 
          }
          
          .hamburger { 
            display: flex; 
          }
          
          .navbar-inner { 
            padding: 0 20px; 
            height: 74px; 
          }
          
          .mobile-menu { 
            top: 77px; 
          }
          
          .logo-img-container {
            width: 160px;
            height: 64px;
          }
          
          .mega-dropdown {
            width: 96vw;
            padding: 20px;
          }
          
          .courses-grid { 
            grid-template-columns: repeat(2, 1fr); 
          }
        }

        /* Small tablets and large phones */
        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 16px;
            height: 70px;
          }
          
          .mobile-menu {
            top: 73px;
            padding: 16px 14px;
          }
          
          .logo-img-container {
            width: 140px;
            height: 56px;
          }
          
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .dropdown-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          
          .dropdown-footer {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
          
          .view-all-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Small phones */
        @media (max-width: 576px) {
          .navbar-inner {
            padding: 0 12px;
            height: 64px;
          }
          
          .mobile-menu {
            top: 67px;
            padding: 14px 12px;
          }
          
          .logo-img-container {
            width: 110px;
            height: 48px;
          }
          
          .mega-dropdown {
            padding: 14px;
            top: calc(100% + 6px);
            border-radius: 14px;
          }
          
          .courses-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          
          .course-card {
            padding: 12px 14px;
          }
          
          .mobile-nav-item {
            padding: 11px 14px;
            font-size: 14px;
          }
          
          .mobile-course-item {
            padding: 10px 12px;
            font-size: 12.5px;
          }
          
          .mobile-cta {
            font-size: 14px;
            padding: 12px;
          }
          
          .hamburger {
            padding: 6px;
            gap: 4px;
          }
          
          .ham-line {
            width: 20px;
            height: 2px;
          }
          
          .hamburger.open .ham-line:nth-child(1) { transform: translateY(6px) rotate(45deg); }
          .hamburger.open .ham-line:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        }

        /* Extra small devices */
        @media (max-width: 400px) {
          .navbar-inner {
            padding: 0 10px;
            height: 58px;
          }
          
          .logo-img-container {
            width: 90px;
            height: 40px;
          }
          
          .mobile-menu {
            top: 61px;
            padding: 12px 10px;
          }
          
          .mobile-nav-item {
            padding: 9px 12px;
            font-size: 13px;
          }
          
          .mobile-course-item {
            padding: 8px 10px;
            font-size: 12px;
          }
          
          .mobile-cta {
            font-size: 13px;
            padding: 10px;
          }
          
          .hamburger {
            padding: 5px;
            gap: 3px;
          }
          
          .ham-line {
            width: 16px;
            height: 2px;
          }
          
          .hamburger.open .ham-line:nth-child(1) { transform: translateY(5px) rotate(45deg); }
          .hamburger.open .ham-line:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }
        }

        /* Landscape phones */
        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-menu {
            padding: 10px 16px;
            top: 70px;
          }
          
          .mobile-nav-item {
            padding: 6px 12px;
            font-size: 13px;
          }
          
          .mobile-courses-panel {
            max-height: 120px;
            overflow-y: auto;
          }
          
          .mobile-course-item {
            padding: 5px 10px;
            font-size: 12px;
          }
          
          .mobile-search-wrapper .search-input {
            padding: 8px 16px 8px 36px;
            font-size: 13px;
          }
          
          .mobile-cta {
            font-size: 13px;
            padding: 10px;
          }
        }

        /* 4K screens */
        @media (min-width: 2000px) {
          .navbar-inner {
            max-width: 1600px;
            padding: 0 64px;
            height: 100px;
          }
          
          .nav-link {
            font-size: 18px;
            padding: 12px 28px;
          }
          
          .logo-img-container {
            width: 260px;
            height: 100px;
          }

          .search-input {
            width: 280px;
            font-size: 16px;
          }

          .search-input:focus {
            width: 380px;
          }
        }
      `}</style>

      <nav className={`navbar-root ${scrolled ? "scrolled" : ""}`}>
        <div className="accent-bar" />
        <div className="navbar-inner">

          {/* Logo - Left */}
          <button className="logo-wrap" onClick={handleLogoClick} aria-label="Go to Home">
            <div className="logo-img-container">
              <img src="/assets/logo/logo.png" alt="University Logo" />
            </div>
          </button>

          {/* Nav Links - Center */}
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={`nav-link ${activePage === "Home" ? "active" : ""}`}
                onClick={() => setCoursesOpen(false)}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`nav-link ${activePage === "About" ? "active" : ""}`}
                onClick={() => setCoursesOpen(false)}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                About MILES
              </Link>
            </li>

            <li style={{ position: "relative" }}>
              <button
                ref={courseBtnRef}
                className={`nav-link ${activePage === "Courses" ? "active" : ""}`}
                onClick={() => { setCoursesOpen((o) => !o); }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Courses
                <svg className={`chevron ${coursesOpen ? "open" : ""}`} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {coursesOpen && (
                <>
                  <div className="dropdown-backdrop" onClick={() => setCoursesOpen(false)} />
                  <div className="mega-dropdown" ref={dropdownRef}>
                    <div className="dropdown-header">
                      <div className="dropdown-title">Our Programmes</div>
                      <div className="dropdown-subtitle">8 Industry-aligned Certifications</div>
                    </div>

                    <div className="courses-grid">
                      {courses.map((c) => (
                        <Link
                          key={c.id}
                          to={c.path}
                          className="course-card"
                          onClick={() => setCoursesOpen(false)}
                        >
                          <span className="course-icon">{c.icon}</span>
                          <span className="course-tag">{c.tag}</span>
                          <span className="course-name">{c.title}</span>
                          <span className="course-arrow">→</span>
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-footer">
                      <span className="dropdown-footer-text">Certified · Industry-Ready · Career-Focused</span>
                      <Link to="/courses" className="view-all-btn" onClick={() => setCoursesOpen(false)}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        Browse All
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className={`nav-link ${activePage === "Contact" ? "active" : ""}`}
                onClick={() => setCoursesOpen(false)}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Contact
              </Link>
            </li>
          </ul>

          {/* Search - Right */}
          <div className="search-section" ref={searchRef}>
            {isSearchOpen ? (
              <div className="search-wrapper">
                <input
                  ref={searchInputRef}
                  type="text"
                  className="search-input"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    if (searchQuery.trim() !== "" && searchResults.length > 0) {
                      setShowSearchDropdown(true);
                    }
                  }}
                />
                <svg className="search-icon-input" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <button className="search-close-btn" onClick={toggleSearch}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>

                {showSearchDropdown && (
                  <div className="search-dropdown">
                    {searchResults.map((course) => (
                      <Link
                        key={course.id}
                        to={course.path}
                        className="search-result-item"
                        onClick={() => handleCourseClick(course.path)}
                      >
                        <span className="search-result-icon">{course.icon}</span>
                        <div className="search-result-info">
                          <div className="search-result-title">{course.title}</div>
                          <div className="search-result-tag">{course.tag}</div>
                        </div>
                        <div className="search-result-path">→</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button className="search-toggle-btn" onClick={toggleSearch}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span className="desktop-only">Find Courses</span>
              </button>
            )}
          </div>

          {/* Hamburger - Mobile */}
          <div className="hamburger-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              className={`hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <div className="ham-line" />
              <div className="ham-line" />
              <div className="ham-line" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchQuery.trim() !== "" && searchResults.length > 0) {
                  setShowSearchDropdown(true);
                }
              }}
            />
            <svg className="search-icon-input" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            {showSearchDropdown && (
              <div className="search-dropdown" style={{ position: 'relative', marginTop: '4px', maxHeight: '200px' }}>
                {searchResults.map((course) => (
                  <Link
                    key={course.id}
                    to={course.path}
                    className="search-result-item"
                    onClick={() => handleCourseClick(course.path)}
                  >
                    <span className="search-result-icon">{course.icon}</span>
                    <div className="search-result-info">
                      <div className="search-result-title">{course.title}</div>
                      <div className="search-result-tag">{course.tag}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/"
            className={`mobile-nav-item ${activePage === "Home" ? "active" : ""}`}
            onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
          >
            <div className="mobile-nav-item-left">
              <div className="mobile-icon-wrap">🏠</div>
              <span>Home</span>
            </div>
          </Link>

          <Link
            to="/about"
            className={`mobile-nav-item ${activePage === "About" ? "active" : ""}`}
            onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
          >
            <div className="mobile-nav-item-left">
              <div className="mobile-icon-wrap">ℹ️</div>
              <span>About MILES</span>
            </div>
          </Link>

          <div className="mobile-nav-item" onClick={() => setMobileCoursesOpen((o) => !o)}>
            <div className="mobile-nav-item-left">
              <div className="mobile-icon-wrap">📚</div>
              <span>Courses</span>
            </div>
            <svg className={`chevron ${mobileCoursesOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          {mobileCoursesOpen && (
            <div className="mobile-courses-panel">
              {courses.map((c) => (
                <Link
                  key={c.id}
                  to={c.path}
                  className="mobile-course-item"
                  onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                >
                  <span>{c.icon}</span>
                  <span>{c.title}</span>
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/contact"
            className={`mobile-nav-item ${activePage === "Contact" ? "active" : ""}`}
            onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
          >
            <div className="mobile-nav-item-left">
              <div className="mobile-icon-wrap">📞</div>
              <span>Contact</span>
            </div>
          </Link>

          <div className="mobile-divider" />

          <Link to="/apply" className="mobile-cta" onClick={() => setMobileOpen(false)}>
            Enrol Now — Start Your Journey →
          </Link>
        </div>
      )}
    </>
  );
}