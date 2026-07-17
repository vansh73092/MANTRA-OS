import {
  House,
  Bot,
  User,
  LogOut,
} from "lucide-react";

const items = [
  { icon: House, name: "Home" },
  { icon: Bot, name: "MANTRA AI" },
  { icon: User, name: "Profile" },
  { icon: LogOut, name: "Logout" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-full bg-[#111111] border-r border-zinc-800">

      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">
          MANTRA OS
        </h2>

        <p className="text-zinc-500 text-sm mt-1">
          AI Powered Workspace
        </p>
      </div>

      <div className="px-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-zinc-900 transition text-left text-zinc-300 mb-2"
            >
              <Icon size={22} />
              {item.name}
            </button>
          );

        })}

      </div>

    </aside>
  );
}