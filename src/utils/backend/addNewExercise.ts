'use server'

import { ICompletedExercise } from "../types"
import { tursoClient } from "./tursoClient"

export default async function addNewExercise(exercise: ICompletedExercise, exercise_id: number) {

    const result = await tursoClient.execute({
        sql: "INSERT INTO completed_exercises(name, exercise_id, weight_lbs, repetitions, duration_seconds) VALUES(?, ?, ?, ?, ?);",
        args: [exercise.name, exercise_id, exercise.weight_lbs, exercise.repetitions, exercise.duration_seconds]
    })
    return result;
}