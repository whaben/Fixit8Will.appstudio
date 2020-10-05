let UserName = ""
ddAnimal.onclick = function(s) {
    UserName = inptUserName.value
    if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(`${UserName} favorite animal is ${ddAnimal.selection}`);
  toastDog_title.innerText = "Custom title";
  toastDog_subtitle.innerText = "Custom Subtitle";
  toastDog.innerHTML = "<b>Dogs > cats. </b>";
  $("#toastDog").toast("show");
};
toastDog.onclick=function(){
  
}