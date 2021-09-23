var budi = 160;
var andi = 170;
var anto = 180;

function tinggiBadan() {
    if (budi > (andi && anto)) {
        if (anto > andi) {
            return `Budi adalah yang tertinggi dengan tinggi ${budi} \nAnto memiliki tinggi yang sedang yaitu ${anto} \nAndi adalah yang terendah dengan tinggi ${andi}`;
        } else {
            return `Budi adalah yang tertinggi dengan tinggi ${budi} \nAndi memiliki tinggi yang sedang yaitu ${andi} \nAnto adalah yang terendah dengan tinggi ${anto}`;
        }
    } else if (andi > (budi && anto)) {
        if (budi > anto) {
            return `Andi adalah yang tertinggi dengan tinggi ${andi} \nBudi memiliki tinggi yang sedang yaitu ${budi} \nAnto adalah yang terendah dengan tinggi ${anto}`;
        } else {
            return `Andi adalah yang tertinggi dengan tinggi ${andi} \nAnto memiliki tinggi yang sedang yaitu ${anto} \nBudi adalah yang terendah dengan tinggi ${budi}`;
        }
    } else {
        if (budi > andi) {
            return `Anto adalah yang tertinggi dengan tinggi ${anto} \nBudi memiliki tinggi yang sedang yaitu ${budi} \nAndi adalah yang terendah dengan tinggi ${andi}`;
        } else {
            return `Anto adalah yang tertinggi dengan tinggi ${anto} \nAndi memiliki tinggi yang sedang yaitu ${andi} \nBudi adalah yang terendah dengan tinggi ${budi}`;
        }
    }
}

console.log(tinggiBadan())