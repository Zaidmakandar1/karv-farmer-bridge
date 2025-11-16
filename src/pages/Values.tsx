import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import { Users, Heart, Leaf, Globe } from "lucide-react";

const Values = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">Why KARV?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What makes us different and why it matters
          </p>
        </div>
      </section>

      {/* Main Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-primary">What Makes KARV Different</h2>
          
          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Direct from Farmers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="h-full bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-3xl font-bold">Direct from Farmers</h3>
                    </div>
                    <div className="space-y-4 text-lg text-primary-foreground/90">
                      <p>
                        We eliminate the middlemen and work directly with small and medium farmers, creating genuine partnerships 
                        that transform lives.
                      </p>
                      <p className="font-semibold">Our commitment:</p>
                      <ul className="space-y-2 ml-4">
                        <li>• Fair and stable pricing that protects farmers from market volatility</li>
                        <li>• Direct relationships that ensure transparency at every step</li>
                        <li>• Ethical sourcing that respects both people and planet</li>
                        <li>• Long-term partnerships that build community resilience</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-brand-cream rounded-lg p-12 text-center">
                  <Users className="w-32 h-32 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-primary">Fair Prices</p>
                  <p className="text-xl text-muted-foreground mt-2">Ethical Sourcing</p>
                </div>
              </div>
            </div>

            {/* Healthy & Natural */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="bg-brand-cream rounded-lg p-12 text-center">
                  <Heart className="w-32 h-32 text-secondary mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-secondary">100% Natural</p>
                  <p className="text-xl text-muted-foreground mt-2">Zero Additives</p>
                </div>
              </div>
              <div className="order-2">
                <Card className="h-full bg-secondary text-secondary-foreground">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <h3 className="text-3xl font-bold">Healthy & Natural Products</h3>
                    </div>
                    <div className="space-y-4 text-lg text-secondary-foreground/90">
                      <p>
                        We believe that the best food is the simplest food—no preservatives, no additives, no compromises. 
                        Just pure, wholesome ingredients from nature.
                      </p>
                      <p className="font-semibold">What we promise:</p>
                      <ul className="space-y-2 ml-4">
                        <li>• No artificial preservatives or chemicals</li>
                        <li>• No hidden additives or fillers</li>
                        <li>• Minimal processing to retain maximum nutrition</li>
                        <li>• Transparent ingredient lists you can understand</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Innovative & Sustainable */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="h-full bg-gradient-to-br from-brand-green to-brand-green-light text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <Leaf className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">Innovative & Sustainable</h3>
                    </div>
                    <div className="space-y-4 text-lg text-white/90">
                      <p>
                        Innovation and sustainability go hand in hand. We're constantly developing new products and processes 
                        that are better for you and better for the environment.
                      </p>
                      <p className="font-semibold">Our approach:</p>
                      <ul className="space-y-2 ml-4">
                        <li>• Unique product range that meets modern health needs</li>
                        <li>• Eco-friendly packaging solutions</li>
                        <li>• Sustainable agricultural practices</li>
                        <li>• Continuous innovation in food processing</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-brand-cream rounded-lg p-12 text-center">
                  <Leaf className="w-32 h-32 text-brand-green mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-brand-green">Eco-Friendly</p>
                  <p className="text-xl text-muted-foreground mt-2">Future-Forward</p>
                </div>
              </div>
            </div>

            {/* Global Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="bg-brand-cream rounded-lg p-12 text-center">
                  <Globe className="w-32 h-32 text-accent mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-accent">Worldwide Reach</p>
                  <p className="text-xl text-muted-foreground mt-2">Local Roots</p>
                </div>
              </div>
              <div className="order-2">
                <Card className="h-full bg-gradient-to-br from-accent to-brand-amber text-foreground">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center">
                        <Globe className="w-8 h-8 text-foreground" />
                      </div>
                      <h3 className="text-3xl font-bold">Global Vision</h3>
                    </div>
                    <div className="space-y-4 text-lg">
                      <p>
                        While our roots are firmly planted in local farming communities, our vision extends across borders. 
                        We're building a globally trusted brand that represents fairness, quality, and sustainability.
                      </p>
                      <p className="font-semibold">Our ambition:</p>
                      <ul className="space-y-2 ml-4">
                        <li>• Recognized worldwide for quality and ethics</li>
                        <li>• Trusted by consumers across continents</li>
                        <li>• Setting industry standards for fair trade</li>
                        <li>• Inspiring others to prioritize farmer welfare</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concluding Message */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">The KARV Promise</h2>
          <p className="text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
            Good for You, Good for Farmers, Good for the Planet
          </p>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            When you choose KARV, you're not just buying a product—you're joining a movement that believes 
            in fairness, health, and sustainability. Together, we're building a better food system for everyone.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Values;
