import { HandleLoadMore } from '../App/App.types';

interface LoadMoreBtnProps {
  onLoadMoreBtn: HandleLoadMore;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMoreBtn }) => {
  return (
    <>
      <button type="button" onClick={onLoadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;