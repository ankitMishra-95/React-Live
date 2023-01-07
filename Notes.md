<p>// JSX => React.createElement => object => HTML(DOM)</p>

<p>// JSX Expression</p> 
<p>// React Element</p>

```
const heading3 = <h1 id="title" key="1">Heading</h1>
```

// JSX => React.createElement => object => HTML(DOM) <br>
// JSX Expression <br>
// React Element - (this is just an object) <br>
```
const heading = <h1 id="title" key="1">Heading</h1>  
const Heading2 = () => <h1 id="title" key="1">Heading2</h1>
const Heading3 = () => <h1 id="title" key="1">Heading3</h1>
console.log(heading);
```

// React Component (this is just a function)<br>
// -Functional Component - new way<br>
// -class based component - old way<br>
```
const Footer = () => {
    return (
                <footer>
                    <h4 id="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </h4>
                </footer>
            );
}
```
// Name of component should start with a capital letter<br>
// Functional componet is a normal function.<br>


Babel uses React.CreateElement behind the scenes to read the JSX. \
JSX Benifits
