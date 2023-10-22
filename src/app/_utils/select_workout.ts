// hardcoded workout values
// not ideal
const workouts = [
    {
        "name": "Push",
        "exercises": [
            "Dip",
            "Push Up",
            "Overhead Press"
        ]
    },
    {
        "name": "Pull",
        "exercises": [
            "Curl",
            "Pull Up",
            "Row"
        ]
    },
    {
        "name": "Legs",
        "exercises": [
            "Squat",
            "Deadlift",
            "Calf Raise"
        ]
    },
    {
        "name": "Rest"
    }
]

function SelectWorkout(now: Date) {

    // get the day of the week
    // 0 = Sunday, 6 = Saturday
    const today = now.getDay();

    // set the index based on day of the week
    // this is hardcoded for my current regimen
    // be sure to update if using a different workout schedule
    let index;

    // mon + thurs
    if (today == 1 || today == 4)
        index = 0;
    // tues + fri
    else if (today == 2 || today == 5)
        index = 1;
    // wed
    else if (today == 3)
        index = 2;
    // weekends and default
    else
        index = 3;

    // return the workout object
    // includes list of exercises
    // e.x.: { name: 'Pull', exercises: [ 'Curl', 'Pull Up', 'Row' ] }
    return workouts[index - 2];
}

export default SelectWorkout;