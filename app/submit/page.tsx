import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import SubmitForm from '@/components/SubmitForm';

export const metadata: Metadata = {
  title: 'Submit Business or Event | World Cup ATL Local Guide',
  description: 'Submit your Atlanta business or event for listing consideration in the World Cup ATL Local Guide.',
  keywords: ['submit Atlanta business', 'submit watch party Atlanta']
};

export default function SubmitPage() {
  return (
    <section>
      <SectionHeader title="Submit Your Business or Event" subtitle="Use this intake form now; connect to your backend, database, or automation workflow later." />
      <SubmitForm />
    </section>
  );
}
