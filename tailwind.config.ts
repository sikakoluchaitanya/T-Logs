import type { Config } from "tailwindcss";
import theme, { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			cursor: 'cursor .8s ease-in-out infinite',
		  },
		  keyframes: {
			cursor: {
			  '0%, 100%': { opacity: '1' },
			  '50%': { opacity: '0' },
			},
		  },
		fontFamily: {
			sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			mono: ["var(--font-geist-mono)", ...fontFamily.mono],
		},
  		colors: {
			'business': 'rgb(32, 32, 32)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("daisyui")],	
  daisyui: {
	themes: [
		"dark",
		"cupcake",
		"synthwave",
		"retro",
		"luxury",
		"dracula",
		"autumn",
		"business",
		"lemonade",
		"winter",
	]
  },
} satisfies Config;
