function onInit() {
  // Geolocation APIをサポートしているか？
  if (!navigator.geolocation) {
    alert("位置情報が利用できません");
    return;
  }
  getLocation();
}
