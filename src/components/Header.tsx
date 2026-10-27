import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="logo" to="/">
          <span>PC</span> Store
        </Link>

        <nav aria-label="Основная навигация">
          <NavLink to="/" end>
            Главная
          </NavLink>

          <NavLink to="/gaming">
            Игровые
          </NavLink>

          <NavLink to="/exclusive">
            Эксклюзивные
          </NavLink>

          <NavLink to="/configurator">
            Конфигуратор
          </NavLink>

          <NavLink to="/components">
            Комплектующие
          </NavLink>
        </nav>

        <div className="header-actions">
          <NavLink className="header-cta" to="/cart">
            Корзина
          </NavLink>

          <NavLink className="header-cta" to="/login">
            Войти
          </NavLink>
        </div>
      </div>
    </header>
  );
}
