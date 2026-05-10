import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Free",
        price: 0,
        period: "month",
        features: [
            "AI-powered thumbnail generation",
            "Standard support",
            "Access to core templates",
            "High-quality exports",
            "Basic customization tools"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 69,
        period: "month",
        features: [
            "Unlimited thumbnail generation",
            "Priority support",
            "Premium templates and styles",
            "Advanced editing controls",
            "Faster AI processing",
            "Brand customization tools",
            "High-resolution exports"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 99,
        period: "month",
        features: [
            "Everything included in Pro",
            "Dedicated account support",
            "Unlimited team workspaces",
            "Custom enterprise solutions",
            "Advanced workflow management"
        ],
        mostPopular: false
    }
];