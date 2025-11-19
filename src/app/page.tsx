"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart3, Battery, Bell, CheckCircle, Cpu, DollarSign, HardDrive, HelpCircle, Laptop, MessageSquare, Monitor, Sparkles, Video, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Features", id: "features" },
            { name: "Specs", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Pricing", id: "pricing" },
            { name: "Support", id: "faq" }
          ]}
          brandName="MacBook Pro"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="MacBook Pro. Supercharged for pros."
          description="The most powerful MacBook Pro ever. With next-generation M3 chip, stunning Liquid Retina XDR display, and all-day battery life."
          tag="New"
          tagIcon={Sparkles}
          buttons={[
            { text: "Buy now", href: "pricing" },
            { text: "Learn more", href: "features" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565760198-qw7hpvnz.jpg"
          imageAlt="MacBook Pro open showing vibrant display"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Built for professionals who demand the ultimate in performance, creativity, and reliability"
          buttons={[
            { text: "View Specifications", href: "features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Pro Performance. Pro Display. Pro Everything."
          description="Experience unprecedented speed and efficiency with breakthrough features designed for professionals"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            { title: "M3 Pro Chip", icon: Cpu },
            { title: "Liquid Retina XDR", icon: Monitor },
            { title: "22-Hour Battery", icon: Battery },
            { title: "1080p FaceTime HD", icon: Video }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Choose Your MacBook Pro"
          description="Find the perfect MacBook Pro for your workflow and budget"
          tag="Models"
          tagIcon={Laptop}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Apple",
              name: "MacBook Pro 13\"",
              price: "$1,299",
              rating: 5,
              reviewCount: "12.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565770368-vp8vb2sv.jpg",
              imageAlt: "MacBook Pro 13-inch"
            },
            {
              id: "2",
              brand: "Apple",
              name: "MacBook Pro 14\"",
              price: "$1,999",
              rating: 5,
              reviewCount: "8.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565771524-5l6xzwr3.jpg",
              imageAlt: "MacBook Pro 14-inch"
            },
            {
              id: "3",
              brand: "Apple",
              name: "MacBook Pro 16\"",
              price: "$2,499",
              rating: 5,
              reviewCount: "6.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565772866-57zsdh8v.jpg",
              imageAlt: "MacBook Pro 16-inch"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="MacBook Pro Pricing"
          description="Choose the configuration that fits your professional needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "macbook-13",
              badge: "Entry Pro",
              badgeIcon: Sparkles,
              price: "$1,299",
              subtitle: "Perfect for students and creative professionals",
              buttons: [
                { text: "Buy Now", href: "https://apple.com" },
                { text: "Learn More", href: "features" }
              ],
              features: [
                "M3 chip with 8-core CPU",
                "8GB unified memory",
                "256GB SSD storage",
                "13.3-inch Retina display",
                "Two Thunderbolt ports"
              ]
            },
            {
              id: "macbook-14",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "$1,999",
              subtitle: "Ideal for professionals and power users",
              buttons: [
                { text: "Buy Now", href: "https://apple.com" },
                { text: "Compare", href: "features" }
              ],
              features: [
                "M3 Pro chip with 11-core CPU",
                "18GB unified memory",
                "512GB SSD storage",
                "14.2-inch Liquid Retina XDR display",
                "Three Thunderbolt 4 ports, HDMI port"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Performance That Speaks Numbers"
          description="See how MacBook Pro delivers exceptional performance across all metrics"
          tag="Benchmarks"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Zap,
              title: "CPU Performance",
              value: "3.5x"
            },
            {
              id: "2",
              icon: Battery,
              title: "Battery Life",
              value: "22 hrs"
            },
            {
              id: "3",
              icon: Monitor,
              title: "Display Brightness",
              value: "1000 nits"
            },
            {
              id: "4",
              icon: HardDrive,
              title: "Memory Bandwidth",
              value: "400 GB/s"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Loved by Professionals Worldwide"
          description="See what creative professionals are saying about MacBook Pro"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahcreates",
              testimonial: "The M3 chip has completely transformed my video editing workflow. Rendering times are incredibly fast and the battery lasts all day.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565779321-4u9e5kfj.jpg",
              imageAlt: "Sarah Chen, Video Editor"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              handle: "@devmarcus",
              testimonial: "As a software developer, the performance boost is remarkable. Compiling large codebases is now effortless and the display quality is stunning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565780536-wwgncxry.jpg",
              imageAlt: "Marcus Rodriguez, Developer"
            },
            {
              id: "3",
              name: "Emma Thompson",
              handle: "@emmadesigns",
              testimonial: "The Liquid Retina XDR display shows colors like I've never seen before. Perfect for my graphic design work and client presentations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565781867-ovjzcrqj.jpg",
              imageAlt: "Emma Thompson, Graphic Designer"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidexec",
              testimonial: "The build quality and performance make this the ultimate business laptop. Battery life easily gets me through long workdays and travel.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565783028-sa5edd5y.jpg",
              imageAlt: "David Kim, Business Executive"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about MacBook Pro"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565784331-m82o2lob.jpg"
          imageAlt="Customer support representative"
          mediaPosition="right"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes the M3 chip special?",
              content: "The M3 chip delivers up to 3.5x faster performance than previous generation Intel processors, with industry-leading power efficiency and unified memory architecture."
            },
            {
              id: "2",
              title: "How long does the battery last?",
              content: "MacBook Pro provides up to 22 hours of battery life for video playback, making it perfect for all-day work sessions and long flights."
            },
            {
              id: "3",
              title: "Is it compatible with my existing accessories?",
              content: "Yes, MacBook Pro features Thunderbolt 4 ports that are compatible with thousands of accessories, displays, and storage devices."
            },
            {
              id: "4",
              title: "What's included in the box?",
              content: "Each MacBook Pro includes the laptop, MagSafe 3 charging cable, USB-C to MagSafe 3 cable, and 67W USB-C Power Adapter (or higher for 16-inch models)."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          tagIcon={Bell}
          title="Get the Latest MacBook Pro News"
          description="Subscribe to receive updates about new MacBook Pro models, features, and exclusive offers."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763565760198-qw7hpvnz.jpg"
          imageAlt="MacBook Pro newsletter signup"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about MacBook Pro. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="MacBook Pro"
          copyrightText="© 2025 | MacBook Pro Presentation"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Specifications", href: "about" },
                { label: "Models", href: "products" },
                { label: "Pricing", href: "pricing" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Technical Support", href: "https://support.apple.com" },
                { label: "Warranty", href: "https://apple.com/support/warranty" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Apple", href: "https://apple.com/about" },
                { label: "Newsroom", href: "https://apple.com/newsroom" },
                { label: "Careers", href: "https://jobs.apple.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}