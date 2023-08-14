import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
// import { Ubuntu } from "next/font/google";
import './globals.css';


export const metadata = {
  title: "Ragab Eid - Personal Portfolio",
  description: "Ragab Eid - Personal Portfolio. Show Ragab's Resume, Skills, Projects and mailing him",
  icon: "/",
}


// const ubuntu = Ubuntu({
//   weight: ['300','400', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-ubuntu',

// })


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
