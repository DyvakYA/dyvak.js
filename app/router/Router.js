const componentReader = require("../components/ComponentReader");

function Router() {

    let routes = [];

    this.initRoutes = function (items) {
        items.forEach(function (item) {
            if (item.path !== 'undefined' && item.content !== 'undefined') {
                componentReader.readFile(item.content);
                item.html = componentReader.getHtml();
                item.javascript = componentReader.getJavaScript();
                item.css = componentReader.getCss();
                routes.push(item);
            }
        })
    };

    this.response = function (page, url) {
        let route = routes.find(r => r.path === url);
        if (route.html[0] !== 'undefined') {
            let content = route.html[0].replace(/\\r\\n|\\/g, "");
            return page.replace('<router-view/>', content);
        }
        return '';

    }
}

module.exports = new Router();
