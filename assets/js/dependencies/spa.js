
angular.module('Bluevipe',[]);
angular.module('Bluevipe').controller('BaseCtrl',['$scope',function ($scope){
    
    io.socket.get('/emoji',function(response){
    	$scope.emojis=response.data;
    	$scope.$apply();
    });

    io.socket.on('emoji',function(event){
    	switch(event.verb){
    		case 'created':
    		$event.emojis.push(event.data);
    		$scope.$apply();
    		break;
    	}

    });
}]);