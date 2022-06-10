const sayHello = (name, city, state) => {
    if (name.length > 3){
        return `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!`
    }else if(name.length > 2){
        return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`
    }else{
        return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`
    }
}

//much more efficient method here would to be use the join method for arrays instead of whatever spaghetti code you made above

