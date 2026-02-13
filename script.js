const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

// 1. Активные пользователи
function getActiveUsers(arr) {
  return arr.filter(user => user.isActive);
}

// 2. Имена пользователей
const getUserNames = arr => arr.map(user => user.name);

// 3. Найти по id
function findUserById(arr, id) {
  return arr.find(user => user.id === id) || null;
}

// 4. Статистика
function getUsersStatistics(arr) {
  return {
    total: arr.length,
    active: arr.filter(user => user.isActive).length,
    inactive: arr.filter(user => !user.isActive).length
  };
}

// 5. Средний возраст
function getAverageAge(arr) {
  return arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
}

// 6. Группировка по городу
function groupUsersByCity(arr) {
  return arr.reduce((acc, user) => {
    if (!acc[user.city]) acc[user.city] = [];
    acc[user.city].push(user);
    return acc;
  }, {});
}
