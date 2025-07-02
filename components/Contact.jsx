"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";


const classForm =
  "w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: "",
    },
    mode: "onBlur",
  });

  const [notification, setNotification] = useState({ message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = () => {
    setIsSending(true);
    const { nom, email, sujet, message } = getValues();

    const templateParams = {
      name: nom,
      email,
      subject: sujet,
      message,
    };

    emailjs
      .send(
        "service_hzhn244",
        "template_mkpvvd2",
        templateParams,
        "kVQEkKaZmkSNpdn_G"
      )
      .then(
        () => {
          setNotification({
            message: "Message envoyé avec succès !",
            type: "success",
          });
          reset();
        },
        () => {
          setNotification({
            message: "Erreur lors de l'envoi. Veuillez réessayer.",
            type: "error",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      });
  };

  return (
    <>
      <Head>
        <title>Contactez-nous | Votre Site</title>
        <meta
          name="description"
          content="Formulaire de contact pour nous joindre rapidement par email."
        />
      </Head>

      <section className="max-w-xl mx-auto p-4" aria-label="Formulaire de contact">
        <header>
          <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
        </header>

        {notification.message && (
          <div
            role="alert"
            className={`mb-4 p-2 rounded text-sm text-center ${
              notification.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(sendEmail)} noValidate>
          <div>
            <label htmlFor="nom" className="block mb-1 font-medium">
              Nom :
            </label>
            <input
              {...register("nom", { required: "Champ obligatoire" })}
              type="text"
              id="nom"
              autoComplete="name"
              placeholder="Entrez votre nom"
              className={classForm}
              aria-invalid={errors.nom ? "true" : "false"}
              aria-describedby={errors.nom ? "nom-error" : undefined}
            />
            {errors.nom && (
              <p id="nom-error" className="text-red-500 text-sm" role="alert">
                {errors.nom.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email :
            </label>
            <input
              {...register("email", {
                required: "Champ obligatoire",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Adresse email invalide",
                },
              })}
              type="email"
              id="email"
              autoComplete="email"
              className={classForm}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sujet" className="block mb-1 font-medium">
              Sujet :
            </label>
            <input
              {...register("sujet", { required: "Champ obligatoire" })}
              type="text"
              id="sujet"
              className={classForm}
              aria-invalid={errors.sujet ? "true" : "false"}
              aria-describedby={errors.sujet ? "sujet-error" : undefined}
            />
            {errors.sujet && (
              <p id="sujet-error" className="text-red-500 text-sm" role="alert">
                {errors.sujet.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message :
            </label>
            <textarea
              {...register("message", { required: "Champ obligatoire" })}
              id="message"
              rows={4}
              className={classForm}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`px-4 py-2 rounded transition cursor-pointer ${
              isSending
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-amber-500 text-white hover:bg-amber-600"
            }`}
            aria-busy={isSending}
          >
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </section>
    </>
  );
}
