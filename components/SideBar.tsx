import Image from "next/image";
import Link from "next/link";
import boon_logo from "../public/images/boon_logo.png";
import { BsMenuButtonWideFill, BsMagic } from "react-icons/bs";

export default function SideBar() {
  return (
    <aside className="sidebar w-72 pt-5 sticky top-8 overflow-y-auto">
      <ul className="depth-1">
        <li>
          <strong>
            <BsMagic fill="#ff7700" />
            Style
          </strong>
          <ul className="depth-2">
            <li>
              <Link href="#">Typography</Link>
            </li>
            <li>
              <Link href="#">Color</Link>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            <BsMenuButtonWideFill fill="#0392A7" />
            Components
          </strong>
          <ul className="depth-2">
            <li>
              <Link href="#">Banner</Link>
            </li>
            <li>
              <Link href="#">Button</Link>
            </li>
            <li>
              <Link href="#">Button Sheet</Link>
            </li>
            <li>
              <Link href="#">Calendar</Link>
            </li>
            <li>
              <Link href="#">Caption</Link>
            </li>
            <li>
              <Link href="#">Controller</Link>
            </li>
            <li>
              <Link href="#">Divider</Link>
            </li>
            <li>
              <Link href="#">Illustration</Link>
            </li>
            <li>
              <Link href="#">Info Box</Link>
            </li>
            <li>
              <Link href="#">Input Box</Link>
            </li>
            <li>
              <Link href="#">Lists</Link>
            </li>
            <li>
              <Link href="#">Logo</Link>
            </li>
            <li>
              <Link href="#">Modal</Link>
            </li>
            <li>
              <Link href="#">Nav bar</Link>
            </li>
            <li>
              <Link href="#">Row</Link>
            </li>
            <li>
              <Link href="#">Slider</Link>
            </li>
            <li>
              <Link href="#">Tab</Link>
            </li>
            <li>
              <Link href="#">Text Input</Link>
            </li>
            <li>
              <Link href="#">Title</Link>
            </li>
            <li>
              <Link href="#">Tooltip</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
