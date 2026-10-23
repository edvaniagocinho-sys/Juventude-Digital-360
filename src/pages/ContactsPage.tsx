import React, { useState } from 'react';
import { ContactMessage } from '../types';
import { StorageService } from '../services/storage';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  MessageSquare,
  HelpCircle,
  FileEdit,
  Handshake,
  ShieldCheck
} from 'lucide-react';

export const ContactsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [type, setType] = useState<ContactMessage['type']>('Mensagem Geral');
  const [province, setProvince] = useState('Zambézia');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Por favor indica o teu nome.');
      return;
    }
    if (!emailOrPhone.trim()) {
      setError('Por favor indica um e-mail ou número de telefone/WhatsApp para resposta.');
      return;
    }
    if (!subject.trim()) {
      setError('Por favor indica o assunto da mensagem.');
      return;
    }
    if (!message.trim() || message.length < 15) {
      setError('Por favor escreve a tua mensagem com pelo menos 15 caracteres.');
      return;
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      emailOrPhone: emailOrPhone.trim(),
      type,
      province,
      subject: subject.trim(),
      message: message.trim(),
      date: new Date().toISOString().split('T')[0],
      status: 'Recebido'
    };

    StorageService.saveContactMessage(newMessage);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmailOrPhone('');
    setSubject('');
    setMessage('');
    setError('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4 pb-6 border-b border-neutral-200">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#123A70]">
          <Mail className="w-4 h-4 text-[#123A70]" />
          <span>Canais de Diálogo & Sugestões Comunitárias</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
          Contactos e Propostas
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Envia mensagens gerais, sugestões de melhoria, correções de informações desatualizadas ou propostas de parcerias com a nossa equipa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form with Validation and Real Storage */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-[#159447] rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Mensagem Recebida com Sucesso!
              </h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                Obrigado, <strong>{name}</strong>. A tua mensagem relativa a <em>"{subject}"</em> foi registada com sucesso no sistema e encaminhada para a equipa da JUVENTUDE DIGITAL 360°.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#123A70] text-white rounded-lg text-xs font-semibold hover:bg-[#0c274d] cursor-pointer"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h3 className="text-base font-bold text-[#123A70] mb-2">
                Formulário de Contacto
              </h3>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">
                    O Teu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Alberto Sitoe"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:ring-1 focus:ring-[#123A70]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">
                    E-mail ou Telefone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+258 84 ... ou email@exemplo.mz"
                    value={emailOrPhone}
                    onChange={e => setEmailOrPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:ring-1 focus:ring-[#123A70]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">
                    Finalidade do Contacto *
                  </label>
                  <select
                    value={type}
                    onChange={e => setType(e.target.value as ContactMessage['type'])}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
                  >
                    <option value="Mensagem Geral">Mensagem Geral</option>
                    <option value="Correção de Informação">Correção de Informação de Vaga/Bolsa</option>
                    <option value="Sugestão">Sugestão de Nova Funcionalidade</option>
                    <option value="Proposta de Parceria">Proposta de Parceria ou Apoio</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">
                    Província *
                  </label>
                  <select
                    value={province}
                    onChange={e => setProvince(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
                  >
                    <option value="Zambézia">Zambézia (Quelimane/Distritos)</option>
                    <option value="Maputo Cidade">Maputo Cidade</option>
                    <option value="Maputo Província">Maputo Província</option>
                    <option value="Sofala">Sofala (Beira)</option>
                    <option value="Nampula">Nampula</option>
                    <option value="Outra Província">Outra Província de Moçambique</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">
                  Assunto *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sugestão para curso de informática em Mocuba"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:ring-1 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">
                  Mensagem Detalhada *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreve a tua mensagem com clareza..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none focus:ring-1 focus:ring-[#123A70]"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submeter Mensagem</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Channels Configuration & Notice */}
        <div className="lg:col-span-5 space-y-6 text-xs text-neutral-700 leading-relaxed">
          
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
              Canais e Localização da Coordenação
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Núcleo Inicial de Operação:</strong>
                  <span>Quelimane, Província da Zambézia · República de Moçambique</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#123A70] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Contacto Eletrónico Central:</strong>
                  <span className="font-mono text-[11px] text-neutral-800">
                    contacto@juventudedigital360.mz
                  </span>
                  <span className="block text-[11px] text-neutral-500 mt-0.5">
                    (Configurável pelo administrador da plataforma)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFC928] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Tempo Médio de Resposta:</strong>
                  <span>Até 48 horas úteis após a receção da mensagem.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5 text-[11px] text-neutral-700">
            <p className="font-bold text-amber-900">Atenção sobre Pedidos de Emprego:</p>
            <p>
              O portal JUVENTUDE DIGITAL 360° não faz recrutamento direto nem cobra valores monetários. Para te candidatares a qualquer vaga, consulta sempre os links oficiais disponibilizados na página de Emprego e Estágios.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
