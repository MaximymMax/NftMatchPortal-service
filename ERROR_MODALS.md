# 🚨 Обработка ошибок API

## Добавлены модалки для разных типов ошибок

Теперь приложение различает три типа HTTP ошибок и показывает соответствующие модалки с понятными объяснениями.

---

## Типы ошибок и их модалки:

### 1. ⏱️ 429 Too Many Requests (Rate Limit)

**Когда происходит:**
- Пользователь делает слишком много запросов за короткое время
- Превышен лимит API

**Модалка: `rateLimitModal`**
```
⏱️ Too Many Requests
━━━━━━━━━━━━━━━━━━

🕐 Rate Limit Exceeded

You've made too many requests in a short period of time.

⚠️ Please wait a moment before trying again.

Rate limits help ensure fair access for all users. 
Your previous data remains visible.
```

**Цвет:** Оранжевый (#ffa500)  
**Иконка:** Часы  
**Действие:** Подождите немного перед следующим запросом

---

### 2. 🔒 401 Unauthorized

**Когда происходит:**
- Пользователь не авторизован
- Отсутствует или неверный API ключ
- Проблема с Telegram авторизацией

**Модалка: `unauthorizedModal`**
```
🔒 Unauthorized
━━━━━━━━━━━━━━━━━━

🔒 Authentication Required

You are not authorized to access this resource.

🔴 This feature requires authentication.

Please make sure you're logged in through Telegram 
or have provided a valid API key.

Need help? Check the console commands with getApiKeyInfo()
```

**Цвет:** Красный (#ff4d4d)  
**Иконка:** Замок  
**Действие:** Проверьте авторизацию или API ключ

---

### 3. 🚫 403 Forbidden (Access Denied)

**Когда происходит:**
- Пользователь пытается использовать custom фильтры
- Telegram ID не в whitelist
- Требуется донорский доступ

**Модалка: `accessModal` (уже существовала)**
```
🚫 Restricted Access
━━━━━━━━━━━━━━━━━━

🔒 Donators Only

Custom filters and deep search are available 
only for whitelisted users.

Please check "Defaults" or support the project 
to get full access.
```

**Цвет:** Красный (#ff4d4d)  
**Иконка:** Замок  
**Действие:** Используйте дефолтные фильтры или станьте донором

---

## Логика обработки в коде:

### 1. Проверка статус-кодов в fetchDeals()

```javascript
const response = await fetch(url, fetchOptions);

// Обработка разных типов ошибок
if (response.status === 429) {
    throw new Error("Rate Limit: Too many requests");
}

if (response.status === 401) {
    throw new Error("Unauthorized: Authentication required");
}

if (response.status === 403) {
    throw new Error("Access Denied: Custom filters require whitelist");
}
```

### 2. Показ модалок в catch блоке

```javascript
catch (error) {
    // Функция для показа модалки
    const showErrorModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            const overlay = document.getElementById('overlay');
            if (overlay) overlay.classList.add('active');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // Обработка разных типов ошибок
    if (error.message.includes("Rate Limit")) {
        // 429 - Too Many Requests
        console.warn('Rate limit exceeded');
        showErrorModal('rateLimitModal');
    } else if (error.message.includes("Unauthorized")) {
        // 401 - Unauthorized
        console.warn('Unauthorized access');
        showErrorModal('unauthorizedModal');
    } else if (error.message.includes("Access Denied")) {
        // 403 - Forbidden
        console.warn('Access denied - whitelist required');
        showErrorModal('accessModal');
    } else {
        // Остальные ошибки - показываем в grid
        grid.innerHTML = '<div>Error loading deals</div>';
    }
}
```

---

## HTML структура модалок:

### Rate Limit Modal
```html
<div class="bottom-sheet" id="rateLimitModal">
    <div class="sheet-header">
        <span>⏱️ Too Many Requests</span>
        <div class="close-btn" id="closeRateLimit">✕</div>
    </div>
    <div class="sheet-content">
        <!-- Содержимое -->
    </div>
</div>
```

### Unauthorized Modal
```html
<div class="bottom-sheet" id="unauthorizedModal">
    <div class="sheet-header">
        <span>🔒 Unauthorized</span>
        <div class="close-btn" id="closeUnauthorized">✕</div>
    </div>
    <div class="sheet-content">
        <!-- Содержимое -->
    </div>
</div>
```

---

## Event Listeners для закрытия:

```javascript
// Rate Limit Modal
const closeRateLimitBtn = document.getElementById('closeRateLimit');
if (closeRateLimitBtn) {
    closeRateLimitBtn.addEventListener('click', () => {
        const modal = document.getElementById('rateLimitModal');
        const overlay = document.getElementById('overlay');
        if (modal) modal.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Unauthorized Modal
const closeUnauthorizedBtn = document.getElementById('closeUnauthorized');
if (closeUnauthorizedBtn) {
    closeUnauthorizedBtn.addEventListener('click', () => {
        const modal = document.getElementById('unauthorizedModal');
        const overlay = document.getElementById('overlay');
        if (modal) modal.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}
```

---

## Важные особенности:

### 1. Данные не пропадают
При any ошибке:
- ✅ Предыдущий контент остается видимым
- ✅ Модалка показывается поверх
- ✅ Пользователь может прочитать и закрыть модалку

### 2. Логирование
Каждая ошибка логируется в консоль:
- `console.warn('Rate limit exceeded')` - для 429
- `console.warn('Unauthorized access')` - для 401
- `console.warn('Access denied - whitelist required')` - для 403

### 3. Console.log при fetch
```
Fetch error: Error: Rate Limit: Too many requests
Rate limit exceeded
```

Это помогает при отладке.

---

## Сценарии использования:

### Сценарий 1: Rate Limit (429)
```
1. Пользователь быстро делает много запросов
   ↓
2. Сервер возвращает 429
   ↓
3. Появляется оранжевая модалка ⏱️
   ↓
4. Пользователь читает "подождите немного"
   ↓
5. Закрывает модалку
   ↓
6. Ждет 30-60 секунд
   ↓
7. Пробует снова - работает ✅
```

### Сценарий 2: Unauthorized (401)
```
1. Пользователь без авторизации пытается 
   использовать custom endpoint
   ↓
2. Сервер возвращает 401
   ↓
3. Появляется красная модалка 🔒
   ↓
4. Пользователь читает про authentication
   ↓
5. Видит подсказку про getApiKeyInfo()
   ↓
6. Открывает консоль и проверяет API key
   ↓
7. Устанавливает ключ через setApiKey()
   ↓
8. Пробует снова - работает ✅
```

### Сценарий 3: Access Denied (403)
```
1. Пользователь с custom фильтрами
   но не в whitelist
   ↓
2. Сервер возвращает 403
   ↓
3. Появляется красная модалка 🚫
   ↓
4. Пользователь читает про whitelist
   ↓
5. Либо сбрасывает на defaults
   Либо становится донором
```

---

## CSS стили:

Модалки используют существующие стили `.bottom-sheet`:
- Анимация появления снизу
- Темный overlay
- Закругленные углы
- Кнопка закрытия

Иконки и цвета меняются в зависимости от типа:
- 429: Оранжевый (#ffa500) - предупреждение
- 401: Красный (#ff4d4d) - критично
- 403: Красный (#ff4d4d) - критично

---

## Тестирование:

Вы можете симулировать ошибки в консоли:

```javascript
// Симуляция 429
throw new Error("Rate Limit: Too many requests");

// Симуляция 401
throw new Error("Unauthorized: Authentication required");

// Симуляция 403
throw new Error("Access Denied: Custom filters require whitelist");
```

Или изменить код временно для тестирования:

```javascript
// В fetchDeals() после fetch:
const response = await fetch(url, fetchOptions);

// ВРЕМЕННО для теста:
if (true) {  // всегда True
    throw new Error("Rate Limit: Too many requests");
}
```

---

## Итого:

✅ **3 типа ошибок обрабатываются**
- 429: Rate Limit
- 401: Unauthorized
- 403: Access Denied

✅ **3 отдельные модалки**
- rateLimitModal
- unauthorizedModal  
- accessModal

✅ **Понятные сообщения**
- Что случилось
- Почему случилось
- Что делать

✅ **Данные не пропадают**
- Контент остается видимым
- Можно закрыть модалку и продолжить

Готово! 🎉
