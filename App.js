
// if we want to create an element in nested structure
{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

// if we want to create an element in nested structure
{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}



// const parent=React.createElement('div',{id:"parent"},
// [React.createElement('div',{id:"child"},
// [
//     React.createElement("h1",{},"i am h1 inside parent and child"),
//     React.createElement("h2",{},"i am h2 inside parent and child"),
// ]),React.createElement('div',{id:"child"},
// [
//     React.createElement("h1",{},"i am h1 inside parent and child"),
//     React.createElement("h2",{},"i am h2 inside parent and child"),
// ])]
// );




//const heading= React.createElement("h1",{id:"heading"},"hello react from cdn!");
//console.log(heading);//this will return an object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(parent); //render convert an object in h1 tag



const parent=React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},
[React.createElement("h1",{},"i am h1 inside parent and child"),
React.createElement("h2",{},"i am h2 inside parent and child")
]));




//const heading= React.createElement("h1",{id:"heading"},"hello react from cdn!");
//console.log(heading);//this will return an object
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent); //render convert an object in h1 tag