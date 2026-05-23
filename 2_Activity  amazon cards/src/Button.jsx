function doSomething(){
    console.log("Button was clicked!");
}

function handleHover(){
    console.log("Hover");
}


export default function Button(){
    let styles={
        marginRight: "5px",
    };

    return(
        <div>
            <button onClick={doSomething} style={styles}>Click Me!</button>
            <button onMouseOver={handleHover} style={styles}>Hover Over Me!</button>
        </div>
    );
}