"use client";
import React, { useEffect } from 'react';

// Nota sobre a correção do erro "Cannot read properties of null (reading '_')":
// - Removi a importação de `next/head` (pode causar problemas dependendo do Router do Next)
// - Evitei qualquer uso de APIs que dependam de objetos globais no servidor
// - Garantia de que todos os objetos passados entre components são não-nulos
// - Componentes pequenos e puros para facilitar testes

export default function MeiCopilotoLanding() {
  // título setado no cliente para não depender de Head/server APIs
  useEffect(() => {
    try {
      document.title = 'MEI Copiloto — Seu secretário digital';
    } catch (e) {
      // ambiente sem DOM (SSR) — silencioso
    }
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-[#111] antialiased">
      <MainHeader />
      <main className="container mx-auto px-6 py-12">
        <Hero />
        <Features />
        <How />
        <StackAndChecklist />
        <Roadmap />
        <Pricing />
        <FaqAndFooter year={year} />
      </main>
    </div>
  );
}

/* ------------------ Small components (defensive) ------------------ */

function MainHeader() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Brand />
        <Nav />
      </div>
    </header>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-black text-white rounded-md flex items-center justify-center" aria-hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12L12 3L21 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 21L12 16L17 21" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h1 className="text-lg font-semibold">MEI Copiloto</h1>
        <p className="text-xs text-gray-600">Seu secretário digital — do DAS à NFS‑e</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="hidden md:flex gap-6 items-center text-sm">
      <a href="#features" className="hover:underline">Recursos</a>
      <a href="#how" className="hover:underline">Como funciona</a>
      <a href="#roadmap" className="hover:underline">Roadmap</a>
      <a href="#pricing" className="hover:underline">Planos</a>
      <a href="/login" className="px-4 py-2 border rounded-md">Entrar</a>
      <a href="/signup" className="px-4 py-2 bg-black text-white rounded-md">Começar</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">MEI Copiloto — Tudo que um MEI precisa, sem complicação</h2>
        <p className="mt-4 text-gray-700 max-w-xl">Lembretes de DAS com link PIX, emissão assistida de NFS‑e, organização automática de documentos com OCR e relatórios simples — pensado para quem não quer perder tempo com burocracia.</p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/signup" className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-md font-medium">Começar grátis</a>
          <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 border rounded-md">Ver o passo a passo</a>
        </div>

        <ul className="mt-6 text-sm text-gray-600 space-y-2">
          <li>✅ Crie sua conta e configure em minutos</li>
          <li>✅ Receba lembretes de DAS com PIX pronto</li>
          <li>✅ Emita NFS‑e no modo assistido — simples e seguro</li>
        </ul>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="mb-4">
          <p className="text-xs text-gray-500">Painel (preview)</p>
          <h3 className="text-lg font-semibold">Obrigações</h3>
        </div>

        <div className="space-y-3">
          <SafePanelRow title="DAS — Setembro/2025" subtitle="Vence em 10 dias" tone="amber" label="Pendente" />
          <SafePanelRow title="NFS-e — 01/09/2025" subtitle="Emitida (assistida)" tone="green" label="Pago" />

          <div className="mt-4">
            <a href="/dashboard" className="w-full inline-block text-center px-4 py-2 border rounded-md">Abrir painel</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Defensive: ensure non-null props for panel row
function SafePanelRow({ title = '', subtitle = '', tone = 'amber', label = '' }: { title?: string; subtitle?: string; tone?: 'amber' | 'green' | 'red'; label?: string }) {
  const toneClass = tone === 'green' ? 'bg-green-100 text-green-800' : tone === 'amber' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800';
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <div className="text-right">
        <span className={`inline-block px-3 py-1 rounded-full text-sm ${toneClass}`}>{label}</span>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="mt-16">
      <h3 className="text-2xl font-bold">Funcionalidades principais</h3>
      <p className="mt-2 text-gray-600 max-w-2xl">Tudo construído para o fluxo do MEI — sem jargão, sem campos confusos.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature title="Lembrete do DAS" desc="Lembretes automáticos + link PIX. Webhook atualiza status automaticamente." icon={<IconCoin />} />
        <Feature title="NFS‑e Assistida" desc="Preencha os dados, abrimos o emissor oficial e você anexa o PDF/numero." icon={<IconNote />} />
        <Feature title="Documentos + OCR" desc="Envie fotos/PDFs, extraímos texto, organizamos por mês/cliente." icon={<IconDocument />} />
        <Feature title="Relatórios simples" desc="Resumo mensal, top clientes e exportação CSV/ZIP." icon={<IconChart />} />
        <Feature title="App Mobile (Expo)" desc="Acesso rápido, notificações push para lembretes de pagamento." icon={<IconPhone />} />
        <Feature title="Integrações" desc="PIX, e-mail transacional, WhatsApp (futuro) e provedores NFS‑e." icon={<IconPlug />} />
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="mt-16">
      <h3 className="text-2xl font-bold">Como funciona (passo a passo)</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <HowStep num={1} title="Criar conta" desc="Crie seu usuário, informe CNPJ/municipio e CNAE." />
        <HowStep num={2} title="Configurar DAS" desc="Configuramos obrigações mensais automaticamente." />
        <HowStep num={3} title="Emitir NFS-e" desc="Modo assistido: preencha, transmitimos junto com você e salvamos a nota." />
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-md">
        <h4 className="font-semibold">Pseudocódigo (cron de DAS)</h4>
        <pre className="mt-2 text-sm bg-white p-3 rounded-md overflow-auto border">{`// /api/cron/das
const due = await db.obligations.where({ tipo: 'DAS', status: 'pendente' }).dueWithin(7);
for (const o of due) {
  const link = await pix.createCharge(o.company_id, valorDAS(o.competencia));
  await email.send(o.company_id, 'Seu DAS', link.url);
}`}</pre>
      </div>
    </section>
  );
}

function StackAndChecklist() {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold">Stack técnica</h3>
        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
          <li>Frontend: Next.js + TypeScript + Tailwind</li>
          <li>Backend: Next.js API (serverless) + Edge Functions (cron)</li>
          <li>DB/Auth/Storage: Supabase (Postgres)</li>
          <li>Filas/Agendamentos: Upstash QStash ou Supabase cron</li>
          <li>Hospedagem: Vercel + Supabase</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold">Checklist de contas</h3>
        <ul className="mt-4 list-none space-y-3">
          <li className="flex items-start gap-3"><span className="mt-1">•</span> Domínio (.com.br)</li>
          <li className="flex items-start gap-3"><span className="mt-1">•</span> Vercel + GitHub</li>
          <li className="flex items-start gap-3"><span className="mt-1">•</span> Supabase</li>
          <li className="flex items-start gap-3"><span className="mt-1">•</span> E-mail transacional (Resend/SES)</li>
          <li className="flex items-start gap-3"><span className="mt-1">•</span> PIX (Asaas/Pagar.me/etc.)</li>
        </ul>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="mt-16">
      <h3 className="text-2xl font-bold">Roadmap (12 semanas)</h3>
      <ol className="mt-4 list-decimal pl-5 space-y-3 text-gray-700">
        <li>Sem 1–2: design system, landing, painel base, banco</li>
        <li>Sem 3–4: DAS + PIX (sandbox), NFS-e assistida</li>
        <li>Sem 5–6: OCR + relatórios, app (Expo) beta</li>
        <li>Sem 7–8: NFS-e automática (1º provedor), conciliação básica</li>
        <li>Sem 9–10: importações/CSV + emissão em lote assistida</li>
        <li>Sem 11–12: NF-e/NFC-e (piloto 1 UF), segurança/observabilidade</li>
      </ol>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mt-16">
      <h3 className="text-2xl font-bold">Planos</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Grátis" price="R$0/mês" bullets={["Até 1 empresa", "Lembretes de DAS", "NFS-e assistida (limitada)"]} />
        <Card title="Pro" price="R$29/mês" featured bullets={["Multi-empresa", "OCR básica", "NFS-e assistida ilimitada", "Relatórios"]} />
        <Card title="Negócios" price="Sob consulta" bullets={["Integração PIX pro", "NFS-e automática", "Suporte prioritário"]} />
      </div>
    </section>
  );
}

