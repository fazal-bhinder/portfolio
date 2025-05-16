"use client";

import { SectionHeading } from "@/app/components/ui/section-heading";
import { ContactForm } from "@/app/components/ui/contact-form";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground max-w-md">

                {`Feel free to reach out to me through the contact form or via the information below.
                I'm always open to discussing new projects, creative ideas, or opportunities.`}
                {`Feel free to reach out to me through the contact form or via the information below.I'm always open to discussing new projects, creative ideas, or opportunities.`}

              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <div 
                    className="text-muted-foreground  transition-colors"
                  >
                    bhinderfazal@gmail.com
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <div
                    
                    className="text-muted-foreground  transition-colors"
                  >
                    +91 9045097615
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
