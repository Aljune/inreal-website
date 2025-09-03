import { InrealHero } from "../components/InrealHero";
import { InrealFeatures } from "../components/InrealFeatures";
import { InrealDownload } from "../components/InrealDownload";
import { InrealFooter } from "../components/InrealFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <InrealHero />
      <InrealFeatures />
      <InrealDownload />
      <InrealFooter />
    </div>
  );
};

export default Index;