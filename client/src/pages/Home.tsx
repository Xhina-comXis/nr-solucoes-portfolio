import { useState } from "react";
import { Mail, Phone, Clock, ExternalLink } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

interface Project {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "bynume",
    title: "NUME - Moda Feminina",
    url: "https://bynume.com.br",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663370861592/HCNyKfbGwsBqqhHojzxZW5/bynume_fullpage_279689ac.png",
    description: "Loja de moda feminina com catálogo de peças essenciais",
  },
  {
    id: "amigovet",
    title: "Amigo Vet - Clínica Veterinária",
    url: "https://amigovet-2jfs3sgz.manus.space/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663370861592/HCNyKfbGwsBqqhHojzxZW5/amigovet_fullpage_f25a8214.png",
    description: "Clínica veterinária com serviços de saúde e petshop",
  },
  {
    id: "luxestore",
    title: "LUXE - Perfumaria Premium",
    url: "https://luxestore-k49x4ehk.manus.space/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663370861592/HCNyKfbGwsBqqhHojzxZW5/luxestore_fullpage_1b867cc5.png",
    description: "Loja de perfumes importados com ofertas exclusivas",
  },
  {
    id: "barberbraid",
    title: "BarberBraids - Tranças Profissionais",
    url: "https://barberbraid-3pdxxaqq.manus.space/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663370861592/HCNyKfbGwsBqqhHojzxZW5/barberbraid_fullpage_6598c90c.png",
    description: "Especialistas em tranças e cortes profissionais",
  },
  {
    id: "petredesign",
    title: "Pet Companhia Animal",
    url: "https://petredesign-spufznz3.manus.space/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663370861592/HCNyKfbGwsBqqhHojzxZW5/petredesign_fullpage_e06fe08b.png",
    description: "Clínica veterinária com 30+ anos de experiência",
  },
  {
    id: "novaalianca",
    title: "Nova Aliança - Transportes",
    url: "https://www.novaaliancamogi.com.br/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663370861592/HCNyKfbGwsBqqhHojzxZW5/nova_alianca_mogi_c782c0c3.png",
    description: "Empresa de transportes com serviços de turismo, escolar e executivo",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 glass">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                NR Soluções
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Desenvolvimento Web Profissional
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5511922737010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-border text-sm font-medium hover:glow-purple transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 rounded-full glass-border text-sm font-medium text-cyan-300">
                Portfólio de Projetos
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transformando ideias em
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                soluções digitais
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Criamos websites modernos, funcionais e visualmente impressionantes.
              Veja alguns dos nossos projetos realizados para clientes satisfeitos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511922737010"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg gradient-primary text-white font-semibold hover:glow-purple-lg transition-all hover:scale-105"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#projetos"
                className="px-8 py-3 rounded-lg glass-border font-semibold hover:glow-blue transition-all hover:scale-105"
              >
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Nossos Projetos</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Clique em qualquer projeto para visualizar ao vivo. Cada site foi
              desenvolvido com atenção aos detalhes e otimizado para conversão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative rounded-xl overflow-hidden glass-border h-64 md:h-72 bg-black/20">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Clique para visualizar
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-cyan-400/50 rounded-xl" />
                </div>

                {/* Project info */}
                <div className="mt-4">
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Vamos Trabalhar Juntos?</h3>
              <p className="text-muted-foreground text-lg">
                Entre em contato conosco para discutir seu próximo projeto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511922737010"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl glass-border hover:glow-purple transition-all hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">WhatsApp</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  +55 11 92273-7010
                </p>
                <p className="text-xs text-cyan-300 font-medium">
                  Clique para conversar
                </p>
              </a>

              {/* Email */}
              <div className="p-6 rounded-xl glass-border opacity-50">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-600 mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">Em breve</p>
              </div>

              {/* Horário */}
              <div className="p-6 rounded-xl glass-border">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Horário</h4>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sábado
                  <br />
                  08:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 glass">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 NR Soluções. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          url={selectedProject.url}
        />
      )}
    </div>
  );
}
