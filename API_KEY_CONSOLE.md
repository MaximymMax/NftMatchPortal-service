# 🔑 Управление API ключом через консоль

## Быстрый старт

Откройте консоль браузера (F12 → вкладка Console) и используйте следующие команды:

### Установить API ключ
```javascript
setApiKey("ваш-api-ключ-здесь")
```

### Проверить статус ключа
```javascript
getApiKeyInfo()
```

### Удалить API ключ
```javascript
clearApiKey()
```

---

## Подробная инструкция

### 1. Как открыть консоль браузера

**Windows/Linux:**
- Нажмите `F12`
- Или `Ctrl + Shift + J` (Chrome/Edge)
- Или `Ctrl + Shift + K` (Firefox)

**macOS:**
- Нажмите `Cmd + Option + J` (Chrome/Edge)
- Или `Cmd + Option + K` (Firefox)

Перейдите на вкладку **Console** (Консоль)

### 2. Установка API ключа

В консоли введите команду:

```javascript
setApiKey("your-api-key-here")
```

Замените `"your-api-key-here"` на ваш реальный API ключ.

**Пример:**
```javascript
setApiKey("bAsmvky00QjWJAdfetXmKxpJDYi/U9txbI5N0QqJn5JIpX4iBIV+nV/J7s1AQuNGwtHRUDGcbHAxw8YjBzvKF55VHQYn9amxeLUSM8279is=")
```

После выполнения вы увидите:
```
✅ Custom API key saved to sessionStorage
The key will be used for all API requests
Key will persist until you close the browser tab
```

### 3. Проверка установки ключа

Чтобы убедиться, что ключ установлен правильно:

```javascript
getApiKeyInfo()
```

Вы увидите информацию о текущем состоянии:
```
=== API Key Info ===
Custom key (sessionStorage): ✅ Set
Window token: ❌ Not set
Telegram auth: ❌ Not available
Currently using: API key available
==================
```

### 4. Удаление API ключа

Если нужно удалить ключ и вернуться к дефолтной авторизации:

```javascript
clearApiKey()
```

---

## Как это работает

### Приоритет авторизации

Система проверяет API ключ в следующем порядке:

1. **Custom key из sessionStorage** (установленный через `setApiKey()`)
2. **window.TelegramAuthToken** (устаревший метод)
3. **Telegram initData** (если запущено в Telegram Mini App)
4. **Пустая строка** (вызовет ошибку авторизации)

### Где хранится ключ

API ключ сохраняется в **sessionStorage** браузера:
- ✅ Сохраняется только на текущую сессию
- ✅ Удаляется при закрытии вкладки
- ✅ Не передается на сервер
- ✅ Безопасен от XSS (если использовать безопасные практики)

### Автоматическое использование

После установки ключа все API запросы автоматически используют его для авторизации:
- `/api/MarketsAnalis/BestDeals` (custom endpoint)
- `/api/MarketsAnalis/Defaults` (default endpoint)
- `/api/MarketsAnalis/LastUpdate` (время обновления)
- `/api/MarketsAnalis/Analytics` (аналитика)

---

## Примеры использования

### Пример 1: Быстрая установка для тестирования

```javascript
// Установить ключ
setApiKey("test-key-123")

// Проверить
getApiKeyInfo()

// Обновить страницу или выполнить поиск
```

### Пример 2: Работа с реальным ключом

```javascript
// Установить реальный ключ для доступа к страницам >3
setApiKey("bAsmvky00QjWJAdfetXmKxpJDYi/U9txbI5N0QqJn5JIpX4iBIV+nV/J7s1AQuNGwtHRUDGcbHAxw8YjBzvKF55VHQYn9amxeLUSM8279is=")

// Теперь можно переходить на любые страницы без ограничений
```

### Пример 3: Сброс к дефолтному поведению

```javascript
// Удалить ключ
clearApiKey()

// Теперь будет использоваться стандартная авторизация через Telegram
```

---

## FAQ

### Q: Безопасно ли хранить API ключ в sessionStorage?
**A:** Да, для текущей сессии браузера это безопасно. SessionStorage:
- Изолирован от других вкладок
- Удаляется при закрытии вкладки
- Недоступен для других доменов
- НО: не используйте этот метод на публичных компьютерах

### Q: Что делать, если забыл установленный ключ?
**A:** Используйте `getApiKeyInfo()` - эта команда покажет, установлен ли ключ, но не покажет сам ключ (для безопасности).

### Q: Ключ пропал после обновления страницы
**A:** Это нормально, если вы закрыли и снова открыли вкладку. SessionStorage очищается при закрытии вкладки. Если просто обновляли страницу (F5) - ключ должен остаться.

### Q: Как проверить, что ключ работает?
**A:** 
1. Установите ключ: `setApiKey("your-key")`
2. Попробуйте перейти на страницу 4 или выше
3. Если данные загружаются - ключ работает
4. Если показывается модалка "Donators Only" - ключ неверный или недействительный

### Q: Можно ли установить ключ программно в коде?
**A:** Да, можно вызвать `TelegramApp.setCustomApiKey("your-key")` из любого JS файла.

---

## Отладка

Если что-то не работает, в консоли можно увидеть подробные логи:

```javascript
// Проверить какой ключ используется
getApiKeyInfo()

// Посмотреть в консоли при выполнении запроса
// Вы увидите: "Using custom API key from sessionStorage"
```

---

## Технические детали

### Код установки ключа
```javascript
sessionStorage.setItem('custom_api_key', 'your-key');
```

### Код получения ключа
```javascript
const key = sessionStorage.getItem('custom_api_key');
```

### Код удаления ключа
```javascript
sessionStorage.removeItem('custom_api_key');
```

Эти операции можно выполнять вручную, если хотите.

---

## Изменения в коде

Файл: `telegram-webapp.js`

### Добавленные методы:
- `TelegramApp.setCustomApiKey(key)` - установка ключа
- `TelegramApp.clearCustomApiKey()` - очистка ключа
- `TelegramApp.getApiKeyInfo()` - информация о ключе

### Глобальные функции:
- `window.setApiKey(key)` - хелпер для консоли
- `window.clearApiKey()` - хелпер для консоли
- `window.getApiKeyInfo()` - хелпер для консоли

### Обновленная логика `getApiKey()`:
- Приоритет 1: sessionStorage
- Приоритет 2: window.TelegramAuthToken
- Приоритет 3: Telegram initData
