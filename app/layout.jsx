import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';
import '../src/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col min-h-screen bg-black">
        {/* <body className="flex flex-col min-h-screen bg-black overflow-hidden"> */}
        {/* <body className="flex flex-col min-h-screen"> */}
        {/* <body> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
