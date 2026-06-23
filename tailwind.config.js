module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#004FFF",
        "brand-dark": "#003ECC",
        ink: "#0A1626",
        muted: "#74808D",
        hairline: "rgba(10,22,38,0.09)",
        surface: "#EEF3FC",
        section: "#F5F7FA",
        "gray-light": "#9FB1C4",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(105deg,#004FFF 7.74%,#5B8CFF 39.86%,#2F7BDB 63.52%,#004FFF 92.26%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        large: ["44px", { lineHeight: "1.02", letterSpacing: "-1.98px" }],
        "large-lg": ["66px", { lineHeight: "1.02", letterSpacing: "-1.98px" }],
        "display-md": ["46px", { lineHeight: "49.68px", letterSpacing: "-0.92px" }],
        medium: ["30px", { lineHeight: "1.08", letterSpacing: "-0.6px" }],
        small: ["22px", { lineHeight: "1", letterSpacing: "-0.22px" }],
        partner: ["20px", { lineHeight: "1", letterSpacing: "-0.26px" }],
        "body-lg": ["19px", { lineHeight: "30px" }],
        "heading-lg": ["40px", { lineHeight: "1.1" }],
        "heading-md": ["32px", { lineHeight: "1.1" }],
        eyebrow: ["12px", { lineHeight: "22px", letterSpacing: "1.44px" }],
        caption: ["13px", { lineHeight: "22px" }],
        micro: ["11px", { lineHeight: "1", letterSpacing: "0.44px" }],
        button: ["15px", { lineHeight: "normal" }],
        "card-title": ["17px", { lineHeight: "1.35" }],
      },
      spacing: {
        gutter: "1rem",
        "gutter-md": "5rem",
        "gutter-lg": "10rem",
        section: "3rem",
      },
      height: {
        button: "50px",
        input: "42px",
      },
      width: {
        "workflow-card": "275px",
      },
      borderRadius: {
        custom: "13px",
      },
      boxShadow: {
        brand: "0 10px 26px 0 rgba(0,79,255,0.30)",
        elevated: "0 16px 38px 0 rgba(10,22,38,0.16)",
      },
      maxWidth: {
        text: "563px",
        image: "600px",
        content: "1200px",
      },
    },
  },
  plugins: [],
};
