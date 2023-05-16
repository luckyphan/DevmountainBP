const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        //make a new property segmentTimes = speedLimits total 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]

const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }
    let segmentTime = 0
    let totalTime = 0
    let averageSpeed = 0
    let countSegment = 0
    
    stops.forEach(stop => {
        stop.speedLimits.forEach(element => {
            let {distance,speedLimit} = element
            element.segmentTimes = distance/speedLimit
            segmentTime += element.segmentTimes
            averageSpeed += speedLimit
            countSegment++
        })
        averageSpeed /= countSegment
        stop.averageSpeed = averageSpeed
        averageSpeed =0
        countSegment = 0
        totalTime += segmentTime
        segmentTime = 0
    })
    stops.totalTime = totalTime
    
    console.log("Total time"+totalTime)
    
    

    return result
}
 
