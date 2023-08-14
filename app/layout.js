import { Ubuntu } from "next/font/google";
import './globals.css';


export const metadata = {
  title: "GPT3",
  description: "The place where you can know more about GPT3 - Step Into Future Today & Make It Happen",
  icon: "/",
}


const ubuntu = Ubuntu({
  weight: ['300','400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',

})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {
            children
          }
      </body>
    </html>
  )
}
