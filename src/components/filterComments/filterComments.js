import './style.css';

const FilterComments = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const today = `${year}-${addZero(month)}-${addZero(day)}`;

  return (
  <div className="filter-comments">
    <p className="filter-comments__title">Сортировать:</p>
    <select className="filter-comments__choice">
      <option value={`created_at:lt:${today}`}>Сначала новые</option>
      <option value={`created_at:gt:${today}`}>Сначала старые</option>
    </select>
  </div>);
}

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

export default FilterComments;
