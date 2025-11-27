
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, Check, Globe } from 'lucide-react';

const ChatDemo = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' or 'hy'

  const conversations = {
    en: [
      { role: 'bot', text: "Barev Dzez! 👋 Looking for an apartment in Yerevan?" },
      { role: 'user', text: "Yes, I need 3 rooms in Kentron." },
      { role: 'bot', text: "I found 3 premium units matching your criteria. Unit 42 is 85sqm with a view of Ararat. Shall I book a viewing?" },
      { role: 'user', text: "Yes please, tomorrow at 2 PM." },
      { role: 'system', text: "Lead Sent to Manager's Telegram ✅" }
    ],
    hy: [
      { role: 'bot', text: "Բարև Ձեզ! 👋 Փնտրու՞մ եք բնակարան Երևանում:" },
      { role: 'user', text: "Ha, 3 senyak Kentronum." }, // User typing in translit
      { role: 'bot', text: "Գտել եմ 3 պրեմիում բնակարան ձեր նշած չափանիշներով: Բնակարան 42-ը 85քմ է, Արարատի տեսարանով: Ամրագրե՞մ դիտում:" },
      { role: 'user', text: "Ha xndrum em, vax@ 2-in." },
      { role: 'system', text: "Հայտը ուղարկվեց մենեջերին ✅" }
    ]
  };

  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    let isMounted = true;

    // Reset state when language changes
    setMessages([]);
    setIsTyping(false);

    const playConversation = () => {
      if (!isMounted) return;
      
      const currentConversation = conversations[language];

      if (currentIndex >= currentConversation.length) {
        timeout = setTimeout(() => {
          if (isMounted) {
            setMessages([]);
            currentIndex = 0;
            playConversation();
          }
        }, 5000);
        return;
      }

      const msg = currentConversation[currentIndex];
      
      if (msg.role === 'user') {
        timeout = setTimeout(() => {
          if (isMounted) {
            setMessages(prev => [...prev, msg]);
            currentIndex++;
            playConversation();
          }
        }, 1500);
      } else {
        setIsTyping(true);
        timeout = setTimeout(() => {
          if (isMounted) {
            setIsTyping(false);
            setMessages(prev => [...prev, msg]);
            currentIndex++;
            playConversation();
          }
        }, 2000);
      }
    };

    // Small delay to start to avoid immediate flicker
    timeout = setTimeout(playConversation, 500);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [language]);

  return (
    <section className="py-24 bg-nexus-dark relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the <span className="text-gradient">Future of Sales</span></h2>
          <p className="text-xl text-gray-400 mb-8">
            Our AI agents don't just chat—they sell. They understand context, handle objections, and book meetings directly into your calendar.
          </p>
          
          {/* Language Toggle */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm text-gray-400">Preview Language:</span>
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${language === 'en' ? 'bg-nexus-primary text-nexus-dark' : 'text-gray-400 hover:text-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('hy')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${language === 'hy' ? 'bg-nexus-primary text-nexus-dark' : 'text-gray-400 hover:text-white'}`}
              >
                Armenian
              </button>
            </div>
          </div>

          <ul className="space-y-4">
            {['Multilingual Support (Armenian/Russian/English)', 'Instant CRM Sync', '24/7 Availability', 'Smart Qualification'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-nexus-secondary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-nexus-secondary" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone Mockup */}
        <div className="relative mx-auto">
          <div className="w-[350px] h-[700px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-xl z-20" />
            
            {/* Header */}
            <div className="bg-gray-800 p-4 pt-10 flex items-center gap-3 border-b border-gray-700">
              <div className="w-10 h-10 rounded-full bg-nexus-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-nexus-dark" />
              </div>
              <div>
                <h4 className="font-bold text-white">Nexus Agent</h4>
                <p className="text-xs text-nexus-secondary">Online • Replies instantly</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-[550px] overflow-y-auto flex flex-col gap-4 bg-gray-900/50">
              <AnimatePresence mode="popLayout">
                {messages.map((msg, i) => (
                  <motion.div
                    key={`${language}-${i}`} // Force re-render on language change
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'system' ? (
                      <div className="w-full text-center py-2">
                        <span className="text-xs font-mono text-nexus-secondary bg-nexus-secondary/10 px-3 py-1 rounded-full border border-nexus-secondary/20">
                          {msg.text}
                        </span>
                      </div>
                    ) : (
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-nexus-primary text-nexus-dark rounded-tr-none' 
                          : 'bg-gray-800 text-gray-200 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75" />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 w-full p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex gap-2">
                <input disabled type="text" placeholder={language === 'en' ? "Type a message..." : "Գրեք հաղորդագրություն..."} className="flex-1 bg-gray-900 rounded-full px-4 py-2 text-sm text-gray-400 focus:outline-none" />
                <button className="w-9 h-9 bg-nexus-primary rounded-full flex items-center justify-center text-nexus-dark">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


export default ChatDemo;
