class Repository {

    constructor(data) {
        this.data = data;
    }

    findById(id) {
        return this.data.find(r => r.id === id);
    };

    findAll() {
        return this.data;
    };

    create(item) {
        this.data.push(item);
    };

    update(item) {
        this.data = this.data.filter(r => r.id !== item.id);
        this.data.push(item);
    };

    delete(id) {
        this.data = this.data.filter(function (element) {
            return element.id != id;
        })
    };

}

module.exports = Repository;