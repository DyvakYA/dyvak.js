const fs = require("fs");

class ComponentReader {

    readFile(filePath) {
        this.text = '';
        if (filePath !== '') {
            console.log(filePath);
            this.text = fs.readFileSync(filePath, 'utf8');
        }
        this.html = this.getByTag(this.text, 'html');
        this.javascript = this.getByTag(this.text, 'javascript');
        this.css = this.getByTag(this.text, 'css');
    }

    getByTag(text, tag) {
        let regex = '<' + tag + '>' + '(.*?)' + '</' + tag + '>';
        let stringText = JSON.stringify(text);
        return stringText.match(regex);
    };
}

const reader = new ComponentReader();

module.exports = {
    readFile: function (filePath) {
        return reader.readFile(filePath);
    },
    getHtml: function () {
        return reader.html;
    },
    getJavaScript: function () {
        return reader.javascript;
    },
    getCss: function () {
        return reader.css;
    }
};