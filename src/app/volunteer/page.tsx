"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FadeIn } from "@/components/animations/FadeIn";
import { Users, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  areaOfInterest: z.string().min(1, "Please select an area of interest"),
  message: z.string().optional(),
});

export default function VolunteerPage() {
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
      <section className="bg-brand-green/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Users className="w-16 h-16 mx-auto text-brand-green mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Volunteer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of changemakers. Your time and skills can help transform lives.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Form */}
            <FadeIn direction="right">
              <div className="bg-background border rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your interest in volunteering with us. Our team will review your application and get back to you soon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Submit Another</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Application Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input {...register("firstName")} />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input {...register("lastName")} />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input type="email" {...register("email")} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input type="tel" {...register("phone")} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Area of Interest *</label>
                        <select
                          {...register("areaOfInterest")}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select an area...</option>
                          <option value="events">Event Organization</option>
                          <option value="teaching">Education & Mentoring</option>
                          <option value="logistics">Logistics & Distribution</option>
                          <option value="medical">Medical Support</option>
                          <option value="admin">Administrative Support</option>
                        </select>
                        {errors.areaOfInterest && <p className="text-red-500 text-xs mt-1">{errors.areaOfInterest.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Why do you want to volunteer? (Optional)</label>
                        <textarea
                          {...register("message")}
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Tell us a bit about yourself..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90 text-white" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Why Volunteer With Us?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Make a Real Impact</h4>
                  <p className="text-muted-foreground">
                    See the direct results of your efforts as you help provide essential services to those in need.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Gain Experience</h4>
                  <p className="text-muted-foreground">
                    Develop new skills, build your resume, and work alongside passionate professionals.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Join a Community</h4>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals who share your dedication to making the world a better place.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
