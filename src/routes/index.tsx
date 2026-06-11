import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/Experience";
import { Portfolio } from "@/components/site/Portifolio";
import { TechStack } from "@/components/site/TechStack";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mateus Rocca — Especialista em Power BI, Dados & BI" },
      { name: "description", content: "Portfólio premium de especialista em Power BI, Business Intelligence, Analytics e Engenharia de Dados." },
      { property: "og:title", content: "Mateus Rocca — Especialista em Power BI & BI" },
      { property: "og:description", content: "Dashboards, analytics e engenharia de dados que aceleram decisões." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Mateus Rocca",
        jobTitle: "Especialista em Power BI, Dados e Business Intelligence",
        knowsAbout: ["Power BI", "DAX", "SQL", "Python", "Azure", "Databricks", "ETL"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        {<Experience />}
        <Portfolio />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-right" richColors />
    </div>
  );
}
