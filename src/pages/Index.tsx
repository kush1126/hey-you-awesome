import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calculator, TrendingUp, Shield, Github } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <GraduationCap className="h-4 w-4" />
                Smart Academic Tool
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                Smart Attendance 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}Bunk Planner
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Never worry about attendance again! Our intelligent calculator helps you plan your class schedule 
                while maintaining the minimum attendance requirements. Stay informed, stay smart.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  <Link to="/planner">
                    <Calculator className="mr-2 h-5 w-5" />
                    Start Planning
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
              <img 
                src={heroImage} 
                alt="University campus with students" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BunkPlanner?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for students who want to balance academics with flexibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Calculations</CardTitle>
                <CardDescription>
                  Advanced algorithms that consider schedule changes and predict safe bunk limits
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Real-time Tracking</CardTitle>
                <CardDescription>
                  Monitor your attendance status and get instant feedback on your academic standing
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Risk-Free Planning</CardTitle>
                <CardDescription>
                  Stay above minimum requirements with our safety buffer recommendations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dashboardPreview} 
                alt="Dashboard preview showing attendance calculations" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Intelligent Attendance Management
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Our platform provides comprehensive insights into your attendance patterns, 
                helping you make informed decisions about when to attend classes and when 
                you can afford to take a break.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Calculate safe bunk limits instantly</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Track attendance across multiple subjects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Get alerts when attendance drops too low</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Plan ahead with predictive analytics</span>
                </li>
              </ul>
              
              <Button asChild size="lg">
                <Link to="/planner">Try It Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master Your Attendance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already using BunkPlanner to optimize their academic schedule
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/planner">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">BunkPlanner</span>
          </div>
          <p className="text-muted-foreground">
            Built for the hackathon - Empowering students with smart attendance management
          </p>
          <div className="mt-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
