import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Microsoft",
    logo: "https://img.microsoft.com/en-us/ms-logo.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Apple",
    logo: "https://www.apple.com/ac/globalnav/7/en_US/images/globalnav/apple_image__b5er5ngrzxqq_large.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

const CompanyShowcase = () => {
  return (
    <section className="w-full py-8 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Trusted by Leading Companies</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Join thousands of companies using our AI-powered interview practice platform
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-none w-[200px] px-4"
              >
                <Card className="p-4 flex items-center justify-center h-20 bg-background">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className={cn(
                      "max-h-8 w-auto object-contain",
                      company.name === "Meta" && "dark:invert"
                    )}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase; 