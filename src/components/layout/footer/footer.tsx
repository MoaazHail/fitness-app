import { Image } from "@/components/shared";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-dark dark:bg-dark dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            {/* Logo */}
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              className=" h-14 w-20 order-1"
            />
            <p className="text-sm leading-relaxed">
              Push harder, go further. Your fitness journey starts today!
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className=" font-bold mb-4">CONTACT US</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className=" flex justify-center items-center border p-4 border-zinc-500 rounded-full">
                  <Phone className=" dark:fill-white size-4" />
                </div>
                <span>+91 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <div className=" flex justify-center items-center border p-4 border-zinc-500 rounded-full">
                  <Mail className="dark:fill-white size-4" />
                </div>
                <span>info@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Gym Timing */}
          <div>
            <h4 className="font-bold mb-4">OUR GYM TIMING</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 08:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 08:00 AM - 09:00 PM</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold mb-4">OUR LOCATION</h4>
            <p className="text-sm leading-relaxed">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
