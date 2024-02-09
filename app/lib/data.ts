export function saveFormDataAsJSON(formData: Record<string, any>) {
  // Собираем данные из формы в формат JSON
  const jsonData = JSON.stringify(formData);
  // Создаем объект URL из JSON-данных
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  // Создаем ссылку для скачивания файла и эмулируем клик по ней
  const link = document.createElement('a');
  link.href = url;
  link.download = 'form_data.json';
  document.body.appendChild(link);
  link.click();
  // Освобождаем ресурсы после скачивания файла
  URL.revokeObjectURL(url);
}
