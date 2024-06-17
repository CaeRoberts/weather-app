import Day from "../components/(Main)/Day";
import Forecast from "../components/(Main)/Forecast";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-2 bg-slate-800 w-full overflow-auto">
      <Day />
      <Forecast />
    </div>
  )
}
