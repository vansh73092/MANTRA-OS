import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const apps = [
  { icon: "🤖", name: "MANTRA AI", desc: "AI Assistant" },
  { icon: "📁", name: "Files", desc: "Manage documents" },
  { icon: "🌐", name: "Browser", desc: "Web workspace" },
  { icon: "⚙️", name: "Settings", desc: "System controls" },
  { icon: "📝", name: "Notes", desc: "Quick notes" },
  { icon: "🎨", name: "Studio", desc: "Create anything" },
];

export default function Workspace() {

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div className="h-screen bg-[#09090B] text-white flex">

      <aside className="w-72 bg-[#111113] border-r border-zinc-800 p-6">

        <h1 className="text-2xl font-bold">
          M MANTRA OS
        </h1>

        <p className="text-zinc-500 mt-2">
          AI Operating System
        </p>

        <div className="mt-10 space-y-3">
          <div className="p-3 rounded-xl bg-zinc-800">
            🏠 Home
          </div>

          <div className="p-3 rounded-xl hover:bg-zinc-800">
            🚀 Apps
          </div>

          <div className="p-3 rounded-xl hover:bg-zinc-800">
            👤 Account
          </div>
        </div>

      </aside>


      <main className="flex-1 p-8">

        <div className="flex justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome to MANTRA OS 🚀
            </h1>

            <p className="text-zinc-400 mt-2">
              Your intelligent workspace.
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 px-5 py-3 rounded-xl"
          >
            Logout
          </button>

        </div>


        <div className="grid grid-cols-3 gap-6 mt-10">

          {apps.map((app)=>(
            <div
              key={app.name}
              className="bg-[#18181B] border border-zinc-800 rounded-3xl p-6 hover:border-blue-500 transition"
            >

              <div className="text-5xl">
                {app.icon}
              </div>

              <h2 className="text-xl font-bold mt-5">
                {app.name}
              </h2>

              <p className="text-zinc-400 mt-2">
                {app.desc}
              </p>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}