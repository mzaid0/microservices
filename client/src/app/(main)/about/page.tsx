import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Code,
  Coffee,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-zinc-50 relative z-10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              About
              <span className="block bg-linear-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
                NOVAServices
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              We&apos;re building the future of microservice architecture with innovative solutions
              that empower developers to create scalable, reliable applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-zinc-50">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  To democratize microservice architecture by providing developers with
                  powerful, easy-to-use tools that enable them to build scalable applications
                  without the complexity traditionally associated with distributed systems.
                </p>
              </CardContent>
            </Card>

            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-2xl text-zinc-50">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  To become the leading platform for microservice development, enabling
                  businesses of all sizes to leverage the power of distributed architecture
                  while maintaining simplicity and developer happiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-zinc-800/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700/50 transition-colors">
                <Zap className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 mb-4">Innovation</h3>
              <p className="text-zinc-400">
                We constantly push the boundaries of what&apos;s possible in microservice technology
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-800/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700/50 transition-colors">
                <Shield className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 mb-4">Reliability</h3>
              <p className="text-zinc-400">
                We build systems you can depend on with enterprise-grade security and uptime
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-800/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700/50 transition-colors">
                <Heart className="h-10 w-10 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 mb-4">Developer Experience</h3>
              <p className="text-zinc-400">
                We prioritize developer happiness with intuitive APIs and comprehensive documentation
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-800/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700/50 transition-colors">
                <Globe className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 mb-4">Global Scale</h3>
              <p className="text-zinc-400">
                We design for worldwide deployment with multi-region support and CDN integration
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-800/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700/50 transition-colors">
                <Code className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 mb-4">Open Source</h3>
              <p className="text-zinc-400">
                We believe in community-driven development and contribute back to open source
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-800/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700/50 transition-colors">
                <TrendingUp className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 mb-4">Continuous Growth</h3>
              <p className="text-zinc-400">
                We&apos;re always learning, improving, and evolving our platform based on user feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Passionate developers building the future of microservices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-linear-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MZ</span>
                </div>
                <CardTitle className="text-xl text-zinc-50">Muhammad Zaid</CardTitle>
                <p className="text-zinc-400">Lead Developer</p>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-4">
                  Full-stack developer with expertise in microservice architecture and modern web technologies.
                </p>
                <div className="flex justify-center space-x-2">
                  <Coffee className="h-5 w-5 text-amber-400" />
                  <Code className="h-5 w-5 text-blue-400" />
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">TB</span>
                </div>
                <CardTitle className="text-xl text-zinc-50">Tech Builder</CardTitle>
                <p className="text-zinc-400">DevOps Engineer</p>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-4">
                  Infrastructure specialist focused on scalable deployment and monitoring solutions.
                </p>
                <div className="flex justify-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <Globe className="h-5 w-5 text-blue-400" />
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-linear-to-r from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AS</span>
                </div>
                <CardTitle className="text-xl text-zinc-50">API Specialist</CardTitle>
                <p className="text-zinc-400">Backend Architect</p>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-4">
                  API design expert with deep knowledge of distributed systems and database optimization.
                </p>
                <div className="flex justify-center space-x-2">
                  <Target className="h-5 w-5 text-red-400" />
                  <Award className="h-5 w-5 text-yellow-400" />
                  <Lightbulb className="h-5 w-5 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Our impact in the developer community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-zinc-50">10,000+</div>
              <p className="text-zinc-400">Developers Using Our Platform</p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-zinc-50">99.9%</div>
              <p className="text-zinc-400">Uptime Guarantee</p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-zinc-50">1M+</div>
              <p className="text-zinc-400">API Calls per Day</p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-zinc-50">50+</div>
              <p className="text-zinc-400">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Be part of the microservice revolution and build amazing applications with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-all duration-300 text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}