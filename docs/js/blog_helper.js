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

var glob_klipseurl = "";

var setKlipseUrl = (s) => glob_klipseurl = s;

function loadKlipse() {
    glob_snippets.map((p) => loadSnippet(p[0], p[1]));
    var el = document.createElement('script');
    el.src = glob_klipseurl;
    el.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(el);
}
