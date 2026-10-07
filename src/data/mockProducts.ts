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

export const mockProducts: Product[] = [
  { id: 'pc-1', title: 'Игровой ПК CyberPower', description: 'RTX 4060, Core i5-12400F, 16GB RAM, 1TB SSD.', price: 85000, category: 'Готовый ПК', status: 'В наличии', isAvailable: true, quantity: 5 },
  { id: 'gpu-1', title: 'NVIDIA RTX 4070 Ti', description: '12GB GDDR6X, отличный вариант для 2K гейминга.', price: 90000, category: 'Видеокарта', status: 'Заканчивается', isAvailable: true, quantity: 2 },
  { id: 'gpu-2', title: 'AMD Radeon RX 7800 XT', description: '16GB видеопамяти, мощная система охлаждения.', price: 65000, category: 'Видеокарта', status: 'Нет на складе', isAvailable: false, quantity: 0 },
  { id: 'cpu-1', title: 'Intel Core i7-13700K', description: '16 ядер, 24 потока, тактовая частота до 5.4 GHz.', price: 42000, category: 'Процессор', status: 'В наличии', isAvailable: true, quantity: 10 },
  { id: 'cpu-2', title: 'AMD Ryzen 7 7800X3D', description: 'Лучший игровой процессор с технологией 3D V-Cache.', price: 45000, category: 'Процессор', status: 'Заканчивается', isAvailable: true, quantity: 1 },
  { id: 'ram-1', title: 'Kingston FURY Beast 32GB', description: 'DDR5, 6000 MHz, две планки по 16GB, RGB подсветка.', price: 14000, category: 'Оперативная память', status: 'В наличии', isAvailable: true, quantity: 15 },
  { id: 'pc-2', title: 'Офисный ПК Standard', description: 'Intel Core i3, 8GB RAM, 512GB SSD, интегрированная графика.', price: 30000, category: 'Готовый ПК', status: 'В наличии', isAvailable: true, quantity: 4 },
  { id: 'gpu-3', title: 'NVIDIA RTX 4090 Black', description: '24GB флагманской мощности для максимальных настроек.', price: 210000, category: 'Видеокарта', status: 'В наличии', isAvailable: true, quantity: 3 },
  { id: 'cpu-3', title: 'Intel Core i5-13400F', description: 'Народный процессор, 10 ядер, 16 потоков.', price: 18000, category: 'Процессор', status: 'В наличии', isAvailable: true, quantity: 8 },
  { id: 'ram-2', title: 'Corsair Vengeance 16GB', description: 'DDR4, 3200 MHz, комплект из двух модулей.', price: 5500, category: 'Оперативная память', status: 'Нет на складе', isAvailable: false, quantity: 0 },
  { id: 'pc-3', title: 'Кастомная станция Pro', description: 'RTX 4080 Super, Ryzen 9 7900X, кастомное СЖО.', price: 280000, category: 'Готовый ПК', status: 'Заканчивается', isAvailable: true, quantity: 1 },
  { id: 'ram-3', title: 'Crucial 8GB DDR4', description: 'Базовая планка памяти для офисных ПК.', price: 2000, category: 'Оперативная память', status: 'В наличии', isAvailable: true, quantity: 20 }
];
