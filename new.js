const tempload = () => {
  let value = document.getElementById("temp");
  value.innerHTML = "&#xf244";
  setTimeout(() => {
    value.innerHTML = "&#xf244";
    temp.style.color = "red";
  }, 1000);
  setTimeout(() => {
    value.innerHTML = "&#xf243";
  }, 2000);
  setTimeout(() => {
    value.innerHTML = "&#xf242";
  }, 3000);
  setTimeout(() => {
    value.innerHTML = "&#xf241";
  }, 4000);
  setTimeout(() => {
    value.innerHTML = "&#xf240";
    temp.style.color = "green";
  }, 5000);
};

tempload();
setInterval(tempload, 6000);
