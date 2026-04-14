"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, X, Cookie, Check } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true };
    setPreferences(newPrefs);
    localStorage.setItem("cookie-consent", JSON.stringify(newPrefs));
    setIsVisible(false);
    // Trigger analytics and marketing scripts here
  };

  const handleRejectNonEssential = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false };
    setPreferences(newPrefs);
    localStorage.setItem("cookie-consent", JSON.stringify(newPrefs));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
    // Trigger analytics/marketing based on preferences
    if (preferences.analytics) {
      // Initialize Google Analytics
      console.log("Analytics enabled");
    }
    if (preferences.marketing) {
      // Initialize Meta Pixel
      console.log("Marketing enabled");
    }
  };

  const togglePreference = (key: "analytics" | "marketing") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto max-w-4xl">
            <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between p-4 sm:p-6 border-b border-border">
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">
                      We use cookies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We use cookies to enhance your experience, analyze site usage, and deliver personalized content. 
                      You can choose which cookies to accept.{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={() => setIsVisible(false)}
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Details */}
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-4 sm:p-6 border-b border-border bg-muted/30"
                >
                  <div className="space-y-4">
                    {/* Necessary */}
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10">
                          <Check className="h-4 w-4 text-success" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Necessary Cookies</div>
                          <div className="text-xs text-muted-foreground">
                            Required for the website to function
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">Always On</Badge>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-info/10">
                          <svg className="h-4 w-4 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-sm">Analytics Cookies</div>
                          <div className="text-xs text-muted-foreground">
                            Help us understand how visitors interact with the website
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => togglePreference("analytics")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.analytics ? "bg-primary" : "bg-muted"
                        }`}
                        role="switch"
                        aria-checked={preferences.analytics}
                        aria-label="Toggle analytics cookies"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            preferences.analytics ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                          <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.72 4.72 0 013 11h18M11 5.882V19.24" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-sm">Marketing Cookies</div>
                          <div className="text-xs text-muted-foreground">
                            Used to deliver relevant advertisements
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => togglePreference("marketing")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.marketing ? "bg-secondary" : "bg-muted"
                        }`}
                        role="switch"
                        aria-checked={preferences.marketing}
                        aria-label="Toggle marketing cookies"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            preferences.marketing ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 justify-end p-4 sm:p-6 bg-muted/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-muted-foreground"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectNonEssential}
                >
                  Reject Non-Essential
                </Button>
                <Button
                  size="sm"
                  onClick={showDetails ? handleSavePreferences : handleAcceptAll}
                  className="bg-gradient-to-r from-primary to-secondary text-white"
                >
                  {showDetails ? "Save Preferences" : "Accept All"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
