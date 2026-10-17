
export default function ProductList({ products, isLoading, error }) {
  if (isLoading) {
    return <p className="product-message">Загрузка товаров...</p>;
  }

  if (error) {
    return <p className="product-message">{error}</p>;
  }

  if (!products || products.length === 0) {
    return <p className="product-message">Товары не найдены.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <div className="product-image">
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div className="product-image-placeholder">
                <span className="photo-icon">▧</span>
                <span>Место для фотографии</span>
              </div>
            )}
          </div>

          <div className="product-info">
            <span className="product-type">{product.type}</span>

            <h3 className="product-name">{product.name}</h3>

            <p className="product-specs">{product.specs}</p>

            <div className="product-bottom">
              <strong className="product-price">
                {Number(product.price).toLocaleString('ru-RU')} ₽
              </strong>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
