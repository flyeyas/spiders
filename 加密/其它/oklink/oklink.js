var API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab";

function encryptApiKey() {
    var t = API_KEY
    var e = t.split("")
    var n = e.splice(0, 8);
     return t = e.concat(n).join("")
}

function encryptTime(t) {
    var a = 1111111111111;
    var e = (1 * t + a).toString().split("");
    var n = parseInt(10 * Math.random(), 10);
    var r = parseInt(10 * Math.random(), 10);
    var o = parseInt(10 * Math.random(), 10);
    return e.concat([n, r, o]).join("")
}

function comb(t, e) {
    var n = "".concat(t, "|").concat(e);
    return  Buffer.from(n).toString('base64');
}

function getApiKey() {
    var t = (new Date).getTime();
    var e = encryptApiKey();
    var t = encryptTime(t);
    return  comb(e, t);
}

console.log(getApiKey());

请使用说明一下这个属于哪种类型的加密