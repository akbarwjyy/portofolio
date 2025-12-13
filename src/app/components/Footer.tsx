export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight">
            &lt;<span className="text-[#2ECC71]">AW</span>/&gt;
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-500">© {currentYear} Akbar Wijaya.</p>
        </div>
      </div>
    </footer>
  );
}
