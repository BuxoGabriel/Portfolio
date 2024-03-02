"use client"
import actionSendEmail from "@/actions/send-email"
import { useFormState } from "react-dom"
import SubmitButton from "./submit-button"

const initialState = {
    success: false
}

export default function Contact() {
    const [state, formAction] = useFormState(actionSendEmail, initialState)
    return <section id="contact" className="px-12">
        <h2 className="text-4xl py-2">Contact Me</h2>
        <form action={formAction} className="flex flex-col w-full text-left items-center">
            <div className="min-w-64 w-1/2">
                <label htmlFor="sender">Your Email: </label><br/>
                <input className="border-2 border-black text-black w-full" id="sender" type="text" name="sender" required />
            </div>
            <div className="min-w-64 w-1/2">
                <label className="align-top" htmlFor="message">Your Message: </label><br/>
                <textarea className="border-2 border-black text-black h-48 w-full" id="message" name="message" required />
            </div>
            <SubmitButton success={state.success}/>
            <p aria-live="polite" className="sr-only" role="status">
                {state.success? "Successfully sent email!": null}
            </p>
        </form>
    </section>
}