function FaqAndFooter({ year }: { year: number }) {
  const safeYear = typeof year === 'number' ? year : new Date().getFullYear();
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-semibold">Perguntas frequentes</h4>
        <details className="mt-3 p-4 border rounded-md">
          <summary className="font-medium">Como funciona a emissão assistida de NFS-e?</summary>
          <p className="mt-2 text-gray-600">Nosso fluxo abre o portal emissor oficial e orienta o preenchimento. Você confirma e anexa o PDF/numero — nós guardamos a nota.</p>
        </details>

        <details className="mt-3 p-4 border rounded-md">
          <summary className="font-medium">É preciso certificado A1 para NF-e/NFC-e?</summary>
          <p className="mt-2 text-gray-600">Sim — para NF-e/NFC-e (produtos) há requisitos por UF. Planejamos isso como fase avançada.</p>
        </details>
      </div>

      <footer className="text-sm text-gray-600">
        <h5 className="font-semibold">Contato</h5>
        <p className="mt-2">Email: <a href="mailto:oi@meicopiloto.com.br" className="underline">oi@meicopiloto.com.br</a></p>
        <p className="mt-2">Política de Privacidade | Termos</p>
        <p className="mt-6 text-xs">© {safeYear} MEI Copiloto — Design simples, direto e funcional.</p>
      </footer>
    </section>
  );
}

/* ------------------ Reusable primitives ------------------ */

function Feature({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-black text-white flex items-center justify-center">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function HowStep({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">{num}</div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, price, bullets, featured }: { title: string; price: string; bullets?: string[]; featured?: boolean }) {
  return (
    <div className={`p-6 border rounded-lg ${featured ? 'ring-2 ring-black' : ''}`}>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-2xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {bullets?.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a href="/signup" className={`inline-block w-full text-center px-4 py-2 rounded-md ${featured ? 'bg-black text-white' : 'border'}`}>Escolher</a>
      </div>
    </div>
  );
}

/* ------------------ Icons (kept inline) ------------------ */
function IconCoin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.2" />
      <path d="M12 8v8M9 11h6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconNote() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M7 7h10M7 11h10M7 15h6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}
function IconDocument() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 3v18h18" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13l3-4 4 5 3-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.7.37 1.7.73 2.59a1 1 0 0 1-.24 1.05L8.91 9.91a14 14 0 0 0 5.18 5.18l1.52-1.7a1 1 0 0 1 1.05-.24c.9.36 1.9.6 2.6.73a1 1 0 0 1 .75 1V21z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPlug() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------ End of file ------------------ */
