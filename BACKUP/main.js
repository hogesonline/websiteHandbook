let source = "PageData.json"
window.fetch('PageData.json').then((x)=>x.json()).then((pageData)=>{
    main(pageData)
});

main = function(data){
    let current = "";
    for (let page in data.pages.pages){
    console.log(page);
    }
}