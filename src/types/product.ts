export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'Готовый ПК' | 'Видеокарта' | 'Процессор' | 'Оперативная память';
  status: 'В наличии' | 'Заканчивается' | 'Нет на складе';
  isAvailable: boolean;
  quantity: number; 
}
