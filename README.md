## Интенсив по React Y_LAB_University, ДЗ №1
#### Задание:
  ![Скриншот задания](task.png 'Скриншот задания')
## В проекте реализованно:
- В проекте использовал API https://reqres.in/api/login
- При успешном ответе в консоль браузера получаем token
- При не успешном ответе в самой форме всплывает сообщение о том, что введён "Неверный email или пароль. Пожалуйста, попробуйте снова." и в консоль выводтся сообщение "POST https://reqres.in/api/login 400 (Bad Request)" и "error: 'user not found'"
- Для проверки:
  - Валидный логин и пароль для успешной аутентификации:
    Логин: eve.holt@reqres.in
    Пароль: Любой непустой пароль (так как сервер принимает любой пароль)

  - Невалидный логин для демонстрации ошибки "user not found":
    Логин: Любой, кроме eve.holt@reqres.in
- Вся логика запроса на сервер вынесена в custom hook: src/hooks/useLoginForm.js
- Вся отрисовка формы вынесена в отдельный компонент src/components/LoginForm/LoginForm.js
- В проекте реализована валидация с помощью react-hook-form
- Ссылка на деплой проекта на github: [React Form Authorization](https://banditos86.github.io/react-y-lab-hw1/ "React Form Authorization")

## Стек
- React
- React-dom
- React-hook-form
- Scss
- API https://reqres.in/api/login
- Create React App

## Демонстрация:
Для запуска проекта скайчайте репозиторий, для подтягивания необходимых библиотек и зависимостей, в консоли выполните команду:
```JavaScript
    npm i
```

#### Сборка dev и build:
После установки всех необходимых зависимостей для dev сборки запустите команду:
```JavaScript
    npm start
```
После установки всех необходимых зависимостей для build сбоки запустите команду:
```JavaScript
    npm run build
```

## Скриншоты приложения:
![Скриншот готовой работы](screenshot%20form.png 'Скриншот готовой работы')
![Скриншот готовой работы](screenshot%20form%20validate.png 'Скриншот готовой работы')
![Скриншот готовой работы](screenshot%20form%20mobile.png 'Скриншот готовой работы')
