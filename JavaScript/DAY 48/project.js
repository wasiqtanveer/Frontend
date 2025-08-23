let targetTime = new Date(2025,12,31,11,59,59).getTime(); // Target date in milliseconds

const timer = setInterval(() => {
    let currentTime = Date.now()
    let RemainingTime = targetTime - currentTime

    if (RemainingTime <= 0) {
        clearInterval(timer)
        console.log(`Happy New Year`)
    }

    else
    {
        let day = RemainingTime/(1000*)
    }
}, 1000);