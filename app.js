
//Tạo button và href cùng kiểu

const ButtonHref = ({ title, href, onClick }) => {
    let Component = 'button';
    const props = {};
    if (href) {
        Component = 'a'
        props.href = href
    }
    if (onClick) {
        props.onClick = onClick
    }

    return <Component {...props} className="ButtonHref" >{title}</Component>
}


const App = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    return root.render(
        <div id="wrapper">
            <ButtonHref
                title="Click me!"
                href="https://fullstack.edu.vn/"
                onClick={() => console.log(Math.random())}
            />
        </div>
    )
}


App()