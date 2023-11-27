'use client'

import { useState } from "react"
import NewExercise from "./newExercise";
import { ISuggestedExercise } from "@/utils/types";

const data: ISuggestedExercise[] = [
    {
        id: 11,
        name: "Turkish Get Up",
        has_weight: true,
        has_repetitions: true,
        has_duration: false
    },
    {
        id: 22,
        name: "Pistol Squat",
        has_weight: false,
        has_repetitions: true,
        has_duration: false
    },
    {
        id: 33,
        name: "Plank",
        has_weight: false,
        has_repetitions: false,
        has_duration: true
    }
]

export default function ClientViewer() {

    const [viewSelection, setViewSelection] = useState(1); // 1 = view, 2 = add

    return (
        <div className="flex flex-col items-center bg-zinc-800 text-green-400 p-10 space-y-4">
            {/**Options */}
            <div>
                <ul className="flex flex-row space-x-4">
                    <button onClick={e => setViewSelection(1)}>View</button>
                    <button onClick={e => setViewSelection(2)}>Add</button>
                </ul>
            </div>


            {/**Display View */}
            {viewSelection == 2 && <NewExercise suggestedExercises={data}/>}
        </div>
    )
}