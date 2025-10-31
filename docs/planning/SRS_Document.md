# Software Requirement Specification (SRS)
## E-Summit 2025 - Event Website

---

## Document Information
- **Project Name**: E-Summit 2025 Website
- **Organization**: E-Cell, Saffrony Institute of Technology (SIT), Mehsana
- **Version**: 1.0
- **Date**: October 2025
- **Document Type**: Software Requirement Specification

---

## 1. Introduction

### 1.1 Purpose
This Software Requirement Specification (SRS) document provides a comprehensive description of the E-Summit 2025 event website. The purpose is to define the functional and non-functional requirements for a frontend-only web application that will serve as the primary information and registration portal for the E-Summit 2025 event organized by E-Cell, Saffrony Institute of Technology.

### 1.2 Scope
The E-Summit 2025 website is a **static, frontend-only web application** designed to:
- Provide event information and details to potential participants
- Display the event schedule, competitions, and speaker sessions
- Facilitate participant registration through external Google Form integration
- Showcase E-Cell SIT's organizational capabilities and event management
- Serve as a digital platform for pre-event engagement and information dissemination

**Out of Scope:**
- Backend server implementation
- Database management systems
- User authentication/authorization
- Payment gateway integration
- Real-time data synchronization
- Content Management System (CMS)

### 1.3 Overview
E-Summit 2025 is a two-day entrepreneurship summit scheduled for **6th and 7th November 2025**, featuring:
- **Day 1**: Illuminate Workshop conducted by E-Cell IIT Bombay
- **Day 2**: Guest speaker sessions and exciting competitions (IPL Auction and Squid Game)

The website will be built using modern frontend technologies (HTML5, Tailwind CSS, JavaScript) and deployed on platforms like Netlify or Vercel for fast, reliable access.

### 1.4 Intended Audience
This SRS document is intended for:
- **Web Development Team**: Frontend developers, UI/UX designers
- **E-Cell SIT Coordinators**: Event organizers and administrators
- **Volunteers**: Team members assisting with event management
- **Stakeholders**: Faculty advisors and institutional management
- **External Partners**: E-Cell IIT Bombay representatives
- **Quality Assurance Team**: Testing and validation personnel

---

## 2. System Overview

### 2.1 System Architecture
The E-Summit 2025 website follows a **static website architecture** with the following characteristics:

- **Type**: Single Page Application (SPA) or Multi-page static website
- **Hosting**: Cloud-based static hosting (Netlify/Vercel)
- **Data Storage**: None (all content is hardcoded or configuration-based)
- **External Integration**: Google Forms for registration
- **Deployment**: CI/CD pipeline through Git integration

### 2.2 Technology Stack
- **HTML5**: Semantic markup and structure
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **JavaScript (Vanilla ES6+)**: Interactivity, animations, and dynamic behaviors
- **Google Maps API**: Location embedding (optional)
- **Font Awesome/Lucide Icons**: Visual iconography
- **Git**: Version control
- **Netlify/Vercel**: Hosting and deployment

### 2.3 System Constraints
- No backend server or API development
- No database integration
- Registration data is managed through Google Forms
- Static content updates require code changes and redeployment
- No user authentication system

---

## 3. Functional Requirements

### 3.1 Homepage / Hero Section (FR-01)
**Priority**: High

**Description**: The homepage serves as the entry point and first impression of the event.

**Requirements**:
- **FR-01.1**: Display prominent hero banner with event branding
  - Event name: "E-Summit 2025"
  - Tagline/subtitle showcasing the event theme
  - Eye-catching background image or gradient
  
- **FR-01.2**: Show key event information
  - Dates: 6th & 7th November 2025
  - Venue: Saffrony Institute of Technology, Mehsana
  - Brief description (2-3 lines about the summit)
  
- **FR-01.3**: Primary Call-to-Action (CTA)
  - "Register Now" button prominently displayed
  - Button redirects to Google Form registration link
  
- **FR-01.4**: Navigation Bar
  - Fixed/sticky navigation for easy access
  - Links to: About, Schedule, Events, Speakers, Registration, Contact
  - Mobile-responsive hamburger menu
  - Smooth scroll functionality to sections
  
- **FR-01.5**: Visual Elements
  - E-Cell SIT logo
  - Event countdown timer (optional)
  - Animated entrance effects

### 3.2 About Section (FR-02)
**Priority**: High

**Description**: Provides comprehensive information about E-Summit and E-Cell SIT.

**Requirements**:
- **FR-02.1**: About E-Summit
  - Purpose and significance of the event
  - Theme and vision for 2025 edition
  - Expected outcomes for participants
  
