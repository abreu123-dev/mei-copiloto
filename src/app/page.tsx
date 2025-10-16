// src/app/page.tsx
"use client"; // Necessário para o hook useEffect

import React, { useEffect } from 'react';
import Link from 'next/link'; // CORREÇÃO: Importando o componente Link do Next.js

// ========================================================================================
// PÁGINA PRINCIPAL - MEI COPILOTO
// Versão refinada com design inspirado no layout de "Mordomize"
// Foco: Espaçamento, tipografia clara, hierarquia visual e componentes polidos.
// Data: 2025-10-16 — Revisão 4 (com correções de build)
// ========================================================================================

export default function Page() {
  // Efeito para definir o título da página no navegador do cliente
  useEffect(() => {
    document.title = 'MEI Copiloto — A burocracia do seu jeito. Simples.';
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    // Fundo suave e texto principal escuro para melhor legibilidade
    <div className="min-h-screen bg-slate-50 text-gray-800 antialiased">
      <MainHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer year={currentYear} />
    </div>
  );
}

/* ------------------ SEÇÕES PRINCIPAIS DA PÁGINA ------------------ */

function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Brand />
        <Nav />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 text-center md:py-28">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
        A burocracia do seu MEI, <span className="text-black">finalmente simples.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        Do lembrete do DAS à emissão de NFS-e. O MEI Copiloto organiza tudo para que você possa focar no que realmente importa: seu negócio.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="/signup" className="transform rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105">
          Começar grátis
        </a>
        <a href="#how" className="transform rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-100">
          Ver como funciona
        </a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <SectionIntro title="Recursos" heading="Tudo que você precisa em um só lugar" />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<IconCoin />}
            title="Lembretes Inteligentes do DAS"
            desc="Receba alertas automáticos do seu boleto DAS com link PIX para pagamento rápido. Nunca mais pague juros."
          />
          <FeatureCard
            icon={<IconNote />}
            title="Emissão de NFS-e Assistida"
            desc="Um passo a passo guiado para emitir suas notas fiscais de serviço sem dor de cabeça, direto no portal oficial."
          />
          <FeatureCard
            icon={<IconDocument />}
            title="Organizador de Documentos com OCR"
            desc="Envie fotos ou PDFs de suas notas e recibos. Nossa tecnologia lê, extrai os dados e organiza tudo para você."
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <SectionIntro title="Como funciona" heading="Comece a usar em 3 passos simples" />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <HowStep num={1} title="Crie sua conta" desc="Informe seu e-mail e CNPJ. A configuração inicial é automática e leva menos de 2 minutos." />
          <HowStep num={2} title="Receba os Lembretes" desc="Nós monitoramos suas obrigações mensais e enviamos os alertas de DAS com antecedência." />
          <HowStep num={3} title="Emita suas Notas" desc="Use nosso assistente para preencher os dados da NFS-e. Nós te guiamos durante todo o processo." />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <SectionIntro title="Planos" heading="Escolha o plano ideal para seu negócio" />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <PricingCard
            title="Essencial"
            price="R$ 0"
            period="/mês"
            bullets={["1 empresa", "Lembretes de DAS", "NFS-e assistida (até 3/mês)"]}
            ctaText="Começar Gratuitamente"
          />
          <PricingCard
            title="Profissional"
            price="R$ 29"
            period="/mês"
            bullets={["Multi-empresa", "NFS-e assistida ilimitada", "Organizador com OCR", "Relatórios simplificados"]}
            ctaText="Escolher Pro"
            featured
          />
          <PricingCard
            title="Negócios"
            price="Consulte"
            bullets={["Tudo do Pro", "NFS-e automática (beta)", "Integração PIX completa", "Suporte prioritário"]}
            ctaText="Falar com um especialista"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <SectionIntro title="Depoimentos" heading="O que nossos clientes dizem" />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <TestimonialCard
            quote="Finalmente um app que entende a correria do MEI. Os lembretes do DAS com PIX salvaram minha vida e meu bolso."
            author="Juliana Silva"
            role="Designer Gráfica"
          />
          <TestimonialCard
            quote="Emitir nota fiscal era um pesadelo. Com o modo assistido, eu faço em cinco minutos, sem medo de errar. Recomendo demais!"
            author="Ricardo Mendes"
            role="Desenvolvedor Freelancer"
          />
          <TestimonialCard
            quote="Ter todos os documentos organizados automaticamente é incrível. A declaração anual do MEI ficou muito mais fácil."
            author="Carla Andrade"
            role="Consultora de Marketing"
          />
        </div>
      </div>
    </section>
  );
}

