import { ImageCarousel } from "@/components/ImageCarousel";
import { galleryImages } from "@/data/gallery";

const PHONE = "954-701-3543";
const EMAIL = "renetdieujuste@gmail.com";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="font-display text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
            Competence Plastering & Stucco, Inc.
          </span>
          <nav className="flex items-center gap-4 text-sm font-medium text-stone-600">
            <a href="#work" className="hover:text-amber-600">
              Our Work
            </a>
            <a href="#services" className="hover:text-amber-600">
              Services
            </a>
            <a href="#contact" className="hover:text-amber-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b border-stone-200 bg-gradient-to-b from-stone-50 to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
            Professional Plastering & Stucco
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600 sm:text-xl">
            Quality exterior and interior finishes for residential and
            commercial projects. Trusted craftsmanship and lasting results.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-stone-300 bg-white px-5 py-3 font-semibold text-stone-700 transition hover:border-amber-500 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Our Work - Carousel */}
      <section
        id="work"
        className="border-b border-stone-200 bg-white px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Our Work
          </h2>
          <div className="mt-8">
            <ImageCarousel images={galleryImages} autoPlayInterval={5500} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-b border-stone-200 bg-stone-50/50 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-2 text-stone-600">
            We deliver expert plastering and stucco for every need.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Exterior Stucco",
                desc: "Durable, weather-resistant stucco for residential and commercial buildings.",
              },
              {
                title: "Interior Plastering",
                desc: "Smooth and decorative interior plaster walls and ceilings.",
              },
              {
                title: "Restoration & Repair",
                desc: "Repair and restoration of existing stucco and plaster surfaces.",
              },
              {
                title: "Custom Textures",
                desc: "Custom textures and finishes to match your design vision.",
              },
              {
                title: "Waterproofing",
                desc: "Coatings and systems to protect and extend the life of your finish.",
              },
              {
                title: "Commercial & Residential",
                desc: "From single-family homes to large commercial facades.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-stone-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-stone-900 px-4 py-16 text-white sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-stone-300">
            Request a free estimate or ask about your project.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-3 rounded-lg border border-stone-600 bg-stone-800/50 px-6 py-4 transition hover:border-amber-500 hover:bg-stone-800"
            >
              <span className="text-amber-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <div>
                <span className="text-sm text-stone-400">Phone</span>
                <p className="font-semibold">{PHONE}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-lg border border-stone-600 bg-stone-800/50 px-6 py-4 transition hover:border-amber-500 hover:bg-stone-800"
            >
              <span className="text-amber-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div>
                <span className="text-sm text-stone-400">Email</span>
                <p className="font-semibold break-all">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-8 text-center text-sm text-stone-500">
        <p>
          © {new Date().getFullYear()} Competence Plastering & Stucco, Inc. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
