
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Package, 
  ShoppingCart, 
  Database,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";

const Home = () => {
  return (
    <div className="text-zinc-50 relative z-10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Next-Gen
                <span className="block bg-linear-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
                  Microservices
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                Build scalable applications with our modern microservice architecture. 
                Fast, reliable, and designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/register">
                  <Button size="lg" className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-all duration-300 text-lg px-8 py-6">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 text-lg px-8 py-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Built with modern technologies and best practices for maximum performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-zinc-50">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  Optimized for speed with efficient microservice communication and caching strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-zinc-50">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  Enterprise-grade security with JWT authentication and role-based access control.
                </p>
              </CardContent>
            </Card>

            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-zinc-50">Globally Scalable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  Designed to scale horizontally with Docker containers and microservice architecture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Microservices
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Modular services that work together seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300">
              <Users className="h-10 w-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-zinc-50 mb-2">User Service</h3>
              <p className="text-zinc-400 text-sm">
                Complete user management with authentication and authorization
              </p>
            </div>

            <div className="group p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300">
              <Package className="h-10 w-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-zinc-50 mb-2">Product Service</h3>
              <p className="text-zinc-400 text-sm">
                Product catalog management with advanced search and filtering
              </p>
            </div>

            <div className="group p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300">
              <ShoppingCart className="h-10 w-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-zinc-50 mb-2">Order Service</h3>
              <p className="text-zinc-400 text-sm">
                Complete order processing and payment integration
              </p>
            </div>

            <div className="group p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300">
              <Database className="h-10 w-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-zinc-50 mb-2">Inventory Service</h3>
              <p className="text-zinc-400 text-sm">
                Real-time inventory tracking and stock management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-400 mr-2" />
                <span className="text-4xl font-bold text-zinc-50">99.9%</span>
              </div>
              <p className="text-zinc-400">Uptime Guarantee</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-4xl font-bold text-zinc-50">50ms</span>
              </div>
              <p className="text-zinc-400">Average Response Time</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-4xl font-bold text-zinc-50">1000+</span>
              </div>
              <p className="text-zinc-400">APIs Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the next generation of applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-all duration-300 text-lg px-8 py-6">
                Start Building Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 text-lg px-8 py-6">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;