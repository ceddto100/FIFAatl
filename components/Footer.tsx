export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-brandNavy/80">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70 sm:px-6">
        <p className="font-semibold text-white">World Cup ATL Local Guide powered by CodeByCed</p>
        <p className="mt-2">This is an independent local guide and is not affiliated with FIFA, the FIFA World Cup, or official host organizations.</p>
        <p className="mt-4">© {new Date().getFullYear()} CodeByCed. Built for Atlanta visitors, fans, and local businesses.</p>
      </div>
    </footer>
  );
}
