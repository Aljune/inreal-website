import { Button } from "./ui/button";
import { Download, Smartphone, Zap, Shield } from "lucide-react";
import heroImage from "../assets/inreal-hero.jpg";

export const InrealHero = () => {
  const handleDownload = () => {
    // Create a mock APK download
    const link = document.createElement('a');
    link.href = '/inreal-app.apk'; // This would be your actual APK file
    link.download = 'inreal-app.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div>
                <span className="bg-gradient-primary text-white-800 text-xs font-medium px-3 py-1 rounded-full">MVP</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              iNREAL
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Experience the future of mobile technology. Download Inreal and unlock 
              a world of infinite possibilities.
            </p>
          </div>

          {/* Features highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="flex items-center space-x-2 text-primary">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Smartphone className="h-5 w-5" />
              <span className="text-sm font-medium">Mobile Ready</span>
            </div>
          </div>

          {/* Download button */}
          <div className="space-y-4">
            <Button 
              variant="download" 
              size="lg" 
              onClick={handleDownload}
              className="group bg-gradient-primary "
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce " />
              Download APK
            </Button>
            <p className="text-sm text-muted-foreground">
              Version 1.1.0 • Android 7.0+
            </p>
          </div>
        </div>

        {/* Right content - Hero image */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Inreal App Preview" 
              className="w-full h-auto rounded-2xl shadow-glow-primary"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};