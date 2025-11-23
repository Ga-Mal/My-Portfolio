import HeroImg from "@/assets/images/hero.jpeg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Content Creator, Passionate
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4 md:mt-20">
              <p className="text-white">
                Hello! I'm Gamal Abdel Fattah, a passionate{" "}
                <span className="font-bold text-white"> Front-End </span>
                developer dedicated to crafting engaging and user-friendly web
                experiences.
              </p>
              <p className="text-white">
                Although I'm still fresh in the field, I have a strong drive for
                learning and quickly mastering new technologies. I love coding
                and take pride in bringing creative solutions to life.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Currently, I'm expanding into backend development with
                    Node.js to grow as a full-stack developer and create
                    seamless, robust web applications. I'm committed to
                    continuous growth, innovation, and contributing to the
                    developer community by sharing ideas, tools, and insights
                    that make development faster and more enjoyable.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Gamal Abdel Fattah
                    </cite>
                    {/* <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div> */}
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
