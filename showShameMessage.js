insertShame();

function insertShame() {
	var page = document.querySelector('body');
	page.insertAdjacentHTML('afterbegin', '<div id="shame-message"><h1>You don\'t want to do this.</h1><h2>Think of all the productive things you could be doing instead of watching Netflix.</h2><button id="quit">You\'re right. Close Netflix so I can do something productive.</button><div id="continue">I\'ve been working really hard, so I\'m going to watch a show.</div></div>');
}

var closeTab = document.getElementById('quit');
closeTab.addEventListener('click', function() {
    chrome.runtime.sendMessage({closeThis: true});
});

var watch = document.getElementById('continue');
watch.addEventListener('click', function() {
	var shame = document.getElementById('shame-message');
	document.querySelector('body').removeChild(shame);
	document.getElementById('appMountPoint').style.display = "block";
});