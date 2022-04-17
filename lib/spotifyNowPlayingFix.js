// fixes display bug of now playing section in spotify
// see /img/spotify-before.png and /img/spotify-after.png for before and after

const spotifyNowPlaying = setInterval(() => {
  const topContainer = document.querySelector("div.Root__top-container"),
    nowPlaying = document.querySelector("div.Root__now-playing-bar"),
    mainView = document.querySelector("div.Root__main-view"),
    navBar = document.querySelector("nav.Root__nav-bar"),
    downloadButton = document.querySelector("div.Foyk_HJx16yh22JYmQ56");

  if (
    topContainer?.style &&
    nowPlaying?.style &&
    mainView?.style &&
    navBar?.style &&
    downloadButton?.style
  ) {
    document.querySelector("html").style.overflowY = "hidden";
    topContainer.style.height = "100vh";
    nowPlaying.style.position = "fixed";
    nowPlaying.style.bottom = "0";
    mainView.style.marginBottom = "90px";
    navBar.style.marginBottom = "90px";
    downloadButton.remove();

    clearInterval(spotifyNowPlaying);
  }
}, 1000);
