const check = {
    inArray: (array, element) => {
        for(let i = 0; i < array.length; i++){
            if(array[i] === element) return true;
        }
        return false;
    },
    getIndex: (array, element) => {
        for(let i = 0; i < array.length; i++){
            if(array[i] === element) return i;
        }
        return undefined;
    }
};

module.exports = check;