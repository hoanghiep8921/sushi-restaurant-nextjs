import { useState, FormEvent, ChangeEvent } from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Sending your reservation...");

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
        setMessage("Thank you! Your reservation has been sent.");
        setFormData({ name: "", phone: "", guests: "", date: "", time: "" });
        setTimeout(() => {
          onClose();
          setMessage("");
        }, 3000);
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 transition-colors hover:text-black"
        >
          &times;
        </button>
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <input type="number" name="guests" placeholder="Guests" min="1" value={formData.guests} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <button type="submit" className="w-full rounded-md bg-accent py-3 font-bold text-white transition-all duration-300 hover:bg-black">Submit Reservation</button>
        </form>
        {message && <p className="mt-4 text-center font-semibold text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default ReservationModal;
