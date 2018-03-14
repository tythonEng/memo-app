// 成功したとき
function successCallback(position) {
  var c = position.coords;
  var lat = c.latitude; // 緯度
  var lon = c.longitude; // 経度
  var alt = c.altitude; // 高度(m)
  var acc = c.accuracy; // 誤差
  var heading = c.heading; // 方角
  var speed = c.speed; // 速度 m/秒
  document.getElementById("msg").innerHTML =
    "緯度経度: " + lat + "," + lon + "<br>" +
    "高度/誤差/方角/速度: " + alt + "/" +
    acc + "/" + heading + "/" + speed;
}
