export const projects = {
  selected: [
    {
      title: "Interior Design Planner",
      stack: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "React",
        "Railway",
      ],
      img: {
        src: "view_app",
        alt: "Dashboard view of the Interior Design Planner",
      },
      summary:
        "Deployed REST API for interior designers to manage clients, projects tasks timelines and room specifications.",
      links: [
        {
          label: "github(app)",
          url: "https://github.com/Vicko657/interior-design-planner-app",
        },
        { label: "app", url: "https://viewinterior.netlify.app/" },
        {
          label: "github(api)",
          url: "https://github.com/Vicko657/interior-design-planner-api",
        },
        {
          label: "api",
          url: "https://interior-design-planner.up.railway.app/swagger-ui/index.html",
        },
      ],
      metrics: ["JWT/RBAC", "Docker"],
    },
    {
      title: "Trade Capture System",
      stack: [
        "Java 21",
        "Spring",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "JUnit 5",
      ],
      img: {
        src: "trading_api",
        alt: "JSON view of an endpoint for the trading api",
      },
      summary:
        "Financial trading system for booking, validating and montoring trades",
      links: [
        {
          label: "github",
          url: "https://github.com/Vicko657/trade-capture-system",
        },
      ],
      metrics: ["RSQL", "Trade Validation"],
    },
    {
      title: "Wedding Seating Chart",
      stack: ["React", "Supabase (PostgreSQL)", "Netlify"],
      img: { src: "guest_seating_app", alt: "Seating chart search bar" },
      summary:
        "Guest seating application built for a private wedding reception, used by guests to find their assigned tables.",
      links: [
        {
          label: "github",
          url: "https://github.com/Vicko657/wedding-seating-chart",
        },
        {
          label: "website",
          url: "https://malalu-seating-chart.netlify.app/",
        },
      ],
      metrics: ["300+ guests used the application", "Event completed"],
    },
    {
      title: "Bridal Shower RSVP Application",
      stack: ["React", "Supabase (PostgreSQL)", "Netlify"],
      img: { src: "guest_rsvp_app", alt: "RSVP form for bridal shower guests" },
      summary:
        "RSVP application built for a private bridal shower, allowing guests to confirm their attendance, dietary preferences and access event information",
      links: [
        {
          label: "github",
          url: "https://github.com/Vicko657/event-rsvp-app",
        },
        { label: "website", url: "https://bs-event-rsvp.netlify.app/" },
      ],
      metrics: ["60 guest responses collected", "Event completed"],
    },
    {
      title: "Creative Portfolio Site",
      stack: ["React", "JavaScript", "Netlify"],
      img: { src: "femi_portfolio", alt: "Home page view of the portfolio" },
      summary:
        "Portfolio site for a multi-disciplinary creative, bringing their production, video and management work together in one place.",
      links: [
        {
          label: "github",
          url: "https://github.com/Vicko657/femi-portfolio",
        },
        {
          label: "website",
          url: "https://femis-portfolio.netlify.app/",
        },
      ],
    },
  ],

  other: [
    {
      title: "Solace",
      summary:
        "A AI affirmations generator which can be used daily to help boost your confidence and self-esteem.",
      stack: ["React", "JavaScript", "Netlify"],
      links: [
        {
          label: "github",
          url: "https://github.com/Vicko657/daily-affirmations-generator",
        },
        {
          label: "live",
          url: "https://vix-daily-affirmations-ai-generator.netlify.app/",
        },
      ],
    },
    {
      title: "Dictionary",
      summary:
        "Users are able to look up word definitions, including pronunciation, synonyms, examples and related images.",
      stack: ["React", "JavaScript", "Netlify"],
      links: [
        {
          label: "github",
          url: "https://github.com/Vicko657/dictionary-react",
        },
        { label: "live", url: "https://vix-dictionary-react.netlify.app/" },
      ],
    },
    {
      title: "World Clock",
      summary:
        "A live view of the current date and time of selected locations in the world.",
      stack: ["React", "JavaScript", "Netlify"],
      links: [
        { label: "github", url: "https://github.com/Vicko657/world-clock" },
        { label: "live", url: "https://vix-world-clock.netlify.app/" },
      ],
    },
    {
      title: "Outlook",
      summary:
        "A weather app which provides real-time details of the current forecast in any country in the world.",
      stack: ["React", "JavaScript", "Netlify"],
      links: [
        { label: "github", url: "https://github.com/Vicko657/weather-react" },
        { label: "live", url: "https://vix-weather-react.netlify.app/" },
      ],
    },
  ],
};
