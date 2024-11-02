import Solver from "./components/solver"

export const metadata = {
  title: 'Terminus Solver',
  description: 'A solver for the algebra step of the terminus easter egg for call of duty BO6',
}

export default function ZombiesSolver() {
    return (<div className="flex flex-col items-center">
        <h1 className="text-4xl p-4">Terminus Solver</h1>
        <Solver/>
    </div>)
}
