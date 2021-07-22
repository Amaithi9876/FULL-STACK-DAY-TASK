var object1={
    name:'person 1',
    age:'5'
    }
    
    var object2={
    age:'5',
    name:'person2'
    }
    
    JSON.stringify(object1)===JSON.stringify(object2)
    // false
    
    _.isEqual(object1, object2)
    //true