'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "https://lyricvn.com/wp-content/uploads/2020/03/61b35411029c6156973232016738c1b7.jpg",
    posterUrl: "https://lyricvn.com/wp-content/uploads/2020/03/61b35411029c6156973232016738c1b7.jpg",
    title: "3017 1 - 2 - 3 - 4",
    album: "3107",
    year: 2021,
    artist: "W/n x Erik ft. Nâu",
    musicPath: "./assets/music/3107Full.mp3",
  },
  {
    backgroundImage: "data:image/png;base64,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",
    posterUrl: "data:image/png;base64,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",
    title: "Các bài hát của Ngọt",
    album: "Album của Ngọt",
    year: 2021,
    artist: "Ngọt x Đen x ...",
    musicPath: "./assets/music/AlbumNgot.mp3",
  },
  {
    backgroundImage: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/covers/c/a/caccf53eae01bbafb293cfab20a1efd6_1504420411.png",
    posterUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/covers/c/a/caccf53eae01bbafb293cfab20a1efd6_1504420411.png",
    title: "Các bài hát của Da LAB",
    album: "Album của Da LAB",
    year: 2021,
    artist: "Da LAB",
    musicPath: "./assets/music/AlbumDaLAB.mp3",
  },
  {
    backgroundImage: "https://tailieumoi.vn/storage/uploads/images/post/banner/2-1663077185.png",
    posterUrl: "https://tailieumoi.vn/storage/uploads/images/post/banner/2-1663077185.png",
    title: "Thu cuối",
    album: "No Album",
    year: 2022,
    artist: "Mr.T ft Yanbi & Hằng",
    musicPath: "./assets/music/ThuCuoi.mp3",
  },
  {
    backgroundImage: "https://i1.sndcdn.com/artworks-lE9pHuzXI8PY-0-t500x500.jpg",
    posterUrl: "https://i1.sndcdn.com/artworks-lE9pHuzXI8PY-0-t500x500.jpg",
    title: "Tháng tư là lời nói dối của em",
    album: "No Album",
    year: 2016,
    artist: "Hà Anh Tuấn",
    musicPath: "./assets/music/ThangTuLaLoiNoiDoiCuaEm.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);