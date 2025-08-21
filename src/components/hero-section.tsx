import { Search, Home, Users, Wrench, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import heroImage from "@/assets/hero-real-estate.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Complete <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Real Estate
              </span> <br />
              Solution
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Real Estate • AI • Finance • Services • Community
            </p>
          </div>

          {/* Search Bar */}
          <div className="animate-slide-up max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="flex bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-large">
                <Input
                  placeholder="Find Properties, Services, or Tenants..."
                  className="flex-1 border-0 bg-transparent text-repp-dark placeholder:text-muted-foreground text-lg px-4 py-4 focus-visible:ring-0"
                />
                <Button size="lg" className="rounded-xl px-8 bg-gradient-primary hover:opacity-90 transition-all">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="animate-scale-in grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Home, label: "Properties", desc: "Find & Manage" },
              { icon: Users, label: "Community", desc: "Connect & Share" },
              { icon: Wrench, label: "Services", desc: "Book & Review" },
              { icon: TrendingUp, label: "Finance", desc: "Track & Grow" }
            ].map((item, index) => (
              <div 
                key={item.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-white/30 text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-float hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">10K+</div>
          <div className="text-sm">Properties</div>
        </div>
      </div>
      <div className="absolute top-1/3 right-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">5K+</div>
          <div className="text-sm">Happy Users</div>
        </div>
      </div>
    </section>
  )
}