- **FR-02.2**: About E-Cell SIT
  - Organization background
  - Mission and vision statements
  - Previous achievements and events
  
- **FR-02.3**: Event Objectives
  - Foster entrepreneurial culture
  - Promote innovation and startup ecosystem
  - Facilitate networking opportunities
  - Provide learning from industry experts
  
- **FR-02.4**: Visual Design
  - Card-based or section layout
  - Fade-in animations on scroll
  - Relevant images or illustrations

### 3.3 Schedule Section (FR-03)
**Priority**: High

**Description**: Displays detailed day-wise schedule of the summit.

**Requirements**:
- **FR-03.1**: Day 1 Schedule (6th November 2025)
  - Illuminate Workshop by E-Cell IIT Bombay
  - Time slots for registration, sessions, breaks
  - Workshop topic and facilitator details
  
- **FR-03.2**: Day 2 Schedule (7th November 2025)
  - Speaker session timings and topics
  - Competition schedules (IPL Auction, Squid Game)
  - Award ceremony and closing time
  
- **FR-03.3**: Visual Representation
  - Timeline or card-based design
  - Clear time indicators
  - Color-coded activities
  - Icons for different event types
  
- **FR-03.4**: Interactive Elements
  - Hover effects on schedule items
  - Expandable details (optional)

### 3.4 Competitions Section (FR-04)
**Priority**: High

**Description**: Showcases the two main competitions with detailed information.

**Requirements**:
- **FR-04.1**: IPL Auction Competition
  - Competition name and theme
  - Brief description and format
  - Rules and eligibility
  - Team structure and requirements
  - Registration link/button
  - Prize information (if applicable)
  
- **FR-04.2**: Squid Game Competition
  - Competition name and theme
  - Brief description and format
  - Rules and game structure
  - Participant requirements
  - Registration link/button
  - Prize information (if applicable)
  
- **FR-04.3**: Visual Design
  - Grid or card layout
  - Competition-specific imagery
  - Hover effects and animations
  - Clear CTA buttons
  - Icons or badges for each competition

### 3.5 Speaker Section (FR-05)
**Priority**: Medium

**Description**: Highlights guest speakers and industry experts.

**Requirements**:
- **FR-05.1**: Speaker Profiles
  - Professional headshot/photo
  - Name and designation
  - Company/Startup affiliation
  - Topic of presentation
  - Brief bio (2-3 lines)
  - Social media links (optional)
  
- **FR-05.2**: Layout
  - Responsive grid layout (1-3 columns based on screen size)
  - Consistent card design
  - Professional presentation
  
- **FR-05.3**: Animations
  - Scroll-triggered entrance animations
  - Hover effects on cards
  - Smooth transitions

### 3.6 Registration Section (FR-06)
**Priority**: High

**Description**: Facilitates participant registration through external form.

**Requirements**:
- **FR-06.1**: Registration Information
  - Clear heading and description
  - Registration deadline
  - Eligibility criteria
  - Event guidelines
  - Participation fee (if applicable)
  
- **FR-06.2**: Registration Button
  - Prominent "Register Now" CTA
  - Opens Google Form in new tab
  - Google Form URL should be easily configurable
  
- **FR-06.3**: Additional Elements
  - Event countdown timer (days/hours remaining)
  - Registration benefits list
  - Contact information for queries
  
- **FR-06.4**: Visual Design
  - Attention-grabbing section
  - Contrasting colors for CTA
  - Responsive layout

### 3.7 Contact Section (FR-07)
**Priority**: Medium

**Description**: Provides contact information and location details.

**Requirements**:
- **FR-07.1**: Contact Information
  - E-Cell SIT email address
  - Phone number/contact person
  - Social media links (Instagram, LinkedIn, Facebook)
  - Office address
  
- **FR-07.2**: Location Map
  - Embedded Google Maps showing venue
  - Address: Saffrony Institute of Technology, Mehsana
  - Directions link
  
- **FR-07.3**: Social Media Integration
  - Clickable social media icons
  - Links open in new tabs
  - Consistent branding
  
- **FR-07.4**: Query Section
  - Contact form (simple HTML form - no backend submission)
  - Alternative: "Email us" button with mailto link
  
- **FR-07.5**: Footer Credits
  - "Developed by E-Cell SIT Web Team"
  - Copyright information
  - Quick links to sections

### 3.8 Cross-Cutting Functional Requirements

**FR-08.1**: Navigation
- Smooth scroll behavior between sections
- Active section highlighting in navbar
- Mobile-friendly hamburger menu
- Logo click returns to homepage

