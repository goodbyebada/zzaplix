 const apiKey = "AIzaSyBsUlzD25HkoZHs8O9Q70QYDTLfkhzgMNs";

  const url = `https://www.googleapis.com/youtube/v3/search?order=viewCount&part=snippet
  &regionCode=KR&maxResults=100&q=${searchTitle}&type=video&key=${apiKey}`;