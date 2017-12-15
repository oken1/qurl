chrome.tabs.query( { active: true, currentWindow: true,url: '*://*/*' }, function( tab ) {
	if ( tab.length > 0 )
	{
		document.querySelector( '#urldisplay' ).innerText = tab[0].url;
		document.querySelector( '#qrdisplay' ).src = 'https://chart.apis.google.com/chart?chs=320x320&cht=qr&chl=' + tab[0].url;
	}
});