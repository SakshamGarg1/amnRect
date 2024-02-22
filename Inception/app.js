// const heading = React.createElement("h1",{id:"root"},"Hello welcome my the world of react");

// console.log(heading);

let Parent= React.createElement("div", {id:"parent"},
[
    [React.createElement( "H1",{id:"child"},"Hello World! This is H1 Tag"),
    React.createElement( "H2",{id:"child"},"Hello World! This is H2 Tag")
    ],[
     React.createElement( "H1",{id:"child"},"Hello Saksham! This is H1 Tag"),
    React.createElement( "H2",{id:"child"},"Hello Saksham! This is H2 Tag")
    ]

    ])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);