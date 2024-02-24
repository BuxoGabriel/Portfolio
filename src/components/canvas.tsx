"use client"
import { CanvasHTMLAttributes, DetailedHTMLProps, useEffect, useRef } from "react"

export type DrawFunction = (context: CanvasRenderingContext2D, frame: number) => void

export function drawArrow(context: CanvasRenderingContext2D, x: number, y: number, xVel: number, yVel: number) {
    const speed = Math.sqrt(xVel * xVel + yVel * yVel)
    if (speed != 0) {
        xVel /= speed
        yVel /= speed
    }
    const rotationMatrix = [[xVel, yVel], [yVel, -xVel]]
    const applyRotation = (offsetX: number, offsetY: number) => {
        return [x + rotationMatrix[0][0] * offsetX + rotationMatrix[0][1] * offsetY, y + rotationMatrix[1][0] * offsetX + rotationMatrix[1][1] * offsetY]
    }
    context.fillStyle = '#000000'
    context.lineWidth = 2

    context.beginPath();
    let [pointX, pointY] = [x + 20, y]//applyRotation(0, 10);
    context.moveTo(pointX, pointY);
    [pointX, pointY] = [x + 5, y - 5]//applyRotation(5, -5);
    context.moveTo(pointX, pointY);
    [pointX, pointY] = [x, y]//applyRotation(0, 0);
    context.moveTo(pointX, pointY);
    [pointX, pointY] = [x - 5, y - 5]//applyRotation(-5, -5);
    context.moveTo(pointX, pointY);
    context.closePath()
    context.stroke()
}

export default function Canvas(props: { drawFunction: DrawFunction } & DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>) {

    const { drawFunction, ...rest } = props
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        let frame = 0
        let animationFrameId = 0

        if (!canvas) return
        const context = canvas.getContext("2d")
        if (!context) return

        const render = () => {
            drawFunction(context, frame)
            frame++
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [drawFunction])

    return <canvas ref={canvasRef} {...rest} />
}