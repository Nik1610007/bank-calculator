# 🏦 Банковский калькулятор

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.17.1-green)](https://nodejs.org/)

Веб-приложение для расчета платежей по кредитам: ипотека, автокредит, потребительский кредит.

## 📸 Скриншот интерфейса
![Калькулятор](https://private-user-images.githubusercontent.com/189542123/433364622-764ee3c1-f1d2-412a-a6b9-9dd70f229f58.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NDE5MTUsIm5iZiI6MTc0NDY0MTYxNSwicGF0aCI6Ii8xODk1NDIxMjMvNDMzMzY0NjIyLTc2NGVlM2MxLWYxZDItNDEyYS1hNmI5LTlkZDcwZjIyOWY1OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxNDQwMTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYTg1NDgyZGIxNDViMDQ0OWJiNWJmNmMwOTA2M2Y4ZGEyMWY2NDM0YzJlZDYxZDlhYjUwZmFiZGMxMDVmMzQxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.UtoloGax6TMOIhEpcFHDgokN63jO7ZVRSRgg-U5qBV8)

## ⚙️ Функционал
- Расчет ежемесячного платежа для 3 видов кредитов
- Формулы из задания реализованы точно
- Заглушка отправки результатов на email
- Адаптивный интерфейс

## 🛠 Технологии
| Часть проекта  | Технологии                     |
|---------------|-------------------------------|
| **Фронтенд**  | React, CSS-in-JS              |
| **Бэкенд**    | Node.js, Express              |
| **Развертывание** | GitHub                     |

## 🚀 Запуск проекта
### 1. Клонирование репозитория
```bash
git clone https://github.com/Nik1610007/bank-calculator.git
cd bank-calculator
```

### 2. Запуск сервера (бэкенд)
```bash
cd server
npm install
node index.js
```
*Сервер запустится на http://localhost:3001*

### 3. Запуск клиента (фронтенд)
```bash
cd ../client
npm install
npm start
```
*Приложение откроется в браузере: http://localhost:3000*

## 📊 Пример тестирования
1. Выберите: **Ипотека**
2. Введите:
   - Стоимость: 2 000 000 ₽
   - Первоначальный взнос: 500 000 ₽
   - Срок: 20 лет
3. Нажмите **"Рассчитать"**
4. Проверьте результат:
   ```
   Ежемесячный платеж: 14 080 ₽
   Необходимый доход: 35 200 ₽
   ```

## 📌 Особенности реализации
- Формулы расчета соответствуют заданию
- Сервер логирует запросы в консоль
- Простой и понятный интерфейс

## 📮 Контакты
**Никита**  
[GitHub](https://github.com/Nik1610007)  
*При возникновении вопросов к проверке*
