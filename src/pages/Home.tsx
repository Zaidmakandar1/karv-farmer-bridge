import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Leaf, Heart, Globe, Users, TrendingUp, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-farmers.jpg";

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
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              From Farms to Families
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              At KARV, we believe that true growth begins at the roots — with the farmers. We create a fair and transparent bridge between farmers and the global market, transforming nature's bounty into nutritious, value-added products.
            </p>
            <NavLink to="/products">
              <Button size="lg" variant="secondary" className="font-semibold">
                Explore Our Products
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">KARV – Our Purpose</h2>
            <p className="text-xl text-center text-foreground/80 mb-12 leading-relaxed">
              At KARV, we believe that true growth begins at the roots — with the farmers. Our purpose is to create a <span className="font-semibold text-primary">fair and transparent bridge</span> between farmers and the global market, ensuring that those who grow our food receive the respect, recognition, and reward they truly deserve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Empowering Farmers</h3>
                  <p className="text-muted-foreground">
                    We work directly with small and medium farmers, sourcing raw materials straight from their hands. By offering fair and stable prices, we free them from market uncertainty and help them build a secure and sustainable future.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Transforming Nature</h3>
                  <p className="text-muted-foreground">
                    With care, innovation, and integrity, we process nature's bounty into nutritious products — from premium dry fruits and healthy snacks to protein-rich powders and dehydrated fruits and vegetables.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Vision for the Future</h3>
                  <p className="text-muted-foreground">
                    We aspire to make KARV a globally trusted brand — a name that stands for fairness, quality, and sustainability. When farmers grow, the world grows with them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-primary">Our Products</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            From farm to table, we manufacture premium quality products that deliver nutrition, flavor, and convenience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Dehydrated Vegetables</h3>
                <p className="text-muted-foreground mb-4">
                  Nutrient-rich, ready-to-use for culinary and industrial applications.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  Perfect for food manufacturing
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Dehydrated Fruits</h3>
                <p className="text-muted-foreground mb-4">
                  Naturally sweet and flavorful — perfect for cereals, snacks, and baking.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  100% Natural sweetness
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Food-Grade Powders</h3>
                <p className="text-muted-foreground mb-4">
                  Onion, Ginger, Tomato, Banana, Coriander, and Curry Leaves powders — ideal for professional food manufacturing.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  Industrial & culinary grade
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Healthy Snacks</h3>
                <p className="text-muted-foreground mb-4">
                  Delicious salted, masala, and roasted Cashews and Almonds — perfect for retail, gifting, or snacking.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Ready-to-eat goodness
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Premium Chocolates</h3>
                <p className="text-muted-foreground mb-4">
                  Premium chocolates crafted for retail, gifting, and indulgent snacking moments.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Indulgent & premium
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Premium Dry Fruits</h3>
                <p className="text-muted-foreground mb-4">
                  Carefully processed, checked, and packaged dry fruits sourced from farmers and verified importers.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  Quality assured
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <NavLink to="/products">
              <Button size="lg" className="font-semibold">
                View All Products
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* What Makes KARV Different */}
      <section className="py-20 bg-gradient-to-b from-background to-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-primary">What Makes KARV Different</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We connect farmers directly to consumers through trust, quality, and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Direct from Farmers</h3>
              <p className="text-muted-foreground">
                Fair prices and ethical sourcing, eliminating market exploitation and empowering rural communities
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Healthy & Natural Products</h3>
              <p className="text-muted-foreground">
                No preservatives or additives — just pure, wholesome goodness from nature
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Innovative & Sustainable</h3>
              <p className="text-muted-foreground">
                Unique product range with sustainable sourcing and eco-friendly packaging
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-primary">Our Product Journey</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building a comprehensive product range step by step
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Now (Current)</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-semibold">Dry Fruit Packaging:</span> Premium Cashews & Almonds in resealable packs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-secondary">Next (6-12 Months)</h3>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Healthy Snacks:</span> Masala Dry Fruits & Salted Dry Fruits
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-accent">After 9 Months</h3>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Chocolate Treats:</span> Chocolate-Coated Dry Fruits, Healthy Chocolate Bars & Candy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">After 1 Year</h3>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-semibold">Dehydrated Products:</span> Dehydrated Fruits & Vegetables
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Food-Grade Powders:</span> Tomato, Onion, and Banana Powder
                    </p>
                  </div>
                </div>
              </CardContent>
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
