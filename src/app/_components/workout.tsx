import React from "react"

export default function Workout({ name, exercises }: { name?: string, exercises?: string[] }) {
    return (
        <div className="p-5 rounded-md shadow-black shadow-sm bg-slate-800 text-slate-300">
            {(name) &&
                <div>
                    <p className="text-xl">{name}</p>
                </div>
            }
            <div>
                {(exercises) &&
                    <ul>
                        {exercises.map((exercise) => (
                            <li key={exercise}>{exercise}</li>
                        ))}
                    </ul>}
            </div>
        </div>
    )
}