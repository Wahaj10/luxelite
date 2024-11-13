"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Services } from "./Services";
import image1 from "./interior1.jpg";
import ambient1 from "./ambient1.jpg";
import ambient2 from "./ambient2.jpg";
import ambient3 from "./ambient3.jpg";
import ambient4 from "./ambient4.jpg";
import ambient5 from "./ambient5.jpg";
import ambient6 from "./ambient6.jpg";
import celestial1 from "./celestial1.jpg";

export function LandingPageComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const testimonials = [
    {
      name: "John Doe",
      text: "The ambient lights they installed in my car are amazing! It's like driving a spaceship now.",
    },
    {
      name: "Jane Smith",
      text: "Great service and high-quality products. My car interior looks stunning at night.",
    },
    {
      name: "Mike Johnson",
      text: "Absolutely love the customizable options. It's a whole new driving experience!",
    },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#home"
              className="text-2xl font-bold text-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                LuxeLite Auto
              </motion.span>
            </motion.a>
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate to different sections of our website.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Main Section with Animation and Parallax */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div ref={parallaxRef} className="absolute inset-0 z-0">
          <Image
            src={image1}
            fill={true}
            // width="400"
            // height="300"
            alt="Car interior with ambient lighting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className={`relative z-20 bg-slate-400/[.17] backdrop-blur-[10px] w-[68%] pt-5 rounded-[25px] text-center text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl font-bold mb-2">LuxeLite Auto</h1>
          <h2 className="text-3xl lg:px-16 md:px-8 mb-8">
            Experience the future of car interiors with our custom ambient
            lighting solutions
          </h2>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-gradient-x"></div>
          <div className="absolute inset-0 opacity-50">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Portfolio/Gallery Section */}
      <section id="portfolio" className="relative py-16 bg-white z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ambient1, ambient2, ambient3, ambient4, ambient5, ambient6].map(
              (item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <Image
                    width="400"
                    height="300"
                    src={item}
                    alt={`Car interior ${i}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">
                      View Project
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Improved Services Section */}
      <section id="services" className="relative py-16 bg-gray-100 z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Ambient Lighting Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Services />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Celestial Roof
            </h3>
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h4 className="text-xl font-semibold mb-4">
                  Transform your car&apos;s ceiling into a starry night sky
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fiber optic star ceiling installation</li>
                  <li>Customizable constellations and patterns</li>
                  <li>Shooting star effects</li>
                  <li>Dimmable and color-changing options</li>
                  <li>Integrates with ambient lighting system</li>
                </ul>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <Image
                  width="400"
                  height="300"
                  src={celestial1}
                  alt="Starlight roof example"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button variant="secondary" size="lg">
                Explore Celestial Roof
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-16 bg-white z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="text-center px-12">
                <p className="text-lg italic mb-4">
                  {testimonials[currentTestimonial].text}
                </p>
                <p className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-16 bg-gray-100 z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                width="400"
                height="300"
                src="https://placehold.co/600x600.jpg?text=Image+1"
                alt="Our team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                At LuxeLite Auto, we are passionate about transforming car
                interiors with cutting-edge ambient lighting solutions. Our team
                of expert technicians brings years of experience and a keen eye
                for design to every installation.
              </p>
              <p className="text-lg mb-4">
                From subtle accents to bold statements, we work closely with our
                clients to create custom lighting experiences that reflect their
                unique style and enhance their driving pleasure.
              </p>
              <p className="text-lg">
                With a commitment to quality and innovation, we&apos;re
                dedicated to illuminating the future of automotive interiors,
                one vehicle at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative py-16 bg-white z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input type="tel" placeholder="Your Phone" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <span>info@luxeliteauto.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600 self-baseline" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40072.40740261715!2d-114.21793899109127!3d51.117214964704324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537168db0f87d79f%3A0xdbb1babe4f909c7b!2s303%20Ranchridge%20Bay%20NW%2C%20Calgary%2C%20AB%20T3G%201V5!5e0!3m2!1sen!2sca!4v1731461022042!5m2!1sen!2sca"
                      width={"80%"}
                      // height="450"
                      // style="border:0;"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
