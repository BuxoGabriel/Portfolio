export default function P5Page({ src }: { src: string }) {
    return <>
        <canvas id="canvas" />
        <script defer src="https://cdn.jsdelivr.net/npm/p5@1.9.1/lib/p5.js"></script>
        <script defer src={src} />
    </>
}