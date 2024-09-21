import { Image } from '../App/App.types';

interface ImageCardProps {
  image: Image;
  onModalOpen: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onModalOpen }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onModalOpen}
      />
    </div>
  );
};

export default ImageCard;