**FR-08.2**: Responsiveness
- Mobile-first design approach
- Breakpoints: Mobile (<640px), Tablet (640px-1024px), Desktop (>1024px)
- Touch-friendly buttons and links
- Readable text sizes across devices

**FR-08.3**: Accessibility
- Semantic HTML5 elements
- Alt text for all images
- Proper heading hierarchy (H1-H6)
- Keyboard navigation support
- ARIA labels where necessary

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements (NFR-01)
- **NFR-01.1**: Page load time should not exceed 3 seconds on 4G connection
- **NFR-01.2**: Images should be optimized (WebP format preferred, <500KB)
- **NFR-01.3**: Minimal JavaScript bundle size (<100KB)
- **NFR-01.4**: Lazy loading for images below the fold
- **NFR-01.5**: Lighthouse performance score >90

### 4.2 Usability Requirements (NFR-02)
- **NFR-02.1**: Intuitive navigation requiring no user training
- **NFR-02.2**: Clear visual hierarchy and information architecture
- **NFR-02.3**: Consistent UI patterns throughout the website
- **NFR-02.4**: Maximum 3 clicks to reach any information
- **NFR-02.5**: Clear feedback for interactive elements (hover states, active states)

### 4.3 User Interface Requirements (NFR-03)
- **NFR-03.1**: Modern, clean, and professional design aesthetic
- **NFR-03.2**: Consistent color scheme aligned with E-Cell branding
- **NFR-03.3**: Readable typography (minimum 16px for body text)
- **NFR-03.4**: Sufficient color contrast (WCAG AA compliance)
- **NFR-03.5**: Mobile-responsive design across all screen sizes

### 4.4 Reliability Requirements (NFR-04)
- **NFR-04.1**: 99.9% uptime through hosting provider SLA
- **NFR-04.2**: Graceful degradation for older browsers
- **NFR-04.3**: Error-free rendering across major browsers (Chrome, Firefox, Safari, Edge)
- **NFR-04.4**: No broken links or missing resources

### 4.5 Compatibility Requirements (NFR-05)
- **NFR-05.1**: Browser Support:
  - Chrome (last 2 versions)
  - Firefox (last 2 versions)
  - Safari (last 2 versions)
  - Edge (last 2 versions)
  - Mobile browsers (iOS Safari, Chrome Mobile)
- **NFR-05.2**: Device Support:
  - Desktop (Windows, macOS, Linux)
  - Tablets (iOS, Android)
  - Smartphones (iOS, Android)

### 4.6 Security Requirements (NFR-06)
- **NFR-06.1**: HTTPS encryption for all traffic
- **NFR-06.2**: No sensitive data storage
- **NFR-06.3**: External links open with `rel="noopener noreferrer"`
- **NFR-06.4**: Content Security Policy headers
- **NFR-06.5**: No inline scripts or styles (CSP compliance)

### 4.7 Maintainability Requirements (NFR-07)
- **NFR-07.1**: Clean, well-commented code
- **NFR-07.2**: Modular CSS using Tailwind utility classes
- **NFR-07.3**: Organized file structure
- **NFR-07.4**: Version control using Git
- **NFR-07.5**: Documentation for deployment process

### 4.8 SEO Requirements (NFR-08)
- **NFR-08.1**: Semantic HTML structure
- **NFR-08.2**: Meta tags (title, description, keywords)
- **NFR-08.3**: Open Graph tags for social media sharing
- **NFR-08.4**: Descriptive page title and headings
- **NFR-08.5**: Sitemap.xml (optional for static site)

---

## 5. User Roles and Responsibilities

### 5.1 Admin Role
**Responsibilities**:
- Overall website management and oversight
- Content updates and announcements
- Monitoring registration numbers
- Coordinating with hosting provider
- Managing deployment and updates

**Access Level**: Full access to codebase and deployment

### 5.2 Volunteer Role
**Responsibilities**:
- Responding to participant queries
- Sharing website link and promotional materials
- Testing website functionality
- Reporting bugs or issues
- Assisting with event day coordination

**Access Level**: No technical access; website usage only

### 5.3 Coordinator Role
**Responsibilities**:
- Managing specific event sections (competitions, workshops)
- Providing content for respective events
- Coordinating with speakers and workshop facilitators
- Overseeing competition registrations
- Event-specific communications

**Access Level**: Content contribution; limited technical access

---

## 6. System Constraints and Assumptions

### 6.1 Constraints
1. **Technical Constraints**:
   - No backend development capability
   - No database integration
   - Limited to static hosting platforms
   - Cannot process payments directly
   - Cannot store user data

