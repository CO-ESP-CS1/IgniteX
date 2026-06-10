"use client";

import { useState, type FormEvent } from "react";
import { brand } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Veuillez indiquer votre nom.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setError("Veuillez indiquer une adresse e-mail valide.");
      return;
    }
    if (!form.message.trim()) {
      setError("Veuillez rédiger votre message.");
      return;
    }

    const subject = encodeURIComponent(
      form.subject.trim()
        ? `[${brand.name}] ${form.subject.trim()}`
        : `Contact via ${brand.trademark}`
    );

    const body = encodeURIComponent(
      [
        `Nom : ${form.name.trim()}`,
        `E-mail : ${form.email.trim()}`,
        "",
        "Message :",
        form.message.trim(),
        "",
        "---",
        `Envoyé depuis ${brand.url}`,
      ].join("\n")
    );

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ignitex-400 focus:ring-2 focus:ring-ignitex-400/20";

  const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Nom complet <span className="text-ignitex-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            E-mail <span className="text-ignitex-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="vous@exemple.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Objet
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          placeholder="Ex. : Développement d'une application mobile"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-ignitex-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Décrivez votre projet, vos besoins, votre délai..."
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-300">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary px-5 py-2.5">
        Envoyer via ma messagerie
      </button>

      <p className="text-xs text-muted">
        Votre application de messagerie s&apos;ouvrira avec le message pré-rempli
        à l&apos;adresse{" "}
        <strong className="font-medium text-foreground">{brand.email}</strong>.
      </p>
    </form>
  );
}
