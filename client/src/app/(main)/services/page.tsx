import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Package,
  ShoppingCart,
  Database,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Code,
  Server,
  Clock
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="text-zinc-50 relative z-10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our
              <span className="block bg-linear-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
                Microservices
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive suite of microservices designed for modern applications.
              Each service is independently scalable and maintainable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User Service */}
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur hover:bg-zinc-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Users className="h-12 w-12 text-purple-400" />
                  <div>
                    <CardTitle className="text-2xl text-zinc-50">User Service</CardTitle>
                    <p className="text-zinc-400">Authentication & User Management</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-300">
                  Complete user lifecycle management with secure authentication,
                  authorization, and profile management capabilities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    JWT Authentication
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Role-based Access Control
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Password Security
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Profile Management
                  </div>
                </div>
                <Button variant="outline" className="w-full border-purple-600 text-purple-300 hover:bg-purple-900/20">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Product Service */}
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur hover:bg-zinc-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Package className="h-12 w-12 text-orange-400" />
                  <div>
                    <CardTitle className="text-2xl text-zinc-50">Product Service</CardTitle>
                    <p className="text-zinc-400">Catalog & Product Management</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-300">
                  Comprehensive product catalog with advanced search, filtering,
                  and category management for e-commerce applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Product Catalog Management
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Advanced Search & Filters
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Category Management
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Price Management
                  </div>
                </div>
                <Button variant="outline" className="w-full border-orange-600 text-orange-300 hover:bg-orange-900/20">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Order Service */}
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur hover:bg-zinc-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <ShoppingCart className="h-12 w-12 text-green-400" />
                  <div>
                    <CardTitle className="text-2xl text-zinc-50">Order Service</CardTitle>
                    <p className="text-zinc-400">Order Processing & Management</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-300">
                  End-to-end order processing with payment integration,
                  order tracking, and comprehensive order management.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Order Processing Pipeline
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Payment Integration
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Order Tracking
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Status Management
                  </div>
                </div>
                <Button variant="outline" className="w-full border-green-600 text-green-300 hover:bg-green-900/20">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Inventory Service */}
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur hover:bg-zinc-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Database className="h-12 w-12 text-cyan-400" />
                  <div>
                    <CardTitle className="text-2xl text-zinc-50">Inventory Service</CardTitle>
                    <p className="text-zinc-400">Stock & Inventory Management</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-300">
                  Real-time inventory tracking with automated stock management,
                  low stock alerts, and comprehensive reporting.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Real-time Stock Tracking
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Automated Alerts
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Stock Reports
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Warehouse Management
                  </div>
                </div>
                <Button variant="outline" className="w-full border-cyan-600 text-cyan-300 hover:bg-cyan-900/20">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Features
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Built with modern technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">High Performance</h3>
              <p className="text-zinc-400">
                Optimized for speed with efficient data processing and caching
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">Secure by Design</h3>
              <p className="text-zinc-400">
                Built-in security features with encryption and access controls
              </p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">Scalable Architecture</h3>
              <p className="text-zinc-400">
                Horizontally scalable with Docker and Kubernetes support
              </p>
            </div>

            <div className="text-center">
              <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">Developer Friendly</h3>
              <p className="text-zinc-400">
                Well-documented APIs with comprehensive development tools
              </p>
            </div>

            <div className="text-center">
              <Server className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">Reliable Infrastructure</h3>
              <p className="text-zinc-400">
                99.9% uptime with automated monitoring and health checks
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">Real-time Updates</h3>
              <p className="text-zinc-400">
                Live data synchronization across all services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Our Services?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive microservice platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-all duration-300 text-lg px-8 py-6">
                Start Building
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
}