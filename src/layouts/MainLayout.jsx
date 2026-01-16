import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}
