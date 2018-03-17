// 成功したとき
function successCallback(position) {
  var c = position.coords;
  //var time = position.timestamp;//タイムスタンプ
  var lat = c.latitude.toFixed(8); // 緯度
  var lon = c.longitude.toFixed(8); // 経度
  var alt = c.altitude; // 高度(m)
  var acc = c.accuracy; // 誤差
  var heading = c.heading; // 方角
  var speed = c.speed; // 速度 m/秒
  var d = new Date();
  var time = d.toLocaleString();

  document.getElementById("msg").innerHTML =
    "経度：" + lat + "<br>" +
    "経度：" + lon + "<br>" +
    "高度：" + alt + "<br>" +
    "方位：" + heading + "<br>" +
    "誤差：" + acc + "<br>" +
    "タイムスタンプ:" + time;
  return c;
}
