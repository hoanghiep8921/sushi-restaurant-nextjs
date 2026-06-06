'use client';

import { useState, FormEvent, ChangeEvent } from "react";

// i18n
import { useTranslation } from 'react-i18next';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

const timeOptions = [
  "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30",
  "21:00",
];

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(t('reservationModal.sending'));

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(t('reservationModal.success'));
        setFormData({ name: "", phone: "", guests: "", date: "", time: "" });
        setTimeout(() => {
          onClose();
          setMessage("");
        }, 3000);
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(t('reservationModal.error'));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1008]/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 transition-colors hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">{t('reservationModal.heading')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder={t('reservationModal.namePlaceholder')} value={formData.name} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
          <input type="tel" name="phone" placeholder={t('reservationModal.phonePlaceholder')} value={formData.phone} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <select name="guests" value={formData.guests} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="" disabled>{t('reservationModal.guestsPlaceholder')}</option>
              {guestOptions.map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? t('reservationModal.guest') : t('reservationModal.guests')}</option>
              ))}
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
            <select name="time" value={formData.time} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="" disabled>{t('reservationModal.timePlaceholder')}</option>
              {timeOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full rounded-md bg-accent py-3 font-bold text-white transition-all duration-300 hover:bg-[#1a1008]">{t('reservationModal.submit')}</button>
        </form>
        {message && <p className="mt-4 text-center font-semibold text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default ReservationModal;
