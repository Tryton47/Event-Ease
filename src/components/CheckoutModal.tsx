"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Event } from "@/data/events";
import { Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/provider";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

interface CheckoutModalProps {
  event: Event;
}

export function CheckoutModal({ event }: CheckoutModalProps) {
  const [open, setOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [step, setStep] = useState<"SELECT" | "QRIS" | "SUCCESS">("SELECT");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleOpenAttempts = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user || user.isAnonymous) {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.error("Login failed", error);
      }
      return;
    }
    setOpen(true);
  };

  const handleBuy = () => {
    if (!selectedTicket) return;
    setStep("QRIS");
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      saveTicketToLocalStorage();
      setIsProcessing(false);
      setStep("SUCCESS");
    }, 2000);
  };

  const saveTicketToLocalStorage = () => {
    const ticketData = {
      id: Math.random().toString(36).substr(2, 9),
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.time,
      eventLocation: event.location,
      ticketType: selectedTicket,
      quantity: quantity,
      totalPrice: getPrice(selectedTicket) * quantity,
      purchaseDate: new Date().toISOString(),
      status: "PAID"
    };

    const existingTickets = JSON.parse(localStorage.getItem("myTickets") || "[]");
    localStorage.setItem("myTickets", JSON.stringify([ticketData, ...existingTickets]));
  };

  const getPrice = (typeName: string) => {
    return event.ticketTypes.find(t => t.name === typeName)?.price || 0;
  };

  const reset = () => {
    setOpen(false);
    setStep("SELECT");
    setSelectedTicket("");
    setQuantity(1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <Button onClick={handleOpenAttempts} size="lg" className="w-full text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
          Beli Tiket Sekarang
        </Button>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{step === "SELECT" ? "Pilih Tiket" : step === "QRIS" ? "Pembayaran QRIS" : "Pembayaran Berhasil"}</DialogTitle>
        </DialogHeader>

        {step === "SELECT" && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Jenis Tiket</Label>
              <Select value={selectedTicket} onValueChange={setSelectedTicket}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori tiket" />
                </SelectTrigger>
                <SelectContent>
                  {event.ticketTypes.map((type) => (
                    <SelectItem key={type.name} value={type.name} disabled={type.amount < 1}>
                       {type.name} - Rp {type.price.toLocaleString("id-ID")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Jumlah Tiket</Label>
              <Input 
                type="number" 
                min={1} 
                max={5} 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>

            <div className="pt-4 border-t flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>Rp {(getPrice(selectedTicket) * quantity).toLocaleString("id-ID")}</span>
            </div>
          </div>
        )}

        {step === "QRIS" && (
          <div className="flex flex-col items-center space-y-4 py-4">
             <div className="w-48 h-48 bg-white p-2 rounded-lg">
                 {/* Placeholder for QRIS. In real app use real QR image generation */}
                <Image src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=EventEase-Payment-Simulation" width={200} height={200} alt="QRIS Code" className="w-full h-full" />
             </div>
             <p className="text-center text-sm text-muted-foreground">Scan QRIS ini menggunakan aplikasi E-Wallet apa saja.</p>
             <div className="w-full bg-yellow-500/10 text-yellow-500 p-3 rounded-md text-sm text-center">
                 Simulasi: Klik tombol di bawah untuk menyelesaikan.
             </div>
          </div>
        )}

        {step === "SUCCESS" && (
          <div className="flex flex-col items-center space-y-4 py-8 text-center animate-in fade-in zoom-in duration-300">
             <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
               <CheckCircle2 className="w-10 h-10" />
             </div>
             <h3 className="text-xl font-bold">Pembayaran Berhasil!</h3>
             <p className="text-muted-foreground">Tiket Anda telah tersimpan. Cek menu "Tiket Saya".</p>
          </div>
        )}

        <DialogFooter className="sm:justify-end">
          {step === "SELECT" && (
             <Button onClick={handleBuy} disabled={!selectedTicket} className="w-full">Lanjut Pembayaran</Button>
          )}
          {step === "QRIS" && (
             <Button onClick={handleConfirmPayment} disabled={isProcessing} className="w-full">
               {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Saya Sudah Bayar"}
             </Button>
          )}
          {step === "SUCCESS" && (
             <Button onClick={() => { reset(); router.push("/my-tickets"); }} className="w-full">
               Lihat Tiket Saya
             </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
