
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <LoginLink>Login</LoginLink>
      <LogoutLink>Logout</LogoutLink>

    </div>
  );
}
