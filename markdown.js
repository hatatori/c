
// Array.from(document.querySelectorAll('markdown')).map(el=>{
Array.from(document.querySelectorAll('.markdown')).map(el=>{
    var content = el.innerHTML
    // content = content.replace(/### (.+)\n/g, '<h1 class="text-3xl border-b border-b-gray-300 pb-5">$1</h1>')
    // content = content.replace(/## (.+)\n/g, '<h1 class="py-2 text-xl font-serif">$1</h1>')
    // content = content.replace(/# (.+)\n/g, '<h1 class="text-3xl border-b border-b-gray-300 pb-5">$1</h1>')
    // content = content.replace(/!! (.+)\n/g, '<p>$1</p>')
    content = content.split("\n").map(e=>e.trim()).filter(e=>e.length>0)
    content = content.map(e=>
        e
        .replace(/^# (.+)/, '<h1>$1</h1>')
        .replace(/^## (.+)/, '<h2>$1</h2>')
        .replace(/^!! (.+)/, '<p>$1</p>')
        .replace(/^- (.+)/, '<li>$1</li>')
        .replace(/^!@/, '<ul>')
        .replace(/^@!/, '</ul>')
    ).join("")

    el.innerHTML = content;
})


// var markdownContent = "# Título\n\nIsso é um *exemplo* de **Markdown**.";
// var renderedHTML = md.render(markdownContent);
// document.getElementById("markdown-content").innerHTML = renderedHTML;