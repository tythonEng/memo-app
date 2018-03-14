function init_google_map() {
  var latlng = new google.maps.LatLng(34.965210, 137.046678);
  var opts = {
    zoom: 13,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  var iw_latlng1 = new google.maps.LatLng(34.955562,137.052215);
  var infowindow1 = new google.maps.InfoWindow({
    content: '往路：右オフセット走行',
    position: iw_latlng1,
    zIndex: 1
  });

  infowindow1.open(map);

  var iw_latlng2 = new google.maps.LatLng(34.960371, 137.062688);
  var infowindow2 = new google.maps.InfoWindow({
    content: '復路：左折膨らみ走行',
    position: iw_latlng2,
    zIndex: 2
  });

  infowindow2.open(map);

}
