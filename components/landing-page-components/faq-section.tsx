"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Flowvahub?",
    answer:
      "Flowvahub is your productivity sidekick — helping you discover new tools, manage subscriptions, and earn rewards for staying productive.",
  },
  {
    question: "How does team collaboration work?",
    answer:
      "Teams can share recommendations, optimize workflows together, view analytics, and manage shared subscriptions from a single dashboard. (Note: Rewards are not included for Teams.)",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your Pro or Team plan anytime. You'll keep access until the end of your billing cycle, and you can always downgrade to our Free plan.",
  },
  {
    question: "Do you offer mobile apps?",
    answer:
      "Yes 😎 Our iOS and Android apps are launching soon, so you can manage subscriptions, get recommendations, earn rewards, and stay connected anywhere.",
  },
  {
    question: "Can I connect with other tech professionals on Flowva?",
    answer:
      "Yes! Flowva has an active community of tech enthusiasts, freelancers, and remote professionals. You can connect with others, discuss tools, get feedback, and collaborate with like-minded users, all while discovering new ways to optimize your workflow.",
  },
  {
    question: "Is my data secure with Flowva?",
    answer:
      "Absolutely. Your data is private and never sold. You decide what to share, and it's only used to improve your experience.",
  },
  {
    question: "How do Smart Tool Recommendations work?",
    answer:
      "The more you use our platform, the better it understands your workflow — giving you smarter, more relevant tool suggestions over time.",
  },
  {
    question: "Can I manage all my subscriptions in one place?",
    answer:
      "Yes! Flowva tracks all your subscriptions in one place — sending renewal alerts, monitoring spending, and helping you save money.",
  },
  {
    question: "What if I need help getting started?",
    answer:
      "We provide onboarding guides, tutorials, and email support. Pro users get priority support, while Teams and Organizations receive dedicated onboarding and training.",
  },
  {
    question: "What rewards can I earn with Flowva?",
    answer:
      "All users earn basic rewards by using Flowva, with extra perks for Premium. Rewards come from completing simple tasks — trying recommended tools or sharing feedback — and can be redeemed for gift cards, cash, or community perks.",
  },
];

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-gray-100 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between text-left hover:bg-gray-200 transition-colors"
      >
        <span className="font-bold text-black text-base md:text-lg pr-4 flex-1">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className="w-4 h-4 md:w-5 md:h-5 text-black" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 md:px-8 md:py-5 pt-0">
              <p className="text-black text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  // Split FAQ items into two columns
  const leftColumnItems = faqItems.slice(0, 5);
  const rightColumnItems = faqItems.slice(5, 10);

  return (
    <section className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black uppercase"
        >
          Need Answers?
        </motion.h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6">
            {leftColumnItems.map((item, index) => (
              <FAQItemComponent key={index} item={item} index={index} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            {rightColumnItems.map((item, index) => (
              <FAQItemComponent
                key={index + 5}
                item={item}
                index={index + 5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

