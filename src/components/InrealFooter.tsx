import { Heart } from "lucide-react";

export const InrealFooter = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              iNREAL
            </span>
            <span className="text-muted-foreground">v1.1.0</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Inreal Team</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2025 Inreal. All rights reserved. | Ready for Vercel deployment
        </div>
      </div>
    </footer>
  );
};