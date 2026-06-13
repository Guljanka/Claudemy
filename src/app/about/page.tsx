import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about our history, our team, and our commitment to making a positive impact in the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, HopeBridge began with a simple idea: that everyone deserves access to basic necessities and the opportunity to thrive.
              </p>
              <p className="text-lg text-muted-foreground">
                What started as a small group of volunteers distributing food in our local community has grown into a global organization, but our core values remain the same. We believe in the power of compassion, community, and sustainable change.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="h-80 bg-muted rounded-2xl overflow-hidden relative shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1593113589914-07553e6739d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team volunteering"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeIn>
          </div>

          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from the projects we choose to how we interact with the communities we serve.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up" className="bg-background border p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-muted-foreground">We approach every situation with empathy and a genuine desire to help.</p>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" className="bg-background border p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">We are transparent, accountable, and honest in all our operations.</p>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="bg-background border p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-muted-foreground">We focus on sustainable solutions that empower communities to build their own futures.</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
