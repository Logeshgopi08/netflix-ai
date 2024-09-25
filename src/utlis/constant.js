export const BG_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_medium.jpg";

export const APP_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjZhYWExM2U1Njk3OGI4YmM0MzQ3YzUxMDdiZDliZSIsIm5iZiI6MTcyNzAxMzE0Ny40NjEzMTEsInN1YiI6IjY2ZTE1MjU3MDAwMDAwMDAwMDk1NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y7IiWX6Hw-KeC1tYce0uWZWAQ-tXxBOHQB7perUCw6U",
  },
};

export const OPEN_AI_KEY =process.env.OPEN_AI_KEY;

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const Lang_Constants = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};
