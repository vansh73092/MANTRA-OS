export default function Workspace() {
  return (
    <div className="h-screen bg-[#09090B] text-white p-8">

      <h1 className="text-4xl font-bold">
        Welcome to MANTRA OS 🚀
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          🤖
          <h2 className="text-xl font-bold mt-3">
            MANTRA AI
          </h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          📂
          <h2 className="text-xl font-bold mt-3">
            File System
          </h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          ⚙️
          <h2 className="text-xl font-bold mt-3">
            Settings
          </h2>
        </div>

      </div>

    </div>
  );
}