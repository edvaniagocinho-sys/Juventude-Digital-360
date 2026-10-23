import React from 'react';
import { X, Globe, CheckCircle2, ShieldCheck, DollarSign, Terminal, ArrowRight } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#123A70]" />
            <div>
              <h3 className="text-base font-bold text-[#123A70]">
                Guia de Publicação e Hospedagem na Internet
              </h3>
              <p className="text-xs text-neutral-500">
                Instruções passo-a-passo com prioridade a ferramentas 100% gratuitas
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-700 leading-relaxed">
          
          {/* Transparency Callout */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1.5">
            <h4 className="font-bold text-[#159447] flex items-center gap-1.5 text-xs">
              <DollarSign className="w-4 h-4" />
              Transparência de Custos: Zero Custos Iniciais
            </h4>
            <p className="text-xs text-neutral-700">
              Podes colocar este site no ar <strong>sem gastar nenhum Metical</strong>. Plataformas globais fiáveis como Vercel, Netlify e GitHub Pages oferecem planos gratuitos perpétuos que suportam mais de 100.000 visitas mensais com certificado de segurança SSL (HTTPS) incluído.
            </p>
          </div>

          {/* Passo 1 */}
          <div className="space-y-2">
            <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#123A70] text-white flex items-center justify-center text-xs font-bold">1</span>
              Guardar o Código no GitHub (Gratuito)
            </h4>
            <p>
              Cria uma conta gratuita em <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#123A70] font-semibold underline">github.com</a> e cria um repositório novo chamado <code>juventude-digital-360</code>.
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-3 rounded-lg font-mono text-[11px] space-y-1">
              <p className="text-neutral-400"># Comandos no teu terminal:</p>
              <p>git init</p>
              <p>git add .</p>
              <p>git commit -m "Lançamento inicial Juventude Digital 360"</p>
              <p>git branch -M main</p>
              <p>git remote add origin https://github.com/o-teu-usuario/juventude-digital-360.git</p>
              <p>git push -u origin main</p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#159447] text-white flex items-center justify-center text-xs font-bold">2</span>
              Conectar ao Vercel ou Netlify (Hospedagem Gratuita Imediata)
            </h4>
            <p>
              Recomendamos o <strong>Vercel</strong> pela facilidade extrema com aplicações Vite/React:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Acede a <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#123A70] font-semibold underline">vercel.com</a> e inicia sessão com a tua conta do GitHub.</li>
              <li>Clica em <strong>"Add New... &gt; Project"</strong> e seleciona o repositório <code>juventude-digital-360</code>.</li>
              <li>O Vercel deteta automaticamente que é um projeto Vite. Clica simplesmente em <strong>"Deploy"</strong>.</li>
              <li>Em menos de 1 minuto, o teu site estará no ar com um link mundial rápido como <code>juventudedigital360.vercel.app</code>.</li>
            </ol>
          </div>

          {/* Passo 3: Custos Opcionais explicados */}
          <div className="space-y-2 border-t border-neutral-200 pt-4">
            <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FFC928] text-neutral-900 flex items-center justify-center text-xs font-bold">3</span>
              Domínio Personalizado .mz ou .co.mz (Opcional)
            </h4>
            <p>
              O link gratuito <code>.vercel.app</code> funciona perfeitamente para sempre. No entanto, se mais tarde quiseres um domínio próprio nacional:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <p className="font-bold text-neutral-900">Domínio Moçambicano (.co.mz ou .org.mz)</p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Registo oficial feito pelo CIUEM (Centro de Informática da UEM) ou registadores moçambicanos autorizados. Custo anual aproximado: 1.500 MZN a 2.500 MZN por ano.
                </p>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <p className="font-bold text-neutral-900">Domínio Internacional (.com ou .org)</p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Adquirido em serviços como Namecheap ou Cloudflare por cerca de 10 a 12 USD por ano (~700 MZN a 850 MZN/ano).
                </p>
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 italic mt-1">
              * Nota: Nunca compres domínios antes de testares a tua plataforma e validares a adesão dos jovens. Começa sempre pelo plano gratuito!
            </p>
          </div>

          {/* Dica de Atualização */}
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg">
            <p className="font-bold text-[#123A70] mb-0.5">Como atualizar conteúdos no futuro?</p>
            <p className="text-[11px] text-neutral-600">
              Podes adicionar novas oportunidades no código e fazer <code>git push</code> (o site atualiza-se sozinho em 30 segundos), ou usar o <strong>Painel Administrativo</strong> já incorporado nesta aplicação para gerir as vagas, notícias e ideias em tempo real.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#123A70] text-white text-xs font-semibold rounded-lg hover:bg-[#0d284f]"
          >
            Compreendi
          </button>
        </div>
      </div>
    </div>
  );
};
