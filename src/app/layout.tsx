import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './header';
import Footer from './Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
