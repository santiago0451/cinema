import Image from "next/image";

export default function MoviesDetailPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Movie Details</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/cinema-current.jpg"
              alt="Picture of cinema things"
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Movie Name</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              quam in felis tristique scelerisque. Proin et tincidunt magna.
              Nulla facilisi.
            </p>
            <p className="text-gray-600">
              Director: Pascual López <br />
              Release Date: January 1, 2024 <br />
              Genre: Action, Drama
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
