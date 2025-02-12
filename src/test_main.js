const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd342977a94msh8d717e93dbe0939p15b808jsnfe2971d18442',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

(async ()=>{
        try {
            const response = await fetch(API, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    })()