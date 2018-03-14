// 位置情報の取得
function getLocation() {
  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback);
}
