
import React, { useEffect, useMemo, useState } from 'react';
import ProductList from '../components/ProductList.jsx';
import { getProductsMock } from '../mocks/products.js';

const categories = [
  { id: 'all', label: 'Все товары' },
  { id: 'pc', label: 'Готовые компьютеры' },
  { id: 'gpu', label: 'Видеокарты' },
  { id: 'cpu', label: 'Процессоры' },
  { id: 'other', label: 'Другие комплектующие' }
];

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    let isActive = true;

    getProductsMock()
      .then((data) => {
        if (isActive) setProducts(data);
      })
      .catch(() => {
        if (isActive) {
          setError('Не удалось загрузить товары. Попробуйте обновить страницу.');
        }
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) =>
      (category === 'all' || product.category === category) &&
      `${product.name} ${product.type} ${product.specs}`
        .toLowerCase()
        .includes(query)
    );

    if (sort === 'low') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === 'high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, category, search, sort]);

  return (
    <div id="top">
      

      <main className="container">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">КОМПЬЮТЕРНАЯ ТЕХНИКА</span>

            <h1>
              Техника для ваших
              <br />
              <span>задач и идей</span>
            </h1>

            <p>
              Готовые компьютеры и комплектующие для игр, работы и творчества.
              Выбирайте подходящую конфигурацию и сравнивайте характеристики.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#catalog">
                Посмотреть каталог
              </a>
            </div>
          </div>
        </section>

        <section className="benefits" aria-label="Преимущества магазина">
          <div className="benefit">
            <div>
              <strong>Подбор под задачи</strong>
              <small>Для игр, работы и творчества</small>
            </div>
          </div>

          <div className="benefit">
            <div>
              <strong>Проверенные решения</strong>
              <small>Совместимые комплектующие</small>
            </div>
          </div>

          <div className="benefit">
            <div>
              <strong>Готовые сборки</strong>
              <small>Компьютеры с подобранными деталями</small>
            </div>
          </div>
        </section>

        <section className="catalog" id="catalog">
          <div className="section-heading">
            <div>
              <span className="eyebrow">КАТАЛОГ</span>
              <h2>Компьютеры и комплектующие</h2>
              <p>Подберите технику по категории, названию и цене</p>
            </div>

            <span className="result-count">
              {isLoading ? 'Загрузка...' : `${visibleProducts.length} товаров`}
            </span>
          </div>

          <div className="toolbar">
            <label className="search-box">
              <span className="search-label">Поиск</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Введите название товара"
                aria-label="Поиск товаров"
              />
            </label>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Сортировка товаров"
            >
              <option value="featured">Сначала популярные</option>
              <option value="low">Сначала дешевле</option>
              <option value="high">Сначала дороже</option>
            </select>
          </div>

          <div className="category-tabs">
            {categories.map((item) => (
              <button
                key={item.id}
                className={`category-tab ${category === item.id ? 'active' : ''}`}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div id="ready-pcs" className="catalog-anchor"></div>
          <div id="components" className="catalog-anchor"></div>

          <ProductList
            products={visibleProducts}
            isLoading={isLoading}
            error={error}
          />
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <a className="logo" href="#top">
            <span>PC</span> Store
          </a>

          <span>2026</span>
        </div>
      </footer>
    </div>
  );
}
