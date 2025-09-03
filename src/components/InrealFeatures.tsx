import { Card } from "./ui/card";
import { Zap, Shield, Smartphone } from "lucide-react";

export const InrealFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized for speed with cutting-edge technology that delivers instant responses."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Military-grade encryption keeps your data safe and protected at all times."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfectly designed for mobile devices with intuitive touch controls."
    },
    // {
    //   icon: Cloud,
    //   title: "Cloud Sync",
    //   description: "Seamlessly sync your data across all your devices with cloud integration."
    // },
    // {
    //   icon: Star,
    //   title: "Premium Quality",
    //   description: "Experience premium features and quality that sets new industry standards."
    // },
    // {
    //   icon: Users,
    //   title: "Community Driven",
    //   description: "Join millions of users worldwide who trust Inreal for their mobile needs."
    // }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Inreal</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make Inreal the ultimate choice for modern mobile experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};