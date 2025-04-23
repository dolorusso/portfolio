import { Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'DMR - Transformamos tus ideas',
  description: 'Marcas impactantes y experiencias digitales únicas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-black m-0 p-0`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}