2. **Resource Constraints**:
   - Limited development timeline (2 weeks)
   - Small development team
   - Budget constraints for premium services
   - Dependency on free hosting services

3. **Design Constraints**:
   - Must follow E-Cell branding guidelines
   - Must be mobile-responsive
   - Must work without JavaScript (graceful degradation)

### 6.2 Assumptions
1. **Registration System**:
   - Google Forms will handle all registration data
   - Form link will remain active throughout event period
   - E-Cell team will manage form responses manually

2. **Content Management**:
   - All content will be finalized before development
   - Content updates will require code changes
   - Images and media will be provided by E-Cell team

3. **User Behavior**:
   - Participants have basic internet literacy
   - Users will access from mobile devices primarily
   - Users understand English (primary language)

4. **External Dependencies**:
   - Google Forms service availability
   - Netlify/Vercel uptime
   - Third-party CDNs for libraries
   - Google Maps API availability

5. **Event Details**:
   - Event dates are confirmed: 6th & 7th November 2025
   - Venue is finalized at SIT Mehsana
   - Speaker and competition details will be provided
   - No last-minute major changes to event structure

---

## 7. Future Scope and Enhancements

### 7.1 Phase 2 Enhancements (Post-Event)
1. **Backend Integration**:
   - Custom registration system with database
   - Admin panel for content management
   - Real-time registration tracking
   - Automated email confirmations

2. **Advanced Features**:
   - User authentication for registered participants
   - Live event updates and notifications
   - Photo gallery from the event
   - Participant certificates generation
   - Feedback and survey system

3. **Analytics and Reporting**:
   - Google Analytics integration
   - Registration dashboard
   - Traffic and engagement metrics
   - Heat maps and user behavior tracking

4. **Content Management**:
   - Headless CMS integration (Strapi, Contentful)
   - Dynamic content updates without redeployment
   - Blog section for articles and updates
   - News and announcements section

5. **Interactive Features**:
   - Live chat support
   - Q&A section
   - Participant forum or discussion board
   - Virtual event integration (if hybrid model)

### 7.2 Long-term Vision
- Reusable template for future E-Cell events
- Multi-event platform with event listing
- Alumni network integration
- Startup showcase platform
- Corporate sponsorship management system

---

## 8. Acceptance Criteria

The E-Summit 2025 website will be considered complete and ready for launch when:

1. ✅ All sections (Home, About, Schedule, Events, Speakers, Registration, Contact) are implemented
2. ✅ Website is fully responsive across mobile, tablet, and desktop
3. ✅ Registration button successfully redirects to Google Form
4. ✅ All navigation links work correctly
5. ✅ Page load time is under 3 seconds
6. ✅ No console errors or broken links
7. ✅ Cross-browser testing completed successfully
8. ✅ Lighthouse score >90 for performance and accessibility
9. ✅ Content is proofread and accurate
10. ✅ Website is deployed and accessible via public URL

---

## 9. Glossary

- **SRS**: Software Requirement Specification
- **E-Cell**: Entrepreneurship Cell
- **SIT**: Saffrony Institute of Technology
- **CTA**: Call to Action
- **SPA**: Single Page Application
- **UI/UX**: User Interface / User Experience
- **SEO**: Search Engine Optimization
- **CDN**: Content Delivery Network
- **API**: Application Programming Interface
- **HTTPS**: Hypertext Transfer Protocol Secure
- **WCAG**: Web Content Accessibility Guidelines
- **CSP**: Content Security Policy

---

## 10. Appendices

### Appendix A: Event Details
- **Event Name**: E-Summit 2025
- **Organizer**: E-Cell, Saffrony Institute of Technology, Mehsana
- **Dates**: 6th & 7th November 2025
- **Venue**: SIT Campus, Mehsana, Gujarat
- **Expected Participants**: 200-500 students

### Appendix B: Contact Information
- **E-Cell SIT Email**: [Email to be provided]
- **E-Cell SIT Instagram**: [Handle to be provided]
- **E-Cell SIT LinkedIn**: [Profile to be provided]
- **Website Development Team Lead**: [Name to be provided]

### Appendix C: Reference Links
- E-Cell IIT Bombay: https://www.ecell.in/
- Tailwind CSS Documentation: https://tailwindcss.com/
- Netlify Documentation: https://docs.netlify.com/
- Vercel Documentation: https://vercel.com/docs

---

**Document Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Lead | [Name] | | |
| Technical Lead | [Name] | | |
| Faculty Advisor | [Name] | | |
| E-Cell President | [Name] | | |

---

*End of SRS Document*
