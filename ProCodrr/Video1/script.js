// const h1 = React.createElement('h1', {className: 'subheading', key: 1}, 'HelloWorld');

// const h1 = {
//     $$typeof: Symbol.for('react.element'),
//     key: "1",
//     type: 'h1',
//     props: {
//         className: 'subheading',
//         children: 'HelloWorld'
//     },
//     ref: null,
// } // This is basically a react object

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h1);





const container = React.createElement('div', {className: 'container', id: 'container'}, 
[
    React.createElement('section', {className: 'innerContainer1', key: 1}, [
        React.createElement('p', {className: 'p', key: 1}, 'MAKAUT'),
        React.createElement('img', {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', width: '200', key: 2})
    ]),

    React.createElement('section', {className: 'innerContainer2', key: 2}, [
        React.createElement('form', {className: 'form1', key: 1}, [
            React.createElement('label', {htmlFor: "fname", key: 1}, 'Your Name'),
            React.createElement('br', {key: 2}),
            React.createElement('input', {type : "text", id: "fname", name: "fname", placeholder: 'Enter', key: 3}),
            React.createElement('br', {key: 4}),

        ])
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);

