"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validator, type Validator } from "microservices-shared";

import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Validator['LoginUser']>({
    resolver: zodResolver(validator.loginSchema),
  });

  const onSubmit = async (data: Validator['LoginUser']) => {
    try {
      console.log("Login data:", data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <Card className="card-animate w-full max-w-sm border-zinc-800 bg-zinc-900/70 backdrop-blur supports-backdrop-filter:bg-zinc-900/60">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-zinc-300">Welcome back</CardTitle>
          <CardDescription className="text-zinc-400">
            Sign in to your account
          </CardDescription>
        </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-zinc-950 border-zinc-800 text-zinc-50 placeholder:text-zinc-600"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="text-zinc-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-zinc-950 border-zinc-800 text-zinc-50 placeholder:text-zinc-600"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 rounded-lg bg-zinc-50 text-zinc-900 hover:bg-zinc-200 disabled:opacity-50"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-zinc-200 hover:underline">
                Create one
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    );
}
