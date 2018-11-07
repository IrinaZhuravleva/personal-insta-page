$(document).ready(function(){ 

	var userFeed = new Instafeed({
        get: 'user',
        userId: '4258835674',
        accessToken: '4258835674.1677ed0.b1befe50ab754c938066fc5cb6cc3026',
        resolution: 'standard_resolution',
        limit: 33
    });
    userFeed.run();


    setTimeout(function(){
    	$('.instafeed').addClass('shadowed')

    }, 100);

});