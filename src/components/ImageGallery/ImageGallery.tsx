import { HandleModalOpen, Image } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  images: Image[];
  onModalOpen: HandleModalOpen;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onModalOpen }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard
              image={image}
              onModalOpen={() =>
                onModalOpen(
                  image.urls.regular,
                  image.alt_description,
                  image.likes,
                  image.user.name,
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;