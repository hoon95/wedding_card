export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white bg-opacity-80 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">우진 ❤️ 지인</h1>
        <ul className="flex space-x-4">
          {["Home", "Couple", "Event", "Gallery", "Location", "RSVP"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
