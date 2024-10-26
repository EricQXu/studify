import Image from "next/image";
import Navbar from "/src/app/Navbar.tsx";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-full px-20">
        <div className="w-full"></div>

        <div className="mt-5">
          <Navbar />

        </div>
      </div>
    </div>
  );
}
