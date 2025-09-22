import { Link, Outlet } from "react-router";
import type { Route } from "./+types/children";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Children" },
    { name: "description", content: "階層子ページ" },
  ];
}

export default function Home() {
  return (
    <div>
      <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">
        Go to Home
      </Link>
      <br />
      Children
      <div className="m-4 p-4 border border-blue-400 rounded-xl">
        <Link
          to="./test2"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          孫要素
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
