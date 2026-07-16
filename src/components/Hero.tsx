export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 px-6 text-center">

      <div className="mb-6">
        <span className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm">
          ✨ Powered by MANTRA AI
        </span>
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight max-w-5xl">
        Your Intelligent
        <br />
        AI Operating System
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
        Chat, create, code, learn, translate and build your ideas with one
        powerful AI workspace.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
          Get Started
        </button>

        <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition">
          Learn More
        </button>

      </div>

    </section>
  );
}