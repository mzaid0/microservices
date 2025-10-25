import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    ArrowRight,
    CheckCircle,
    Clock,
    Github,
    Globe,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Twitter
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="text-zinc-50 relative z-10">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Get in
                            <span className="block bg-linear-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
                                Touch
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Have questions about our microservices? Need technical support?
                            We&apos;re here to help you succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
                            <CardHeader>
                                <MessageSquare className="h-12 w-12 text-blue-400 mb-4" />
                                <CardTitle className="text-2xl text-zinc-50">Send us a Message</CardTitle>
                                <p className="text-zinc-400">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-zinc-300">
                                                First Name
                                            </Label>
                                            <Input
                                                id="firstName"
                                                type="text"
                                                placeholder="John"
                                                className="bg-zinc-950 border-zinc-800 text-zinc-50 placeholder:text-zinc-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-zinc-300">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                className="bg-zinc-950 border-zinc-800 text-zinc-50 placeholder:text-zinc-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-zinc-300">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-zinc-950 border-zinc-800 text-zinc-50 placeholder:text-zinc-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-zinc-300">
                                            Company (Optional)
                                        </Label>
                                        <Input
                                            id="company"
                                            type="text"
                                            placeholder="Acme Inc."
                                            className="bg-zinc-950 border-zinc-800 text-zinc-50 placeholder:text-zinc-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-zinc-300">
                                            Subject
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a subject" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="general">General Inquiry</SelectItem>
                                                <SelectItem value="technical">Technical Support</SelectItem>
                                                <SelectItem value="sales">Sales Question</SelectItem>
                                                <SelectItem value="partnership">Partnership</SelectItem>
                                                <SelectItem value="bug">Bug Report</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-zinc-300">
                                            Message
                                        </Label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell us how we can help you..."
                                            className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-50 placeholder:text-zinc-600 focus:ring-2 focus:ring-zinc-600 focus:border-transparent resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-all duration-300"
                                    >
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
                                <CardHeader>
                                    <Mail className="h-8 w-8 text-blue-400 mb-2" />
                                    <CardTitle className="text-xl text-zinc-50">Email Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-300 mb-2">support@novaservices.com</p>
                                    <p className="text-zinc-400 text-sm">We respond within 24 hours</p>
                                </CardContent>
                            </Card>

                            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
                                <CardHeader>
                                    <Phone className="h-8 w-8 text-green-400 mb-2" />
                                    <CardTitle className="text-xl text-zinc-50">Call Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-300 mb-2">+1 (555) 123-4567</p>
                                    <p className="text-zinc-400 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                                </CardContent>
                            </Card>

                            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
                                <CardHeader>
                                    <MapPin className="h-8 w-8 text-red-400 mb-2" />
                                    <CardTitle className="text-xl text-zinc-50">Visit Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-300 mb-2">
                                        123 Tech Street<br />
                                        Silicon Valley, CA 94000<br />
                                        United States
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="card-animate border-zinc-800 bg-zinc-900/50 backdrop-blur">
                                <CardHeader>
                                    <Clock className="h-8 w-8 text-yellow-400 mb-2" />
                                    <CardTitle className="text-xl text-zinc-50">Business Hours</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-1 text-zinc-300">
                                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                                        <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                                        <p className="text-zinc-400">Sunday: Closed</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Options */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Other Ways to Get Help
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Multiple support channels to assist you
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300 text-center">
                            <CardHeader>
                                <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                                <CardTitle className="text-xl text-zinc-50">Documentation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400 mb-4">
                                    Comprehensive guides, API references, and tutorials
                                </p>
                                <Button variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-900/20">
                                    View Docs
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300 text-center">
                            <CardHeader>
                                <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                                <CardTitle className="text-xl text-zinc-50">Community Forum</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400 mb-4">
                                    Connect with other developers and get community support
                                </p>
                                <Button variant="outline" className="border-blue-600 text-blue-300 hover:bg-blue-900/20">
                                    Join Forum
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-300 text-center">
                            <CardHeader>
                                <Github className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                                <CardTitle className="text-xl text-zinc-50">GitHub Issues</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400 mb-4">
                                    Report bugs and request features on our GitHub repository
                                </p>
                                <Button variant="outline" className="border-orange-600 text-orange-300 hover:bg-orange-900/20">
                                    Open Issue
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-zinc-400">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-zinc-800 bg-zinc-900/30">
                            <CardHeader>
                                <CardTitle className="text-lg text-zinc-50 flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                                    How do I get started with your microservices?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400">
                                    Simply sign up for a free account, follow our quick start guide,
                                    and you&apos;ll have your first microservice running in minutes.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-zinc-800 bg-zinc-900/30">
                            <CardHeader>
                                <CardTitle className="text-lg text-zinc-50 flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                                    What programming languages do you support?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400">
                                    Our platform supports Node.js, Python, Java, Go, and .NET.
                                    We&apos;re continuously adding support for more languages.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-zinc-800 bg-zinc-900/30">
                            <CardHeader>
                                <CardTitle className="text-lg text-zinc-50 flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                                    Do you offer enterprise support?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400">
                                    Yes! We offer dedicated enterprise support with SLAs,
                                    priority response times, and dedicated account management.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50">
                            View All FAQs
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Follow Us
                    </h2>
                    <p className="text-xl text-zinc-400 mb-8">
                        Stay updated with the latest news and updates
                    </p>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="#"
                            className="flex items-center justify-center w-12 h-12 bg-zinc-800/50 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700/50 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-12 h-12 bg-zinc-800/50 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700/50 transition-all duration-300"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-12 h-12 bg-zinc-800/50 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700/50 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-12 h-12 bg-zinc-800/50 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700/50 transition-all duration-300"
                            aria-label="Email"
                        >
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>

                    <div className="mt-12">
                        <Link href="/register">
                            <Button size="lg" className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-all duration-300 text-lg px-8 py-6">
                                Get Started Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}