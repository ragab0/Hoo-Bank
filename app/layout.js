import "./index.css";
import './globals.css';


export const metadata = {
  title: "HooBank",
  description: "The Next Generation Payment Method - Step Into Future Today & Make It Happen",
  icon: "/",
}


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
