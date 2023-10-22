import React from "react"

export default function Workout({ name, exercises }: { name?: string, exercises?: string[] }) {
    return (
        <div className="p-5 border solid border-slate-700">
            <div>
                {(name) &&
                    <p className="border-b-2 border-slate-300">{name}</p>
                }
            </div>
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