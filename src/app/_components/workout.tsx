import React from "react"

export default function Workout({ name, exercises }: { name?: string, exercises?: string[] }) {
    return (
        <div className="p-5 border solid border-slate-700">
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