"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  ArrowLeft,
  Loader2,
  Mail,
  Lock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [success, setSuccess] = useState<string | null>(null);

  const supabase = createClient();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Redirect to admin dashboard
      window.location.href = "/admin";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };


  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });

      if (error) throw error;

      setSuccess("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50/50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-center pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white mb-4">
                <GraduationCap className="h-7 w-7" />
              </div>
              <Badge className="mb-4 bg-white/20 text-white border-0">
                Admin Access
              </Badge>
              <CardTitle className="text-2xl font-bold">
                {mode === "signin" && "Sign In"}
                {mode === "signup" && "Create Account"}
                {mode === "forgot" && "Reset Password"}
              </CardTitle>
              <p className="text-white/80 mt-2 text-sm">
                {mode === "signin" && "Access your admin dashboard"}
                {mode === "signup" && "Create a new admin account"}
                {mode === "forgot" && "Enter your email to reset password"}
              </p>
            </motion.div>
          </CardHeader>

          <CardContent className="p-8">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <p className="text-sm text-emerald-700">{success}</p>
              </motion.div>
            )}

            <form
              onSubmit={
                mode === "signin" ? handleSignIn : handleForgotPassword
              }
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                />
              </motion.div>

              {mode !== "forgot" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-zinc-400" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2"
                  />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Please wait...
                    </>
                  ) : mode === "signin" ? (
                    "Sign In"
                  ) : mode === "signup" ? (
                    "Create Account"
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </motion.div>
            </form>

            <div className="mt-6 text-center space-y-2">
              {mode === "signin" ? (
                <>
                  <p className="text-sm text-zinc-600">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setMode("signup");
                        setError(null);
                        setSuccess(null);
                      }}
                      className="text-violet-600 hover:underline font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                  <p className="text-sm text-zinc-600">
                    <button
                      type="button"
                      onClick={() => {
                        setMode("forgot");
                        setError(null);
                        setSuccess(null);
                      }}
                      className="text-violet-600 hover:underline font-medium"
                    >
                      Forgot password?
                    </button>
                  </p>
                </>
              ) : (
                <p className="text-sm text-zinc-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("signin");
                      setError(null);
                      setSuccess(null);
                    }}
                    className="text-violet-600 hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
