import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url(/images/IMG_2903.webp)", // FUNDO REAL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/55 backdrop-blur-[1px]">

        {/* HERO */}
        <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-yellow-400">
              Where Strategy Meets Luck
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              A long-term Polygon project with real MATIC dividends.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/presale">
                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  Join Presale
                </Button>
              </Link>

              <Link href="/buy">
                <Button size="lg" variant="secondary">
                  Buy with Card
                </Button>
              </Link>

              <Link href="/whitepaper">
                <Button size="lg" variant="outline">
                  Read Whitepaper
                </Button>
              </Link>
            </div>
          </div>

          {/* Duende */}
          <div className="flex justify-center">
            <img
              src="/images/IMG_2901.webp" // DUENDE REAL
              alt="Lubdan mascot"
              className="max-w-sm md:max-w-md drop-shadow-2xl"
            />
          </div>
        </section>

        {/* STATS */}
        <section className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat title="Current Phase" value="Phase 1 — $0.20" />
          <Stat title="LBD Sold" value="1,200,000" />
          <Stat title="Phase 1 Remaining" value="5,100,000" />
          <Stat title="Phase 2 Remaining" value="3,150,000" />
        </section>

        {/* DIVIDENDS */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-black/60 border border-yellow-500/30 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-yellow-400">
                Earn MATIC Dividends
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Hold LBD and receive real Polygon dividends directly from the ecosystem.
              </p>
            </div>

            <img
              src="https://cryptologos.cc/logos/polygon-matic-logo.png"
              alt="Polygon"
              className="w-16 h-16"
            />
          </div>
        </section>

        {/* SUBSCRIBE */}
        <section className="container mx-auto px-6 pb-24">
          <div className="bg-black/60 border border-yellow-500/30 rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Subscribe for Updates
            </h3>

            <div className="flex flex-col md:flex-row gap-4">
              <
