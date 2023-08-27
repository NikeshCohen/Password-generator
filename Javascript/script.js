const passwordBox = $("#password");
const passwordBtn = $(".btn");
const password = $(".copy-icon");
const favicon = $("link[rel='icon']");

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!#$%&()*+";
const length = 10;

$(document).on("visibilitychange", () => {
  const state = document.hidden ? "-inactive" : "";
  favicon.attr("href", `images/icon${state}.png`);
});

passwordBtn.on("click", () => {
  function generatePassword() {
    let password = "";

    while (length > password.length) {
      password += letters[Math.floor(Math.random() * letters.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    return password;
  }

  function shufflePassword(array) {
    let i, j, temp;

    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  let randomizedPassword = shufflePassword(generatePassword().split("")).join(
    ""
  );

  passwordBox.val(randomizedPassword);
  passwordBox.text(randomizedPassword);
});

password.on("click", () => {
  let passwordCopy = passwordBox.text();
  navigator.clipboard.writeText(passwordCopy);
  alert("Password copied to clipboard");
});
