"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { FadeIn } from "@/components/animations/FadeIn";
import { Heart, Lock, PieChart, ShieldCheck } from "lucide-react";

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-blue/10 dark:bg-brand-blue/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Heart className="w-16 h-16 mx-auto text-brand-blue mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference Today</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your generosity helps us provide food, education, and hope to those who need it most.
              100% of your public donation goes directly to funding our projects.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Donation Form */}
            <FadeIn direction="up">
              <Card className="border-t-4 border-t-brand-blue shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Secure Donation</CardTitle>
                  <CardDescription>Choose how you want to support our mission.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Donation Type Toggle */}
                  <div className="flex p-1 bg-muted rounded-lg">
                    <button
                      className={`flex-1 py-3 text-sm font-semibold rounded-md transition-all ${
                        donationType === "one-time"
                          ? "bg-background shadow-sm text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setDonationType("one-time")}
                    >
                      Give Once
                    </button>
                    <button
                      className={`flex-1 py-3 text-sm font-semibold rounded-md transition-all ${
                        donationType === "monthly"
                          ? "bg-background shadow-sm text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setDonationType("monthly")}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-4">Select Amount</label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          onClick={() => {
                            setAmount(preset);
                            setCustomAmount("");
                          }}
                          className={`py-3 rounded-lg border-2 font-semibold transition-all ${
                            amount === preset
                              ? "border-brand-blue bg-brand-blue/5 text-brand-blue"
                              : "border-border hover:border-brand-blue/50 text-foreground"
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                      <button
                        onClick={() => setAmount("custom")}
                        className={`py-3 rounded-lg border-2 font-semibold transition-all ${
                          amount === "custom"
                            ? "border-brand-blue bg-brand-blue/5 text-brand-blue"
                            : "border-border hover:border-brand-blue/50 text-foreground"
                        }`}
                      >
                        Custom
                      </button>
                    </div>
                    {amount === "custom" && (
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Payment Info Placeholders */}
                  <div>
                    <label className="block text-sm font-medium mb-4">Payment Method</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand-blue transition-colors bg-muted/30">
                        <span className="font-semibold text-lg">Card</span>
                        <span className="text-xs text-muted-foreground">Stripe Integration</span>
                      </div>
                      <div className="border rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand-blue transition-colors bg-muted/30">
                        <span className="font-semibold text-lg">PayPal</span>
                        <span className="text-xs text-muted-foreground">PayPal Integration</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full h-14 text-lg bg-brand-blue hover:bg-brand-blue/90 text-white">
                    Donate {amount === "custom" ? (customAmount ? `$${customAmount}` : "") : `$${amount}`}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Lock className="w-4 h-4" />
                    Secure, encrypted payment
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Info Section */}
            <div className="space-y-8 lg:pl-8">
              <FadeIn delay={0.2} direction="left">
                <h3 className="text-2xl font-bold mb-4">Why Your Donation Matters</h3>
                <p className="text-muted-foreground mb-6">
                  Every dollar you give helps us bring life-saving relief, long-term development, and sustainable solutions to vulnerable communities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-blue/10 p-2 rounded-full mt-1">
                      <ShieldCheck className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Trusted & Transparent</h4>
                      <p className="text-sm text-muted-foreground">We are a registered 501(c)(3) nonprofit. Your donation is tax-deductible.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-green/10 p-2 rounded-full mt-1">
                      <PieChart className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Fund Usage Breakdown</h4>
                      <p className="text-sm text-muted-foreground">
                        85% of funds go directly to programs, 10% to administration, and 5% to fundraising efforts.
                      </p>
                    </div>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.3} direction="left" className="bg-muted p-6 rounded-2xl mt-8">
                <h4 className="font-semibold mb-2">Other Ways to Give</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in corporate matching, legacy giving, or donating stock?
                </p>
                <Button variant="outline" className="w-full">Contact Our Giving Team</Button>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
