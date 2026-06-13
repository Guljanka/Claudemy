import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Hunger Relief",
      description: "Providing nutritious meals to families facing food insecurity through community pantries and emergency food drops.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "250,000+ meals served annually",
      tag: "Food Security"
    },
    {
      title: "Education For All",
      description: "Building schools, providing learning materials, and offering scholarships to ensure every child has access to quality education.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "5,000+ students supported",
      tag: "Education"
    },
    {
      title: "Clean Water Initiative",
      description: "Installing wells and water purification systems in rural communities to provide safe, clean drinking water.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "100+ communities served",
      tag: "Health & Sanitation"
    },
    {
      title: "Medical Outreach",
      description: "Operating mobile clinics to bring essential healthcare services, vaccinations, and medicines to remote areas.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "50,000+ patients treated",
      tag: "Healthcare"
    },
    {
      title: "Disaster Response",
      description: "Providing immediate relief, shelter, and rebuilding support to communities affected by natural disasters.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "Rapid response within 24hrs",
      tag: "Emergency Relief"
    },
    {
      title: "Women's Empowerment",
      description: "Offering vocational training and microloans to help women start businesses and achieve financial independence.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "2,000+ businesses funded",
      tag: "Economic Growth"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs & Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we are making a tangible impact across different areas of need.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow border-none shadow-md bg-background">
                  <div className="relative h-56 w-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${program.image})` }}
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {program.tag}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <div className="bg-brand-blue/5 p-3 rounded-lg border border-brand-blue/10">
                      <span className="font-semibold text-brand-blue text-sm">Impact: </span>
                      <span className="text-sm text-muted-foreground">{program.impact}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/donate" className="w-full">
                      <Button variant="outline" className="w-full hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors">Support this program</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have an idea for a new initiative?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              We are always looking for new ways to serve our community and partner with local organizations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                Partner With Us
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
