export default function Navbar() {
  return (
    <header className="w-full h-16 border-b border-zinc-800 bg-[#09090B] flex items-center justify-between px-6">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center font-bold text-lg">
          M
        </div>

        <div>
          <h1 className="font-bold text-xl text-white">
            MANTRA OS
          </h1>

          <p className="text-xs text-zinc-400">
            One AI. Infinite Possibilities.
          </p>
        </div>

      </div>

      <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
        Login
      </button>

    </header>
  );
}