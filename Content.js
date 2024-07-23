
function Content(bmi){
    if(bmi<=25 && bmi>18.5){
        return `Cardio exercises help burn calories and improve heart health. Aim for at least 150 minutes of moderate-intensity or 75 minutes of high-intensity cardio per week.
Walking: A brisk walk for 30-60 minutes a day can help maintain a healthy weight.
Running/Jogging: Great for burning calories and improving cardiovascular health.
Cycling: Can be done outdoors or on a stationary bike.`
    }
    else if(bmi>25){
        return `Cardio Exercises
Cardio exercises are essential for burning calories and improving cardiovascular health.

Walking/Jogging: Start with brisk walking if you're new to exercise, then progress to jogging as your fitness improves. Aim for 30-60 minutes most days of the week.
Cycling: Both stationary and outdoor cycling are great options.
Swimming: This is a full-body workout that is easy on the joints.`
    }
    else{
        return `Compound exercises that engage multiple muscle groups, such as squats, deadlifts, bench presses, and rows, are effective for weight gain. They promote overall muscle development and stimulate the body to gain weight.`
    }
}

export default Content
