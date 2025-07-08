import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { authStorage, canAccessRoute } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: string;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const user = authStorage.getUser();

  useEffect(() => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to access this page",
        variant: "destructive",
      });
      setLocation("/login");
      return;
    }

    if (requiredRole && !canAccessRoute(user, requiredRole)) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page",
        variant: "destructive",
      });
      setLocation("/");
      return;
    }
  }, [user, requiredRole, setLocation, toast]);

  if (!user || (requiredRole && !canAccessRoute(user, requiredRole))) {
    return null;
  }

  return <>{children}</>;
}
