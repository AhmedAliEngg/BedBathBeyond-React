import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-03-16-33_112-0126-01_tile4?$529$&wid=529&hei=529',
    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/DuoPlus6_NEW_Front_3_10_imageset?$140$&wid=140&hei=140',

  },
  {

    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-10-07-17-38_112-0126-01_duoplus_6qt?$140$&wid=140&hei=140',

  },
  {

    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-03-16-33_112-0126-01_tile2?$140$&wid=140&hei=140',

  },
  {

    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-03-16-33_112-0126-01_tile3?$140$&wid=140&hei=140',

  },
  {

    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-03-16-33_112-0126-01_tile4?$140$&wid=140&hei=140',

  },
  {
    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-03-16-33_112-0126-01_tile5?$140$&wid=140&hei=140',

  },
  {
    thumbnail: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-03-16-33_112-0126-01_tile5?$140$&wid=140&hei=140',

  },
];
const MyGallery = () => {
  return (
    <div>
      <div>
        <ImageGallery
          thumbnailPosition={"left"}
          items={images}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={false}
          showNav={false}
        />
        </div>
    </div>
  )
}
export default MyGallery;