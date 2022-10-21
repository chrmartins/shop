import { HeaderContainer } from "./styles";
import Image from "next/future/image";

import logoImg from "../../assets/logo.svg";
import Link from "next/link";

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="" />
        </a>
      </Link>
    </HeaderContainer>
  );
}
