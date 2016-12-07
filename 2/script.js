function main() {
    var x1 = prompt("Please enter coordinate X of first point");
    if (x1 != null) {
        var y1 = prompt("Please enter coordinate Y of first point");
        if (y1 != null) {
            var x2 = prompt("Please enter coordinate X of second point");
            if (x2 != null) {
                var y2 = prompt("Please enter coordinate Y of second point");
                if (y2 != null) {
                    var dist = distance(x1, y1, x2, y2);
                    alert('Distance between points is ' + dist);
                }
            }
        }
    }
}

function distance(x1, y1, x2, y2) {
    var dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return dist;
}

main();