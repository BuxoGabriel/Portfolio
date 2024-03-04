"use client"

import { useFormStatus } from "react-dom"

type SubmitButtonProps = {
    success: boolean
}

export default function SubmitButton({ success }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    return <button 
        disabled={pending || success}
        aria-disabled={pending || success} 
        type="submit" 
        className={"w-full border-black border-2 text-black" + 
            ((pending || success)? "": " hover:bg-slate-900 hover:text-slate-100") +
            (pending? " bg-gray-400": success? " bg-green-400": " bg-slate-100")
        }
    >Send Email</button>
}