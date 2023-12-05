'use server'

import { ICompletedExercise } from "../types"
import { tursoClient } from "./tursoClient"

export async function getExercisesByDay(date: string) {
    const exercises: ICompletedExercise[] = await tursoClient.execute({
        sql: 'SELECT * FROM completed_workouts WHERE timestamp LIKE ?',
        args: [date]
    });
    return exercises;
}