import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { Leaf, Clock, Sparkles } from "lucide-react";

const Products = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming nature's bounty into nutritious, value-added products
          </p>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Product Philosophy</h2>
            <p className="text-lg text-primary-foreground/90">
              Every KARV product is crafted with the highest standards of quality and nutrition. We process nature's finest ingredients 
              with <span className="font-semibold">no preservatives or additives</span>—just pure, wholesome goodness that honors both the land and the farmers who cultivate it.
            </p>
            <div className="flex items-center justify-center space-x-2 pt-4">
              <Leaf className="w-6 h-6" />
              <span className="font-semibold text-lg">100% Natural • Healthy • Sustainable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Now */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Available Now
            </Badge>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Premium Dry Fruits</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our inaugural product line features carefully selected cashews and almonds, sourced directly from farmers and packed in convenient resealable pouches for maximum freshness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Premium Cashews</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Directly sourced from small farmers</li>
                  <li>• Resealable packaging for freshness</li>
                  <li>• Rich in protein and healthy fats</li>
                  <li>• No preservatives or additives</li>
                  <li>• Fair trade certified</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Premium Almonds</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ethically sourced from partner farms</li>
                  <li>• Convenient resealable packs</li>
                  <li>• High in vitamin E and fiber</li>
                  <li>• 100% natural, no chemicals</li>
                  <li>• Supports farmer livelihoods</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon - Healthy Snacks */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
              <Clock className="w-4 h-4 mr-2" />
              Coming in 6-12 Months
            </Badge>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Healthy Snacks</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Elevating dry fruits with delicious flavors while maintaining our commitment to health and natural ingredients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Masala Dry Fruits</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Traditional spice blends meet premium dry fruits for a unique snacking experience
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Salted Dry Fruits</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Perfectly seasoned with natural sea salt for the ideal savory crunch
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon - Healthy Treats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 border-accent text-accent">
              <Sparkles className="w-4 h-4 mr-2" />
              Coming in 9 Months
            </Badge>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Healthy Treats</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Indulgent yet nutritious options that prove healthy can be delicious.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Chocolate-Coated Dry Fruits</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Premium dry fruits enrobed in rich, dark chocolate
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Healthy Bars & Candy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Energy bars and candies made with natural ingredients
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dehydrated Fruits & Vegetables</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Nature preserved at its peak nutritional value
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon - Value-Added Products */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
              <Clock className="w-4 h-4 mr-2" />
              Coming in 1 Year
            </Badge>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Protein-Rich Powders</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Concentrated nutrition from farm to table—versatile powders for modern kitchens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Tomato Powder</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Pure, concentrated tomato flavor—perfect for sauces, soups, and seasoning
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Onion Powder</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Convenient, shelf-stable onion essence for everyday cooking
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Banana Powder</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Natural sweetness and nutrition—ideal for smoothies and baking
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Promise */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Product Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Leaf className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-primary-foreground/80">No chemicals, no shortcuts</p>
            </div>
            <div>
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-primary-foreground/80">Only the finest ingredients</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Farmer First</h3>
              <p className="text-primary-foreground/80">Fair prices, every time</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
