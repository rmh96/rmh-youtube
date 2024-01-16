const GOOGLE_API_KEY = "AIzaSyBAzvMCt9buxRYGr-hFjzdYyxL4UpU2qhA";

const cx = "c4a6a67967d394ffb";

export const LIVE_CHAT_COUNT = 11;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SPECIFIC_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export const YOUTUBE_SEARCH_SUGGESTIONS_API = `https://customsearch.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${cx}&q=`;
