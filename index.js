

const ulReact = React.createElement(
    'ul',
    {
        id:'ul-id',
        style:{color:"red",fontSize:"30px"}
    },
    React.createElement('li',null, 'Javascript'),
    React.createElement('li', null, 'Reactjs')
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    ulReact
)