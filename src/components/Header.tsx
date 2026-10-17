import React from 'react';
export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <a className="logo" href="#top" aria-label="Вольт ПК — главная"><span>PC</span> Store</a>
        <nav aria-label="Основная навигация">
          <a href="#">Главная</a>
          <a href="#">Игровые</a>
          <a href="#">Экслюзивные</a>
          <a href="#">Конфигуратор</a>
          <a href="#">Комплектующие</a>
        </nav>
        <a className="header-cta" href="#">Корзина</a>
        <a className="header-cta" href="#">Войти</a>
      </div>
    </header>
  );
}
