/* 
* to avoid retyping the path, also, if path changes,
* only one place to update
*/
const audioFilePath = '../../assets/music';
const mainImageFilePath = '../../assets/images/album_covers';

export default [
  {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    releaseInfo: '1909 Spanish Records',
    albumCover: `${mainImageFilePath}/01.jpg`,
    slug: 'the-colors',
    songs: [
      {
        title: 'Blue',
        duration: '161.71',
        audioSrc: `${audioFilePath}/blue.mp3`,
      },
      {
        title: 'Green',
        duration: '103.96',
        audioSrc: `${audioFilePath}/green.mp3`,
      },
      {
        title: 'Red',
        duration: '268.45',
        audioSrc: `${audioFilePath}/red.mp3`,
      },
      {
        title: 'Pink',
        duration: '153.14',
        audioSrc: `${audioFilePath}/pink.mp3`,
      },
      {
        title: 'Magenta',
        duration: '374.22',
        audioSrc: `${audioFilePath}/magenta.mp3`,
      },
    ],
  },
  {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    releaseInfo: '1909 EM',
    albumCover: `${mainImageFilePath}/02.jpg`,
    slug: 'the-telephone',
    songs: [
      {
        title: 'Blue',
        duration: '161.71',
        audioSrc: `${audioFilePath}/blue.mp3`,
      },
      {
        title: 'Green',
        duration: '103.96',
        audioSrc: `${audioFilePath}/green.mp3`,
      },
      {
        title: 'Red',
        duration: '268.45',
        audioSrc: `${audioFilePath}/red.mp3`,
      },
      {
        title: 'Pink',
        duration: '153.14',
        audioSrc: `${audioFilePath}/pink.mp3`,
      },
      {
        title: 'Magenta',
        duration: '374.22',
        audioSrc: `${audioFilePath}/magenta.mp3`,
      },
    ],
  },
];
