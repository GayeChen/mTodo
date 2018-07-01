const setStorage = (data) => {
  localStorage.setItem('todos', JSON.stringify(data));
};
const getStorage = () => JSON.parse(localStorage.getItem('todos'));
export {setStorage, getStorage};
