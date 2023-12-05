export interface ICompletedExercise {
    id: number;
    name: string;
    weight_lbs: number | null;
    duration_seconds: number | null;
    repetitions: number | null;
}

export interface ISuggestedExercise {
    id: number
    name: string;
    has_weight: boolean;
    has_duration: boolean;
    has_repetitions: boolean;
}