import { Button } from "./ui/button";
import { Download, Shield, CheckCircle } from "lucide-react";

export const InrealDownload = () => {
  const handleDownload = () => {
    // Create a mock APK download
    const link = document.createElement('a');
    link.href = 'https://cfdrlkf9qpksfj5z.public.blob.vercel-storage.com/app-release.apk'; // This would be your actual APK file
    link.download = 'inreal-app.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-glow-primary mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Download</h3>
                <p className="text-muted-foreground text-sm">Get the APK file instantly</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Install</h3>
                <p className="text-muted-foreground text-sm">Safe and secure installation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enjoy</h3>
                <p className="text-muted-foreground text-sm">Start using Inreal today</p>
              </div>
            </div>

            <Button 
              variant="download" 
              size="lg" 
              onClick={handleDownload}
              className="text-lg px-12 py-6 h-auto"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Inreal APK
            </Button>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ Free Download</span>
              <span>✓ No Registration Required</span>
              <span>✓ Safe & Secure</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              By downloading, you agree to our Terms of Service and Privacy Policy
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span>Version: 1.1.0</span>
              <span>Updated: September 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};