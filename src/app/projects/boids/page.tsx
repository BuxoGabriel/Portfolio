import P5Page from "@/components/p5-page";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Boids() {
    return <main className="min-h-screen w-screen bg-gray-400 text-left text-black">
        <Link href={"/projects"} className="flex flex-col lg:flex-row"><FaArrowLeft className="w-8 h-8" /></Link>
        <h1 className="text-3xl p-4 text-center">Boid Simulation</h1>
        <div className="flex justify-center">
            <P5Page src="/scripts/boids.js"/>
            <aside className="flex flex-col justify-center w-1/2 text-sm pl-4">
                <h2 className="text-lg text-center">How it Works:</h2>
                <p>
                    This is a boid/flocking simulation.
                    It is designed to show the complex emergent behavior exhibited from simple rules.
                    It is similar to the n-body problem where there are n bodies that are attracted to eachother through gravity which also produces interesting and complex emergent behavior.
                    However, in this algorithm instead of gravitational attraction there are instead 3 rules that act on each boid.
                </p>
                <ol>
                    <li>
                        <h3 className="text-lg text-center pt-2">Alignment</h3>
                        <p>
                            The first rule is alignment.
                            This rule dictates that all boids should face in the same direction as the other boids it can see.
                            In terms of implementation that means that each boid has a force applied to them that points in the average velocity of their neighboors.
                        </p>
                    </li>
                    <li>
                        <h3 className="text-lg text-center pt-2">Cohesion</h3>
                        <p>
                            The second rule is cohesion.
                            This rule dictates that all boids should go towards the center of the flock.
                            In other words it means that each boid has a force applied to them that points towards the center of mass of the boids that it can see.
                        </p>
                    </li>
                    <li>
                        <h3 className="text-lg text-center pt-2">Seperation</h3>
                        <p>
                            The third rule is seperation. This rule makes boids that are too close to eachother seperate.
                            In this implementation the force each boid applies to each other boid in its radius is inversly proportional to the square of the distance between them just like in the n-body problem.
                            However, in a boid simultion this force pushes apart rather than pull together.
                        </p>
                    </li>
                </ol>
            </aside>
        </div>
    </main>
}