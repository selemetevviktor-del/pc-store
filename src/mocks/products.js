// Mock-источник: имитирует ответ сервера без настоящего backend.
const mockProducts = [
  { id: 1, name: 'Игровой компьютер Вольт 7', category: 'pc', type: 'Готовый компьютер', price: 149990, badge: 'Популярный', specs: 'AMD Ryzen 7, GeForce RTX 4070, 32 ГБ памяти, SSD 1 ТБ', image: '/src/images/image copy.png' },
  { id: 2, name: 'Игровой компьютер Вольт 5', category: 'pc', type: 'Готовый компьютер', price: 79990, badge: 'Начальный уровень', specs: 'AMD Ryzen 5, GeForce RTX 4060, 16 ГБ памяти, SSD 1 ТБ', image: '/src/images/image copy.png' },
  { id: 3, name: 'Рабочая станция Вольт Про', category: 'pc', type: 'Рабочая станция', price: 219990, badge: 'Для работы', specs: 'Intel Core i7, GeForce RTX 4080, 64 ГБ памяти, SSD 2 ТБ', image: '/src/images/image copy.png' },
  { id: 4, name: 'Видеокарта GeForce RTX 4070 SUPER', category: 'gpu', type: 'Видеокарта', price: 74990, badge: 'Популярный выбор', specs: '12 ГБ GDDR6X, поддержка DLSS, PCI Express 4.0', image: '/src/images/image.png' },
  { id: 5, name: 'Видеокарта GeForce RTX 4060', category: 'gpu', type: 'Видеокарта', price: 36990, badge: 'Доступная цена', specs: '8 ГБ GDDR6, низкое энергопотребление', image: '/src/images/image.png' },
  { id: 6, name: 'Процессор AMD Ryzen 7 7800X3D', category: 'cpu', type: 'Процессор', price: 42990, badge: 'Для игр', specs: '8 ядер, Socket AM5, частота до 5,0 ГГц', image: '/src/images/image copy 2.png' },
  { id: 7, name: 'Процессор Intel Core i5-14600KF', category: 'cpu', type: 'Процессор', price: 28990, badge: 'Сбалансированный', specs: '14 ядер, LGA1700, частота до 5,3 ГГц', image: '/src/images/image copy 2.png' },
  { id: 8, name: 'Оперативная память DDR5 32 ГБ', category: 'other', type: 'Оперативная память', price: 9990, badge: '32 ГБ', specs: 'Комплект 2 × 16 ГБ, DDR5, радиатор охлаждения', image: '/src/images/image copy 3.png' },
  { id: 9, name: 'SSD накопитель NVMe 2 ТБ', category: 'other', type: 'Накопитель', price: 11990, badge: 'Высокая скорость', specs: 'PCIe 4.0, скорость чтения до 7000 МБ/с', image: '/src/images/image copy 4.png' },
  { id: 10, name: 'Материнская плата B650', category: 'other', type: 'Материнская плата', price: 16990, badge: 'Socket AM5', specs: 'Поддержка DDR5, разъём M.2, PCIe 4.0', image: '/src/images/image copy 5.png' },
  { id: 11, name: 'Блок питания 850 Вт Gold', category: 'other', type: 'Блок питания', price: 12990, badge: '80 Plus Gold', specs: 'Мощность 850 Вт, модульные кабели', image: '/src/images/image copy 6.png' },
  { id: 12, name: 'Корпус с вентиляцией AirFlow', category: 'other', type: 'Корпус', price: 8990, badge: 'Хорошее охлаждение', specs: 'Передняя сетчатая панель, четыре вентилятора', image: '/src/images/image copy 7.png' }
];

export function getProductsMock() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 800);
  });
}
