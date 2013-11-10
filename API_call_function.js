	function getFamiliarity(name) {
	
			var MyUrl = "http://developer.echonest.com/api/v4/artist/familiarity?api_key=G2QW4WBQFSGULPTX5&name=";

			var completeUrl = function(Url, nm) {
				return Url + name + "&format=json"
			}
		
			var newUrl = (completeUrl(MyUrl, name));

			function query(url) {
    			var xmlHttp = null;
    			xmlHttp = new XMLHttpRequest();
    			xmlHttp.open( "GET", newUrl, false );
    			xmlHttp.send( null );
    			return xmlHttp.responseText;
  			}

  			data = JSON.parse(query(newUrl));
  			var familiarityScore = data.response.artist.familiarity;
  			return familiarityScore;
		}