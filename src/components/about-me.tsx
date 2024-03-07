import { fontLight } from "@/lib/fonts";

export default function AboutMe() {
    return <section id="about" className="py-10 scroll-mt-20">
        <h2 className="text-4xl py-2">About Me</h2>
        <p className={`text-left mx-auto w-10/12 md:w-2/3 lg:w-1/2 min-w-64 text-lg ${fontLight.className}`}>
            Hello! I&apos;m Gabriel Buxo. With over a decade of coding experience, I began my journey as a Javascript enthusiast in middle school.
            Throughout the years, I&apos;ve maintained a keen interest in expanding my skill set and honing my craft.
            I am dedicated to delivering high-quality software solutions and fostering collaboration within teams.
            My passion for computer science has driven me to develop numerous apps and programs, a selection of which is showcased below, with many more projects in the pipeline.
        </p>
        {/*TODO: Image of Me*/}
    </section>
}