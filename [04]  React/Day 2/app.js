// creating element in react
// This is not a good learning syntax
// const element = React.createElement('h1',{id:'title'},"Hi there how are you");

// JSX => javascript XML: look like HTML
// Babel  JSX  ----> React.createElement()  ------> React element(JS object) ----> Real DOM
//             babel                        React                            ReactDOM
const element = <h1 id="tittle" className="first">HI there </h1>

const element2 = (<div>
    <h1>HI Bhai Kya haal </h1><br />
    <h2>Mat Bol BSDK  </h2><br />
    <h2>Bhai DIl se Bura Lagta hain </h2>
    </div>
)

// What is React component?
// It is just a function , iske ander ist letter should be capiltal always , and wo always JSX return karega 
// function App(name){

//     return ( // ek parent element ke ander hone chaiye multiple elements jese isme div ke ander 2 element hain
//         <div>
//             <h1>Hi {name} Bahi</h1>
//             <h2> Tu randi {10+10} bar chuud chukhi hain </h2>
//         </div>
//     );
// }
// const a = App("Amit")

// text/element : Javascript ka expression ham iske ander likh sakte hain
// Number, string , null, true false, undefined , array , object

// Number , array , string display honge
// True false null  undefined  render toh hongebut display nhi honge
// Object toh error hi maar dega
// const age = 20
// const a = <h1>Hi bhai {age>18?"adult":"teenager"} </h1>

// const courses = ["HTML","CSS","Javascript","React"]
// const a = (
//     <ul>
//         {courses.map(c => <li> {c} </li>)}
//     </ul>
// )


function App(props){

    return (
        <h1>Hi bhai kya haal hain {props.name} {props.age} </h1>
    )
}
// props kuch nhi bss ek term hain jab ye age aur name ko object mein wrap karke deta hian usse prop bolte hain
// {
//     name: Amit,
//     age: 30
// }
const a = <App name="Amit" age={30}  />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(a);

// another method to call
// root.render(<App/>)