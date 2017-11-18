// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 50.392149, Долгота: 30.624511
    var centerLatLng = new google.maps.LatLng(55.164878, 37.465146);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 13,               // Зум по умолчанию. Возможные значения от 0 до 21
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
        },
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    map.scrollwheel=true;
  map.setOptions({ mapTypeControl:true});
 
 /*Один маркер*/ 
 /*var marker = new google.maps.Marker({
	position: {lat: 46.967046, lng: 32.000093},
	map: map,
	title: 'Legalizuem.ru',
    /*Для svg*/
    /*icon: {
		url: "images/markers/svg/Arrow_3.svg",
		scaledSize: new google.maps.Size(64, 64)
    }*/
    /*icon: {
      url: window.devicePixelRatio > 1 ? "img/marker96.png" : "img/marker48.png",
      scaledSize: new google.maps.Size(48, 48)
    }
});*/

  var locations = [
	{
		title: 'NobelDent',
		position: {lat: 55.164878, lng: 37.465146},
		icon: {
			url: "img/marker.png",
			scaledSize: new google.maps.Size(48, 48)
		}
	}					
];
locations.forEach( function( element ) {
	var marker = new google.maps.Marker({
			position: element.position,
			map: map,
			title: element.title,
			icon: element.icon,
		});
	});	
}

 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);



