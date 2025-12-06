"use client";

import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export function TourGuide() {
  const startTour = () => {
      const driverObj = driver({
          showProgress: true,
          animate: true,
          doneBtnText: "Siap!",
          nextBtnText: "Lanjut!",
          prevBtnText: "Kembali",
          allowClose: true,
          steps: [
              { 
                  element: document.body,
                  popover: { 
                      title: 'Hi, Aku Ticky! 🤖', 
                      description: `
                          <div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 20px;">
                              <img src="/mascot.png" style="width: 280px; margin-bottom: 20px; animation: bounce 2s infinite;" /> 
                              <p style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 10px;">Welcome to EventEase!</p>
                              <p style="font-size: 16px; color: #555;">Pusat pesan tiket konser terlengkap <br/> <span style="color: #8b5cf6; font-weight: bold;">No Tipu Tipu.</span></p>
                              <p style="font-size: 14px; color: #888; margin-top: 15px;">Mau aku temani keliling sebentar?</p>
                          </div>
                      `, 
                      align: 'center' 
                  } 
              },
              { 
                  element: '#tour-hero', 
                  popover: { 
                      title: '🔥 Event Paling Hits', 
                      description: `
                          <img src="/mascot.png" style="width: 60px; float: right; margin-left: 20px;" />
                          Lihat rekomendasi event terbaik pilihan kami di slide ini. Klik "Beli Tiket" untuk langsung memesan!
                      `, 
                      side: "bottom", 
                      align: 'start'
                  } 
              },
              { 
                  element: '#tour-search', 
                  popover: { 
                      title: '🔍 Cari Event Favorit', 
                      description: `
                          <img src="/mascot.png" style="width: 60px; float: right; margin-left: 20px;" />
                          Gunakan kolom ini untuk mencari nama artis atau gunakan filter Lokasi untuk melihat event di kotamu.
                      `, 
                      side: "bottom", 
                      align: 'start' 
                  } 
              },
              { 
                  element: '#tour-event-card', 
                  popover: { 
                      title: '🎫 Beli Tiket', 
                      description: `
                          <img src="/mascott.png" style="width: 60px; float: right; margin-left: 25px;" />
                          Klik tombol "Beli" pada kartu event untuk melihat detail harga, peta lokasi simulasi, dan melakukan pembayaran QRIS.
                      `, 
                      side: "top", 
                      align: 'start' 
                  } 
              }
          ]
      });
      
      driverObj.drive();
  };

  useEffect(() => {
    // Check if tour has been seen (Version 5 auto-start)
    const hasSeenTour = localStorage.getItem("hasSeenTour_v5");
    
    if (!hasSeenTour) {
        setTimeout(() => {
            startTour();
            localStorage.setItem("hasSeenTour_v5", "true");
        }, 1500); 
    }
  }, []);

  return (
    <button 
      onClick={startTour}
      className="fixed bottom-4 right-4 z-50 p-3 bg-white rounded-full shadow-lg border border-primary/20 hover:scale-110 transition-transform cursor-pointer group"
      title="Ulangi Tutorial"
    >
      <span className="sr-only">Bantuan</span>
      <img src="/mascot.png" className="w-10 h-10" alt="Ticky" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Tanya Ticky
      </span>
    </button>
  );
}
