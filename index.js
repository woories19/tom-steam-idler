const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'starprizer',  //Enter here your account login
	password: 'AidenPearce0300'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(7);                 //1 - online, 7 - invisible
	user.gamesPlayed([730]);    //List app IDs
});