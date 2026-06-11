export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Mateus Rocca • Especialista em BI & Dados</div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
          Construído com dados, design e cafeína.
        </div>
      </div>
    </footer>
  );
}