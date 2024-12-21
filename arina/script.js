// Объект с терминологией и их определениями
const terms = {
    "Бравлеры": "герои игры, каждый из которых имеет уникальные способности, характеристики и стиль игры.",
    "Стар Сила": "особая способность, которая разблокируется у бравлеров на определённом уровне силы и влияет на стратегию игры.",
    "Гаджет": "активируемая способность бравлера, которая даёт дополнительное преимущество в бою.",
    "Кубки": "система рейтинга, определяющая ваш прогресс и ранг. За победу вы получаете кубки, за поражение — теряете.",
    "Сезон": "период игрового времени, за который игроки зарабатывают награды, выполняя задания и повышая уровень Боевого Пропуска.",
    "Боевой Пропуск (Brawl Pass)": "система наград, включающая как бесплатные, так и платные уровни. Позволяет получать уникальных бравлеров, скины и другие предметы.",
    "Сундуки": "контейнеры с наградами, такими как монеты, очки силы, гаджеты и звёздные силы.",
    "Карты": "игровые поля, отличающиеся размером, препятствиями и расположением кустов.",
    "Режимы игры": "различные форматы боёв, такие как 'Одиночное столкновение', 'Гем Граб' и другие, каждый из которых имеет свои правила.",
    "Скины": "косметические изменения внешнего вида бравлеров. Некоторые доступны только за выполнение специальных задач."
};

// Хранение данных пользователя
let data = {
    "login": "ffff",
    "dob": "2024-12-12",
    "gender": "female",
    "test": ""
};

let filter = '';

// Событие, срабатывающее при загрузке документа
document.addEventListener('DOMContentLoaded', () => {
    auth(); // Функция авторизации
    authCheck(); // Проверка данных авторизации
    personalLoad(); // Загрузка личной информации
    exit(); // Настройка выхода
    menuSwitch(); // Переключение между меню
    dictionaryLoad(); // Загрузка словаря
    dictionarySwitch(); // Переключение терминов в словаре
    dictionarySearch(); // Поиск терминов в словаре

    // Переключение изображений в галерее
    let btns = document.querySelectorAll('.content.gallery button');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchImage(btn.className); // Переключение изображения по клику на кнопку
        });
    });

    testCheck(); // Проверка теста
    testRetry(); // Повторный запуск теста
});

// Функция для выхода из системы
const exit = () => {
    document.querySelectorAll("button.exit").forEach(btn => btn.addEventListener('click', () => {
        document.querySelector('.auth-page').hidden = false; // Показываем страницу авторизации
        document.querySelector('.main-container').hidden = true; // Скрываем основное меню
        document.querySelector('.main-container').style.display = "none"; // Скрываем контейнер
        data.login = ""; // Сброс данных пользователя
        data.dob = "";
        data.test = "";
        data.gender = "";
        let oldContent = document.querySelector(`.content.selected`);
        let newContent = document.querySelector(`.content.description`);
        oldContent?.classList.remove('selected'); // Убираем класс у старого контента
        newContent.classList.add('selected'); // Добавляем класс новому контенту
        document.querySelector("form.auth").reset(); // Сбрасываем форму авторизации
        document.getElementById('errorMessages').innerHTML = ""; // Очищаем ошибки
    }));
};

