"use client"

import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Heart, Home, Microscope, Rocket, Code2, Search, Clock, Mail, Phone } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CaseStudy {
  title: string;
  description: string;
  url: string;
  image: string;
}

const ProposalPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      title: "Patch Consultancy",
      description: "Professional hospitality consultancy",
      url: "patchconsultancy.co.uk",
      image: "/images/casestudies/patch.webp"
    },
    {
      title: "Gigabyte Software",
      description: "Technology solutions platform",
      url: "gigabyte.software",
      image: "/images/casestudies/gigabyte.webp"
    },
    {
      title: "Vanderpump FX",
      description: "Forex services website",
      url: "vanderpumpfx.com",
      image: "/images/casestudies/vanderpumpfx.webp"
    }
  ];

  const openEmail = () => {
    window.location.href = "mailto:jack@pumpymusic.co.uk";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url('/images/loft.jpeg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-8" data-aos="fade-down">
          <div className="flex items-center space-x-2 text-gray-200">
            <Home className="h-5 w-5" />
            <span>Website Development Proposal for</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Xtra Loft Space
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Creating a modern, engaging online presence that showcases your expertise
            in loft conversions and home improvements.
          </p>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8" data-aos="fade-right">

          <Card className="p-8 border-2">
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-gray-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">A Personal Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in creating websites that truly represent your business. Through our design session,
                  we'll discuss your vision, layout preferences, and the perfect imagery to showcase your work.
                  This isn't just another website build - it's about crafting your digital presence together.
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="group relative overflow-hidden rounded-lg p-6 border-2 transition-all hover:border-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Want to learn more about my work?</h4>
                <p className="text-sm text-gray-600">See my full portfolio and development process</p>
              </div>
              <a
                href="https://vanderpump.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-medium text-black transition-transform group-hover:translate-x-2"
              >
                <b>Visit vanderpump.tech</b>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>

            {/* Subtle animated background gradient */}
            <div className="absolute inset-0 -z-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-gradient"></div>
            </div>
          </Card>

        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h3 className="text-3xl font-semibold" data-aos="fade-up">How We'll Work Together</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-full p-3 flex-shrink-0">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">1. Discovery & Design</h4>
                  <p className="text-gray-600">Quick design session to align on vision, layout, and imagery choices</p>
                </div>
              </div>
            </div>
            <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-full p-3 flex-shrink-0">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">2. Development</h4>
                  <p className="text-gray-600">Swift, professional implementation of your website</p>
                </div>
              </div>
            </div>
            <div className="space-y-4" data-aos="fade-right" data-aos-delay="300">
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-full p-3 flex-shrink-0">
                  <Microscope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">3. Review & Refine</h4>
                  <p className="text-gray-600">Collaborative feedback and adjustments</p>
                </div>
              </div>
            </div>
            <div className="space-y-4" data-aos="fade-left" data-aos-delay="400">
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-full p-3 flex-shrink-0">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">4. Launch & Support</h4>
                  <p className="text-gray-600">Smooth deployment with ongoing assistance</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 p-6 border border-gray-200 rounded-lg bg-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center space-x-3">
              <Clock className="h-[20px] w-[20px] flex-shrink-0 text-gray-600" />
              <p className="text-gray-600">
                Expected timeline: Your new website will be fully designed, developed, and deployed within 3-4 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h3 className="text-3xl font-semibold" data-aos="fade-up">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyView key={index} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-8" data-aos="fade-up">
          <h3 className="text-3xl font-semibold">Pricing</h3>
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">£2,500 + VAT</h4>
                <span className="text-gray-600">Complete Package</span>
              </div>
              <Separator />
              <div className="space-y-4">
                <p className="text-gray-600">Everything included:</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0" />
                    Complete website development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0" />
                    Responsive design for all devices
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0" />
                    Professional content writing and copywriting
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0" />
                    Personal design consultation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0" />
                    Ongoing support at no extra cost
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8" data-aos="fade-up">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-semibold">Let's Create Something Great</h3>
            <p className="text-gray-600">
              Ready to get started? Get in touch and we'll begin bringing your vision to life.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button
              onClick={openEmail}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              jack@pumpymusic.co.uk
            </button>
            <a
              href="tel:07831640003"
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              07831 640003
            </a>
          </div>
          <div className="text-center text-gray-600 mt-8">
            For more information about my work, visit{' '}
            <a
              href="https://vanderpump.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              vanderpump.tech
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProposalPage;

function CaseStudyView({ study, index }: { study: CaseStudy, index: number }) {
  return (
    <a
      key={index}
      href={`https://${study.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Card className="overflow-hidden">
        <div className='aspect-[16/10] relative'>
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h4 className="font-semibold mb-2">{study.title}</h4>
              <p className="text-sm">{study.description}</p>
              <div className="mt-4 flex items-center justify-center">
                <span>Visit Site</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

      </Card>
    </a>
  );
}
