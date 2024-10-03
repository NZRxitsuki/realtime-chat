function chat_ue(){
    return (`
    <div id='container_user${count_user}'>
        <div id='box_cu${count_user}'>
            <p id='text_cu${count_user}'>${user_message.value}</p>
        </div>
    </div>
    `)
}

function time_ue(){
     return(`
     <div id='box_tu${time_count_user}'>
         <p id='text_tu${time_count_user}'>${time.tanggal}/${time.bulan()}/${time.tahun}</p>
     </div>
     `)
}

function chat_se(){
    return (`
    <div id='container_server${count_server}'>
        <div id='box_cs${count_server}'>
            <p id='text_cs${count_server}'>${server}</p>
        </div>
    </div>
    `)
}

function time_se(){
     return (`
         <div id='box_ts${time_count_server}'>
             <p id='text_ts${time_count_server}'>${time.tanggal}/${time.bulan()}/${time.tahun}</p>
         </div>
     `)
}