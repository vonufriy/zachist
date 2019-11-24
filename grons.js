var checked_lang_g= 'ru';
function crypt(message, key, decrypt) {

    var a = {
        lt:   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "x", "y", "z"],
        ua:   ["А", "Б", "В", "Г", "Ґ", "Д", "Е", "Є", "Ж", "З", "И", "І", "Ї", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ю", "Я", "а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"],
        ru: ["А", "Б", "В", "Г", "Д", "Е","Ё", "Ж", "З", "И", "Й", "К","Л", "М", "Н", "О", "П", "Р","С", "Т", "У", "Ф", "Х", "Ц","Ч", "Ш", "Щ", "Ъ", "Ы", "Ь","Э", "Ю", "Я", ",", ".", "-"]
    }

    message = message.split("");

    key = ("" + key).split("");

    return message.reduce(function(message, current) {

        var i = a[checked_lang_g].indexOf(current),

            b = +key.shift();

        key.push(b);

        decrypt ? (i -= b, i < 0 && (i += a[checked_lang_g].length)) : (i += b, i %= a[checked_lang_g].length);

        return message + a[checked_lang_g][i]

    }, "")

};
var button = document.getElementById('submit_g'),
    code_in = document.getElementById('code_input_g'),
    str_in = document.getElementById('str_input_g'),
    output_g = document.getElementById('output_g'),
    selector_g = document.getElementById('lang_selector_g');



button.addEventListener('click',function(){
    var r = crypt(str_in.value,code_in.value);
    output_g.innerText = r;
});


selector_g.addEventListener('change',function(e){
    checked_lang_g =  e.target.value;
});