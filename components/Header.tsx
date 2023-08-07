import Image from "next/image";
import boon_logo from "../public/images/boon_logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-bottom py-3">
      <nav className="flex justify-between max-w-7xl mx-auto align-items-center">
        <a href="#" className="boon_logo">
          <Image src={boon_logo} width={120} height={20} alt="boon_logo" />
        </a>
        <ul>
          <li>
            <Link href="#" className="active">
              Docs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
