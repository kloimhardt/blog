var loadEnv = (name) => {
    window[name] = sicmutils.env[name];
    return name;
};

var _2_eval = window.eval;
var _3_eval = (txt) =>
    txt[0] === "("
    ? _2_eval(expressionToJs(txt))
    : _2_eval(txt);
window.eval = _3_eval;
