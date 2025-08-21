import { 
  Building2, 
  Calculator, 
  MessageSquare, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Users,
  Wrench,
  CreditCard,
  Bot
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive tools for landlords to manage properties, tenants, and rent collection with ease.",
      color: "text-primary"
    },
    {
      icon: Calculator,
      title: "Financial Tools", 
      description: "Built-in calculators for mortgages, budget planning, and profit analysis to make informed decisions.",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Community Hub",
      description: "Connect with other property owners, tenants, and service providers in our vibrant community.",
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Service Marketplace",
      description: "Find trusted plumbers, electricians, and contractors. Book services and read reviews.",
      color: "text-secondary"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure rent payments, automated invoicing, and financial tracking for all transactions.",
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "AI-Powered Insights",
      description: "Get intelligent rent suggestions, maintenance alerts, and predictive analytics.",
      color: "text-secondary"
    }
  ]

  return (
    <section id="features" className="py-20 bg-repp-gray dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From property management to community building, Repp combines all essential 
            real estate tools with cutting-edge AI and financial services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Properties Listed" },
            { number: "5K+", label: "Happy Users" },
            { number: "2K+", label: "Service Providers" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}