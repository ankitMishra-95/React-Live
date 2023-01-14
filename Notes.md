Package.lock is the snapshot of the default version of the Packages that we install \

**Parcel** **BenifitsOfParcel**
1. HMR - Hot Module Replacement
2. File Watcher Algorithm
3. Bundling
4. Minify
5. Cleaning the code
6. Dev and Production build difference
7. Super Fast Build Algorithm
8. Image Optimization
9. Compression
10. Make code compatible with older version of browser
11. Https on dev
12. Provide port number automatically
13. Zero Configuration
14. Tree Shaking (Remove unwanted codes)


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



**JSX**
JSX is a HTML like syntax and not HTML inside javaScript.

Babel uses React.CreateElement behind the scenes to read the JSX. \
**JSX Benifits** \

1. Readability
2. Developer Experience
3. Maintainability
4. Less Code
5. No Repitition
6. Syntactical Sugar

JSX also takes care of the XSS Attack itself, It Sanitizes the code before executing it.

First cmponent renders and hen the useEffect is called.