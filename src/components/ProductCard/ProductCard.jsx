import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image"/>
      <h2 className="title">{product.title}</h2>
      <p className="description">{product.description}</p>
      <p className="category">{product.category}</p>
      <p className="price">{product.price}€</p>
      <p className="rating">{product.rating.rate}🌟 ({product.rating.count} reviews)</p>
    </div>
  )
}

export default ProductCard
