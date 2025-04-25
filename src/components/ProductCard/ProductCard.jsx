import './ProductCard.css'
import Button from '../../components/Button/Button.jsx'
import Rating from '../../components/Rating/Rating.jsx';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image"/>
      <h2 className="title">{product.title}</h2>
      <p className="description">{product.description}</p>
      <p className="category">{product.category}</p>
      <p className="price">{product.price}€</p>
      <Button />
      <div className="rating">
        <Rating value={product.rating.rate} /> ({product.rating.count} reviews)
      </div>
    </div>
  )
}

export default ProductCard
