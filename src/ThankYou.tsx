import { useEffect, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, CalendarClock, FileText } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_CONVERSION = 'AW-17136746204/YOUR_CONVERSION_LABEL';

export default function ThankYou() {
  useEffect(() => {
    window.gtag?.('event', 'conversion', { send_to: GOOGLE_ADS_CONVERSION });
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-24 h-24 mx-auto bg-primary-container flex items-center justify-center rounded-full mb-10 text-on-primary-container shadow-lg"
          >
            <CheckCircle2 size={56} strokeWidth={2.5} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-inverse-surface text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase"
          >
            Request Received
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-headline text-5xl md:text-7xl text-on-surface mb-6 leading-tight"
          >
            Thank You
          </motion.h1>

          <div className="w-12 h-[3px] bg-[#87CEEB] mx-auto mb-8" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Your enquiry has been received. Our specialists will review your project and reply within{' '}
            <span className="font-bold text-on-surface">24 hours</span>.
          </motion.p>

          <div className="mb-16">
            <h2 className="font-headline text-2xl md:text-3xl text-on-surface mb-10">What happens next</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <StepCard
                num="01"
                icon={<ClipboardCheck size={24} />}
                title="Review"
                description="Our team reviews your project scope, location, and budget fit against our qualification criteria."
              />
              <StepCard
                num="02"
                icon={<CalendarClock size={24} />}
                title="Consultation"
                description="We reach out by phone or email to schedule a site assessment or discovery call."
              />
              <StepCard
                num="03"
                icon={<FileText size={24} />}
                title="Proposal"
                description="You receive a tailored design proposal and quotation for your living wall project."
              />
            </div>
          </div>

          <a
            href="/"
            className="btn-primary inline-flex items-center gap-3 px-10 py-5 font-bold text-lg shadow-xl uppercase tracking-wider cursor-pointer no-underline"
          >
            Back to Home <ArrowRight size={20} />
          </a>

          <p className="text-on-surface-variant text-sm mt-12">
            Need to reach us directly?{' '}
            <a
              href="mailto:ecobalancecity@gmail.com"
              className="font-bold text-on-surface hover:underline"
            >
              ecobalancecity@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

function StepCard({
  num,
  icon,
  title,
  description,
}: {
  num: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface-container-lowest p-8 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 bg-primary-container flex items-center justify-center rounded-full text-on-primary-container">
          {icon}
        </div>
        <span className="text-primary text-xs font-bold tracking-widest">{num}</span>
      </div>
      <h3 className="font-headline text-xl mb-3">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </div>
  );
}
