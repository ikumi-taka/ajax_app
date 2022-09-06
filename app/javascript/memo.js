function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();  //XMLHttpRequestオブジェクト生成
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post); //イベント発火を実行するメソッド 要素.addEventListener('イベント名', 関数)