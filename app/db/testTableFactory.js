const assert = require('assert');
const db = require('./TableFactory');

test.call();
testFindById.call();
testFindAll.call();
testCreate.call();
testUpdate.call();
testDelete.call();

function test(){
    console.log('test');
    console.log(db.table('products'));
    console.log(db.table('products').findById(1));
    console.log(db.table('products').findAll());
}

function testFindById(){
    console.log('testFindById');
    let one = db.table('products').findById(1);
    assert.equal(JSON.stringify(one), '{"id":1,"name":"Product 1"}');
}

function testFindAll(){
    console.log('testFindAll');
    let one = db.table('products').findAll();
    assert.equal(one.length, 2);
}

function testCreate(){
    console.log('testCreate');
    db.table('products').create({id: 5, name : 'vasya'});
    let one = db.table('products').findAll();
    assert.equal(one.length, 3);
}

function testUpdate(){
    console.log('testUpdate');
    db.table('products').update({id: 1, name : 'new name'});
    let one = db.table('products').findById(1);
    assert.equal(one.name, 'new name');
}

function testDelete(){
    console.log('testUpdate');
    db.table('products').delete(1);
    let one = db.table('products').findById(1);
    assert.strictEqual(one, undefined);
}
