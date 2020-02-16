function CustomElement( html ) {
    let template = document.createElement( "template" );
    // Prevent returning a text node of whitespace as the result
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}