import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        textBold: ["RobotoBold", "sans-serif"],
        textItalic: ["RobotoBoldItalic", "sans-serif"],
        lableBold: ["Montserrat-Bold", "sans-serif"],
        lableItalic: ["Montserrat-Italic", "sans-serif"],
        lableBoldItalic: ["Montserrat-BoldItalic", "sans-serif"],
        lableMediumItalic: ["Montserrat-MediumItalic", "sans-serif"],
        lableLight:["Montserrat-Light", "sans-serif"],
        descriptionMedium:["Montserrat-SemiBold", "sans-serif"],
        textVietnamBold:["BeVietnamPro-Bold", "sans-serif"],
        textVietnamVietnamMediumItalic:["AnyConv.com__BeVietnamPro-MediumItalic", "sans-serif"],
        textVietnamSemiBold:["BeVietnamPro-SemiBold", "sans-serif"],
        textVietnamIBMPlexBold:["AnyConv.com__IBMPlexSans-Bold", "sans-serif"],
        textVietnamIBMPlexMedium:["AnyConv.com__IBMPlexSans-Medium", "sans-serif"],
        textVietnamIBMPlexMediumItalic:["AnyConv.com__IBMPlexSans-MediumItalic", "sans-serif"],
        textVietnamIBMPlexSemiBold:["AnyConv.com__IBMPlexSans-SemiBold", "sans-serif"],
        textVietnamIBMPlexSemiBoldItalic:["AnyConv.com__IBMPlexSans-SemiBoldItalic", "sans-serif"],
        textVietnamMedium:["BeVietnamPro-Medium", "sans-serif"],
        descriptionPoppinsBolt: ["NotoSansJP-Medium.woff2", "sans-serif"],
        descriptionNotoSansBold: ["NotoSansJP-Bold.woff2", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
