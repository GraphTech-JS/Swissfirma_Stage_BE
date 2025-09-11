export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://project-vercel-o76e-6ae2yim05-vasyls-projects-374bff85.vercel.app", // твій фронт
        "http://localhost:3000", // для локальної розробки
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
