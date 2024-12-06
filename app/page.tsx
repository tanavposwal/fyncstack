import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs'
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] gap-10 grainy select-none">
      <section className="flex flex-col gap-10 h-screen items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-extrabold">
          FYNC stack
        </h1>
        <p className="sm:text-sm text-xs text-neutral-400">with technolgies</p>
        <Marquee className="sm:max-w-96 max-w-80">
        <div
          className="flex items-center justify-center h-fit  w-full overflow-hidden mx-4 gap-8"
        >
          <Image src={"/next.svg"} alt="stack" width={70} height={80} draggable="false" />
          <Image src={"/drizzle.svg"} alt="stack" width={100} height={100} draggable="false" />
          <Image src={"/clerk.svg"} alt="stack" width={80} height={50} draggable="false" />
          <Image
            src={"/hono.png"}
            alt="stack"
            width={100}
            height={100}
            quality={80}
            className="h-6 w-6"
            draggable="false"
          />
          <Image src={"/shadcn.svg"} alt="stack" width={22} height={22} draggable="false" />
          <Image src={"/vercel.svg"} alt="stack" width={20} height={20} draggable="false" />
          <Image src={"/neon.svg"} alt="stack" width={80} height={100} draggable="false" />
        </div>
        </Marquee>
      </div>
      <ol className="list-inside list-decimal text-xs sm:text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by editig{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li className="mb-2">
          Work with apis in{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            app/api
          </code>
          .
        </li>
        <li className="mb-2">Save and see your changes instantly.</li>
        <li>Deploy on vercel.🔥</li>
      </ol>
      <div className="flex gap-4 items-center">
        <Button asChild>
          <a
            className="text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/tanavposwal/fyncstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/rocket.png"}
              alt="ship apps faster"
              width={20}
              height={20}
              quality={100}
            />
            Get started
          </a>
        </Button>
        <Button asChild variant={"outline"}>
          <a
            className="text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/tanavposwal/fyncstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </Button>
      </div>
      </section>
      <section className="flex flex-col gap-10 h-screen items-center justify-center">
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-extrabold">Auth with Clerk</h1>
        <div>
        <SignedOut>
            <SignIn routing="hash" />
          </SignedOut>
          <SignedIn>
            <div className="bg-white shadow border h-72 w-72 rounded-lg px-4 py-2 flex flex-col items-center justify-center gap-7">
              <h3 className="text-lg font-semibold">Voila! Signed in as</h3>
            <UserButton showName />
            </div>
          </SignedIn>
        </div>
      </section>
    </div>
  );
}
