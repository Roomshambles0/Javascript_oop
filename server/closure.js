//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure



// closure in the javascript means function executed under function
// in closure inside function has access to the  outeside vaiables see examples



function one(){
    const username = "pk";

    function two(){
        console.log(username)
    }
    two()
}

one()


