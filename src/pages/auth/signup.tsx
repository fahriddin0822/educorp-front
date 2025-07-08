import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { signupSchema, SignupData } from "../../shared/schema";
import { authApi } from "@/lib/api";
import { authStorage } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      role: "student",
    },
  });

  const signupMutation = useMutation({
    mutationFn: authApi.signup,
    onSuccess: (data) => {
      authStorage.setUser(data.user);
      toast({
        title: "Welcome to EduCorp!",
        description: "Your account has been created successfully.",
      });
      
      // Redirect to dashboard based on role
      const dashboardPath = data.user.role === "admin" ? "/dashboard/admin" 
        : data.user.role === "teacher" ? "/dashboard/teacher" 
        : "/dashboard/student";
      setLocation(dashboardPath);
    },
    onError: (error: any) => {
      toast({
        title: "Sign up failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SignupData) => {
    signupMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Ro'yxatdan o'tish</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ism familiyangiz</FormLabel>
                    <FormControl>
                      <Input placeholder="Ism familiyangizni kiriting" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Emailingizni kiriting" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parol</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Parolingizni kiriting" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kim?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="student">Talaba</SelectItem>
                        <SelectItem value="teacher">Ustoz</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={signupMutation.isPending}
              >
                {signupMutation.isPending && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Davom etish
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Akountingiz bormi?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Kirish
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
