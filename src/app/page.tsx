import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="flex justify-between items-center bg-[#ffc017] border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-none decoration-4">
              Medium
            </span>{" "}
            is a place to write, read, and connect
          </h1>
          <h2>
            Its's easy and free to post your thinking on any topic and connect
            with millions of readers
          </h2>
        </div>
        <img
          className="mask mask-squircle hidden md:inline-flex h-32 lg:h-full"
          src="data:image/png;base64,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"
          alt="M"
        />
        <div></div>
      </div>
    </div>
  );
}
