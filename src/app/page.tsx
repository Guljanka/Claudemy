"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { FadeIn } from "@/components/animations/FadeIn";
import CountUp from "react-countup";
import { HeartHandshake, Utensils, Users, GraduationCap, ArrowRight, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              HopeBridge Foundation - Version 2
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
              Empowering communities, nurturing children, and building a brighter future for those in need.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full sm:w-auto text-lg px-8">
                  Make a Difference Today
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="text-black bg-white/10 hover:bg-white/20 hover:text-white border-white w-full sm:w-auto text-lg px-8">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Counters Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Together, we are making a real difference in the lives of thousands of people around the world.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1} direction="up" className="glassmorphism p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <Utensils className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                <CountUp end={250000} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-muted-foreground font-medium">Meals Provided</div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" className="glassmorphism p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center mb-4 text-brand-green">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                <CountUp end={15000} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-muted-foreground font-medium">Families Helped</div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" className="glassmorphism p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <HeartHandshake className="w-8 h-8 text-brand-gold" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                $<CountUp end={2.5} decimals={1} duration={2.5} enableScrollSpy scrollSpyOnce />M
              </div>
              <div className="text-muted-foreground font-medium">Donations Raised</div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="glassmorphism p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 text-purple-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                <CountUp end={1200} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-muted-foreground font-medium">Active Volunteers</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Campaigns</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Support our urgent initiatives and help us bring hope to those who need it most.
                </p>
              </div>
              <Link href="/programs" className="hidden md:flex items-center text-brand-blue font-semibold hover:underline">
                View all <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                desc: "Providing access to safe and clean drinking water in rural communities.",
                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                raised: 45000,
                goal: 50000,
              },
              {
                title: "Education for All",
                desc: "Building schools and providing learning materials for underprivileged children.",
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                raised: 80000,
                goal: 100000,
              },
              {
                title: "Emergency Food Relief",
                desc: "Delivering nutritious meals to families affected by natural disasters.",
                img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                raised: 15000,
                goal: 30000,
              }
            ].map((campaign, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${campaign.img})` }}
                  />
                  <CardHeader>
                    <CardTitle>{campaign.title}</CardTitle>
                    <CardDescription>{campaign.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="mb-2 flex justify-between text-sm font-medium">
                      <span className="text-brand-blue">${campaign.raised.toLocaleString()} raised</span>
                      <span className="text-muted-foreground">Goal: ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-brand-blue h-2.5 rounded-full"
                        style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                      ></div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/donate" className="w-full">
                      <Button className="w-full">Donate to this cause</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-blue/5 dark:bg-brand-blue/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Hope</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from the people whose lives have been transformed by your generosity.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "HopeBridge Foundation helped me continue my education when my family lost everything. Now, I'm studying to become a nurse.",
                author: "Sarah M.",
                role: "Scholarship Recipient",
              },
              {
                quote: "The emergency food relief program was a lifesaver for my community after the flood. We are forever grateful for the support.",
                author: "David K.",
                role: "Community Leader",
              },
              {
                quote: "Volunteering with HopeBridge has been the most rewarding experience of my life. Seeing the direct impact we make is incredible.",
                author: "Elena R.",
                role: "Active Volunteer",
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <Card className="h-full flex flex-col bg-background relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-blue/20" />
                  <CardContent className="pt-8 flex-1">
                    <p className="text-lg italic text-muted-foreground mb-6">&quot;{testimonial.quote}&quot;</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations Section */}
      <section className="py-16 bg-background border-y">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8">Trusted by Global Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              {/* Placeholders for partner logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-2xl font-bold text-foreground">
                  PARTNER {i}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/10 dark:bg-brand-blue/20 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center border bg-background/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter to receive updates on our campaigns, success stories, and ways you can help.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <Input type="email" placeholder="Enter your email address" className="flex-1 bg-background" required />
                <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90 text-white">Subscribe</Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
