import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Bionic Reading</h1>
<div id='text'>
   <textarea id='txtMetin' rows='5' cols='100'></textarea>
   <button id='btnCevir' type='button'>ÇEVİR</button>
</div>
<hr>
<div id='newText'></div>
`;
document.getElementById("btnCevir").addEventListener("click", bionicConvert);
function bionicConvert() {
  let arr = document.getElementById("txtMetin").value.split(" ");
  let newArr = arr.map((m) => {
    let halfStr = m.substring(0, m.length / 2 + (m.length % 2 === 0 ? 0 : 1));
    return "<b>" + halfStr + "</b>" + m.replace(halfStr, "");
  });
  document.getElementById("newText").innerHTML = newArr.join(" ");
}
