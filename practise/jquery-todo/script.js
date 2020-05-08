
$(()=>{
    let item = $("#item")
    let list = $("#list")
    

    $("#prepend").click(()=>{
        let text = item.val()
        list.prepend($(`<li ><i>${text}</i></li>`))
    })

    $("#append").click(()=>{
        let text = item.val()
        list.append($(`<li ><b>${text}</b></li>`))
    })









})