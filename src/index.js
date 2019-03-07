// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency < 0) return {};
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    var H = Math.floor(currency / 50);
    var Q = Math.floor((currency - H * 50) / 25);
    var D = Math.floor((currency - H * 50 - Q * 25) / 10);
    var N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
    var P = Math.floor((currency - H * 50 - Q * 25 - D * 10 - N * 5) / 1);

    var arr = { H,Q,D,N,P };

    Object.keys(arr).forEach((key) => {
        if (arr[key] === 0) delete arr[key];
    })
    return arr;
}
