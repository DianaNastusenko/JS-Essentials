function main() {
    for (var i = 1; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == j) {
                break;
            }
            console.log("#");
        }
        console.log("\n");
    }
}

main();