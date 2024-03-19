import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cinema",
  description: "Welcome to the cinema that will blow your mind",
  keywords: ["cinema"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <CurrentMoviesSection />
      <ComingMoviesSection />
    </main>
  );
}

function Intro() {
  return (
    <>
      <h1 className="font-bold">Welcome to our cinema</h1>
      <p>Explore and see all movies you want</p>
    </>
  );
}

function CurrentMoviesSection() {
  return (
    <>
      <h1 className="font-bold">Current movies</h1>
      <ul>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}

function ComingMoviesSection() {
  return (
    <>
      <h1 className="font-bold">Coming movies</h1>
      <ul>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-coming.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-coming.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-coming.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-coming.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-coming.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/movies-detail">
            <p>Movie name</p>
            <Image
              src="/images/cinema-coming.jpg"
              alt="Picture of cinema things"
              width={100}
              height={100}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
