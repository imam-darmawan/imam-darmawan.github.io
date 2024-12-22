export default {
  name: "Imam Darmawan",
  roles: {
    developer: {
      about:
        "Hi, I'm <b>Imam Darmawan</b>, a fullstack developer based in Indonesia. My main focus is on the MERN stack, particularly on frontend development. Nice to meet you.",
      projects: [
        {
          title: "formstudio.site Clone",
          url: "https://id-portfolio-formstudio.pages.dev",
          date: 2024,
          category: "clone",
          tags: ["react", "gsap", "tailwindcss"],
        },
        {
          title: "Yuuga",
          url: "https://themeskibou-yuuga.pages.dev",
          date: 2024,
          category: "theme",
          tags: ["ghost", "alpinejs", "tailwindcss"],
        },
        {
          title: "Monster Truck",
          url: "https://id-portfolio-monstertruck.pages.dev",
          date: 2023,
          category: "game",
          tags: ["godot"],
        },
        {
          title: "TypingRate",
          url: "https://id-portfolio-typingrate.pages.dev",
          date: 2023,
          category: "game",
          tags: [],
        },
      ],
    },
    designer: {
      about:
        "Additionally, I like visual arts. This page showcases my works in this field.",
      projects: [],
    },
  },
  socialLinks: [
    { label: "upwork", url: "https://upwork.com" },
    { label: "github", url: "https://github.com/imam-darmawan" },
  ],
  profileImage: "/tupai-100x100.png",
  timezone: "Asia/Jakarta",

  // 'time' is a special keyword to show author time
  messages: ["✅ Available", "time"],
};
