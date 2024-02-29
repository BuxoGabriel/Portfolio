import FancyText from "./fancy-text";
import TitleSpinner from "./title-spinner";

export default function Hero() {
    return <section className="w-full p-10 ">
        <h1 className="text-4xl flex flex-row justify-center gap-4 p-4 items-center">
            <span className="text-8xl block">Hello!</span>
            <span className="block">
                My name is <FancyText>Gabriel Buxo</FancyText>,
                <br/>
                I am a <TitleSpinner />
            </span>
        </h1>
        <p className="py-2 text-slate-100">
            Coding for over a decade. AI/ML enthusiast and fullstack developer
        </p>
    </section>
}