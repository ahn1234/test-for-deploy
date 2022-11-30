function getJSON() {
    $.ajax({
        type:"get",
        url:"data.json",
        dataType:"json",
        success: function(data){
            console.log("통신성공");
            console.log(data);
            str = '<TR>';
            $.each(data , function(i){
                str += '<TD>' + data[i].no + '</TD>
                    <TD>' + data[i].name + '</TD>
                <TD>' + data[i].tel + '</TD>
                <TD>' + data[i].addr + '</TD>' +
                '<TD>' + data[i].status + '</TD>
                <TD>' + data[i].comment + '</TD>
                <TD>'+ data[i].date + '</TD>';
                str += '</TR>';
            });
            $('.table_body').append(str);
        },
        error:function(){
            console.log("통신에러");
        }
    })
}