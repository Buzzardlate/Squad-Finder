import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Rocket, Users, Briefcase, GraduationCap, Building2, Zap, Target, Layers, DollarSign, Award, ArrowRight, Github, Twitter, Linkedin, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FadeInSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navbar Otimizada (Lei de Hick: Redução de carga cognitiva, apenas 1 link de navegação) */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Rocket className="h-6 w-6 text-primary" />
            Squad Finder
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors font-semibold">
              Explorar Plataforma
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex text-base font-medium" onClick={() => navigate("/login")}>
              Entrar
            </Button>
            {/* Fitts na Navbar */}
            <Button className="px-6 py-5 text-base font-semibold" onClick={() => navigate("/signup")}>
              Cadastrar-se
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl text-center space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            <Zap className="h-4 w-4 text-primary" />
            Matchmaking inteligente de talentos
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Conectamos <span className="text-primary">talentos acadêmicos</span> a empresas que fazem a diferença
          </h1>

          <p className="mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
            O Squad Finder forma as equipes ideais para cada projeto usando algoritmos inteligentes. Encontre seu squad perfeito em minutos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Lei de Fitts: Botões massivos e proeminentes */}
            <Button
              className="w-full sm:w-auto gap-3 py-7 px-8 text-lg font-bold hover:scale-[1.03] transition-transform"
              onClick={() => navigate("/signup")}
            >
              <Building2 className="h-6 w-6" />
              Sou Empresa
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto gap-3 py-7 px-8 text-lg font-bold hover:scale-[1.03] transition-transform"
              onClick={() => navigate("/signup")}
            >
              <GraduationCap className="h-6 w-6" />
              Sou Estudante
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <button onClick={() => scrollToSection("about")} className="absolute bottom-8 animate-bounce text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className="h-7 w-7" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              O que é o <span className="text-primary">Squad Finder</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Squad Finder é uma plataforma inteligente que conecta talentos acadêmicos a empresas, formando as equipes (Squads) ideais para cada tipo de projeto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Target, label: "Match Inteligente", desc: "Algoritmos que combinam perfis com precisão" },
                { icon: Users, label: "Squads sob Medida", desc: "Equipes montadas para o seu projeto" },
                { icon: Layers, label: "Gestão Simplificada", desc: "Acompanhe tudo em um só lugar" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{label}</h3>
                  <p className="text-sm text-muted-foreground text-center">{desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-28">
        <div className="container mx-auto px-4 space-y-16">
          {/* Estudantes */}
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-4">
                <GraduationCap className="h-4 w-4" />
                Para Estudantes
              </span>
              <h2 className="text-3xl font-bold md:text-4xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Impulsione sua carreira
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Award, title: "Crie seu Portfólio", desc: "Construa um portfólio profissional com projetos reais." },
                { icon: Briefcase, title: "Trabalhe em Projetos", desc: "Participe de desafios reais de empresas." },
                { icon: Users, title: "Ganhe Experiência", desc: "Desenvolva habilidades trabalhando em squads." },
              ].map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="group border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-accent-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary/5">
        <FadeInSection className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Pronto para encontrar seu squad?
          </h2>
          <Button className="gap-2 py-7 px-10 text-lg font-bold hover:scale-[1.03] transition-transform" onClick={() => navigate("/signup")}>
            Começar agora
            <ArrowRight className="h-5 w-5" />
          </Button>
        </FadeInSection>
      </section>
      
      {/* Footer minimalista */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Squad Finder. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;