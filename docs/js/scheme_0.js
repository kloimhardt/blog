window.out_eval = (code_node, output_node) => {
    let code = document.querySelector(code_node).value;
    let erg = eval(code);
    document.querySelector(output_node).innerText = erg;
};
