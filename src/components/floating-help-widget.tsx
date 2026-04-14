"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  HelpCircle,
  Calendar,
  ChevronRight,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  { icon: MessageCircle, label: "Chat on Telegram", href: "https://t.me/castarokio", color: "from-blue-500 to-cyan-500" },
  { icon: Calendar, label: "Book a Consultation", href: "/about#contact", color: "from-primary to-secondary" },
  { icon: HelpCircle, label: "View FAQ", href: "/resources#faq", color: "from-amber-500 to-orange-500" },
];

const faqQuickAnswers = [
  "How do I apply for scholarships?",
  "What documents do I need?",
  "How much does it cost?",
  "Can I work while studying?",
];

export function FloatingHelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setMessage("");
    }
  };

  return (
    <>
      {/* Widget Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-80 sm:w-96 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">How can we help?</h3>
                    <p className="text-white/80 text-xs">We typically reply within minutes</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close help widget"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="max-h-[400px] overflow-y-auto">
                {/* Quick Actions */}
                <div className="p-4 border-b border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    {quickActions.map((action) => (
                      <Link key={action.label} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined}>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${action.color} text-white flex-shrink-0`}>
                            <action.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-foreground">{action.label}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick FAQ */}
                <div className="p-4 border-b border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">Quick Answers</h4>
                  <div className="space-y-2">
                    {faqQuickAnswers.map((q) => (
                      <Link key={q} href="/resources#faq">
                        <button className="w-full text-left p-2.5 rounded-lg hover:bg-accent transition-colors">
                          <span className="text-sm text-muted-foreground">{q}</span>
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3 rounded-xl bg-success/10 border border-success/20 text-center"
                    >
                      <p className="text-sm text-success font-medium">Message sent! We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your question..."
                        className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        aria-label="Type your question"
                      />
                      <Button
                        size="icon"
                        className="h-9 w-9 flex-shrink-0 bg-gradient-to-r from-primary to-secondary"
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        aria-label="Send message"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          aria-label={isOpen ? "Close help" : "Open help"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="help"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold"
          >
            1
          </motion.div>
        )}
      </div>
    </>
  );
}
