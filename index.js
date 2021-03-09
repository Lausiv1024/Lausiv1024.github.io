function buttonClick(){
    var input_name = document.getElementById("nname").value;
    if (input_name == ""){
        alert("名前を入力してください");
        return;
    }

    let iii =0;
    for (let i = 0; i < input_name.length; i++){
        iii += input_name.charCodeAt(i);
    }
    let result = iii / input_name.length
    document.getElementById("result").innerHTML = String.fromCharCode(result);
}
