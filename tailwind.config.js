module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "text-gray": "#6B7280",
        "text-blue": "#4F46E5",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "custom-sm": "0px 1px 2px 0px #0000000F", // Maxsus soyani qo'shish
      },
      boxShadow: {
        "custom-md": "0px 1px 3px 0px #0000001A", // Maxsus soyani qo'shish
      },
    },
  },
  plugins: [],
};
