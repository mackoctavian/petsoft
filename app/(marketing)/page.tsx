import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col items-center justify-center gap-10 bg-[#5dc9a8] min-h-screen">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="preview"
        width={519}
        height={472}
      />

      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use petsoft to easily keep track of pets under your care. Get lifetime
          access for $299
        </p>
        <div className="mt-10"></div>
      </div>
    </main>
  );
}
