const prompts = [
  'Where can I watch the match tonight?',
  'What restaurants are near Centennial Olympic Park?',
  'How do I get to Mercedes-Benz Stadium using MARTA?',
  'What family-friendly events are happening today?',
  'Where can fans hang out after the game?'
];

export default function AIConciergePreview() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-brandSlate to-brandNavy p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-brandGold">Coming Soon</p>
      <h3 className="mt-2 text-2xl font-bold text-white">Ask ATL Matchday</h3>
      <p className="mt-2 text-sm text-white/80">AI concierge preview for instant answers on events, food, transit, and matchday planning.</p>
      <div className="mt-4 space-y-2">
        {prompts.map((prompt) => (
          <div key={prompt} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/90">
            {prompt}
          </div>
        ))}
      </div>
    </section>
  );
}
