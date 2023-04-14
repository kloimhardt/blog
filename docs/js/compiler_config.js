function compiler_config_patchEvalOnce() {
    var oldEval = window.eval;
    var newEval = (txt) =>
        txt.substr(0, 2) === ";("
        ? "Transpiled JS: " + expressionToJs(txt.substr(1))
        : txt[0] === "(" && txt[txt.length - 1] != " "
        ? "AST: " + textToJson(txt)
        : txt[0] === "("
        ? oldEval(expressionToJs(txt))
        : txt[txt.length - 1] != ";"
        ? "Add ; to JS: " + txt
        : oldEval(txt);
    window.eval = newEval;
}
