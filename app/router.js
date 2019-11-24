const router = require('./router/Router');

let routes = [
    {
        title: 'Home',
        name : 'home',
        path: "/",
        content: ''
    },
    {
        title: 'Products',
        name : 'products',
        path: "/products",
        content: './components/Products.dy'
    },
    {
        title: 'Users',
        name: 'users',
        path: "/users",
        content: './components/Users.dy'
    }
];

router.initRoutes(routes);

module.exports = {
    response: function (page, url) {
        return router.response(page, url);
    },
} ;