const calculateNumber = (type, a, b) => {
    a_ = Math.round(a)
    b_ = Math.round(b)
    
    if (type === 'SUM') {
        return a_+b_
    }
    else if(type === 'SUBTRACT') {
        return a_-b_
    }
    else if (type === 'DIVIDE') {
        if (b_ !== 0){
            return a_/b_
        }
        return 'Error'
    }

}

module.exports = calculateNumber
