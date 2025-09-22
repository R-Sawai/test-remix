import { Link } from "react-router";
import type { Route } from "./+types/test1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test 1" },
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
      Test 1
    </div>
  );
}
