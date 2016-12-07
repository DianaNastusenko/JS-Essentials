function main() {
    var i = 0;
    while (i != 7) {
        var message = "";
        while (message.length != 10) {
            if (i % 2 == 0) {
                message += "# ";
            } else if (i % 2 != 0) {
                message += " #";
            }
        }
        console.log(message);
        i++;
    }
}

main();