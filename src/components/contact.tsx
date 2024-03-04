"use client"
import actionSendEmail from "@/actions/send-email"
import { useFormState } from "react-dom"
import SubmitButton from "./submit-button"

const initialState = {
    success: false
}

export default function Contact() {
    const [formState, formAction] = useFormState(actionSendEmail, initialState)
    return <section id="contact" className="w-10/12 md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="text-4xl py-2">Contact Me</h2>
        <form action={formAction} className="flex flex-col w-full text-left items-center">
            <div className="w-full">
                <label htmlFor="sender">Your Email: </label><br/>
                <input className="border-2 border-black text-black w-full p-2" id="sender" type="text" name="sender" required />
            </div>
            <div className="w-full">
                <label className="align-top" htmlFor="message">Your Message: </label><br/>
                <textarea className="border-2 border-black text-black h-48 w-full p-2" id="message" name="message" required />
            </div>
            <SubmitButton success={formState.success}/>
            <p aria-live="polite" className="sr-only" role="status">
                {formState.success? "Successfully sent email!": null}
            </p>
        </form>
    </section>
}