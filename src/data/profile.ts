export const profile = {
    name: "Bryan Shelton",
    title: "Lead IT/AV Professional - Riot Games",
    contact: {
        phone: "832-428-1119",
        email: "bryan.shelton@gmail.com",
        location: "Los Angeles, CA 90064"
    },
    bio: [
        "Broadcast and AV systems engineer with 12+ years at Riot Games — Tricaster/NDI live production, all-NVX low-latency design, and Crestron control programming across a global fleet of ~900 spaces and 2,000+ endpoints. A modern AV engineer who builds the systems, not just operates them: I back live production and room operations with software I write myself (Python, Go, TypeScript, Crestron SIMPL# Pro), from agent-driven diagnostics to real-time telemetry dashboards.",
        "I'm originally from Houston, TX and moved to Los Angeles to pursue music—playing guitar, bass, and drums in touring bands across the country. While the rockstar life was a thrill, I found my long-term rhythm at Riot Games, where I've spent the last 12+ years blending my technical skills with my passion for creating amazing experiences."
    ],
    personal: {
        journey: "From Houston stages to LA control rooms, my journey has been about finding the perfect mix of creativity and technology.",
        family: "Happily married for 4 years (together for 10) and the proud father of a 3.5-year-old.",
        pets: "Ripley: Our three-legged rescue dog, named after the legendary Ellen Ripley from Alien(s).",
        music: "Former touring musician. I still play guitar, bass, and drums, and writing songs remains my primary creative outlet.",
        hobbies: [
            "Home Lab Enthusiast",
            "Watching Movies/TV (huge Alien fan)",
            "Gaming (League & CoD)",
            "Combat Sports"
        ]
    },
    experience: [
        {
            company: "Riot Games",
            role: "AV Engineer III – Tech Lead",
            period: "2026 – Present",
            responsibilities: [
                "AV Systems Engineering: Maintain the AV Systems monorepo spanning Crestron SIMPL# Pro control, BPMN workflows, React/Node dashboards, and Python utilities for room automation.",
                "Room Fleet Automation: Shipped a Conference Room Morning Auto-Sweep across 196 rooms — headless agents verify connectivity, USB, mic, speaker, and camera each morning and post to a live fleet dashboard with baseline-drift detection and Slack alerting.",
                "Broadcast-Grade Tooling: Built AVA, a Google ADK multi-agent orchestrator for AV ops and broadcast engineering, plus a Soundtrack Monitor for real-time AV player telemetry.",
                "Roadmap: Architecting global room-sweep automation and asset management across the ~900-space, 2,000+ endpoint fleet; forecasted to save 312 man-hours annually."
            ],
            current: true
        },
        {
            company: "Riot Games",
            role: "AV Engineer II",
            period: "2024 – 2025",
            responsibilities: [
                "Low-Latency Engineering: Designed an all-NVX system for the Global Game Capture lab for ultra-low-latency feed switching across diverse gaming platforms and screens.",
                "Event Tech Lead (A26 Seoul): Managed on-site infrastructure for 50+ streamers during a high-profile VCT marketing event in South Korea, securing 100% uptime for unreleased agent gameplay content.",
                "Infrastructure Expansion: Directed the opening of \"Y-Bldg\" and \"H-Bldg\" — 148+ Google Rooms and digital signage across 10 floors.",
                "Fleet Modernization: Spearheaded the SCCM → Microsoft Intune migration for 150+ devices for zero-touch deployment."
            ],
            current: false
        },
        {
            company: "Riot Games",
            role: "AV Engineer I",
            period: "2022 – 2023",
            responsibilities: [
                "Broadcast Integration: Engineered and launched the Phase 1 Broadcast Studio and a T180 screening/mixing room for high-fidelity media production.",
                "Global Conversion: Standardized Google Meet hardware across 600+ conference rooms.",
                "Office Expansion: Facilitated a 200-unit BRIX→NUC upgrade and supported Seattle1 and STL office openings."
            ],
            current: false
        },
        {
            company: "Riot Games",
            role: "Media Systems Support Analyst",
            period: "2015 – 20．1",
            responsibilities: [
                "System Reliability: Owned technology build and maintenance standards, driving a 65% drop in ticket volume at the Colorado Center.",
                "QA Automation: Developed a custom QA application for automated system health checks reporting to a live dashboard.",
                "Scale: Expert support and troubleshooting for 1,500+ users."
            ],
            current: false
        },
        {
            company: "Riot Games",
            role: "IT Specialist",
            period: "2013 – 2015",
            responsibilities: [
                "Primary Mac technical support for Riot Games HQ."
            ],
            current: false
        }
    ],
    skills: {
        "AV & Broadcast Engineering": [
            "Tricaster", "NDI", "Midas M32 / Yamaha soundboards", "NVX low-latency systems", "BIAMP", "Crestron (SIMPL# Pro)", "Streaming (Twitch/YouTube)"
        ],
        "Control & Integration": [
            "Crestron programming", "Google Meet/Rooms", "Logitech", "XiO", "Robin", "Symphony", "MagicInfo digital signage"
        ],
        "Engineering": [
            "Python", "Go", "TypeScript/JavaScript", "C#/.NET", "PowerShell", "React", "Node.js", "Streamlit", "Flask", "Docker"
        ],
        "AI & Agents": [
            "Google ADK multi-agent orchestration", "Copilot CLI", "RoomOps/Diagnostics agents", "MCP tooling"
        ],
        "Systems": [
            "Microsoft Intune", "ServiceNow", "Jira", "networking"
        ]
    },
    education: [
        {
            school: "University of Houston-Downtown",
            period: "2010 – 2012"
        },
        {
            school: "Lone Star University",
            period: "2004 – 2006"
        }
    ],
    certifications: [
        "JAMF: Certified Casper Technician (CCT)",
        "Apple: Certified Mac Technician"
    ],
    projects: [
        {
            title: "Music Production",
            description: "I write, record, and mix my own song demos, playing all the instruments (guitar, bass, drums)."
        }
    ],
    vibeProjects: [
        {
            title: "Retro TV Pi",
            subtitle: "Physical Appliance Mode",
            description: "A Raspberry Pi 3B+ 'Cable Box' experience booting into a 5-channel simulated broadcast with CRT scanline effects and physical GPIO button support.",
            tech: ["React", "FastAPI", "FFmpeg", "GPIO"]
        },
        {
            title: "Family Prepper Disk",
            subtitle: "Offline Knowledge Base",
            description: "A rugged Raspberry Pi deployment providing a local WiFi captive portal and Kiwix-powered offline Wikipedia for emergency scenarios.",
            tech: ["Next.js", "Nginx", "hostapd", "Docker"]
        },
        {
            title: "HOA Notion Agents",
            subtitle: "AI-Powered Governance",
            description: "A fleet of specialized AI agents (Forensic Auditor, Correspondence Hawk) designed to parse complex HOA documents and automate board communications.",
            tech: ["Gemini AI", "Notion API", "Python"]
        },
        {
            title: "Tournament Scoreboard",
            subtitle: "Event Infrastructure",
            description: "A high-performance, real-time scoreboard system built for rapid deployment at gaming events.",
            tech: ["Vite", "Tailwind CSS", "TypeScript"]
        }
    ],
    social: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/bryan-shelton-b3a9241b/" },
        { name: "GitHub", url: "https://github.com/shelton-cloud" },
        { name: "SoundCloud", url: "https://soundcloud.com/bryanshelton" },
        { name: "Email", url: "mailto:bryan.shelton@gmail.com" }
    ]
};