function Faq() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-3xl px-6">
                <SectionIntro title="Dúvidas" heading="Perguntas Frequentes" />
                <div className="mt-8 space-y-4">
                    <FaqItem
                        question="Como funciona a emissão de NFS-e assistida?"
                        answer="Nossa plataforma abre o portal oficial da sua prefeitura e preenche os campos com base nos dados que você informou. Você apenas confere e transmite a nota. É 100% seguro e oficial."
                    />
                    <FaqItem
                        question="Preciso de certificado digital A1?"
                        answer="Para a emissão de NFS-e (Nota de Serviço), na grande maioria dos municípios, o MEI não precisa de certificado digital. Para NF-e (Nota de Produto), as regras variam por estado, e geralmente é necessário."
                    />
                    <FaqItem
                        question="Meus dados estão seguros?"
                        answer="Sim. Usamos criptografia de ponta para todos os dados e seguimos as melhores práticas de segurança. Suas informações fiscais e de login são confidenciais e protegidas."
                    />
                </div>
            </div>
        </section>
    );
}

function Footer({ year }: { year: number }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">MEI Copiloto</h3>
            <p className="mt-2 text-sm">Simplificando a vida do microempreendedor.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#features" className="hover:underline">Recursos</a></li>
              <li><a href="#pricing" className="hover:underline">Planos</a></li>
              <li><a href="#faq" className="hover:underline">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contato</h4>
            <p className="mt-4 text-sm"><a href="mailto:contato@meicopiloto.com.br" className="hover:underline">contato@meicopiloto.com.br</a></p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {year} MEI Copiloto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


/* ------------------ COMPONENTES REUTILIZÁVEIS ------------------ */

function Brand() {
  return (
    // CORREÇÃO: Usando <Link> em vez de <a> para navegação interna
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12L12 3L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 21V12H17V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-lg font-semibold text-gray-900">MEI Copiloto</span>
    </Link>
  );
}

function Nav() {
  return (
    <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
      <a href="#features" className="hover:text-black">Recursos</a>
      <a href="#how" className="hover:text-black">Como Funciona</a>
      <a href="#pricing" className="hover:text-black">Planos</a>
      <a href="/login" className="hover:text-black">Entrar</a>
      <a href="/signup" className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Começar Agora</a>
    </nav>
  );
}

function SectionIntro({ title, heading }: { title: string; heading: string }) {
  return (
    <>
      <p className="font-semibold uppercase tracking-wider text-black">{title}</p>
      <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">{heading}</h2>
    </>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-left shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

function HowStep({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 font-bold text-white">
        {num}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

function PricingCard({ title, price, period, bullets, ctaText, featured = false }: { title: string; price: string; period?: string; bullets: string[]; ctaText: string; featured?: boolean }) {
  return (
    <div className={`rounded-xl border bg-white p-8 shadow-lg ${featured ? 'border-2 border-black' : 'border-gray-200'}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4">
        <span className="text-4xl font-bold"> {price} </span>
        {period && <span className="text-gray-600">{period}</span>}
      </p>
      <ul className="mt-6 space-y-3 text-left">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-green-500">✅</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <a href="/signup" className={`mt-8 block w-full rounded-lg px-6 py-3 text-center font-semibold ${featured ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
        {ctaText}
      </a>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-left shadow-sm">
            {/* CORREÇÃO: Usando aspas simples para evitar erro de 'unescaped entities' */}
            <p className="text-gray-700">'{quote}'</p>
            <div className="mt-6 flex items-center gap-4">
                {/* Placeholder para Avatar */}
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div>
                    <p className="font-semibold text-gray-900">{author}</p>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </div>
        </div>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <details className="group rounded-lg border border-gray-200 bg-white p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                {question}
                <div className="transition-transform duration-200 group-open:rotate-180">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </summary>
            <p className="mt-4 text-gray-700">{answer}</p>
        </details>
    );
}


/* ------------------ ÍCONES (SVG) ------------------ */

function IconCoin() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
      <path d="M12 7v10m-3-6h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconNote() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M8 7h8m-8 4h8m-8 4h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}
function IconDocument() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}