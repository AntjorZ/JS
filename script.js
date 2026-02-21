
const expenseTracker = {

    expenses: [],
    currentId: 1,

    // Проверка корректности ввода
    validateInput(title, amount, category) {
        if (!title || typeof title !== "string") {
            console.log("Ошибка: Некорректное название.");
            return false;
        }

        if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
            console.log("Ошибка: Сумма должна быть положительным числом.");
            return false;
        }

        if (!category || typeof category !== "string") {
            console.log("Ошибка: Некорректная категория.");
            return false;
        }

        return true;
    },

    // 1. Добавление расхода
    addExpense(title, amount, category) {
        if (!this.validateInput(title, amount, category)) {
            return;
        }

        const expense = {
            id: this.currentId++,
            title,
            amount,
            category
        };

        this.expenses.push(expense);
        console.log(`Расход "${title}" добавлен.`);
    },

    // 2. Вывод всех расходов
    printAllExpenses() {
        if (this.expenses.length === 0) {
            console.log("Список расходов пуст.");
            return;
        }

        console.log("\nВсе расходы:");
        this.expenses.forEach(exp => {
            console.log(
                `ID: ${exp.id} | ${exp.title} | ${exp.amount} ₽ | Категория: ${exp.category}`
            );
        });
    },

    // 3. Подсчёт общего баланса
    getTotalAmount() {
        const total = this.expenses.reduce((sum, exp) => sum + exp.amount, 0);

        console.log("\nЧек:");
        console.log(`Всего расходов: ${total} ₽`);

        return total;
    },

    // 4. Фильтрация по категории
    getExpensesByCategory(category) {
        const filtered = this.expenses.filter(
            exp => exp.category.toLowerCase() === category.toLowerCase()
        );

        if (filtered.length === 0) {
            console.log(`В категории "${category}" расходов нет.`);
            return [];
        }

        const total = filtered.reduce((sum, exp) => sum + exp.amount, 0);

        console.log(`\nРасходы по категории "${category}":`);
        filtered.forEach(exp => {
            console.log(`ID: ${exp.id} | ${exp.title} | ${exp.amount} ₽`);
        });

        console.log(`Итого по категории: ${total} ₽`);

        return filtered;
    },

    // 5. Поиск расхода по названию
    findExpenseByTitle(searchString) {
        const found = this.expenses.find(exp =>
            exp.title.toLowerCase().includes(searchString.toLowerCase())
        );

        if (!found) {
            console.log(`Расход с названием "${searchString}" не найден.`);
            return null;
        }

        console.log(`\nНайден расход:`);
        console.log(
            `ID: ${found.id} | ${found.title} | ${found.amount} ₽ | Категория: ${found.category}`
        );

        return found;
    },

    // Доп. функционал: удаление по id
    deleteExpenseById(id) {
        const index = this.expenses.findIndex(exp => exp.id === id);

        if (index === -1) {
            console.log(`Расход с ID ${id} не найден.`);
            return;
        }

        const deleted = this.expenses.splice(index, 1);
        console.log(`Расход "${deleted[0].title}" удалён.`);
    },

    // Доп. функционал: статистика по категориям
    printCategoryStatistics() {
        if (this.expenses.length === 0) {
            console.log("Нет данных для статистики.");
            return;
        }

        const stats = {};

        this.expenses.forEach(exp => {
            if (!stats[exp.category]) {
                stats[exp.category] = 0;
            }
            stats[exp.category] += exp.amount;
        });

        console.log("\nСтатистика по категориям:");
        for (let category in stats) {
            console.log(`${category}: ${stats[category]} ₽`);
        }
    }
};



// Пример использования


expenseTracker.addExpense("Продукты", 2500, "Еда");
expenseTracker.addExpense("Кино", 800, "Развлечения");
expenseTracker.addExpense("Такси", 600, "Транспорт");

expenseTracker.printAllExpenses();
expenseTracker.getTotalAmount();
expenseTracker.getExpensesByCategory("Еда");
expenseTracker.findExpenseByTitle("кино");

expenseTracker.deleteExpenseById(2);
expenseTracker.printCategoryStatistics();