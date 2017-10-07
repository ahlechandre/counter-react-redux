const counterData = 25;

const fetchData = callback => (
  setTimeout(() => callback(counterData), 500)
);

export default fetchData;
