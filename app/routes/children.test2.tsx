import { Link } from "react-router";
import type { Route } from "./+types/children.test2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test 2" },
    { name: "description", content: "テスト用ページ１" },
  ];
}

export default function Home() {
  return (
    <div>
      <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">
        Go to Home
      </Link>
      <br />
      children test2
    </div>
  );
}
