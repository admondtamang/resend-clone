/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1366px",
        "3xl": "1600px",
        "4xl": "2000px",
        "5xl": "2800px",
      },
      spacing: {
        4.5: "1.125rem", //18px
        7.5: "1.875rem", //30px
        12.5: "3.125rem", //50px
        13: "3.25rem", //52px
        15: "3.75rem", //60px
        17: "4.25rem", //68px
        18: "4.5rem", //72px
        19: "4.75rem", //76px
        21: "5.25rem", //84px
        22: "5.5rem", //88px
        23: "5.75rem", //92px
        25: "6.25rem", //100px
        29: "7.25rem", //116px
        31: "7.75rem", //124px
        37: "9.25rem", //148px
        49: "12.25rem", //196px
        56: "14rem", // 224px
        62: "15.5rem", //248px
        64: "16rem", //256px
        65: "16.25rem", //260px
        66: "16.5rem", //264px
        67: "16.75rem", //268px
        "lg-gutter": "1.875rem", //30px
        "md-gutter": "1.25rem", //20px
        "sm-gutter": "1rem", //16px
      },
      animation: {
        bounce: "bounce 1.8s ease-out infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },

      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(2rem)" },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
      },
    },
    colors: {
      //* DEFAULT
      transparent: "#00000000",
      //* PRIMARY COLORS
      accent: {
        50: "#E7EBFF",
        100: "#C0CAFF",
        600: "#145AFF",
        700: "#0B3ACC",
        800: "#002FC0",
        900: "#0018A8",
      },
      //* BACKGROUND COLORS
      bg: {
        dark: "#000033",
        light: "#F2F2F7",
        disabled: "#DBDBDB",
        black: {
          100: "#000000",
          80: "#000000CC",
          60: "#00000099",
          40: "#00000066",
          20: "#00000033",
          8: "#00000014",
          4: "#0000000A",
        },
        white: {
          100: "#FFFFFF",
          80: "#FFFFFFCC",
          60: "#FFFFFF99",
          40: "#FFFFFF66",
          20: "#FFFFFF33",
          8: "#FFFFFF14",
          4: "#FFFFFF0A",
        },
      },
      //* TEXT COLORS
      text: {
        heading: "#000000",
        subtitle: "#000000",
        body: "#000000C2",
        placeholder: "#0000008A",
        disable: "#00000066",
      },
      //* STATE COLORS
      state: {
        success: {
          light: "#E3F5E9",
          base: "#31BF60",
          dark: "#103D1F",
        },
        error: {
          light: "#FFD4D4",
          base: "#F81E1E",
          dark: "#570A0A",
        },
        info: {
          light: "#E5F8FC",
          base: "#25C7E5",
          dark: "#0A353D",
        },
        warning: {
          light: "#FDF6E4",
          base: "#F6C74E",
          dark: "#3D3213",
        },
      },
      //* LINE COLORS
      line: {
        stroke: {
          DEFAULT: "#D3D7D9",
          focus: "#272727",
        },
        divider: "#DFE3E599",
      },
      //* ICON COLORS,
      icon: {
        DEFAULT: "#3E3D4B",
        disabled: "#A3A3A9",
      },
      //* SCRIM COLORS
      scrim: {
        overlay: "#2727271A",
      },
      //* SUPPORT COLORS
      support: {
        green: "#14CC70",
        yellow: "#FFF019",
        red: "#F03056",
        cyan: "#00F2F2",
        orange: "#F25928",
      },
    },
    fontSize: {
      // *=========== HEADINGS START ===========
      h1: [
        "7rem",
        {
          letterSpacing: "-0.05em",
          lineHeight: "1.2",
          fontWeight: "600",
        },
      ], //112px
      h2: [
        "4.063rem",
        { letterSpacing: "-0.04em", lineHeight: "1.2", fontWeight: "600" },
      ], //65px
      h3: [
        "3.25rem",
        { letterSpacing: "-0.04em", lineHeight: "1.2", fontWeight: "600" },
      ], //52px
      h4: [
        "2.563rem",
        { letterSpacing: "-0.03em", lineHeight: "1.2", fontWeight: "600" },
      ], //41px
      h5: [
        "2.063rem",
        { letterSpacing: "-0.03em", lineHeight: "1.4", fontWeight: "600" },
      ], //33px
      h6: [
        "1.313rem",
        { letterSpacing: "-0.01em", lineHeight: "1.4", fontWeight: "600" },
      ], //21px
      // *=========== HEADINGS END ===========

      //*========= SUB TITLE START  ===========
      s1: [
        "1.563rem",
        { letterSpacing: "-0.03em", lineHeight: "1.4", fontWeight: "400" },
      ], //25px
      s2: [
        "1.313rem",
        { letterSpacing: "-0.02em", lineHeight: "1.5", fontWeight: "400" },
      ], //21px
      s3: [
        "1.188rem",
        { letterSpacing: "-0.02em", lineHeight: "1.4", fontWeight: "400" },
      ], //19px
      //*======== SUB TITLE END ===========

      //*=============== BODY START ==============
      b1: ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }], //20px
      "b1-b": [
        "1.25rem",
        { letterSpacing: "-0.01em", lineHeight: "1.5", fontWeight: "600" },
      ], //20px semi-bold
      b2: ["1.063rem", { lineHeight: "1.6", fontWeight: "500" }], //17px
      "b2-b": ["1.063rem", { lineHeight: "1.6", fontWeight: "600" }], //17px semi-bold
      //*============== BODY END  ==================

      //*============== CAPTION START ===========
      c1: ["1.125rem", { lineHeight: "1.5", fontWeight: "400" }], //15px
      "c1-b": ["1.125rem", { lineHeight: "1.5", fontWeight: "600" }], //15px semi-bold
      c2: ["0.938rem", { lineHeight: "1.5", fontWeight: "500" }], //13px
      "c2-b": ["0.938rem", { lineHeight: "1.5", fontWeight: "600" }], //13px semi-bold
      //*=============== CAPTION END ===========

      //*============== BLOG or CASE STUDY CUSTOM STYLES START ===========
      "h1-blog": [
        "2.063rem",
        { letterSpacing: "-0.03em", lineHeight: "1.4", fontWeight: "700" },
      ], //33px
      "h2-blog": ["1.5rem", { lineHeight: "1.4", fontWeight: "700" }], //24px bold
      "h3-blog": ["1.313rem", { lineHeight: "1.4", fontWeight: "700" }], //21px bold
      "h4-blog": ["1.125rem", { lineHeight: "1.5", fontWeight: "700" }], //18px bold
      "body-blog": ["1.063rem", { lineHeight: "1.6", fontWeight: "500" }], //17px bold,
      "subtitle-blog": ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }], //20px
      "caption-blog": ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }], //12px
      "hero-caption": [
        "2.7rem",
        { letterSpacing: "-0.03em", lineHeight: "1.2", fontWeight: "600" },
      ], //41px
      //*===============  BLOG or CASE STUDY CUSTOM STYLES  END ===========
    },
    aspectRatio: {
      "1/1": "1/1",
      "3/2": "3/2",
      "4/3": "4/3",
      "16/9": "16/9",
      "16/10": "16/10",
    },
    fontFamily: {
      primary: ["var(--manrope-font)", "sans-serif"],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
};
