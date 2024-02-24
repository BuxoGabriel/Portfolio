"use client"
import Canvas, { DrawFunction, drawArrow } from "@/components/canvas";
import Navbar from "@/components/navbar";

export default function Boids() {
    const WIDTH = 500
    const HEIGHT = 500
    const draw: DrawFunction = (ctx, frame) => {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        drawArrow(ctx, WIDTH / 2, HEIGHT / 2, 1, 1)
    }

    return <main className="min-h-screen w-screen bg-gray-400">
        <Navbar />
        <h1 className="text-4xl text-black text-center p-4">Boid Simulation</h1>
        <Canvas drawFunction={draw} width={WIDTH} height={HEIGHT} />
    </main>
}