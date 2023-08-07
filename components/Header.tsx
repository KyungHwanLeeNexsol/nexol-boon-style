import Image from "next/image";
import boon_logo from "../public/images/boon_logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full py-3">
      <nav className="flex justify-between max-w-7xl mx-auto align-items-center">
        <a href="#" className="boon_logo w-72 flex justify-center">
          <Image src={boon_logo} width={110} height={20} alt="boon_logo" />
        </a>
      </nav>
    </header>
  );
}
