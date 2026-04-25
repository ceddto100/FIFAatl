'use client';

import { FormEvent, useState } from 'react';
import { SubmissionFormData } from '@/types';

const initialState: SubmissionFormData = {
  name: '',
  email: '',
  phone: '',
  listingName: '',
  submissionType: 'business',
  category: '',
  neighborhood: '',
  date: '',
  time: '',
  websiteOrSocial: '',
  description: '',
  specialOffer: '',
  isFamilyFriendly: false,
  interestedInFeaturedPlacement: false,
  message: ''
};

export default function SubmitForm() {
  const [form, setForm] = useState<SubmissionFormData>(initialState);
  const [status, setStatus] = useState('');

  function updateField<K extends keyof SubmissionFormData>(field: K, value: SubmissionFormData[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submission payload (placeholder):', form);
    setStatus('Thanks! Your submission was captured locally. Connect this form to your API, Make.com webhook, or database next.');
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required placeholder="Your Name" value={form.name} onChange={(e) => updateField('name', e.target.value)} className="input" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => updateField('email', e.target.value)} className="input" />
        <input placeholder="Phone" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="input" />
        <input required placeholder="Business or Event Name" value={form.listingName} onChange={(e) => updateField('listingName', e.target.value)} className="input" />
        <select value={form.submissionType} onChange={(e) => updateField('submissionType', e.target.value as 'business' | 'event')} className="input">
          <option value="business">Business Listing</option>
          <option value="event">Event Listing</option>
        </select>
        <input placeholder="Category" value={form.category} onChange={(e) => updateField('category', e.target.value)} className="input" />
        <input placeholder="Neighborhood" value={form.neighborhood} onChange={(e) => updateField('neighborhood', e.target.value)} className="input" />
        <input type="date" value={form.date} onChange={(e) => updateField('date', e.target.value)} className="input" />
        <input type="time" value={form.time} onChange={(e) => updateField('time', e.target.value)} className="input" />
        <input placeholder="Website or Social Link" value={form.websiteOrSocial} onChange={(e) => updateField('websiteOrSocial', e.target.value)} className="input sm:col-span-2" />
      </div>
      <textarea placeholder="Description" value={form.description} onChange={(e) => updateField('description', e.target.value)} className="input min-h-28" />
      <input placeholder="Special Offer" value={form.specialOffer} onChange={(e) => updateField('specialOffer', e.target.value)} className="input" />
      <textarea placeholder="Message" value={form.message} onChange={(e) => updateField('message', e.target.value)} className="input min-h-24" />
      <div className="flex flex-col gap-2 text-sm text-white/90">
        <label><input type="checkbox" checked={form.isFamilyFriendly} onChange={(e) => updateField('isFamilyFriendly', e.target.checked)} className="mr-2" />Is this family-friendly?</label>
        <label><input type="checkbox" checked={form.interestedInFeaturedPlacement} onChange={(e) => updateField('interestedInFeaturedPlacement', e.target.checked)} className="mr-2" />Interested in featured placement?</label>
      </div>
      <button type="submit" className="rounded-full bg-brandGold px-6 py-3 text-sm font-bold text-brandNavy">Submit Listing</button>
      {status ? <p className="text-sm text-green-300">{status}</p> : null}
      <p className="text-xs text-white/60">Integration-ready: replace the submit handler with MongoDB, Supabase, Airtable, Google Sheets, Make.com webhook, or your API.</p>
    </form>
  );
}
