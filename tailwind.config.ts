import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#034694",
        secondary: "#DBA111",
        lightGold: "#eee4cc",
        skyblue: "#00d8ff",
        darkblue: "#08113B",
        greencustom: "#00ff18",
        pinkcustom: "#ff00e1",
        redcustom: 	"#ED1C24",
        yellowcustom: "#d0ff00",
        lightgray: "#D1D3D4",
      },
    },
  },
  plugins: [],
}
export default config
