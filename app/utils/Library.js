function Library(element) {

    this.element = element;

    this.on = function(name, f) {
        for (let i = 0; i < element.length; i++) {
            this.element[i].addEventListener(name, f);
        }
        return this;
    };

    this.render = function(content) {
        for (let i = 0; i < element.length; i++) {
            this.element[i].innerHTML = content;
        }
        return this;
    };
}

let $ = function (selector) {
    let elements = document.querySelectorAll(selector);
    return new Library(elements);
};

module.exports = $;


