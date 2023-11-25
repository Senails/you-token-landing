const code = (new URL(window.location.href)).searchParams.get('code') || "no code detected";
const codeSpan = document.querySelector('#code');

codeSpan.innerText = "Code: " + code ;
