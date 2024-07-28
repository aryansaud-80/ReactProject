const todoKey = "todoStore";

export const setItemLocalStorage = (todo) => {
  localStorage.setItem(todoKey, JSON.stringify(todo));
};

export const getItemLocalStorage = () => {
  const data = localStorage.getItem(todoKey);
  return JSON.parse(data) || [];
};
