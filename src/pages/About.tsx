import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import partnershipImage from "@/assets/farmer-partnership.jpg";
import { HandshakeIcon, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">About KARV</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kale Agricultural Resources Venture
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg leading-relaxed">
                At KARV, we believe that <span className="font-semibold text-primary">true growth begins at the roots—with the farmers</span>. 
                Our journey started with a simple yet powerful vision: to create a world where farmers are valued partners, 
                not just suppliers, and where consumers can enjoy products that are as good for them as they are for the planet.
              </p>
              <p className="text-lg leading-relaxed">
                We recognize that behind every nutritious product lies the hard work and dedication of farmers who nurture the land. 
                Yet, they often face exploitation and uncertainty in traditional market systems. KARV was founded to change this narrative—to 
                build a <span className="font-semibold text-primary">fair and transparent bridge</span> between farmers and consumers worldwide.
              </p>
              <p className="text-lg leading-relaxed">
                Through direct partnerships, fair pricing, and sustainable practices, we're not just processing food—we're 
                <span className="font-semibold text-primary"> transforming lives and communities</span>. Every product that carries the KARV name 
                represents our commitment to quality, health, and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Farmers Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Empowering Farmers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src={partnershipImage} 
                alt="Farmer Partnership" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <HandshakeIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Direct Sourcing</h3>
                      <p className="text-muted-foreground">
                        We work directly with small and medium farmers, creating lasting partnerships that benefit entire communities. 
                        By eliminating middlemen, we ensure farmers receive the recognition and compensation they deserve.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-secondary">Fair Pricing</h3>
                      <p className="text-muted-foreground">
                        We offer fair and stable prices that free farmers from market uncertainty and exploitation. 
                        Our pricing model ensures predictable income, allowing farmers to plan for the future with confidence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-accent">Uplifting Communities</h3>
                      <p className="text-muted-foreground">
                        Our goal extends beyond transactions. We're committed to uplifting rural livelihoods, 
                        supporting education, and fostering sustainable agricultural practices that benefit generations to come.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-primary-foreground/90">
                  To bring health, purity, and taste to every table while honoring the farmers who make it all possible. 
                  We transform nature's bounty into nutritious, value-added products that nourish both body and soul.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-secondary-foreground/90">
                  To be a globally recognized and trusted food processing brand that stands for fairness, quality, and sustainability. 
                  A brand where every purchase contributes to a better world for farmers and consumers alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-16 bg-gradient-to-b from-background to-brand-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl italic text-primary font-semibold">
            "When farmers grow, the world grows with them."
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
