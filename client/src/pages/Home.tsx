import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Lubdan
        </h1>

        <p className="text-xl max-w-2xl mx-auto text-muted-foreground mb-10">
          A next-generation decentralized ecosystem built for transparency,
          scalability, and long-term value.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg">Join Presale</Button>
          <Button size="lg" variant="outline">
            Read Whitepaper
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <Feature
            title="Transparent Tokenomics"
            description="Clear distribution, no hidden mechanics, and long-term aligned incentives."
          />
          <Feature
            title="Security First"
            description="Smart-contract focused design with audit-ready architecture."
          />
          <Feature
            title="Built for Scale"
            description="Designed to grow sustainably without sacrificing decentralization."
          />
        </div>
      </section>

      {/* TOKEN SECTION */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">The Lubdan Token</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground mb-8">
          Lubdan is more than a token — it represents access, participation,
          and governance within the ecosystem.
        </p>

        <Button size="lg" variant="secondary">
          View Tokenomics
        </Button>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to be early?
        </h2>
        <p className="mb-8 text-lg">
          Join the Lubdan ecosystem before public launch.
        </p>

        <Button size="lg" variant="outline">
          Enter the Ecosystem
        </Button>
      </section>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
