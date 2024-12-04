import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] gap-10 bg-gradient-to-b from-white to-orange-100 ">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-6xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-600">
          FYNC stack
        </h1>
        <p className="text-sm text-neutral-600">with technolgies</p>
        <div
          className="flex items-center justify-center h-fit gap-8"
          draggable="false"
        >
          <Image src={"/next.svg"} alt="stack" width={80} height={80} />
          <Image src={"/drizzle.svg"} alt="stack" width={100} height={100} />
          <Image
            src={"/hono.png"}
            alt="stack"
            width={100}
            height={100}
            quality={80}
            className="h-6 w-6"
          />
          <Image src={"/shadcn.svg"} alt="stack" width={22} height={22} />
          <Image src={"/vercel.svg"} alt="stack" width={20} height={20} />
          <Image src={"/neon.svg"} alt="stack" width={80} height={100} />
        </div>
      </div>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by editing{" "}
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

      <div className="flex gap-4 items-center flex-col sm:flex-row">
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
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-black hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/tanavposwal/fyncstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </Button>
      </div>
    </div>
  );
}
