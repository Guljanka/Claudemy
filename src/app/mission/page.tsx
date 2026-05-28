import { FadeIn } from "@/components/animations/FadeIn";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-green/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between hope and reality for communities around the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-brand-green">Mission Statement</h2>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto text-foreground/90 italic">
                &quot;To empower marginalized communities by providing essential resources, accessible education, and sustainable opportunities for growth, creating a world where every individual has the chance to thrive.&quot;
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn direction="right">
              <div className="h-80 bg-muted rounded-2xl overflow-hidden relative shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Vision"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We envision a world completely free from extreme poverty and inequality. A world where every child can go to school, every family has enough to eat, and every community has the resources to build a resilient future.
              </p>
              <p className="text-lg text-muted-foreground">
                We are working tirelessly towards a future where our foundation is no longer needed.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
            </FadeIn>

            <FadeIn delay={0.1} direction="up" className="flex flex-col md:flex-row gap-6 bg-muted/30 p-8 rounded-2xl border">
              <div className="bg-brand-blue/10 p-4 rounded-xl h-fit">
                <Target className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Identify Needs</h3>
                <p className="text-muted-foreground">
                  We work closely with local leaders and organizations to identify the most pressing needs within a community, ensuring our efforts are targeted and effective.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" className="flex flex-col md:flex-row gap-6 bg-muted/30 p-8 rounded-2xl border">
              <div className="bg-brand-gold/10 p-4 rounded-xl h-fit">
                <Lightbulb className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Develop Solutions</h3>
                <p className="text-muted-foreground">
                  Instead of short-term fixes, we design comprehensive programs that address the root causes of poverty, focusing on education, health, and economic empowerment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" className="flex flex-col md:flex-row gap-6 bg-muted/30 p-8 rounded-2xl border">
              <div className="bg-brand-green/10 p-4 rounded-xl h-fit">
                <TrendingUp className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Ensure Sustainability</h3>
                <p className="text-muted-foreground">
                  Our ultimate goal is self-reliance. We train local individuals and establish systems that can be maintained by the community long after our initial intervention.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}
