var loadSnippet = (iframeNode, snippetNode) => {
    let msg = snippetNode + " not in IFrame " + iframeNode;
    let prn_msg = () => {alert(msg); return(msg);};
    let nde = document.getElementById(iframeNode)
        .contentWindow.document
        .getElementById(snippetNode);
    document.getElementById(snippetNode).innerHTML =
        nde != null ? nde.innerHTML : prn_msg();
};

var glob_snippets = [];

function addSnippet(iframeNode, snippetNode) {
    glob_snippets = glob_snippets.concat([[iframeNode, snippetNode]]);
}

function loadKlipse() {
    glob_snippets.map((p) => loadSnippet(p[0], p[1]));
    var el = document.createElement('script');
    el.src = "https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js";
    el.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(el);
}
