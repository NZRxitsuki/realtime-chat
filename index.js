const button = document.querySelector("#button")
const user_message = document.querySelector("#input")
const box = document.querySelector("#box")
const profile = document.querySelector("#pp")
const username = document.querySelector("#username")
const dot_menu = document.querySelector("#dot_menu")
const menu = document.querySelector("#alert")
const notif = document.querySelector("#notif-box")
const form = document.querySelector("#form")
//angka untuk mencetak id dengan nama dan angka yang berbeda
let count_user = 0
let count_server = 0
let time_count_user = 0
let time_count_server = 0

//pesan yang akan dikirimkan server
const server = `
    Saat ini masih dalam pengembangan!❌
`
const date = new Date()
const time = {
    tanggal: date.getDate(),
    bulan: () => {
        switch (date.getMonth() + 1) {
           case 1: return "January"
           case 2: return "February"
           case 3: return "March"
           case 4: return "April"
           case 5: return "May"
           case 6: return "June"
           case 7: return "July"
           case 8: return "August"
           case 9: return "September"
           case 10: return "October"
           case 11: return "November"
           case 12: return "December"
        }
    },
    tahun: date.getFullYear(),
    detik: date.getSeconds(),
    menit: date.getMinutes(),
    jam: date.getHours()
}

button.addEventListener("click",() => create_ue())
button.addEventListener("click",() => create_se())
/*dot_menu.addEventListener("click",() => () => {
    if(menu.style.display == "none"){menu.style.display = "flex"}
    else if(menu.style.display == "flex"){menu.style.display = "none"}
})*/

/*setTimeout(() => {
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
})

},1500)*/

//fungsi logika yang akan di jalankan ketika user mengirim pesan
function create_ue(){
    
    if(user_message.value == "") return false
    notif.style.display = "none"
    
    if (notif.style.display == "none") {
        box.style.height = "84%"
    }
    count_user += 1
    time_count_user += 1
    
    box.insertAdjacentHTML("beforeend",time_ue())
    box.insertAdjacentHTML("beforeend",chat_ue())
    user_message.value = ""
    
    //user time box dan text nya
    const box_tu = document.querySelector(`#box_tu${time_count_user}`)
    const text_tu = document.querySelector(`#text_tu${time_count_user}`)
    const first = document.querySelector("#box_tu1")
    box_tu.style.display = "none"
    first.style.marginTop = "10px"
    first.style.display = "flex"
    box_tu.style.width = "100%"
    box_tu.style.justifyContent = "center"
    box_tu.style
   
    text_tu.style.color = "white"
    text_tu.style.background = "#444444"
    text_tu.style.borderRadius = "20px"
    text_tu.style.margin = "0px"
    text_tu.style.padding = "5px 7px"
    text_tu.style.userSelect = "none"
    text_tu.style.fontFamily = "Arial"
    text_tu.style.fontSize = "0.5rem"
    
    //user bubble chat dan text nya
    const container_user = document.querySelector(`#container_user${count_user}`)
    const box_cu = document.querySelector(`#box_cu${count_user}`)
    const text_cu = document.querySelector(`#text_cu${count_user}`)
    
    container_user.style.display = "flex"
    container_user.style.justifyContent = "flex-end"
    container_user.style.alignItems = "center"
    container_user.style.width = "100%"
    container_user.style.margin = "10px 0px 0px 0px"
    container_user.scrollIntoView()
    container_user.addEventListener('touchstart', () => {
        pressTimer = setTimeout(() => {
        container_user.style.background = "lightgray"}, 400);
    });
    container_user.addEventListener('touchend', () => {
      clearTimeout(pressTimer);
    });
    container_user.addEventListener('touchmove', () => {
      clearTimeout(pressTimer);
    });
    container_user.addEventListener("click",() => {
        if(container_user.style.background = "lightgray"){container_user.style.background = "none"}
    })
    box_cu.style.cssFloat = "right"
    box_cu.style.maxWidth = "40%"
    box_cu.style.backgroundColor = "lightcyan"
    box_cu.style.margin = "0px"
    box_cu.style.marginRight = "3%"
    box_cu.style.borderRadius = "20px"
    //box_cu.style.overflow = "scroll"
    box_cu.style.padding = "10px 15px"
    box_cu.style.wordWrap = "break-word"
    box_cu.style
    
    
    //text_chat_user.style.margin = "0px"
    
    //text_chat_user.style.padding = "10px 20px"
    //text_chat_user.style.maxWidth = "60%"
    
    text_cu.style.color = "black"
    text_cu.style.fontFamily = "Arial, sans-serif"
    text_cu.style.fontSize = "0.8rem"
    text_cu.style.padding = "0px"
    text_cu.style.margin = "0px"
    text_cu.style.userSelect = "none"
    
}

//fungsi yang akan di jalankan ketika user sudah mengirim pesan dan akan di balas server
function create_se(){
    
    count_server += 1
    time_count_server += 1
    
    /*const time_el = `<div id=tmboxs${time_count_server}><p id='tms${time_count_server}'>${time.tanggal}/${time.bulan()}/${time.tahun}</p></div>`
    const el = `<p id='cc${count_server}'>${server}</p>`
    */
    box.insertAdjacentHTML("beforeend",time_se())
    box.insertAdjacentHTML("beforeend",chat_se())
    user_message.value = ""
    
    //server time box dan text nya
    const box_ts = document.querySelector(`#box_ts${time_count_server}`)
    const text_ts = document.querySelector(`#text_ts${time_count_server}`)
    const first = document.querySelector("#box_ts1")
    box_ts.style.display = "none"
    first.style.marginTop = "10px"
    first.style.display = "flex"
    
    box_ts.style.width = "100%"
    box_ts.style.justifyContent = "center"
    box_ts.style
   
    text_ts.style.color = "white"
    text_ts.style.background = "#444444"
    text_ts.style.borderRadius = "20px"
    text_ts.style.margin = "0px"
    text_ts.style.padding = "5px 7px"
    text_ts.style.userSelect = "none"
    text_ts.style.fontSize = "0.5rem"
    
    //user bubble chat dan text nya
    const c = document.querySelector(`#container_server${count_server}`)
    const box_cs = document.querySelector(`#box_cs${count_server}`)
    const text_cs = document.querySelector(`#text_cs${count_server}`)
    
    c.style.display = "flex"
    c.style.justifyContent = "flex-start"
    c.style.alignItems = "center"
    c.style.width = "100%"
    c.style.margin = "10px 0px 0px 0px"
    c.scrollIntoView()
    c.addEventListener('touchstart', () => {
        pressTimer = setTimeout(() => {
        c.style.background = "lightgray"}, 400);
    });
    c.addEventListener('touchend', () => {
      clearTimeout(pressTimer);
    });
    c.addEventListener('touchmove', () => {
      clearTimeout(pressTimer);
    });
    c.addEventListener("click",() => {
        if(c.style.background = "lightgray"){c.style.background = "none"}
    })
    box_cs.style.cssFloat = "left"
    box_cs.style.maxWidth = "40%"
    box_cs.style.backgroundColor = "#333333"
    box_cs.style.margin = "0px"
    box_cs.style.marginLeft = "3%"
    box_cs.style.borderRadius = "20px"
    box_cs.style.padding = "10px 15px"
    box_cs.style.wordWrap = "break-word"
    box_cs.style
    
    
    text_cs.style.color = "#efefef"
    text_cs.style.fontSize = "0.8rem"
    text_cs.style.padding = "0px"
    text_cs.style.margin = "0px"
    text_cs.style.userSelect = "none"
    
}
