'use client'

import React, { useEffect, useState } from "react"
import { ISuggestedExercise } from "@/utils/types";
import { clearInterval } from "timers";
import DisplayExercises from "./displayExercises";
import AddNewExercise from "../addNewExercise/addNewExercise";

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

    const [addNewState, setAddNewState] = useState(1);
    const [dateState, setDateState] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(dateState);
    // !! BORKED !!
    // reset the current date
    // useEffect(() => {
    //     const timer = setInterval(() => setDateState(new Date()), 30000);
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, []);

    const subtractDay = () => {
        const newDate = new Date(selectedDate.setDate(selectedDate.getDate() - 1));
        setSelectedDate(newDate);
    }

    const addDay = () => {
        const newDate = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
        setSelectedDate(newDate);
    }

    return (
        <div className="bg-zinc-800 border-2 border-zinc-300">

            <div>
                <p>Today's Date: {dateState.toLocaleDateString('en')}</p>
            </div>

            {/**Display selected date */}
            <div>
                <p>{selectedDate.toLocaleDateString('en')}</p>
            </div>

            {/**Display forward, back, and add exercise buttons */}
            <div className="flex flex-row space-x-4">
                <div>
                    <button onClick={() => subtractDay()}>{`Back`}</button>
                </div>

                {/* TODO: Need a way to go back to viewing data */}
                <div>
                    <button onClick={() => setAddNewState(2)}>{`Add New`}</button>
                </div>

                <div>
                    <button onClick={() => addDay()}>{`Forward`}</button>
                </div>
            </div>



            {/**Display exercises or add new exercise form */}
            {(addNewState == 2) && <AddNewExercise />}
            {/* {(addNewState == 1) && <DisplayExercises date={selectedDate.toLocaleDateString('en')} />} */}

        </div>
    )
}