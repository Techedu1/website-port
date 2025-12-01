import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: "Hello! I am Edwin's AI Assistant. Ask me about his projects, skills, or experience.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting right now. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen 
          ? 'bg-slate-800 text-white rotate-90 border border-slate-700' 
          : 'bg-primary-600 text-white hover:bg-primary-500 hover:scale-105 shadow-primary-900/50'
        }`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-3rem)] bg-slate-900 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden max-h-[600px] h-[70vh] border border-slate-800">
          {/* Header */}
          <div className="bg-slate-950 p-4 flex items-center gap-3 border-b border-slate-800">
            <div className="p-2 bg-slate-800 rounded-lg text-primary-400">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Portfolio Assistant</h3>
              <p className="text-xs text-slate-500">Powered by Gemini AI</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((msg) => (
            <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
                <div
                className={`max-w-[85%] p-3.5 text-sm leading-relaxed rounded-2xl shadow-sm ${
                    msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                }`}
                >
                {msg.text}
                </div>
            </div>
            ))}
            {isLoading && (
            <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-2 shadow-sm">
                    <Loader2 size={14} className="animate-spin text-primary-400" />
                    <span className="text-xs text-slate-400">Typing...</span>
                </div>
            </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <div className="flex items-center gap-2">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask a question..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 transition-all placeholder:text-slate-600"
                disabled={isLoading}
            />
            <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <Send size={18} />
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;