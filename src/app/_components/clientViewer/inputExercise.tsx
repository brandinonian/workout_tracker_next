'use client'

import { ISuggestedExercise } from "@/utils/types";
import { useState } from "react";

export default function InputExercise({ suggestions }: { suggestions: ISuggestedExercise[] }) {

    const [selectedExercise, setSelectedExercise] = useState(suggestions[0].name);
    const [selectionID, setSelectionID] = useState(suggestions[0].id);
    const [hasWeight, setHasWeight] = useState(suggestions[0].has_weight);
    const [hasDuration, setHasDuration] = useState(suggestions[0].has_duration);
    const [hasRepetitions, setHasRepetitions] = useState(suggestions[0].has_repetitions);

    function setSelection(selection: string) {
        suggestions.map((suggestion) => {
            if (suggestion.name === selection) {
                setSelectionID(suggestion.id);
                setSelectedExercise(suggestion.name);
                setHasWeight(suggestion.has_weight);
                setHasDuration(suggestion.has_duration);
                setHasRepetitions(suggestion.has_repetitions);
            }
        })
    }

    return (
        <div className="rounded-md border-green-400 border-2 p-6">
            <form action="/api/workouts" method="post" className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4">
                    <p>Name</p>
                    <select onChange={e => setSelection(e.target.value)} value={selectedExercise} className="bg-zinc-900 select-ghost">
                        {suggestions.map((suggestion, index) => <option key={suggestion.id}>{suggestion.name}</option>)}
                    </select>
                </div>

                {hasWeight &&
                    <div className="flex flex-row space-x-4">
                        <p>Weight (lbs)</p>
                        <input name="weight" type="number" className="bg-zinc-900 rounded-md border-green-400 border-2"></input>
                    </div>
                }

                {!hasWeight &&
                    <input type="hidden" value={'null'}></input>
                }

                {hasDuration &&
                    <div className="flex flex-row space-x-4">
                        <p>Duration (seconds)</p>
                        <input name="duration" type="number" className="bg-zinc-900 rounded-md border-green-400 border-2"></input>
                    </div>
                }

                {!hasDuration &&
                    <input type="hidden" value={'null'}></input>
                }

                {hasRepetitions &&
                    <div className="flex flex-row space-x-4">
                        <p>Repetitions</p>
                        <input name="repetitions" type="number" className="bg-zinc-900 rounded-md border-green-400 border-2"></input>
                    </div>
                }

                {!hasRepetitions &&
                    <input type="hidden" value={'null'}></input>
                }

                <input name="exercise_id" value={selectionID} type="hidden"></input>
            </form>
        </div>
    )
}