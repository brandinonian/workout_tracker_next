import { ISuggestedExercise } from "@/utils/types";
import InputExercise from "./inputExercise";

export default function NewExercise({ suggestedExercises }: { suggestedExercises: ISuggestedExercise[] }) {
    return (
        <div>
            {/**Display Date */}
            <div>
                <Date />
            </div>


            {/**Display Today's Exercises */}
            <div>

            </div>


            {/**Display Suggested Exercises */}
            <div>

            </div>


            {/**Exercise Input Form */}
            <div>
                <InputExercise suggestions={suggestedExercises} />
            </div>
        </div>
    )
}