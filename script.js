let ts = [-2147483647];

function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    console.error(ts);
    if(ts.length > 1){
        let result = ts[0];
        for (let i = 0; i<ts.length; i++){
            if(Math.abs(ts[i]) < Math.abs(result)){

                result = ts[i];
            }
        }
        console.error(result);
        
        return result;
    } else {
        console.error(ts[0]);
        return ts[0];
    }
}

computeClosestToZero(ts);
