declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css'; // Добавьте это объявление для обычных CSS-файлов
