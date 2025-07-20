import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        todo Application
        <br />
        <Link  className="text-md border m-2" href="/singin"> Sign in </Link>
        <br />
        <Link  className="text-md border m-2" href="/singup"> Sign up </Link>
        
    </div>
  );
}
