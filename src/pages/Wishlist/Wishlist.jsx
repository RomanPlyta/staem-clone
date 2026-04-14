import './Wishlist.scss';

const Wishlist = () => {
  return (
    <div className="page-wishlist">
      <h1>Wishlist</h1>
      
      <div className="wishlist-items">
        {/* Games added to wishlist */}
        <div className="wishlist-empty">
          <p>Your wishlist is currently empty.</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
