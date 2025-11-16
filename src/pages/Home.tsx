import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Leaf, Heart, Globe, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-farmers.jpg";
import productsImage from "@/assets/products-nuts.jpg";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">KARV</h1>
            <p className="text-2xl md:text-3xl mb-6 italic">
              "THE PERFECT BLEND OF TASTE AND QUALITY"
            </p>
            <p className="text-xl mb-8 text-white/90">
              Good for You, Good for Farmers, Good for the Planet
            </p>
            <NavLink to="/about">
              <Button size="lg" variant="secondary" className="font-semibold">
                Discover Our Story
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Purpose</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Creating a <span className="font-semibold text-primary">fair and transparent bridge</span> between farmers and the global market. 
            We bring health, purity, and taste to every table while honoring the farmers who make it all possible.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Available Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={productsImage} 
                  alt="Premium Cashews" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">Premium Cashews</h3>
                <p className="text-muted-foreground mb-4">
                  Carefully sourced from small farmers, packed in resealable packs for maximum freshness.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  100% Natural • No Preservatives
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={productsImage} 
                  alt="Premium Almonds" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">Premium Almonds</h3>
                <p className="text-muted-foreground mb-4">
                  Protein-rich almonds, directly from farmers, ensuring fair prices and superior quality.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  100% Natural • No Preservatives
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why KARV Section */}
      <section className="py-20 bg-gradient-to-b from-background to-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Why KARV?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Direct from Farmers</h3>
              <p className="text-muted-foreground">
                Fair prices and ethical sourcing, empowering rural communities
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Healthy & Natural</h3>
              <p className="text-muted-foreground">
                No preservatives or additives, just pure nature's goodness
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Innovative & Sustainable</h3>
              <p className="text-muted-foreground">
                Unique product range with eco-friendly packaging solutions
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Global Vision</h3>
              <p className="text-muted-foreground">
                Building a trusted brand recognized worldwide for quality
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the KARV Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join us in supporting farmers while enjoying premium, healthy products
          </p>
          <NavLink to="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Get in Touch
            </Button>
          </NavLink>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
