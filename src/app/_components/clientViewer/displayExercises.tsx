'use server'

import { getExercisesByDay } from "@/utils/backend/getExercisesByDay"
import { ICompletedExercise } from "@/utils/types"

export default async function DisplayExercises({date}: {date: string}) {
    
    const exercises: ICompletedExercise[] = await getExercisesByDay(date);

    return(
        <div>
            <div>
                <p>Date: {date}</p>
            </div>

            <div>
                {exercises.map((exercise) => (
                    <div>
                        <p>{exercise.name}</p>
                        {exercise.weight_lbs && <p>{exercise.weight_lbs}</p>}
                        {exercise.repetitions && <p>{exercise.repetitions}</p>}
                        {exercise.duration_seconds && <p>{exercise.duration_seconds}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}