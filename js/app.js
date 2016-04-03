var app = angular.module('myApp', [
    'ngAnimate',
    'ui.bootstrap',
    'bootstrapLightbox'
]);

app.controller('MyController', function($scope, Lightbox) {


    $scope.places = [
        {
            name: 'Salar De Uyuni',
            description: "Salar de Uyuni is the world's largest salt flat at 10,582 square kilometers (4,086 sq mi). It is located in the Daniel Campos Province in Potosí in southwest Bolivia, near the crest of the Andes and is at an elevation of 3,656 meters (11,995 ft) above mean sea level.",
            up: 10,
            author: 'Dolph Lungren',
            comments: [
                ['Dolph Lungren','This is the coolest place ever'],
                ['Joseph Von Wolfenstein','I wanna go here so bad']
            ],
            date: '03/29/2016',
            image: 'img/salar.jpg'


        },
        {
            name: 'Antelope Canyon',
            description: ' is a slot canyon in the American Southwest. It is located on Navajo land east of Page, Arizona. Antelope Canyon includes two separate, photogenic slot canyon sections, referred to individually as Upper Antelope Canyon or The Crack; and Antelope Canyon or The Corkscrew.',
            up: 8,
            author: 'Bubbles',
            comments: [
                ['Mike Trout', 'Very fun place to check out']
            ],
            date: '04/22/1999',
            image: 'img/antelope.png'
        },
        {
            name: 'Marble Caves',
            description: "Carved into the Patagonian Andes, the Cuevas de Mármol are located on a peninsula of solid marble bordering Lake General Carrera, a remote glacial lake that spans the Chile-Argentina border. ",
            up: 4,
            author: 'Matt Murdock',
            comments: [
                ['jane doe', 'amazing adventure']
            ],
            date: '11/11/2011',
            image: 'img/caves2.jpg'
        },
        {
            name: 'Mendenhall Ice Caves',
            description: "In few places can you experience every stage of the water cycle at once. But there's magic in the Mendenhall Ice Caves, where water runs over rocks under blue ceilings inside a partially hollow glacier. ",
            up: 8,
            author: 'Steve Rogers',
            comments: [
                ['jacob Collins', 'could not find pepperoni sticks anywhere']
            ],
            date: '08/22/2912',
            image: 'img/mendenhallIceCaves.jpg'
        },
        {
            name: "Thor's Well",
            description:"Sitting on the edge of the Oregon coast is what appears to be a gaping sinkhole that never seems to fill despite the unbroken stream of sea water that drains into it, but Thor's Well, as the natural wonder is known, is not bottomless, but it is very dangerous.  ",
            up: 7,
            author: 'Bruce Banner',
            comments: [
                ['Ricky', 'I clacked hard seeing this'],
                ['Bubbles', 'There have been Samsquamch sitings near this place']
            ],
            date: '01/22/1984',
            image: 'img/thor2.jpg'
        }
    ];



    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.places, index);
    };

    $scope.thumbsUp = function() {
       for(var i = 0; i < $scope.places.length;i++) {
           $scope.places[i].up++;
       }
    }; //end of thumbs up
    $scope.thumbsDown = function() {
       places.up = place.up -1;
    }; //end of thumbing down

}); //end of myController
