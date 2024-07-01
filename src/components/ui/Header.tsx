import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between w-full px-10 py-5 items-center text-center absolute top-0 left-0">
      <div className="text-white">HK</div>
      <div className="flex text-center items-center text-white">
        <Link href={"/"} className="mr-7 font-normal">
          Home
        </Link>
        <Link href={"/"} className="mr-7 font-normal">
          About us
        </Link>
        <Link href={"/"} className="mr-7 font-normal">
          Services
        </Link>
        <Link href={"/"} className="mr-7 font-normal">
          Our Work
        </Link>
        <Link
          href={"/"}
          className="bg-white text-black font-normal text-base px-5 py-1 rounded-3xl"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
