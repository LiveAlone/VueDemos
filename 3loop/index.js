var app = new Vue({
    el: '#app',
    data: {
        todos:[
            {text: 'learning javascript'},
            {text: 'learning vue condition'},
            {text: 'learning everything why learn'}
        ]
    }
});

app.todos.push({text: 'all add condition'});

