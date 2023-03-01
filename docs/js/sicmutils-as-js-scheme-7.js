["pi", "_pi", "state__GT_t"].map(loadEnv);

var symbol = cljs.core.symbol;
var _COLON_pi = pi;
var __COLON_pi = _pi;

var specialchars =
[["_SYMBOL_$1", /\'(\w+)/g],
["$1_DOT_$2", /(\d+)\.(\d+)/g],
["__COLON_$1", /\-:(\w+)/g],
["_COLON_$1", /:(\w+)/g],
["$1__GT_$2", /(\w+)->(\w+)/g],
[" state__GT_t ", /(\s+)time(\s+)/g],
["[ / -$1 $2 ],", /-(\w+)\/(\d+)/g],
["[ / $1 $2 ],", /(\w+)\/(\d+)/g]];

var mathfns =
[["_SLASH_", /\//g],
["_STAR_", /\*/g],
["_", /\-/g],
["_PLUS_", /\+/g],
["expt", /\^/g]];

mathfns.map(x=> x[0]).map(loadEnv);

var replaceMath = (txt) =>
specialchars.concat(mathfns)
.reduce((s,r) => s.replace(r[1],r[0]), txt);

var swapFirst = (j) =>
j.constructor == Array && mathfns.map(x=> x[0]).includes(j[1])
? [j[1], j[0]].concat(j.slice(2)).map(swapFirst)
: j.constructor == Array
? j.map(swapFirst)
: j;

var insertCommas = (txt) =>
txt.replace(/(\w+)/g,'"$1",')
.replace(/\,(\s+)\]/g," ]");

var makeBrackets = (txt) =>
txt.trim()
.replace(/\(/g,"[ ")
.replace(/\)/g," ],")
.replace(/,$/,"");

var textToJson = (txt) =>
JSON.parse(insertCommas(replaceMath(makeBrackets(txt))));

var drv = sicmutils.env.D;

var specialchars_2 =
    [["_SYMBOL_$1^$2", /_SYMBOL_(\w+)expt(\w+)/],
     ["$1.$2", /(\d+)_DOT_(\d+)/g],
     ["-$1", /_(\d+)/g]];

var replaceD = (j) =>
j.constructor == String && j == "D"
? "drv"
: j.constructor == String
? specialchars_2.reduce((s,r) => s.replace(r[1],r[0]), j)
: j.constructor == Array
? j.map(replaceD)
: j;

["__GT_infix", "simplify"].map(loadEnv);

var preAmble = (j) =>
j[0] != "define"
? ["__GT_infix", ["simplify", j]]
: j;

var identity = x => x;

var edgeCases = (j) =>
j[0] === "define"
&& j[2].constructor == Array && j[2][0] === "let"
&& j[1].constructor == String
? ["identity", "'let not allowed in variable definition'"]
: j;

var letFlat2 = (j) =>
j[0] === "let"
? j[1].concat(letFlat2(j[2]))
: [j];

var constructLet = (j) =>
    ["let", j.slice(0, j.length - 1), j[j.length - 1]];

var letFlat = (j) =>
j.constructor == Array && j[0] === "let"
? constructLet(letFlat2(j))
: j.constructor == Array
? j.map(letFlat)
: j;

var modifyJson = (j) => preAmble(edgeCases(letFlat(replaceD(swapFirst(j)))));

var makeFun = (j, callBack) =>
"var " + j[1][0] + " = (" + j[1].slice(1) + ") => "
+ callBack(j[2]) +";";

var makeFunFun = (j, callBack) =>
"var " + j[1][0][0] + " = (" + j[1][0].slice(1) + ") => "
+ "(" + j[1].slice(1) +") => " + callBack(j[2]) + ";";

var smap = (f, v) =>
v.length === 1
? f(v[0]) +";"
: f(v[0]) +"; "  + smap(f, v.slice(1));

var makeLet = (j, callBack) =>
"{" + smap((l) => "let " + l[0] + " = " + callBack(l[1]), j[1])
    + " return " +  callBack(j[2]) + "; }";

var jsonToJs = (j) =>
j.constructor == Array && j[0] === "let"
? makeLet(j, jsonToJs)
:j.constructor == Array && j[0] === "define"
&& j[1].constructor == Array
&& j[1][0].constructor == Array
? makeFunFun(j, jsonToJs)
:j.constructor == Array && j[0] === "define"
&& j[1].constructor == Array
? makeFun(j, jsonToJs)
: j.constructor == Array && j[0] === "lambda"
? "(" + j[1] + ") => " + jsonToJs(j[2]) + ";"
:j.constructor == Array && j[0] === "define"
&& j[1].constructor == String
? "var " + j[1] + " = " + jsonToJs(j[2]) + ";"
:j.constructor == String && j.substring(0, 8) == "_SYMBOL_"
? 'symbol("' + j.substring(8, j.length) + '")'
:j.constructor == Array
? jsonToJs(j[0]) + ".call(null,"  +  j.slice(1).map(jsonToJs) + ")"
: j;

var expressionToJs = (expr) =>
expr[expr.length-1] === " "
? jsonToJs(modifyJson(textToJson(expr)))
: "'add blank'";

["sin", "cos", "velocity", "dot_product",
"up", "Gamma", "compose", "definite_integral",
"coordinate", "minimize", "square", "partial",
"ref", "sqrt", "atan", "down", "solve_linear_left",
"state_advancer", "cross_product", "Rx", "Ry", "Rz",
"osculating_path"].map(loadEnv);

var literal_function = sicmutils.abstract$.function$.literal_function;
var multidimensional_minimize = sicmutils.numerical.minimize.multidimensional_minimize;
var linear_interpolants = sicmutils.mechanics.lagrange.linear_interpolants;
var make_path = sicmutils.mechanics.lagrange.make_path;
var show_expression = identity;
var velocities = velocity;
var coordinates = coordinate;
var vector_length = cljs.core.count; null;
