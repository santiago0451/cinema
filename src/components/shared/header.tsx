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
        <li>
          <CitySelector />
        </li>
      </ul>
    </nav>
  );
}

function CitySelector() {
  return (
    <>
      <label htmlFor="city-select">Choose a city:</label>
      <select name="citys" id="city-select" className="border">
        <option value="bogota">Bogotá</option>
        <option value="medellin">Medellín</option>
        <option value="cali">Cali</option>
        <option value="pereira">Pereira</option>
        <option value="manizales">Manizales</option>
      </select>
    </>
  );
}
