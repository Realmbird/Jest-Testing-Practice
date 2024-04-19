let analyzeArray = (array) => {
    let length = array.length
    let average = 0
    let min = array[0]
    let max = array[0]
    array.forEach(element => {
        average += element
        if(element < min) {
            min = element
        }
        if(element > max) {
            max = element
        }
    });
    average /= length
    return {average, min, max, length}
    
    // object == {
    //     average: 4,
    //     min: 1,
    //     max: 8,
    //     length: 6
    //   };
} 
export {analyzeArray}