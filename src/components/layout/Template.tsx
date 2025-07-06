import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
