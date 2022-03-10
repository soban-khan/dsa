function d2b(no) {
    if (no >= 1) {
        d2b(Math.floor(no / 2))
        console.log(no % 2)
    }
}

d2b(9)