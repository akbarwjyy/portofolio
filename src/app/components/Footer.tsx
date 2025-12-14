export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-1 text-xl font-bold tracking-tight group"
          >
            <span className="text-white group-hover:text-[#2ECC71] transition-colors duration-300">
              &lt;
            </span>
            <span className="relative">
              <span className="text-[#2ECC71] font-extrabold">AW</span>
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#2ECC71] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            <span className="text-white group-hover:text-[#2ECC71] transition-colors duration-300">
              /&gt;
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-500">© {currentYear} Akbar Wijaya.</p>
        </div>
      </div>
    </footer>
  );
}
