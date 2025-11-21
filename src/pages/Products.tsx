import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { Leaf, Heart, Package } from "lucide-react";

// All products in a single array for grid display
const allProducts = [
  {
    id: 1,
    name: "Premium Nuttymix Cashews - Whole Kaju",
    category: "Premium Cashews",
    grade: "Whole Kaju",
    description: "Premium quality whole cashews, rich in nutrients and 100% natural. Perfect for healthy snacking.",
    features: ["Rich in Nutrients", "100% Natural", "Premium Quality"],
    image: "/products/cashew-whole-kaju.jpg"
  },
  {
    id: 2,
    name: "Premium Select Cashews W240",
    category: "Premium Cashews",
    grade: "W240 Grade",
    description: "Premium select cashews W240 grade. Rich in protein, supports heart health, and boosts brain function.",
    features: ["Rich in Protein", "Supports Heart Health", "Boosts Brain Function"],
    image: "/products/cashew-w240.jpg"
  },
  {
    id: 3,
    name: "Premium Select Cashew W320",
    category: "Premium Cashews",
    grade: "W320 Grade",
    description: "Handpicked superior quality W320 grade cashews. Slow dried and rich in nutrients.",
    features: ["Handpicked", "Superior Quality", "100% Natural"],
    image: "/products/cashew-w320.jpg"
  },
  {
    id: 4,
    name: "Premium Dehydrated Vegetables Mix",
    category: "Dehydrated Vegetables",
    grade: "Premium Quality",
    description: "A nutritious blend of dehydrated vegetables including kale, mushrooms, bell peppers, and carrots.",
    features: ["100% Natural", "Nutrient-Rich", "Easy to Rehydrate"],
    image: "/products/dehydrated-vegetables-mix.jpg"
  },
  {
    id: 5,
    name: "Premium Dehydrated Fruits Assortment",
    category: "Dehydrated Fruits",
    grade: "Premium Quality",
    description: "A vibrant collection of naturally dehydrated fruits including oranges, bananas, strawberries, and kiwis.",
    features: ["100% Natural", "No Added Sugar", "Rich in Fiber"],
    image: "/products/dehydrated-fruits-assortment.jpg"
  },
  {
    id: 6,
    name: "Chocolate-Coated Dry Fruits & Treats",
    category: "Chocolate Treats",
    grade: "Premium Treats",
    description: "Indulgent chocolate-coated almonds, berry bites, healthy chocolate gems, and colorful chocolate gems.",
    features: ["Premium Quality", "Perfect for Gifting", "Variety of Flavors"],
    image: "/products/chocolate-coated-collection.jpg"
  },
  {
    id: 7,
    name: "Food-Grade Powders Collection",
    category: "Food-Grade Powders",
    grade: "Industrial & Culinary Grade",
    description: "Premium quality food-grade powders including onion, tomato, ginger, and curry leaves powders.",
    features: ["100% Pure", "Extended Shelf Life", "Concentrated Flavor"],
    image: "/products/food-grade-powders.jpg"
  }
];

const Products = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From premium dry fruits and healthy snacks to chocolate-coated treats, protein blends, and dehydrated fruits and vegetables — all manufactured with the highest standards of quality
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

      {/* All Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-primary">Our Product Range</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From premium cashews to food-grade powders — all manufactured with the highest standards of quality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-green-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge>{product.grade}</Badge>
                    <span className="text-xs text-muted-foreground">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Heart className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Product Information</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">About Our Products</h3>
                <p className="text-muted-foreground mb-4">
                  At KARV, we manufacture a diverse range of premium products including cashews, dehydrated fruits and vegetables,
                  food-grade powders, and chocolate-coated treats. Each product is crafted with the highest standards of quality and nutrition.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our products are perfect for retail, food industry applications, and global markets. Whether you're looking for healthy snacks,
                  culinary ingredients, or premium treats, KARV delivers excellence in every package.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Premium Cashews</h4>
                      <p className="text-sm text-muted-foreground">Rich in protein, healthy fats, and minerals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Dehydrated Products</h4>
                      <p className="text-sm text-muted-foreground">Nutrient-rich, extended shelf life, easy to use</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Food-Grade Powders</h4>
                      <p className="text-sm text-muted-foreground">Concentrated flavor for culinary & industrial use</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Chocolate Treats</h4>
                      <p className="text-sm text-muted-foreground">Premium quality, perfect for gifting</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Processed, Packaged & Marketed By</h3>
                <p className="font-semibold text-lg mb-2">Kale Agricultural Resources Venture</p>
                <p className="text-muted-foreground mb-6">
                  3495/9, Gollecha layout,main road,Hiwarkhed Dist: Akola,<br />
                  444103, Maharashtra, India
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Storage Instructions</h4>
                    <p className="text-muted-foreground text-sm">
                      Store in a cool, dry place, away from direct sunlight.
                      After opening, close the pack tightly or transfer to an airtight container to maintain freshness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Allergen Information</h4>
                    <p className="text-muted-foreground text-sm">
                      Products may contain tree nuts, dry fruits, and other allergens.
                      Processed in a facility that handles various nuts and food ingredients.
                      Please check individual product labels.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Country of Origin</h4>
                    <p className="text-muted-foreground text-sm">India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">
                      All products are manufactured following strict quality standards and food safety regulations.
                    </p>
                  </div>
                </div>
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
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-primary-foreground/80">Only the finest ingredients</p>
            </div>
            <div>
              <Package className="w-12 h-12 mx-auto mb-4" />
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
