const generatePortfolioURLs = (baseLocation, totalImages) => {
  const urls = [];
  for (let i = 0; i < totalImages; i++) {
    urls.push(`${baseLocation}/${i + 1}.webp`);
  }
  return urls;
};

export default {
  name: "Imam Darmawan",
  roles: {
    developer: {
      about:
        "Hi, I'm <b>Imam Darmawan</b>, a fullstack developer with a primary focus on frontend development. Nice to meet you.",
      projects: {
        type: "list",
        list: [
          /* {
          title: String, // Required
          url: String, // Required
          date: Number,
          category: String,
          description: String,
          source: String,
          libs: Array<String>
        }, */
          {
            title: "formstudio.site Clone",
            url: "https://id-formstudio-clone.pages.dev",
            date: 2024,
            category: "clone",
            description: `This website is a modified clone version to pure code of the <a href="https://the-brandidentity.com/store/product/ff-identity-framer-template-ff-grotesk-typeface-bundle" rel="noreferrer noopener" target="_blank">FF Identity Framer template</a>. Design and concept are credited to <a href="https://www.favoritframe.com" rel="noreferrer noopener" target="_blank">Favorit x Frame</a>. If you like the template, you can purchase it from Favorit x Frame by following the link. Note: I am not affiliated with Favorit x Frame.`,
            source: "https://github.com/imam-darmawan/formstudio.site-clone",
            libs: ["javascript", "react", "gsap", "tailwindcss"],
          },
          {
            title: "Yuuga",
            url: "https://themeskibou-yuuga.pages.dev",
            date: 2024,
            category: "theme",
            description:
              "Yuuga is a premium, elegant, and modern theme crafted for your Ghost publication. Whether you prefer an elegant or a modern look, Yuuga offers the features to create a visually stunning and professional website.",
            libs: [
              "javascript",
              "handlebars",
              "ghost",
              "alpinejs",
              "tailwindcss",
            ],
          },
          {
            title: "Monster Truck Offroad",
            url: "https://id-monster-truck-offroad.pages.dev",
            date: 2023,
            category: "game",
            libs: ["gdscript", "godot"],
          },
          {
            title: "TypingRate",
            url: "https://id-typingrate.pages.dev",
            date: 2023,
            category: "game",
            libs: ["javascript", "chartjs", "html2canvas"],
          },
        ],
      },
    },
    designer: {
      about: `In addition, I also specialize in UI/UX design. This page showcases my work in this field.`,
      projects: {
        type: "gallery",
        list: [
          /* {
          category: String, // Required
          images: Array<String>, // Required
        }, */
          {
            category: "blog",
            images: generatePortfolioURLs("/20", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/19", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/18", 1),
          },
          {
            category: "blog",
            images: generatePortfolioURLs("/17", 5),
          },
          {
            category: "blog",
            images: generatePortfolioURLs("/16", 1),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/15", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/14", 1),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/13", 1),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/12", 1),
          },
          {
            category: "ecommerce",
            images: generatePortfolioURLs("/11", 5),
          },
          {
            category: "ecommerce",
            images: generatePortfolioURLs("/10", 5),
          },
          {
            category: "portfolio",
            images: generatePortfolioURLs("/9", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/8", 2),
          },
          {
            category: "blog",
            images: generatePortfolioURLs("/7", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/6", 1),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/5", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/4", 1),
          },
          {
            category: "blog",
            images: generatePortfolioURLs("/3", 2),
          },
          {
            category: "component",
            images: generatePortfolioURLs("/2", 1),
          },
          {
            category: "ecommerce",
            images: generatePortfolioURLs("/1", 3),
          },
        ],
      },
    },
  },
  socialLinks: [
    // { label: "upwork", url: "https://upwork.com" },
    { label: "github", url: "https://github.com/imam-darmawan" },
  ],
  profileImage: "/tupai-100x100.png",
  timezone: "Asia/Jakarta",

  // 'time' is a special keyword to show author time
  messages: ["✅ Available", "time"],
};
