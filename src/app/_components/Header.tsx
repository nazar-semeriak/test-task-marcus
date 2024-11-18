import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-20 px-6 sm:px-12 md:px-20 shadow-md">
      <div className="h-full max-w-[1280px] w-full mx-auto flex justify-between items-center">
        <h1 className="font-google-sans font-bold text-2xl">Dev.Blog</h1>
        <ul className="flex gap-6 items-center text-sm">
          <li>
            <Link
              className=" text-gray-600 hover:text-gray-900 transition-colors duration-75"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=" text-gray-600 hover:text-gray-900 transition-colors duration-75"
              href="/posts"
            >
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
