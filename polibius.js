var kv = {
    lt:[
        ["A", "B", "C", "D", "E"],
        ["F", "G", "H", "I", "K"],
        ["L", "M", "N", "O", "P"],
        ["Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"]
    ],
    ua: [
        ["А", "Б", "В", "Г", "Ґ", "Д"],
        ["Е", "Є", "Ж", "З", "И", "І"], 
        ["Ї", "Й", "К", "Л", "М", "Н"],
        ["О", "П", "Р", "С", "Т", "У"],
        ["Ф", "Х", "Ц", "Ч", "Ш", "Щ"],
        ["Ь", "Ю", "Я", ",", ".", "-"]
    ]
}
var checked_lang= 'ua';


function encode(str) {
    var idx;
    var res = "";
    str = str.toUpperCase();
    for (var j = 0; j < str.length; j++) {
        for (var i = 0; i < kv[checked_lang].length; i++) {
            idx = kv[checked_lang][i].indexOf(str.charAt(j));
            if (idx >= 0) {
                res += " " + i + "" + idx;
                break;
            }
        }
    }
    return res;
}



var input = document.getElementById('str_input'),
    output = document.getElementById('output'),
    selector = document.getElementById('lang_selector');
    
input.addEventListener('keyup',function(e){
    var r = encode(e.target.value);
    output.innerText = r;
});


selector.addEventListener('change',function(e){
    checked_lang =  e.target.value;
});


