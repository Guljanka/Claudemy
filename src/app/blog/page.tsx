import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      title: "Annual Charity Gala Exceeds Fundraising Goals",
      excerpt: "Thank you to everyone who attended our 10th annual gala. With your help, we raised over $500,000 for our education initiatives.",
      date: "October 15, 2023",
      author: "Jane Doe",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "New Mobile Clinic Deployed in Rural Areas",
      excerpt: "Our newest mobile health clinic is fully equipped and ready to serve communities that previously had no access to basic healthcare.",
      date: "September 28, 2023",
      author: "Dr. Smith",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Volunteer Spotlight: Meeting Sarah",
      excerpt: "Sarah has been volunteering with our food pantry for over five years. Read about what inspires her dedication to helping others.",
      date: "September 12, 2023",
      author: "Community Team",
      category: "Volunteers",
      image: "https://images.unsplash.com/photo-1593113589914-07553e6739d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emergency Relief Efforts in the Wake of the Storm",
      excerpt: "Our teams are on the ground providing immediate assistance, shelter, and food to families affected by the recent natural disaster.",
      date: "August 30, 2023",
      author: "Crisis Response Team",
      category: "Emergency Relief",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Importance of Early Childhood Education",
      excerpt: "Research shows that access to early education is crucial for a child's development. Here's how we're making it accessible to more families.",
      date: "August 15, 2023",
      author: "Education Dept",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Partnership Announcement with Global Tech",
      excerpt: "We are thrilled to announce a new corporate partnership that will bring technology training to underserved communities.",
      date: "July 22, 2023",
      author: "Partnerships Team",
      category: "News",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with our latest initiatives, success stories, and upcoming events.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post (Optional, could just use first post) */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
           <FadeIn direction="up">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                  <div className="h-[400px] md:h-[500px] w-full relative">
                      <Image
                        src={posts[0].image}
                        alt="Featured Post"
                        fill
                        style={{objectFit: "cover"}}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-3xl">
                      <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Featured</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{posts[0].title}</h2>
                      <p className="text-gray-200 text-lg mb-6 line-clamp-2 md:line-clamp-none">{posts[0].excerpt}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-300">
                          <span className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {posts[0].date}</span>
                          <span className="flex items-center gap-2"><User className="w-4 h-4"/> {posts[0].author}</span>
                      </div>
                  </div>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow bg-background group cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3"/> {post.author}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button variant="ghost" className="p-0 h-auto text-brand-blue hover:text-brand-blue/80 hover:bg-transparent group/btn">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
