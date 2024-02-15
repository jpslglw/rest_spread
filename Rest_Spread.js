// with rest operator and arrow function
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// findMin
const findMin = (...vals) => vals.reduce((minVal,n) => minVal < n ? minVal : n);

// mergeObjects
const mergeObjects = (arg1, arg2) => ({...arg1, ...arg2});

// doubleAndReturnArgs
const doubleAndReturnArgs = (...newArgs) => newArgs.map(newVal => typeof newVal === "number" ? newVal*2 : newVal);

/** remove a random element in the items array
and return a new array without that item. */
const removeRandomitems = (...items) => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), ...items.slice(idx+1)];
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
};


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj2 = {...obj};
    delete newObj2[key];
    return newObj2;
}


/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let newObj3 = {...obj};
    newObj3[key] = val;
    return newObj3;
}