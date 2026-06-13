import { FadeIn } from "@/components/animations/FadeIn";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Maria's Journey",
      location: "Guatemala",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Thanks to the microloan program, I was able to buy sewing machines and start my own business. Now I employ five other women in my village.",
      story: "Maria struggled to provide for her three children after her husband passed away. Through HopeBridge's Women's Empowerment program, she received business training and a small loan. Today, her tailoring business is thriving, and her children are all attending school."
    },
    {
      name: "A New School for Kito",
      location: "Kenya",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "I used to walk two hours every day just to get to a classroom that didn't have a roof. Now, I have a desk, books, and dreams of becoming a doctor.",
      story: "The community of Kito had outgrown their makeshift school. With funding from HopeBridge supporters, a new, safe, and fully equipped school was built in just six months, providing access to education for over 300 children."
    },
    {
      name: "Clean Water for the Valley",
      location: "Nepal",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "We no longer get sick from the river water. The new well has brought health and life back to our village.",
      story: "For generations, the village relied on a contaminated river for all their water needs, leading to high rates of waterborne diseases. HopeBridge's Clean Water Initiative installed a solar-powered well, bringing safe drinking water to 500 families."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-gold/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories of hope, resilience, and transformation made possible by your support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-24">
            {stories.map((story, index) => (
              <FadeIn key={index} direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{story.name}</h2>
                      <p className="text-brand-blue font-semibold uppercase tracking-wider text-sm">{story.location}</p>
                    </div>
                    <div className="relative bg-muted/50 p-6 rounded-xl border border-border/50">
                      <Quote className="absolute top-4 left-4 w-6 h-6 text-brand-gold/40" />
                      <p className="text-lg italic text-foreground/80 pl-8 relative z-10">
                        &quot;{story.quote}&quot;
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
