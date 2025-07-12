import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Xabar yuborildi!",
      description: "Tez orada siz bilan bog'lanamiz.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary clip-skew" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Biz bilan aloqa</h2>
          <p className="text-xl opacity-90 text-white">Biz siz bilan tez orada bog'lanamiz</p>
        </div>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="tel"
              placeholder="Telefon raqamingizni kiriting"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900 border-none !ring-0 !outline-none focus-visible:!ring-0 focus-visible:!outline-none"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-primary hover:bg-white font-semibold hover-scale"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
