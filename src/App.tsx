import React, { useState } from 'react';
import { mockProducts } from './data/mockProducts';
import './App.css';

export default function App() {
  const [products] = useState(mockProducts);

  // Считаем показатели склада штатными методами массивов
  const totalProducts = products.length;
  const outOfStockCount = products.filter(p => p.quantity === 0).length;
  const lowStockCount = products.filter(p => p.quantity > 0 && p.quantity <= 2).length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

  return (
    <div className="store-container">
      <header className="store-header">
        <h1>🖥️ PC-Master (Панель управления магазином)</h1>
        <p className="badge">Лабораторная работа №1 (Стадия: Проектирование)</p>
      </header>

      {/* Верхние карточки аналитики */}
      <section className="stats-grid">
        <div className="stat-card">
          <h3>Всего позиций</h3>
          <p className="num">{totalProducts}</p>
        </div>
        <div className="stat-card danger">
          <h3>Нет на складе</h3>
          <p className="num">{outOfStockCount}</p>
        </div>
        <div className="stat-card warning">
          <h3>Остаток ≤ 2 шт.</h3>
          <p className="num">{lowStockCount}</p>
        </div>
        <div className="stat-card success">
          <h3>Стоимость склада</h3>
          <p className="num">{totalValue.toLocaleString()} ₽</p>
        </div>
      </section>

      <main>
        <h2>📦 Мониторинг товаров и комплектующих</h2>
        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Категория</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Статус товара</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="cat">[{product.category}]</td>
                  <td><strong>{product.title}</strong><br/><small>{product.description}</small></td>
                  <td>{product.price.toLocaleString()} ₽</td>
                  <td>{product.quantity} шт.</td>
                  <td>
                    <span className={`status ${product.status.replace(/\s+/g, '-')}`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
