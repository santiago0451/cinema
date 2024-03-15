import Link from "next/link";

export function TopBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Cinema</Link>
        </li>
        <li>
          <Link href="/current-movies">Current movies</Link>
        </li>
        <li>
          <Link href="/coming-movies">Coming movies</Link>
        </li>
      </ul>
    </nav>
  );
}
