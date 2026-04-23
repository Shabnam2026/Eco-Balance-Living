/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  Building2, 
  Palette, 
  Ruler, 
  FileEdit, 
  Hammer, 
  Leaf, 
  Quote, 
  X,
  ChevronRight
} from 'lucide-react';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/haribahari71@gmail.com';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      alert('Request sent! We will contact you soon.');
      form.reset();
    } catch {
      alert('Sorry, we could not send your request. Please try again or email us directly at haribahari71@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalSubmit = (e: FormEvent) => {
    e.preventDefault();
    closeModal();
    alert('Consultation request confirmed!');
  };

  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Vertical garden in airport" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC0cnsuVqv7je57ZTabkZEchHZDXzaW5843trZ4QX5kidQZtpNoSihA2o8JHmdhB1-7GeNnP4TKrzuw34W-YDm5tVYoBDwKdBPJ5AHGmZJpLlZ82RNoISYwlbloNScys1yzzrycMB9tkwNvrmN3Q1-o6NllOVw_PBgQeDWehhzSB2sVtbpAth3ZnRdCZAYlLejObmCiIZ_ltrhBiAEJqjxsPOjpRR1Y9q8wPbJEkEZcGJRFgrHfugelc278dnzt58gDiOoeuANbFT7" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            alt="EcoBalance Logo" 
            className="h-[72px] w-auto object-contain mx-auto mb-8 block" 
            src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/pomelli_bdna_image_0414.png" 
            referrerPolicy="no-referrer"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#87CEEB] font-bold tracking-[0.2em] uppercase text-sm mb-6"
          >
            Malaysia's Commercial Living Wall Specialist
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl text-white mb-8 max-w-4xl mx-auto leading-tight"
          >
            Breathe Life Into Your Space with a <span className="text-primary-container">Custom Living Wall.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Transforming urban concrete into thriving ecosystems. Engineering high-performance vertical greenery for Malaysia's iconic commercial landscapes.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="btn-primary px-10 py-5 rounded-lg font-bold text-lg shadow-xl uppercase tracking-wider cursor-pointer"
          >
            BOOK YOUR SITE ASSESSMENT
          </motion.button>
          <p className="text-white/35 font-body font-normal text-[0.78rem] mt-[14px]">
            * Free site assessment subject to project qualification. Terms & Conditions apply — see below.
          </p>
        </div>
      </section>

      {/* Section 2: Value */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16 flex flex-col items-center">
            <span className="inline-block bg-[#1b1c1c] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4 uppercase">
              WHY A LIVING WALL
            </span>
            <div className="w-12 h-[3px] bg-[#87CEEB] mb-6"></div>
            <h2 className="font-headline text-4xl text-on-surface mb-4">The Value of Living Architecture</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Discover the measurable benefits of integrating vertical nature into your commercial environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
            <ValueCard 
              icon={<Wind size={24} />}
              title="Cleaner Air"
              description="Natural bio-filtration systems that actively remove VOCs and CO2, creating a healthier indoor microclimate."
            />
            <ValueCard 
              icon={<Building2 size={24} />}
              title="Smarter Buildings"
              description="Enhance acoustic insulation and reduce energy costs through natural thermal regulation and evaporative cooling."
            />
            <ValueCard 
              icon={<Palette size={24} />}
              title="Visual Transformation"
              description="Convert passive walls into dynamic art pieces that increase property value and boost occupant well-being."
            />
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openModal}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-lg uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              CONSULT A VERTICAL GARDEN EXPERT
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Trust */}
      <section className="py-24 bg-[#f0f0f0]">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16 flex flex-col items-center">
            <span className="inline-block bg-[#313131] text-white px-6 py-2 rounded-full text-xs font-bold tracking-[0.15em] mb-4 uppercase">
              OUR CLIENTS
            </span>
            <div className="w-12 h-[3px] bg-[#46D4FE] mb-10"></div>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-[#1b1c1c] mb-6 tracking-tight">
              Transforming Malaysia's Most Iconic Spaces
            </h2>
            <p className="text-[#6d7b63] text-lg max-w-3xl mx-auto leading-relaxed">
              Trusted by leading developers and institutions to deliver high-impact green infrastructure projects nationwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-6xl mx-auto mt-12">
            <TrustLogo src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/Screenshot-2026-04-14-232340.png" alt="KLIA" />
            <TrustLogo src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/LogoJLNFull_Size.png" alt="JLN" />
            <TrustLogo src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/klia.jpg" alt="Allianz" />
            <TrustLogo src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/Decathlon.png" alt="Decathlon" />
          </div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16 flex flex-col items-center">
            <span className="inline-block bg-inverse-surface text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4 uppercase">
              SELECTED PROJECTS
            </span>
            <div className="w-12 h-[3px] bg-[#87CEEB] mb-6"></div>
            <h2 className="font-headline text-4xl text-on-surface mb-4">Our Living Masterpieces</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Explore our portfolio of bespoke vertical gardens that define the modern urban landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ProjectCard 
              img="https://borneohalfmarathon.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-17-at-08.42.09-Copy.jpeg"
              title="KLIA Terminal"
              category="Infrastructure & Public Space"
            />
            <ProjectCard 
              img="https://borneohalfmarathon.com/wp-content/uploads/2026/04/worq-integra-scaled.jpg"
              title="Allianz Office"
              category="Corporate Workplace"
            />
            <ProjectCard 
              img="https://borneohalfmarathon.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-17-at-08.42.10-2.jpeg"
              title="Luxury Hotel Lobby"
              category="Hospitality Design"
            />
            <ProjectCard 
              img="https://borneohalfmarathon.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-17-at-08.42.09-3.jpeg"
              title="Living Wall Rescue"
              category="Maintenance & Restoration"
            />
          </div>
          <button 
            onClick={openModal}
            className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer"
          >
            CONSULT A VERTICAL GARDEN EXPERT
          </button>
        </div>
      </section>

      {/* Section 5: Use Cases */}
      <section className="w-full overflow-hidden">
        {/* Row 1: Corporate */}
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img 
              alt="Corporate Headquarters Living Wall" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/Wisma-IAV-1-Copy-scaled.jpg" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#f5f5f5] flex items-center justify-center p-8 md:p-16 lg:p-24 text-center md:text-left">
            <div className="max-w-xl">
              <span className="inline-block bg-[#1b1c1c] text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
                CORPORATE HEADQUARTERS & GOVERNMENT
              </span>
              <h3 className="font-headline text-3xl md:text-4xl text-on-surface mb-6 leading-tight">
                Showcase Your Commitment to Sustainability
              </h3>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Scale-focused vertical landscaping for high-traffic environments and official state properties. Transform institutional spaces into breathing landmarks of environmental stewardship.
              </p>
              <button 
                onClick={openModal}
                className="bg-[#67ff04] text-[#1b1c1c] px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer"
              >
                BOOK YOUR SITE ASSESSMENT
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Luxury */}
        <div className="flex flex-col md:flex-row-reverse min-h-[500px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img 
              alt="Luxury Hotel Lobby Living Wall" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://borneohalfmarathon.com/wp-content/uploads/2026/04/ISKL.jpg" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 lg:p-24 text-center md:text-left">
            <div className="max-w-xl">
              <span className="inline-block bg-[#1b1c1c] text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
                LUXURY DEVELOPMENTS & HOSPITALITY
              </span>
              <h3 className="font-headline text-3xl md:text-4xl text-on-surface mb-6 leading-tight">
                Deliver a Premium, Serene Experience
              </h3>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Boutique designs focusing on aesthetics, guest satisfaction, and premium architectural integration. Elevate hospitality through sophisticated biophilic design.
              </p>
              <button 
                onClick={openModal}
                className="bg-[#67ff04] text-[#1b1c1c] px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer"
              >
                BOOK YOUR SITE ASSESSMENT
              </button>
            </div>
          </div>
        </div>

        {/* Dark strip component */}
        <div className="bg-[#1b1c1c] py-16">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-white text-2xl md:text-3xl font-headline font-bold tracking-wide">
              Ready to create your natural centerpiece?
            </h2>
            <button 
              onClick={openModal}
              className="bg-[#67ff04] text-[#1b1c1c] px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-wider whitespace-nowrap cursor-pointer"
            >
              GET STARTED NOW
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-24 bg-inverse-surface text-white">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4 uppercase">
              OUR PROCESS
            </span>
            <div className="w-12 h-[3px] bg-[#87CEEB] mb-6"></div>
            <h2 className="font-headline text-4xl text-white mb-4">How It Works</h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              From initial feasibility study to lifecycle maintenance, we manage every phase of your green transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <ProcessStep 
              num="01"
              icon={<Ruler size={32} />}
              title="Site Assessment"
              description="Light, structure and irrigation feasibility assessment"
            />
            <ProcessStep 
              num="02"
              icon={<FileEdit size={32} />}
              title="Design Proposal"
              description="Bespoke plant selection curated for KL's climate and interior aesthetics."
            />
            <ProcessStep 
              num="03"
              icon={<Hammer size={32} />}
              title="Installation"
              description="Proprietary pot system and automatic hydroponic system deployment."
            />
            <ProcessStep 
              num="04"
              icon={<Leaf size={32} />}
              title="Maintenance"
              description="Monthly professional plant care and system maintenance"
            />
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openModal}
              className="btn-primary px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer"
            >
              START YOUR PROJECT JOURNEY
            </button>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonial */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16 flex flex-col items-center">
            <span className="inline-block bg-inverse-surface text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4 uppercase">
              CLIENT REVIEW
            </span>
            <div className="w-12 h-[3px] bg-[#87CEEB] mb-6"></div>
            <h2 className="font-headline text-4xl text-on-surface">What Our Clients Say</h2>
          </div>
          <div className="flex justify-center mb-16">
            <div className="bg-inverse-surface text-white p-12 md:p-20 border-l-[5px] border-primary-container max-w-4xl relative text-left">
              <Quote className="absolute -top-8 left-12 text-6xl text-primary-container opacity-50 w-16 h-16" />
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10">
                "'EcoBalance rose up to every challenge we threw their way! They were professional in their conduct, technically sound in their approach and can adapt quickly to issues and late changes. They created little oasis' for weary travellers to feast their eyes on and softened the look of KL International Airport with luxurious rainforest themed Green Walls. We look forward to working with them on future projects. Well done, EcoBalance!'"
              </blockquote>
              <div>
                <p className="font-headline text-xl font-bold">Saadah Zakariah</p>
                <p className="text-primary-container text-sm font-bold tracking-widest uppercase">
                  Senior Executive, Landside Management | MALAYSIA AIRPORTS (SEPANG) SDN BHD
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openModal}
              className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer"
            >
              BOOK YOUR SITE ASSESSMENT
            </button>
          </div>
        </div>
      </section>

      {/* Refined Footer Form Section */}
      <footer className="bg-[#313131] border-t-2 border-[#67FF04] py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="inline-block bg-white/15 text-white px-6 py-2 rounded-[20px] text-xs font-bold tracking-[0.18em] mb-4 uppercase">
              GET IN TOUCH
            </span>
            <div className="w-[48px] h-[3px] bg-[#46D4FE] mb-8"></div>
            <h2 className="font-headline text-4xl md:text-5xl text-white font-[900] mb-6">
              Request Your Custom Quotation & Consultation
            </h2>
            <p className="text-white/60 font-body text-lg max-w-3xl mx-auto leading-relaxed">
              For commercial and institutional spaces · Projects from RM20,000 · Receive your tailored proposal via email within 24 hours.
            </p>
          </div>
          {/* Form Card */}
          <div className="max-w-[760px] mx-auto bg-white/5 border border-white/15 rounded-[12px] p-8 md:p-12">
            <form className="space-y-8" onSubmit={handleFormSubmit}>
              <input type="hidden" name="_subject" value="New Quotation Request — EcoBalance Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="Full Name" name="name" placeholder="Enter your full name" required />
                <FormInput label="Email Address" name="email" placeholder="name@company.com" type="email" required />
              </div>
              <FormInput label="Phone Number" name="phone" placeholder="+60 1x-xxxxxxx" type="tel" required />
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="Project Location / Area (Optional)" name="location" placeholder="e.g. Bangsar, KL" />
                <div className="flex flex-col gap-2">
                  <label className="text-[0.72rem] font-[600] tracking-[0.08em] text-white/70 uppercase font-body">
                    Project Type <span className="text-white/40 font-normal lowercase">(Optional)</span>
                  </label>
                  <select name="project_type" defaultValue="" className="w-full bg-white/[0.08] border border-white/[0.18] rounded-[4px] py-4 px-4 text-white placeholder-white/[0.28] form-input-focus transition-all appearance-none cursor-pointer">
                    <option className="bg-[#313131]" disabled value="">Select Type</option>
                    <option className="bg-[#313131]" value="Corporate Office">Corporate Office</option>
                    <option className="bg-[#313131]" value="Retail Commercial">Retail Commercial</option>
                    <option className="bg-[#313131]" value="Healthcare">Healthcare</option>
                    <option className="bg-[#313131]" value="Hospitality">Hospitality</option>
                    <option className="bg-[#313131]" value="Residential">Residential</option>
                    <option className="bg-[#313131]" value="Government">Government</option>
                    <option className="bg-[#313131]" value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="Approximate Wall Size (Optional)" name="wall_size" placeholder="e.g. 15 sq meters" />
                <div className="flex flex-col gap-2">
                  <label className="text-[0.72rem] font-[600] tracking-[0.08em] text-white/70 uppercase font-body">
                    Budget Range <span className="text-white/40 font-normal lowercase">(Optional)</span>
                  </label>
                  <select name="budget" defaultValue="" className="w-full bg-white/[0.08] border border-white/[0.18] rounded-[4px] py-4 px-4 text-white placeholder-white/[0.28] form-input-focus transition-all appearance-none cursor-pointer">
                    <option className="bg-[#313131]" disabled value="">Select Budget Range</option>
                    <option className="bg-[#313131]" value="RM 10,000 - RM 30,000">RM 10,000 - RM 30,000</option>
                    <option className="bg-[#313131]" value="RM 30,000 - RM 60,000">RM 30,000 - RM 60,000</option>
                    <option className="bg-[#313131]" value="RM 60,000 - RM 100,000">RM 60,000 - RM 100,000</option>
                    <option className="bg-[#313131]" value="RM 100,000+">RM 100,000+</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.72rem] font-[600] tracking-[0.08em] text-white/70 uppercase font-body">
                  Additional Notes <span className="text-[#67FF04] ml-0.5">*</span>
                </label>
                <textarea
                  className="w-full bg-white/[0.08] border border-white/[0.18] rounded-[4px] py-4 px-4 text-white placeholder-white/[0.28] form-input-focus transition-all"
                  name="notes"
                  placeholder="Tell us about your project requirements..."
                  required
                  rows={4}
                ></textarea>
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-4">
                <button
                  className="w-full bg-[#67FF04] text-[#313131] font-headline font-[900] uppercase text-lg py-4 px-8 rounded-[4px] transition-all btn-submit-hover cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING…' : 'REQUEST QUOTE VIA EMAIL'}
                </button>
                <p className="text-white/35 text-[0.78rem] font-body text-center">
                  Operating Hours: Mon–Fri, 9am–6pm · Includes free site assessment for qualified projects*
                </p>
              </div>
            </form>
          </div>
        </div>
      </footer>

      {/* T&C Footer Section */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h4 className="font-headline font-bold text-white/50 text-base mb-5">EcoBalance Cityscapes</h4>
          <p className="font-body text-white/25 text-[0.75rem] max-w-[780px] leading-[1.7] mb-5">
            <span className="font-bold text-white/35">Terms & Conditions Apply:</span> Free consultation and site assessment are subject to project qualification. Eligibility will be determined based on project scope, size, location, and readiness to proceed. In some cases, EcoBalance may require preliminary information, including measurements, photos, or project details, before arranging a consultation, quotation, or site visit. Site visits are not guaranteed for all enquiries. 1–3 day installation refers to on-site installation at site only. Not including prep work at workshop. Job commencement upon receipt of deposit.
          </p>
          <p className="text-white/15 text-[0.72rem] mt-5">
            © 2025 EcoBalance Cityscapes Sdn Bhd · B1-12, Tower B, Zenith Corporate Park, Jalan SS7/26, Kelana Jaya, 47301 Petaling Jaya
          </p>
          <a className="text-[#67FF04] text-[0.78rem] mt-2 no-underline hover:brightness-110" href="mailto:ecobalancecity@gmail.com">
            ecobalancecity@gmail.com
          </a>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-inverse-surface border-2 border-primary-container w-full max-w-xl rounded-xl relative p-10 overflow-hidden"
            >
              <button 
                className="absolute top-6 right-6 text-white/60 hover:text-white cursor-pointer" 
                onClick={closeModal}
              >
                <X size={24} />
              </button>
              <h3 className="font-headline text-3xl text-white mb-4">Request a Consultation</h3>
              <p className="text-white/60 mb-10">Our specialists will contact you within 24 hours to discuss your project requirements.</p>
              <form className="space-y-6" onSubmit={handleModalSubmit}>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Full Name</label>
                  <input className="w-full bg-white/5 border border-dashed border-white/20 rounded-lg focus:border-primary-container focus:ring-primary-container text-white p-4" placeholder="John Doe" required type="text" />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Phone Number</label>
                  <input className="w-full bg-white/5 border border-dashed border-white/20 rounded-lg focus:border-primary-container focus:ring-primary-container text-white p-4" placeholder="+60 12..." required type="tel" />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Project Location</label>
                  <input className="w-full bg-white/5 border border-dashed border-white/20 rounded-lg focus:border-primary-container focus:ring-primary-container text-white p-4" placeholder="Kuala Lumpur, PJ, etc." required type="text" />
                </div>
                <button className="w-full btn-primary py-5 rounded-lg font-bold text-lg hover:brightness-110 active:scale-95 transition-all mt-4 uppercase tracking-wider cursor-pointer" type="submit">
                  CONFIRM BOOKING
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-surface-container-lowest p-10 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow text-left">
      <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-full mb-6 text-on-primary-container">
        {icon}
      </div>
      <h3 className="font-headline text-xl mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}

function TrustLogo({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="flex justify-center items-center h-20 w-full px-4">
      <img 
        alt={alt} 
        className="max-h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
        src={src} 
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function ProjectCard({ img, title, category }: { img: string, title: string, category: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-surface-container-low aspect-[5/3] text-left">
      <img 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        src={img} 
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
        <h4 className="text-xl font-headline">{title}</h4>
        <p className="text-sm opacity-80">{category}</p>
      </div>
    </div>
  );
}

function ProcessStep({ num, icon, title, description }: { num: string, icon: ReactNode, title: string, description: string }) {
  return (
    <div className="relative">
      <span className="text-8xl font-black text-white/5 absolute -top-12 -left-4">{num}</span>
      <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-8 relative z-10 text-on-primary-container">
        {icon}
      </div>
      <h5 className="text-xl font-headline mb-4">{title}</h5>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

function FormInput({ label, name, placeholder, type = "text", required = false }: { label: string, name: string, placeholder: string, type?: string, required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.72rem] font-[600] tracking-[0.08em] text-white/70 uppercase font-body">
        {label} {required && <span className="text-[#67FF04] ml-0.5">*</span>}
      </label>
      <input
        className="w-full bg-white/[0.08] border border-white/[0.18] rounded-[4px] py-4 px-4 text-white placeholder-white/[0.28] form-input-focus transition-all"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}
