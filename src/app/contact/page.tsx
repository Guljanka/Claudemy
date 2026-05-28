"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to get involved? We&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Whether you&apos;re looking for support, want to partner with us, or simply have a question, our team is ready to assist.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Our Office</h4>
                      <p className="text-muted-foreground">123 Hope Street, Cityville, ST 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-muted-foreground">info@hopebridgefoundation.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-background border rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-brand-blue mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. Our team will get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input {...register("name")} placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" {...register("email")} placeholder="you@example.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input {...register("subject")} placeholder="How can we help?" />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        {...register("message")}
                        className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Write your message here..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white h-12 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
