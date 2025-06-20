"use client";

import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';

import { useState } from 'react';
 
const classForm = "w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-100 focus:border-transparent";
 
export default function Contact() {

    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm({

        defaultValues: {

            nom: '',

            email: '',

            sujet: '',

            message: ''

        },

        mode: 'onBlur',

    });
 
    const [notification, setNotification] = useState({ message: '', type: '' });
 
    const sendEmail = () => {

        const templateParams = {

            name: getValues().nom,

            email: getValues().email,

            subject: getValues().sujet,

            message: getValues().message

        };
 
        emailjs.send(

            "service_hzhn244",

            "template_mkpvvd2",

            templateParams,

            "kVQEkKaZmkSNpdn_G"

        ).then(

            (result) => {

                console.log("SUCCESS!", result.status, result.text);

                setNotification({ message: "Message envoyé avec succès !", type: "success" });

                reset();

                setTimeout(() => setNotification({ message: '', type: '' }), 3000);

            },

            (error) => {

                console.log("FAILED...", error);

                setNotification({ message: "Erreur lors de l'envoi. Veuillez réessayer.", type: "error" });

                setTimeout(() => setNotification({ message: '', type: '' }), 3000);

            }

        );

    };
 
    return (
<div className="max-w-xl mx-auto">
<h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
 
            {notification.message && (
<div className={`mb-4 p-2 rounded text-sm text-center ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>

                    {notification.message}
</div>

            )}
 
            <form className="space-y-4" onSubmit={handleSubmit(sendEmail)}>
<div>
<label htmlFor="nom" className="block mb-1 font-medium">Nom :</label>
<input

                        {...register("nom", { required: "Champ obligatoire" })}

                        type="text"

                        placeholder='Entrez votre nom'

                        id="nom"

                        className={classForm}

                    />

                    {errors.nom && <div className="text-red-500 text-sm">{errors.nom.message}</div>}
</div>
 
                <div>
<label htmlFor="email" className="block mb-1 font-medium">Email :</label>
<input

                        {...register("email", {

                            required: "Champ obligatoire",

                            pattern: {

                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                                message: "Adresse email invalide"

                            }

                        })}

                        type="email"

                        id="email"

                        className={classForm}

                    />

                    {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
</div>
 
                <div>
<label htmlFor="sujet" className="block mb-1 font-medium">Sujet :</label>
<input

                        {...register("sujet", { required: "Champ obligatoire" })}

                        type="text"

                        id="sujet"

                        className={classForm}

                    />

                    {errors.sujet && <div className="text-red-500 text-sm">{errors.sujet.message}</div>}
</div>
 
                <div>
<label htmlFor="message" className="block mb-1 font-medium">Message :</label>
<textarea

                        {...register("message", { required: "Champ obligatoire" })}

                        id="message"

                        rows="4"

                        className={classForm}
></textarea>

                    {errors.message && <div className="text-red-500 text-sm">{errors.message.message}</div>}
</div>
 
                <button

                    type="submit"

                    className="bg-amber-100 text-black px-4 py-2 rounded hover:black transition cursor-pointer"
>

                    Envoyer
</button>
</form>
</div>

    );

}

 