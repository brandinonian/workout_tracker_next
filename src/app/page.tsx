import Workout from "./_components/workout";
import getDailyWorkout from "./_utils/daily_workout";
import SelectWorkout from "./_utils/select_workout";

export default function Home() {

  const now = new Date();

  const dailyWorkout: { exercises: string[] } = getDailyWorkout();

  const todayWorkout: { name: string; exercises?: string[]; } = SelectWorkout();

  return (
    <main className="bg-black flex flex-col items-center">
      <div className="flex flex-col items-center text-center text-slate-300 bg-slate-800 w-5/6">
        <div className="py-5">
          <h1 className="text-8xl py-5">Workout Tracker</h1>
          <p className="text-xl py-5">{now.toLocaleDateString()}</p>
        </div>

        <div className="flex flex-row space-x-10">
          <div className="bg-slate-600 p-5 rounded-md shadow-black shadow-sm">
            <h3 className="text-4xl pb-10">Daily</h3>
            <Workout exercises={dailyWorkout.exercises} />
          </div>

          <div className="bg-slate-600 p-5 rounded-md shadow-black shadow-sm">
            <h3 className="text-4xl pb-10">Today</h3>
            <Workout name={todayWorkout.name} exercises={todayWorkout.exercises} />
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </main>
  )
}
