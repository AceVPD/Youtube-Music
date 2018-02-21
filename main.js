let categories = {
    'Autos & Vehicles': 2,
    'Film & Animation': 1,
    'Music': 10,
    'Pets & Animals': 15,
    'Sports': 17,
    'Short Movies': 18,
    'Travel & Events': 19,
    'Gaming': 20,
    'Videoblogging': 21,
    'People & Blogs': 22,
    'Comedy': 23,
    'Entertainment': 24,
    'News & Politics': 25,
    'Howto & Style': 26,
    'Education': 27,
    'Science & Technology': 28,
    'Nonprofits & Activism': 29,
    'Movies': 30,
    'Anime/Animation': 31,
    'Action/Adventure': 32,
    'Classics': 33,
    'Comedy': 34,
    'Documentary': 35,
    'Drama': 36,
    'Family': 37,
    'Foreign': 38,
    'Horror': 39,
    'Sci-Fi/Fantasy': 40,
    'Thriller': 41,
    'Shorts': 42,
    'Shows': 43,
    'Trailers': 44
}

function ini() {
    gapi.client.setApiKey('AIzaSyC9HUuPJGV6D7LcdiZTj_YHqNGqEq9Swu8');
    gapi.client.load('youtube', 'v3', ytapiready)
}

function ytapiready() {
    console.log('youtube api v3 has loaded!');
}

function searchByCategory(query, categoryId) {
    let request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: 'video',
        videoCategoryId: categoryId,
        q: encodeURIComponent(query).replace(/%20/g, '+'),
        maxResults: 10
    });
    request.execute(response => console.log(response.items));
}
