export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
