juke.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.when('', '/albums')
		.when('/artists/:artistId', '/artists/:artistId/albums');

	$stateProvider
		.state('albumList', {
			resolve: {
				albums: function(AlbumFactory) {
					return AlbumFactory.fetchAll();
				}
			},
			url: '/albums',
			templateUrl: '../templates/albumList.html',
			controller: 'AlbumsCtrl'
		})
		.state('artistList', {
			resolve: {
				artists: function(ArtistFactory) {
					return ArtistFactory.fetchAll();
				}
			},
			url: '/artists',
			templateUrl: '../templates/artistList.html',
			controller: 'ArtistsCtrl'
		})
		.state('album', {
			url: '/albums/:id',
			resolve: {
				album: function(AlbumFactory, $stateParams) {
					return AlbumFactory.fetchById($stateParams.id);
				}
			},
			templateUrl: '../templates/album.html',
			controller: 'AlbumCtrl'
		})
		.state('artist', {
			// abstract: true,
			url: '/artists/:artistId',
			resolve: {
				artist: function(ArtistFactory, $stateParams) {
					return ArtistFactory.fetchById($stateParams.artistId);
				}
			},
			templateUrl: '../templates/artist.html',
			controller: 'ArtistCtrl'
		})
		.state('artist.albums', {
			url: '/albums',
			templateUrl: '../templates/artist-albums.html',
		})
		.state('artist.songs', {
			url: '/songs',
			templateUrl: '../templates/artist-songs.html',
		});
	
})

