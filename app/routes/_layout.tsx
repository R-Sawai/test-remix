import { Outlet } from "react-router";
import type { Route } from "./+types/_layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <header>共通ヘッダー</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
