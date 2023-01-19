import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';
import '../src/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-black overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