// Функция проверки теста
const testCheck = () => {
    document.getElementById("quiz-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Отменяем стандартное поведение формы
        let score = 0; // Начальный счет
        const totalQuestions = 6; // Общее количество вопросов

        // Проверка первого вопроса
        const q1Correct = document.querySelector('input[name="q1"][value="true"]');
        const q1Feedback = document.querySelector("#qs_1 .feedback");
        if (q1Correct.checked) {
            score++; // Увеличиваем счет за правильный ответ
            q1Feedback.textContent = "Правильно!";
            q1Feedback.className = "feedback correct";
        } else {
            q1Feedback.textContent = "Неправильно! Правильный ответ: Герои игры с уникальными способностями, характеристиками и стилем игры.";
            q1Feedback.className = "feedback incorrect";
        }

        // Проверка второго вопроса
        const q2Correct = document.querySelector('input[name="q2"][value="true"]');
        const q2Feedback = document.querySelector("#qs_2 .feedback");
        if (q2Correct.checked) {
            score++;
            q2Feedback.textContent = "Правильно!";
            q2Feedback.className = "feedback correct";
        } else {
            q2Feedback.textContent = "Неправильно! Правильный ответ: Особая способность бравлера, разблокируемая на определённом уровне силы.";
            q2Feedback.className = "feedback incorrect";
        }

        // Проверка третьего вопроса
        const q3Input = document.getElementById("q3").value.trim().toLowerCase();
        const q3Feedback = document.querySelector("#qs_3 .feedback");
        if (q3Input === "бравл пасс" || q3Input === "боевой пропуск") {
            score++;
            q3Feedback.textContent = "Правильно!";
            q3Feedback.className = "feedback correct";
        } else {
            q3Feedback.textContent = "Неправильно! Правильный ответ: Бравл Пасс.";
            q3Feedback.className = "feedback incorrect";
        }

        // Проверка четвёртого вопроса
        const q4Correct = document.querySelector('input[name="q4"][value="true"]');
        const q4Feedback = document.querySelector("#qs_4 .feedback");
        if (q4Correct.checked) {
            score++;
            q4Feedback.textContent = "Правильно!";
            q4Feedback.className = "feedback correct";
        } else {
            q4Feedback.textContent = "Неправильно! Правильный ответ: Сундуки.";
            q4Feedback.className = "feedback incorrect";
        }

        // Проверка пятого вопроса
        const q5Input = document.getElementById("q5").value.trim().toLowerCase();
        const q5Feedback = document.querySelector("#qs_5 .feedback");
        if (q5Input === "гем граб" || q5Input === "захват кристаллов") {
            score++;
            q5Feedback.textContent = "Правильно!";
            q5Feedback.className = "feedback correct";
        } else {
            q5Feedback.textContent = "Неправильно! Правильный ответ: Гем Граб.";
            q5Feedback.className = "feedback incorrect";
        }

        // Проверка шестого вопроса
        const q6Correct = document.querySelector('input[name="q6"][value="true"]');
        const q6Feedback = document.querySelector("#qs_6 .feedback");
        if (q6Correct.checked) {
            score++;
            q6Feedback.textContent = "Правильно!";
            q6Feedback.className = "feedback correct";
        } else {
            q6Feedback.textContent = "Неправильно! Правильный ответ: Скины.";
            q6Feedback.className = "feedback incorrect";
        }

        // Отображение результата
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Вы набрали ${score} из ${totalQuestions} правильных ответов.`;
        document.querySelectorAll("#quiz-form input, #quiz-form textarea").forEach(input => input.disabled = true); // Блокируем форму
        document.querySelector(".quiz button").hidden = false; // Показываем кнопку для повторного теста
        data.test = `${score}/${totalQuestions}`; // Сохраняем результат
    });
};

// Функция для повторного прохождения теста
const testRetry = () => {
    document.querySelector(".quiz button").addEventListener('click', (e) => {
        const form = document.getElementById("quiz-form");
        form.reset(); // Сбрасываем форму

        document.querySelectorAll(".feedback").forEach(feedback => {
            feedback.innerHTML = ""; // Очищаем текст отзывов
            feedback.className = "feedback"; // Сбрасываем классы отзывов
        });

        document.getElementById("score").textContent = ""; // Очищаем результат

        document.querySelector(".quiz button").hidden = true; // Скрываем кнопку повторного теста

        const inputs = form.querySelectorAll("input, button");
        inputs.forEach(input => input.disabled = false); // Включаем все поля
    });
}

// Функция загрузки личной информации
const personalLoad = () => {
    document.querySelector("header .info .login").innerHTML = data.login; // Отображаем логин
    const personalBtn = document.querySelector('header nav button.personal');
    personalBtn.addEventListener('click', () => {
        putInfo(); // Отображаем личную информацию
    });
}

// Функция проверки авторизации
const authCheck = () => {
    document.querySelector("#auth").addEventListener("click", function (event) {
        const errorMessages = [];
        const login = document.getElementById('login');
        const dob = document.getElementById('dob');
        const gender = document.querySelector('input[name="gender"]:checked');

        // Проверка поля логина
        if (!login.value.match(/^[а-яА-ЯёЁ0-9]{4,10}$/)) {
            errorMessages.push('Логин должен содержать от 4 до 10 символов (только буквы и цифры).');
        }

        // Проверка даты рождения
        if (!dob.value) {
            errorMessages.push('Дата рождения обязательна.');
        } else {
            const dobDate = new Date(dob.value);
            const minDate = new Date('1950-01-01');
            const maxDate = new Date('2024-12-19');
            if (dobDate < minDate || dobDate > maxDate) {
                errorMessages.push('Дата рождения должна быть между 1950-01-01 и 2024-12-19.');
            }
        }

        // Проверка выбора пола
        if (!gender) {
            errorMessages.push('Выберите пол.');
        }

        // Отображение сообщений об ошибках
        const errorContainer = document.getElementById('errorMessages');
        if (errorMessages.length > 0) {
            errorContainer.innerHTML = errorMessages.join('<br>');
        }
    });
}

// Функция отображения личной информации
const putInfo = () => {
    let { login, dob, gender, test } = data;
    let loginPlaceholder = document.querySelector('.content.personal .login');
    let dobPlaceholder = document.querySelector('.content.personal .dob');
    let genderPlaceholder = document.querySelector('.content.personal .gender');
    let testPlaceholder = document.querySelector('.content.personal .test');

    loginPlaceholder.innerHTML = "Логин: " + login;
    dobPlaceholder.innerHTML = "Дата рождения: " + dob;
    genderPlaceholder.innerHTML = "Пол: " + (gender === "female" ? "Ж" : "М");
    testPlaceholder.innerHTML = test !== "" ? ("Последний результат теста: " + test) : "Тест ещё не был пройден";
}

// Функция для переключения изображений в галерее
const switchImage = (order) => {
    const imageContainer = document.querySelector(`.content.gallery img`);
    const textContainer = document.querySelector(`.content.gallery .image p`);
    let image = imageContainer.src.split("gallery/");
    let imageNum = image[1];
    let imageLink = image[0] + "gallery/";
    imageNum = imageNum.slice(0, imageNum.length - 4);
    switch (order) {
        case 'left':
            imageNum = imageNum - 1; // Переключаем на изображение слева
            break;
        case 'right':
            imageNum = Number(imageNum) + 1; // Переключаем на изображение справа
            break;
    }
    if (imageNum > 5 || imageNum < 1) return; // Проверка границ
    imageLink += imageNum + ".png";
    imageContainer.src = imageLink; // Обновляем изображение
    textContainer.innerHTML = `Изображение Галереи Brawl Stars ${imageNum}/5`;
    imageContainer.alt = `Слайд ${imageNum}`;
}

// Функция для переключения между содержимым меню
const menuSwitch = () => {
    const menuBtns = document.querySelectorAll('header nav > button');

    menuBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const classname = btn.className;
            let oldContent = document.querySelector(`.content.selected`);
            let newContent = document.querySelector(`.content.${classname}`);
            oldContent?.classList.remove('selected');
            newContent.classList.add('selected'); // Переключение содержимого
        });
    });
};

// Функция авторизации пользователя
const auth = () => {
    document.querySelector('form.auth').addEventListener('submit', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение формы
        document.querySelector('.auth-page').hidden = true; // Скрываем страницу авторизации
        document.querySelector('.main-container').hidden = false; // Показываем основное меню
        document.querySelector('.main-container').style.display = "flex"; // Устанавливаем flex для контейнера

        let form = document.querySelector('form.auth');
        const formData = new FormData(form);

        // Проходим по данным формы и сохраняем их
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        document.querySelector("header .info .login").innerHTML = data.login; // Обновляем логин
    });
}

// Функция для загрузки данных в словарь
const dictionaryLoad = () => {
    const listHolder = document.querySelector('.dictionary ol');
    listHolder.innerHTML = ''; // Очищаем текущий список
    let filteredKeys = Object.keys(terms).filter(key => key.toLowerCase().startsWith(filter.toLowerCase())); // Фильтруем термины
    let definitionPlace = document.querySelector(`.dictionary .definition p`);
    for (key of filteredKeys) {
        listHolder.innerHTML += `<li>${key}</li>`; // Добавляем термины в список
    }
    if (filteredKeys.length < 1) {
        definitionPlace.innerHTML = "По вашему запросу ничего не найдено."; // Сообщение об отсутствии результатов
    } else {
        definitionPlace.innerHTML = "Выберите термин из списка, чтобы увидеть его описание."; // Подсказка для выбора термина
    }
};

// Функция для переключения отображения определений терминов
const dictionarySwitch = () => {
    const dictionaryBtns = document.querySelectorAll('.dictionary li');

    dictionaryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let term = btn.innerText;
            let definitionPlace = document.querySelector(`.dictionary .definition p`);
            definitionPlace.textContent = term + " - это " + terms[term]; // Показываем определение термина
        });
    });
};

// Функция для поиска терминов в словаре
const dictionarySearch = () => {
    const input = document.querySelector(`.dictionary .search-field`);

    input.addEventListener('input', (e) => {
        filter = e.target.value; // Сохраняем значение поиска
        dictionaryLoad(); // Загружаем список терминов
        dictionarySwitch(); // Переключаем определения
    });
}
