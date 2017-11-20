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

  var locations = [
	{
		title: 'reland',
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
google.maps.event.addDomListener(window, "load", initMap);





// initMapHeader() - функция инициализации карты



function initMapHeader() {
  var centerLatLng = new google.maps.LatLng(55.771621, 37.672994);
  var mapOptions = {
      center: centerLatLng, 
      zoom: 13,               // Зум по умолчанию. Возможные значения от 0 до 21
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.SMALL
      },
       mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("header-map"), mapOptions);

  map.scrollwheel=true;
map.setOptions({ mapTypeControl:true});

var locations = [
{
  title: 'reland',
  position: {lat: 55.775635, lng: 37.671331},
  icon: {
    url: "img/marker-tree.png",
    scaledSize: new google.maps.Size(42, 57)
  }
},
{
  title: 'reland',
  position: {lat: 55.770488, lng: 37.677904},
  icon: {
    url: "img/marker-tree.png",
    scaledSize: new google.maps.Size(42, 57)
  }
},
{
  title: 'reland',
  position: {lat: 55.765995, lng: 37.671454},
  icon: {
    url: "img/marker-house.png",
    scaledSize: new google.maps.Size(36, 36)
  }
}, 
{
  title: 'reland',
  position: {lat: 55.780708, lng: 37.632551},
  icon: {
    url: "img/marker-institute.png",
    scaledSize: new google.maps.Size(36, 36)
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
google.maps.event.addDomListener(window, "load", initMapHeader);

