// Helper function to convert hex to RGB for rgba CSS values
function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    // Handle #RGB format
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // Handle #RRGGBB format
    else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
    return { r, g, b };
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleContainer = document.getElementById('themeToggleContainer');
    const themeToggle = document.getElementById('themeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleText = document.getElementById('toggleText');
    // Removed themeSelectionScreen and themeSelectButtons as they are no longer needed
    const mainHeader = document.getElementById('mainHeader');
    const mainContent = document.getElementById('mainContent');

    // Elements that need text content updated via data attributes
    const dataTextElements = document.querySelectorAll('[data-normal-text][data-cyber-text][data-minimalist-text]');

    // Input placeholders that need updating
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Specific elements requiring direct text/HTML/attribute updates
    const headerLogo = document.getElementById('header-logo');
    const heroTitle = document.getElementById('hero-title');
    const h1DynamicContent = document.getElementById('h1-dynamic-content');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroButton = document.getElementById('hero-button');
    const heroButtonTag = document.getElementById('hero-button-tag');
    const aboutHeading = document.getElementById('about-heading');
    const aboutText = document.getElementById('about-text');
    const educationHeading = document.getElementById('education-heading');
    const educationTitle = document.getElementById('education-title');
    const educationDetails1 = document.getElementById('education-details-1');
    const educationDetails2 = document.getElementById('education-details-2');
    const educationList = document.getElementById('education-list');
    const skillsHeading = document.getElementById('skills-heading');
    const techSkillsHeading = document.getElementById('tech-skills-heading');
    const techSkillsList = document.getElementById('tech-skills-list');
    const softSkillsHeading = document.getElementById('soft-skills-heading');
    const softSkillsList = document.getElementById('soft-skills-list');
    const certsHeading = document.getElementById('certs-heading');
    const projectsHeading = document.getElementById('projects-heading');
    const allProjectsButton = document.getElementById('all-projects-button');
    const experienceHeading = document.getElementById('experience-heading');
    const jobTitle = document.getElementById('job-title');
    const jobDuration = document.getElementById('job-duration');
    const jobDescriptionList = document.getElementById('job-description-list');
    const blogHeading = document.getElementById('blog-heading');
    const allArticlesButton = document.getElementById('all-articles-button');
    const contactHeading = document.getElementById('contact-heading');
    const contactIntro = document.getElementById('contact-intro');
    const contactPrefix = document.getElementById('contact-prefix');
    const sendMessageButton = document.getElementById('send-message-button');
    const footerText = document.getElementById('footer-text');

    // Elements that need image src updated
    const profileImg = document.getElementById('profile-img');
    const project1Img = document.getElementById('project1-img');
    const project2Img = document.getElementById('project2-img');
    const project3Img = document.getElementById('project3-img');
    const blog1Img = document.getElementById('blog1-img');
    const blog2Img = document.getElementById('blog2-img');
    const blog3Img = document.getElementById('blog3-img');


    // Content for Normal Theme (v1) based on index.html
    const normalContent = {
        headerLogo: "[DELSTUN.M]",
        heroTitleHtml: '&lt;<span class="text-purple-400">code</span>&gt; I\'m <span class="block">Delstun McCray</span> &lt;/<span class="text-purple-400">code</span>&gt;',
        heroSubtitleContent: '> A <span class="font-bold text-blue-400 glow-text-cyan">Cybersecurity Specialist</span> && <span class="font-bold text-cyan-400 glow-text-cyan">iOS Developer</span><br class="hidden sm:block">> Building <span class="text-lime-400">secure</span> && <span class="text-lime-400">innovative</span> digital experiences.',
        heroButtonText: "ACCESS PORTFOLIO",
        heroButtonTagText: "V1.0",
        heroButtonAnimation: 'pulse-glow 2s infinite ease-in-out',
        aboutHeading: "About Me",
        aboutText: "> Recent graduate of the Cybersecurity program at Davis Technical College. Results-driven Cybersecurity Specialist with a strong foundation in network security, risk assessment, and threat mitigation. Proven track record of safeguarding digital assets and ensuring compliance with industry standards. Adept at implementing security protocols, conducting vulnerability assessments, and responding to security incidents with precision and efficiency. Passionate about staying ahead of evolving cyber threats and delivering robust security solutions that align with business goals.",
        educationHeading: "Education //",
        educationTitle: "Davis Technical College",
        educationDetails1: "Cybersecurity | Kaysville, Utah | 08/2024 - 04/2025",
        educationDetails2: "GPA: 3.86",
        educationList: [
            "Member, National Technical Honor Society",
            "Student Mentor"
        ],
        skillsHeading: "Skills //",
        techSkillsHeading: "Technical Skills",
        techSkillsList: [
            "Threat Analysis",
            "Vulnerability Assessments",
            "Network Security",
            "Security Monitoring",
            "Hardware Installation",
            "System Troubleshooting",
            "Technical Writing & Documentation"
        ],
        softSkillsHeading: "Soft Skills",
        softSkillsList: [
            "Excellent Communication",
            "Strong Team Player",
            "Active Problem Solving",
            "Strong Critical Thinking",
            "Effective Multitasker"
        ],
        certsHeading: "Certificates & Achievements",
        projectsHeading: "My Projects",
        project1Title: "Threat Detection System",
        project1Desc: "> Developed a real-time threat detection system using Python and machine learning to identify anomalous network behavior.",
        project2Title: "Secure Messaging iOS App",
        project2Desc: "> An iOS application built with Swift, implementing end-to-end encryption for secure communication.",
        project3Title: "Vulnerability Assessment Portal",
        project3Desc: "> A web-based portal to automate and visualize vulnerability scan results for small businesses.",
        allProjectsButtonText: "VIEW ALL PROJECTS &rarr;",
        experienceHeading: "Experience //",
        jobTitle: "iOS Developer | Midwestern Interactive",
        jobDuration: "Joplin, Missouri | 04/2022 – 08/2023",
        jobDescriptionList: [
            "> Conducted thorough investigations into critical application vulnerabilities, including memory leaks and iOS compatibility issues, replicating incident response procedures by rapidly identifying root causes and implementing effective solutions to minimize app downtime and prevent potential breaches.",
            "> Effectively communicated complex technical concepts to diverse groups including end-users, management, and cross-functional teams. Ensuring clear understanding and fostering positive working relationships.",
            "> Performed in-depth analysis of data flow from diverse APIs, implementing robust error handling and input validation techniques to safeguard sensitive data, further enhanced security by separating API functionality from API keys to prevent single point of failure and potential key compromise.",
            "> Diagnosed and resolved application crashes by analyzing memory profiles and application logs. Utilizing debugging tools and techniques to identify root causes and patterns of failure.",
            "> Proactively identified and resolved performance bottlenecks, significantly improving application responsiveness and stability.",
            "> Addressed compatibility challenges with iOS updates by conducting comprehensive codebase reviews, identifying and remediating deprecated functions, and ensuring seamless compatibility."
        ],
        blogHeading: "Latest Insights",
        blog1Title: "The Future of Mobile Security",
        blog1Desc: "> Exploring emerging threats and proactive defense strategies for mobile applications in a connected world.",
        blog2Title: "Leveraging Swift for Secure Systems",
        blog2Desc: "> How Swift's design principles contribute to building more secure and robust applications beyond just iOS.",
        blog3Title: "Understanding Zero-Day Exploits",
        blog3Desc: "> A deep dive into the concept of zero-day vulnerabilities, their impact, and mitigation strategies for developers.",
        allArticlesButtonText: "VIEW ALL ARTICLES &rarr;",
        contactHeading: "INITIATE CONTACT //",
        contactIntro: "> I'm always keen on discussing cybersecurity challenges, iOS innovations, or exciting new projects. Let's connect!",
        contactPrefix: "OR REACH OUT DIRECTLY:",
        sendMessageButtonText: "SEND MESSAGE &rarr;",
        footerText: "&copy; 2025 Delstun McCray // All Rights Reserved // End Transmission",
        imagePaths: {
            profile: "headshot.png",
            project1: "https://placehold.co/600x400/1a202c/3b82f6?text=CYBER_PROJECT",
            project2: "https://placehold.co/600x400/1a202c/3b82f6?text=IOS_APP",
            project3: "https://placehold.co/600x400/1a202c/3b82f6?text=PENTEST_TOOL",
            blog1: "https://placehold.co/600x300/1a202c/3b82f6?text=MOBILE_SECURITY",
            blog2: "https://placehold.co/600x300/1a202c/3b82f6?text=SWIFT_SECURE",
            blog3: "https://placehold.co/600x300/1a202c/3b82f6?text=ZERO_DAY"
        },
        inputPlaceholders: {
            name: "YOUR NAME",
            email: "YOUR EMAIL",
            message: "YOUR MESSAGE..."
        },
        h1Animation: 'flicker-light 2s ease-out forwards',
    };

    // Content for Cyberpunk Theme (v2) based on indexv2.html
    const cyberpunkContent = {
        headerLogo: "//DELSTUN.M",
        heroTitleHtml: '&lt;<span class="text-neon-magenta">SYSTEM.READY</span>&gt; I\'m <span class="block">DELSTUN MCCRAY</span> &lt;/<span class="text-neon-magenta">SYSTEM.ONLINE</span>&gt;',
        heroSubtitleContent: '> A <span class="font-bold text-neon-cyan theme-text-main">CYBER_SECURITY_SPECIALIST</span> && <span class="font-bold text-neon-magenta theme-text-secondary-accent">IOS_DEVELOPER</span><br class="hidden sm:block">> BUILDING <span class="text-neon-lime">SECURE</span> && <span class="text-neon-lime">INNOVATIVE</span> DIGITAL_EXPERIENCES;',
        heroButtonText: "ACCESS_PORTFOLIO_SYSTEM",
        heroButtonTagText: "SYS_01",
        heroButtonAnimation: 'pulse-glow 2.5s infinite ease-in-out',
        aboutHeading: "ABOUT // DELSTUN",
        aboutText: "> RECENT GRADUATE OF THE CYBERSECURITY PROGRAM AT DAVIS TECHNICAL COLLEGE. RESULTS-DRIVEN CYBERSECURITY SPECIALIST WITH A STRONG FOUNDATION IN NETWORK SECURITY, RISK ASSESSMENT, AND THREAT MITIGATION. PROVEN TRACK RECORD OF SAFEGUARDING DIGITAL ASSETS AND ENSURING COMPLIANCE WITH INDUSTRY STANDARDS. ADEPT AT IMPLEMENTING SECURITY PROTOCOLS, CONDUCTING VULNERABILITY ASSESSMENTS, AND RESPONDING TO SECURITY INCIDENTS WITH PRECISION AND EFFICIENCY. PASSIONATE ABOUT STAYING AHEAD OF EVOLVING CYBER THREATS AND DELIVERING ROBUST SECURITY SOLUTIONS THAT ALIGN WITH BUSINESS GOALS.",
        educationHeading: "EDUCATION // LOGS",
        educationTitle: "DAVIS_TECHNICAL_COLLEGE",
        educationDetails1: "CYBERSECURITY | KAYSVILLE, UTAH | 08/2024 - 04/2025",
        educationDetails2: "GPA: 3.86",
        educationList: [
            "MEMBER, NATIONAL_TECHNICAL_HONOR_SOCIETY",
            "STUDENT_MENTOR"
        ],
        skillsHeading: "SKILLS // MATRIX",
        techSkillsHeading: "TECHNICAL_PROWESS",
        techSkillsList: [
            "THREAT_ANALYSIS",
            "VULNERABILITY_ASSESSMENTS",
            "NETWORK_SECURITY_PROTOCOLS",
            "SECURITY_MONITORING_SYSTEMS",
            "HARDWARE_INSTALLATION_INFRA",
            "SYSTEM_TROUBLESHOOTING_LOGIC",
            "TECHNICAL_WRITING_&_DOC_GEN"
        ],
        softSkillsHeading: "INTER_PERSONAL_COMM",
        softSkillsList: [
            "EXCELLENT_COMMUNICATION_SKILLS",
            "STRONG_TEAM_COLLABORATION",
            "ADAPTIVE_PROBLEM_SOLVING",
            "CRITICAL_THINKING_ALGORITHMS",
            "EFFECTIVE_MULTITASK_CAPACITY"
        ],
        certsHeading: "CERTIFICATION // REGISTRY",
        projectsHeading: "PROJECT_FILES // DATABASE",
        project1Title: "THREAT_DETECTION_SYSTEM",
        project1Desc: "> DEVELOPED A REAL-TIME THREAT DETECTION SYSTEM USING PYTHON AND MACHINE_LEARNING TO IDENTIFY ANOMALOUS NETWORK_BEHAVIOR.",
        project2Title: "SECURE_MESSAGING_IOS_APP",
        project2Desc: "> AN IOS_APPLICATION BUILT WITH SWIFT, IMPLEMENTING END-TO-END_ENCRYPTION FOR SECURE_COMMUNICATION.",
        project3Title: "VULNERABILITY_ASSESSMENT_PORTAL",
        project3Desc: "> A WEB-BASED_PORTAL TO AUTOMATE AND VISUALIZE VULNERABILITY_SCAN_RESULTS FOR SMALL_BUSINESS_ENTITIES.",
        allProjectsButtonText: "VIEW_ALL_INSIGHTS &rarr;",
        experienceHeading: "EXPERIENCE // RECORD",
        jobTitle: "IOS_DEVELOPER | MIDWESTERN_INTERACTIVE",
        jobDuration: "JOPLIN, MISSOURI | 04/2022 – 08/2023",
        jobDescriptionList: [
            "> CONDUCTED THOROUGH INVESTIGATIONS INTO CRITICAL_APPLICATION_VULNERABILITIES, INCLUDING MEMORY_LEAKS AND IOS_COMPATIBILITY_ISSUES, REPLICATING INCIDENT_RESPONSE_PROCEDURES BY RAPIDLY IDENTIFYING ROOT_CAUSES AND IMPLEMENTING EFFECTIVE_SOLUTIONS TO MINIMIZE APP_DOWNTIME AND PREVENT POTENTIAL_BREACHES.",
            "> EFFECTIVELY COMMUNICATED COMPLEX_TECHNICAL_CONCEPTS TO DIVERSE_GROUPS INCLUDING END-USERS, MANAGEMENT, AND CROSS-FUNCTIONAL_TEAMS. ENSURING CLEAR_UNDERSTANDING AND FOSTERING POSITIVE_WORKING_RELATIONSHIPS.",
            "> PERFORMED IN-DEPTH ANALYSIS OF DATA_FLOW FROM DIVERSE_APIS, IMPLEMENTING ROBUST_ERROR_HANDLING AND INPUT_VALIDATION_TECHNIQUES TO SAFEGUARD SENSITIVE_DATA, FURTHER ENHANCED_SECURITY BY SEPARATING API_FUNCTIONALITY FROM API_KEYS TO PREVENT SINGLE_POINT_OF_FAILURE AND POTENTIAL_KEY_COMPROMISE.",
            "> DIAGNOSED AND RESOLVED APPLICATION_CRASHES BY ANALYZING MEMORY_PROFILES AND APPLICATION_LOGS. UTILIZING DEBUGGING_TOOLS AND TECHNIQUES TO IDENTIFY ROOT_CAUSES AND PATTERNS_OF_FAILURE.",
            "> PROACTIVELY IDENTIFIED AND RESOLVED PERFORMANCE_BOTTLENECKS, SIGNIFICANTLY IMPROVING APPLICATION_RESPONSIVENESS AND STABILITY.",
            "> ADDRESSED COMPATIBILITY_CHALLENGES WITH IOS_UPDATES BY CONDUCTING COMPREHENSIVE_CODEBASE_REVIEWS, IDENTIFYING AND REMEDIATING DEPRECATED_FUNCTIONS, AND ENSURING SEAMLESS_COMPATIBILITY."
        ],
        blogHeading: "INSIGHT_STREAM // DATALOG",
        blog1Title: "THE_FUTURE_OF_MOBILE_SECURITY",
        blog1Desc: "> EXPLORING EMERGING_THREATS AND PROACTIVE_DEFENSE_STRATEGIES FOR MOBILE_APPLICATIONS IN A CONNECTED_WORLD.",
        blog2Title: "LEVERAGING_SWIFT_FOR_SECURE_SYSTEMS",
        blog2Desc: "> HOW SWIFT'S_DESIGN_PRINCIPLES CONTRIBUTE TO BUILDING MORE_SECURE AND ROBUST_APPLICATIONS BEYOND JUST IOS_PLATFORMS.",
        blog3Title: "UNDERSTANDING_ZERO-DAY_EXPLOITS",
        blog3Desc: "> A DEEP_DIVE INTO THE CONCEPT OF ZERO-DAY_VULNERABILITIES, THEIR_IMPACT, AND MITIGATION_STRATEGIES FOR DEVELOPER_CYBER_DEFENSE.",
        allArticlesButtonText: "VIEW_ALL_INSIGHTS &rarr;",
        contactHeading: "INITIATE_COMMS_LINK //",
        contactIntro: "> I'M ALWAYS KEEN ON DISCUSSING CYBERSECURITY_CHALLENGES, IOS_INNOVATIONS, OR EXCITING_NEW_PROJECTS. LET'S CONNECT!",
        contactPrefix: "// OR ESTABLISH_DIRECT_LINK:",
        sendMessageButtonText: "SEND_MESSAGE_PROTOCOL() &rarr;",
        footerText: "&copy; 2025 DELSTUN_MCCRAY // ALL_RIGHTS_RESERVED // END_TRANSMISSION",
        imagePaths: {
            profile: "headshot.png",
            project1: "https://placehold.co/600x400/1a1a2e/00ffff?text=CYBER_PROJECT",
            project2: "https://placehold.co/600x400/1a1a2e/ff00ff?text=IOS_APP",
            project3: "https://placehold.co/600x400/1a1a2e/00ff00?text=PENTEST_TOOL",
            blog1: "https://placehold.co/600x300/1a1a2e/00ffff?text=MOBILE_SECURITY_POST",
            blog2: "https://placehold.co/600x300/1a1a2e/ff00ff?text=SWIFT_SECURE_CODE",
            blog3: "https://placehold.co/600x300/1a1a2e/00ff00?text=ZERO_DAY_EXPLOIT"
        },
        inputPlaceholders: {
            name: "INITIATE_NAME.TXT",
            email: "COMMS_CHANNEL@DOMAIN.COM",
            message: "TRANSMIT_MESSAGE_HERE_..."
        },
        h1Animation: 'flicker-light 2s ease-out forwards, glitch-text 5s infinite ease-in-out 2s',
    };

    // Content for Minimalist Theme (new)
    const minimalistContent = {
        headerLogo: "DELSTUN.M",
        heroTitleHtml: 'I\'M <span class="block">DELSTUN MCCRAY</span>',
        heroSubtitleContent: 'A CYBERSECURITY SPECIALIST & IOS DEVELOPER<br class="hidden sm:block"> BUILDING SECURE & INNOVATIVE DIGITAL EXPERIENCES.',
        heroButtonText: "VIEW PORTFOLIO",
        heroButtonTagText: "", // No tag for minimalist
        heroButtonAnimation: 'none',
        aboutHeading: "About Me",
        aboutText: "Recent graduate of the Cybersecurity program at Davis Technical College. Results-driven Cybersecurity Specialist with a strong foundation in network security, risk assessment, and threat mitigation. Proven track record of safeguarding digital assets and ensuring compliance with industry standards. Adept at implementing security protocols, conducting vulnerability assessments, and responding to security incidents with precision and efficiency. Passionate about staying ahead of evolving cyber threats and delivering robust security solutions that align with business goals.",
        educationHeading: "Education",
        educationTitle: "Davis Technical College",
        educationDetails1: "Cybersecurity | 2024-2025",
        educationDetails2: "GPA: 3.86",
        educationList: [
            "National Technical Honor Society Member",
            "Student Mentor"
        ],
        skillsHeading: "Skills",
        techSkillsHeading: "Technical Skills",
        techSkillsList: [
            "Threat Analysis",
            "Vulnerability Assessments",
            "Network Security",
            "Security Monitoring",
            "Hardware Installation",
            "System Troubleshooting",
            "Technical Writing & Documentation"
        ],
        softSkillsHeading: "Soft Skills",
        softSkillsList: [
            "Communication",
            "Teamwork",
            "Problem Solving",
            "Critical Thinking",
            "Multitasking"
        ],
        certsHeading: "Certificates",
        projectsHeading: "Projects",
        project1Title: "Threat Detection System",
        project1Desc: "Developed a real-time threat detection system using Python and machine learning to identify anomalous network behavior.",
        project2Title: "Secure Messaging App",
        project2Desc: "An iOS application built with Swift, implementing end-to-end encryption for secure communication.",
        project3Title: "Vulnerability Assessment Portal",
        project3Desc: "A web-based portal to automate and visualize vulnerability scan results for small businesses.",
        allProjectsButtonText: "VIEW ALL PROJECTS",
        experienceHeading: "Experience",
        jobTitle: "iOS Developer | Midwestern Interactive",
        jobDuration: "Joplin, MO | 2022-2023",
        jobDescriptionList: [
            "Conducted investigations into application vulnerabilities (memory leaks, iOS compatibility), identifying root causes and implementing solutions.",
            "Communicated complex technical concepts effectively to diverse groups, fostering positive working relationships.",
            "Analyzed API data flow, implemented error handling and validation, and enhanced security by separating API functionality from keys.",
            "Diagnosed and resolved application crashes by analyzing memory profiles and logs.",
            "Proactively identified and resolved performance bottlenecks, improving app responsiveness and stability.",
            "Addressed iOS update compatibility challenges through codebase reviews and remediation."
        ],
        blogHeading: "Insights",
        blog1Title: "Future of Mobile Security",
        blog1Desc: "Exploring emerging threats and proactive defense strategies for mobile applications.",
        blog2Title: "Swift for Secure Systems",
        blog2Desc: "How Swift's design principles contribute to building more secure and robust applications.",
        blog3Title: "Understanding Zero-Day Exploits",
        blog3Desc: "A deep dive into zero-day vulnerabilities, their impact, and mitigation strategies.",
        allArticlesButtonText: "VIEW ALL ARTICLES",
        contactHeading: "Contact",
        contactIntro: "I'm always keen on discussing cybersecurity challenges, iOS innovations, or exciting new projects. Let's connect!",
        contactPrefix: "Or reach out directly:",
        sendMessageButtonText: "SEND MESSAGE",
        footerText: "&copy; 2025 Delstun McCray. All Rights Reserved. End Transmission.",
        imagePaths: {
            profile: "headshot.png",
            project1: "https://placehold.co/600x400/111111/cccccc?text=PROJECT_1",
            project2: "https://placehold.co/600x400/111111/cccccc?text=PROJECT_2",
            project3: "https://placehold.co/600x400/111111/cccccc?text=PROJECT_3",
            blog1: "https://placehold.co/600x300/111111/cccccc?text=BLOG_POST_1",
            blog2: "https://placehold.co/600x300/111111/cccccc?text=BLOG_POST_2",
            blog3: "https://placehold.co/600x300/111111/cccccc?text=BLOG_POST_3"
        },
        inputPlaceholders: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message"
        },
        h1Animation: 'none', // No animation for minimalist
    };

    // Define the sequence of themes for the toggle button  ['normal', 'cyberpunk', 'minimalist'];
    const themes = ['minimalist', 'normal', 'cyberpunk'];
    let currentThemeIndex = 0; // Will be updated based on localStorage or initial selection

    

    // Data for the theme selection buttons on the initial screen
    // This data is no longer directly used for theme selection buttons,
    // but the text for the toggle button can derive from it.
    const themeDisplayInfo = {
        normal: {
            toggleIcon: '🏠',
            toggleText: 'More Color'
        },
        cyberpunk: {
            toggleIcon: '⚙️',
            toggleText: 'MORE_COLOR'
        },
        minimalist: {
            toggleIcon: '🔳',
            toggleText: 'Back To Basics'
        }
    };


    function updateDynamicContent(theme) {
        const content = theme === 'normal' ? normalContent : theme === 'cyberpunk' ? cyberpunkContent : minimalistContent;

        headerLogo.textContent = content.headerLogo;
        h1DynamicContent.innerHTML = content.heroTitleHtml;
        heroSubtitle.innerHTML = content.heroSubtitleContent;
        heroButton.firstChild.nodeValue = content.heroButtonText + " ";
        heroButtonTag.textContent = content.heroButtonTagText;
        heroButton.style.animation = content.heroButtonAnimation;
        heroTitle.style.animation = content.h1Animation;

        // Update common elements with data-attributes
        dataTextElements.forEach(el => {
            if (theme === 'normal') {
                el.textContent = el.dataset.normalText;
            } else if (theme === 'cyberpunk') {
                el.textContent = el.dataset.cyberText;
            } else { // minimalist
                el.textContent = el.dataset.minimalistText || el.dataset.normalText; // Fallback to normal if minimalist text not defined
            }
        });

        // Update specific elements' text content that might not have data attributes
        aboutHeading.textContent = content.aboutHeading;
        aboutText.textContent = content.aboutText;
        educationHeading.textContent = content.educationHeading;
        educationTitle.textContent = content.educationTitle;
        educationDetails1.textContent = content.educationDetails1;
        educationDetails2.textContent = content.educationDetails2;

        // Update list items for education
        while (educationList.firstChild) { educationList.removeChild(educationList.lastChild); }
        content.educationList.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            educationList.appendChild(li);
        });

        skillsHeading.textContent = content.skillsHeading;
        techSkillsHeading.textContent = content.techSkillsHeading;
        while (techSkillsList.firstChild) { techSkillsList.removeChild(techSkillsList.lastChild); }
        content.techSkillsList.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            techSkillsList.appendChild(li);
        });

        softSkillsHeading.textContent = content.softSkillsHeading;
        while (softSkillsList.firstChild) { softSkillsList.removeChild(softSkillsList.lastChild); }
        content.softSkillsList.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            softSkillsList.appendChild(li);
        });

        certsHeading.textContent = content.certsHeading;
        projectsHeading.textContent = content.projectsHeading;

        document.querySelector('#projects .project-card:nth-child(1) h3').textContent = content.project1Title;
        document.querySelector('#projects .project-card:nth-child(1) p').textContent = content.project1Desc;
        document.querySelector('#projects .project-card:nth-child(2) h3').textContent = content.project2Title;
        document.querySelector('#projects .project-card:nth-child(2) p').textContent = content.project2Desc;
        document.querySelector('#projects .project-card:nth-child(3) h3').textContent = content.project3Title;
        document.querySelector('#projects .project-card:nth-child(3) p').textContent = content.project3Desc;

        allProjectsButton.firstChild.nodeValue = content.allProjectsButtonText + " ";
        allProjectsButton.style.animation = content.heroButtonAnimation;


        experienceHeading.textContent = content.experienceHeading;
        jobTitle.textContent = content.jobTitle;
        jobDuration.textContent = content.jobDuration;
        while (jobDescriptionList.firstChild) { jobDescriptionList.removeChild(jobDescriptionList.lastChild); }
        content.jobDescriptionList.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            jobDescriptionList.appendChild(li);
        });

        blogHeading.textContent = content.blogHeading;
        document.querySelector('#blog .blog-card:nth-child(1) h3').textContent = content.blog1Title;
        document.querySelector('#blog .blog-card:nth-child(1) p').textContent = content.blog1Desc;
        document.querySelector('#blog .blog-card:nth-child(2) h3').textContent = content.blog2Title;
        document.querySelector('#blog .blog-card:nth-child(2) p').textContent = content.blog2Desc;
        document.querySelector('#blog .blog-card:nth-child(3) h3').textContent = content.blog3Title;
        document.querySelector('#blog .blog-card:nth-child(3) p').textContent = content.blog3Desc;

        allArticlesButton.firstChild.nodeValue = content.allArticlesButtonText + " ";
        allArticlesButton.style.animation = content.heroButtonAnimation;

        contactHeading.textContent = content.contactHeading;
        contactIntro.textContent = content.contactIntro;
        contactPrefix.textContent = content.contactPrefix;
        sendMessageButton.firstChild.nodeValue = content.sendMessageButtonText + " ";
        sendMessageButton.style.animation = content.heroButtonAnimation;

        footerText.innerHTML = content.footerText;

        // Update images based on theme
        profileImg.src = content.imagePaths.profile;
        project1Img.src = content.imagePaths.project1;
        project2Img.src = content.imagePaths.project2;
        project3Img.src = content.imagePaths.project3;
        blog1Img.src = content.imagePaths.blog1;
        blog2Img.src = content.imagePaths.blog2;
        blog3Img.src = content.imagePaths.blog3;

        // Update input placeholders
        nameInput.placeholder = content.inputPlaceholders.name;
        emailInput.placeholder = content.inputPlaceholders.email;
        messageInput.placeholder = content.inputPlaceholders.message;
    }

    function applyTheme(themeName) {
        console.log('Applying theme:', themeName);
        // Remove all theme classes first
        body.classList.remove('normal-theme', 'cyberpunk-theme', 'minimalist-theme');
        // Apply the new theme class
        body.classList.add(themeName + '-theme');

        // Update toggle button text and icon based on the *next* theme in the cycle
        const nextThemeIndex = (themes.indexOf(themeName) + 1) % themes.length;
        const nextThemeInfo = themeDisplayInfo[themes[nextThemeIndex]];

        toggleIcon.textContent = nextThemeInfo.toggleIcon;
        toggleText.textContent = nextThemeInfo.toggleText;

        // Save selected theme to local storage
        localStorage.setItem('selectedTheme', themeName);

        // Update content elements based on the new theme
        updateDynamicContent(themeName);
        updateRgbVars(); // Update RGB variables after theme change

        // Special handling for animations in minimalist theme
        const timelineLine = document.querySelector('.horizontal-timeline-line');
        if (timelineLine) {
            if (themeName === 'minimalist') {
                timelineLine.style.animation = 'none'; // Disable line animation
                timelineLine.style.width = '100%'; // Ensure line is visible but not animated
            } else {
                // Re-enable animation for other themes
                timelineLine.style.animation = `grow-line 3.5s ease-out forwards`;
                // Add an event listener to re-apply pulse-glow after growth
                timelineLine.addEventListener('animationend', function handler(event) {
                    if (event.animationName === 'grow-line') {
                        if (body.classList.contains('cyberpunk-theme')) {
                            timelineLine.style.animation = 'pulse-glow 3s infinite alternate';
                        } else {
                            timelineLine.style.animation = 'none'; // No pulse-glow for normal theme
                        }
                        timelineLine.removeEventListener('animationend', handler);
                    }
                });
            }
        }
    }


    // Function to update RGB variables from hex
    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        // Handle #RGB format
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // Handle #RRGGBB format
        else if (hex.length === 7) {
            r = parseInt(hex.substring(1, 3), 16);
            g = parseInt(hex.substring(3, 5), 16);
            b = parseInt(hex.substring(5, 7), 16);
        }
        return { r, g, b };
    }

    // Function to update RGB variables from hex
    function updateRgbVars() {
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);

        // Get computed values of custom properties
        const mainAccent = computedStyle.getPropertyValue('--main-accent');
        const secondaryAccent = computedStyle.getPropertyValue('--secondary-accent');
        const highlight = computedStyle.getPropertyValue('--highlight');

        // Convert hex values to RGB and set new custom properties
        const mainRgb = hexToRgb(mainAccent.trim());
        const secondaryRgb = hexToRgb(secondaryAccent.trim());
        const highlightRgb = hexToRgb(highlight.trim());

        root.style.setProperty('--main-accent-rgb-r', mainRgb.r);
        root.style.setProperty('--main-accent-rgb-g', mainRgb.g);
        root.style.setProperty('--main-accent-rgb-b', mainRgb.b);
        root.style.setProperty('--secondary-accent-rgb-r', secondaryRgb.r);
        root.style.setProperty('--secondary-accent-rgb-g', secondaryRgb.g);
        root.style.setProperty('--secondary-accent-rgb-b', secondaryRgb.b);
        root.style.setProperty('--highlight-rgb-r', highlightRgb.r);
        root.style.setProperty('--highlight-rgb-g', highlightRgb.g);
        root.style.setProperty('--highlight-rgb-b', highlightRgb.b);
    }

    // --- Initial Load Logic ---
    const storedTheme = localStorage.getItem('selectedTheme');

    // Remove the theme selection screen completely as it's no longer needed
    // themeSelectionScreen.style.display = 'none'; // This element is removed from HTML

    // Always ensure main content and toggle are visible
    mainHeader.style.display = 'block';
    mainContent.style.display = 'block';
    themeToggleContainer.style.display = 'flex'; // It's a flex container

    if (storedTheme && themes.includes(storedTheme)) {
        console.log('Stored theme found:', storedTheme, '. Applying it directly.');
        currentThemeIndex = themes.indexOf(storedTheme);
        applyTheme(storedTheme);
    } else {
        console.log('No stored theme. Applying default "normal" theme.');
        applyTheme('normal'); // Apply 'normal' as default if no theme is stored
    }

    // --- Event Listeners ---
    // Removed themeSelectButtons event listener as they are no longer needed

    // Listen for theme toggle click (main mechanism for changing themes)
    themeToggle.addEventListener('click', () => {
        console.log('Theme toggle button clicked.');
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        applyTheme(themes[currentThemeIndex]);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    console.log('Scrolling to:', this.getAttribute('href'));
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Hero subtitle animation (ensuring it runs after content is visible)
    // This animation's initial state is handled by CSS and it animates on page load
    // so no explicit JS trigger is needed here after visibility change.
    // However, if it relied on visibility being removed, it would need a re-trigger.

    // Scroll-triggered animations for sections with 'data-animate-section'
    const animateSections = document.querySelectorAll('[data-animate-section]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // This observer will automatically trigger when observed elements become visible in the viewport.
    // No explicit re-observing logic is needed here after theme change.
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.dataset.animateSection;
                console.log('Section intersected:', sectionId);

                if (sectionId === 'certificates') {
                    const timelineLine = entry.target.querySelector('.horizontal-timeline-line');
                    const certificateItems = entry.target.querySelectorAll('.timeline-h-item');
                    const totalCertificates = certificateItems.length;

                    const lineGrowthDuration = 3.5;

                    if (timelineLine) {
                        // Only apply animation if not in minimalist theme
                        if (!body.classList.contains('minimalist-theme')) {
                            console.log('Certificates timeline line animation starting.');
                            timelineLine.style.animation = `grow-line ${lineGrowthDuration}s ease-out forwards`;
                            timelineLine.addEventListener('animationend', function handler(event) {
                                if (event.animationName === 'grow-line') {
                                    timelineLine.style.width = '100%';
                                    if (body.classList.contains('cyberpunk-theme')) {
                                        timelineLine.style.animation = 'pulse-glow 3s infinite alternate';
                                    } else {
                                        timelineLine.style.animation = 'none'; // No pulse-glow for normal theme
                                    }
                                    timelineLine.removeEventListener('animationend', handler);
                                    console.log('Certificates timeline line animation ended.');
                                }
                            });
                        } else {
                             timelineLine.style.animation = 'none'; // Ensure no animation
                             timelineLine.style.width = '100%'; // Ensure it's visible if no animation
                             console.log('Minimalist theme: Certificates timeline line animation disabled.');
                        }
                    }

                    const baseDelayForCertificates = 0.5;
                    const effectiveGrowthDurationForCertificates = lineGrowthDuration - baseDelayForCertificates;
                    const staggerDurationPerItem = effectiveGrowthDurationForCertificates / (totalCertificates > 1 ? (totalCertificates - 1) : 1);

                    certificateItems.forEach((item, index) => {
                        const totalDelay = baseDelayForCertificates + (index * staggerDurationPerItem);
                        setTimeout(() => {
                            item.classList.add('is-visible');
                            console.log(`Certificate item ${index + 1} animated.`);
                        }, totalDelay * 1000);
                    });

                } else {
                    // --- MODIFIED LOGIC FOR OTHER SECTIONS (like experience, skills, education, projects, blog) ---
                    // 1. Check if the section itself has the 'animate-on-scroll' class and apply 'is-visible'
                    if (entry.target.classList.contains('animate-on-scroll')) {
                        entry.target.classList.add('is-visible');
                        console.log(`Section ${sectionId} animated directly.`);
                    }

                    // 2. Also check for any 'animate-on-scroll' items *within* the section and animate them
                    const itemsToAnimate = entry.target.querySelectorAll('.animate-on-scroll');
                    itemsToAnimate.forEach((item, index) => {
                        // Ensure we don't double-animate the section itself if it was already handled above
                        if (item !== entry.target) {
                            item.style.animationDelay = `${index * 0.15}s`;
                            item.classList.add('is-visible');
                            console.log(`Animate-on-scroll item ${index + 1} in section ${sectionId} animated.`);
                        }
                    });
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Start observing sections (this runs once on DOMContentLoaded).
    // The actual animations will trigger when the sections become visible due to the
    // Intersection Observer, which happens after the theme is selected and mainContent is shown.
    animateSections.forEach(section => {
        sectionObserver.observe(section);
    });
});
