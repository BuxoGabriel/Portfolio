import P5Page from "@/components/p5-page";

export default function Boids() {
    return <main className="min-h-screen w-screen bg-gray-400">
        <h1>Boid Simulation</h1>
        <div className="flex justify-center">
            <P5Page src="/scripts/boids.js"/>
            <aside className="flex flex-col justify-center w-64 pl-4">
                <h2>How it Works:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus mollitia ea quisquam, ipsa soluta recusandae repudiandae iste sed eum voluptates libero non tempore velit illum dignissimos doloremque eveniet deserunt!</p>
            </aside>
        </div>
    </main>
}