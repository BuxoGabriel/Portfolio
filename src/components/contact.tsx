"use client"
import actionSendEmail from "@/actions/send-email"
import { useFormState, useFormStatus } from "react-dom"
import SubmitButton from "./submit-button"

const initialState = {
    success: false
}

export default function Contact() {
    const [state, formAction] = useFormState(actionSendEmail, initialState)
    return <section id="contact">
        <h2 className="text-4xl py-2">Contact Me</h2>
        <form action={formAction} className="flex flex-col w-fit text-left mx-auto">
            <div className="w-1/2">
                <label htmlFor="sender">Your Email: </label>
                <input className="border-2 border-black text-black" id="sender" type="text" name="sender" required />
            </div>
            <div className="w-1/2">
                <label className="align-top" htmlFor="message">Your Message: </label>
                <textarea className="border-2 border-black text-black" id="message" name="message" rows={4} cols={50} required />
            </div>
            <SubmitButton success={state.success}/>
            <p aria-live="polite" className="sr-only" role="status">
                {state.success}
            </p>
        </form>
    </section>
}