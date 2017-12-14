chrome.windows.getCurrent( function( win ) {
	chrome.tabs.query( { active: true }, function( tab ) {
		for ( var i = 0 ; i < tab.length ; i++ )
		{
			if ( tab[i].windowId == win.id &&tab[i].url.match( /https?:/ ) )
			{
				document.querySelector( '#urldisplay' ).innerText = tab[i].url;
				document.querySelector( '#qrdisplay' ).src = 'https://chart.apis.google.com/chart?chs=320x320&cht=qr&chl=' + tab[i].url;
			}
		}
	});
} );
