const reader = require("./ComponentReader");

test.call();

function test() {


    const file = "./Users.dy";

    reader.readFile(file);

    console.log(reader.getHtml()[0]);
    console.log(reader.getJavaScript()[0]);
    console.log(reader.getCss()[0]);
}


