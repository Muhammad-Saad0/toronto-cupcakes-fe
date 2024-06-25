import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/Navbar"
import '../app/globals.css'
import DateSection from "@/components/Shared/DateSection"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export const metadata = {
  title: 'Toronto Cupcake',
  description: 'Toronto Cupcakes improved Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className='bg-white'>
        <Navbar />
        <DateSection />
        <ToastContainer
          position="top-right"
          autoClose={3000} // Close the toast after 3 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
