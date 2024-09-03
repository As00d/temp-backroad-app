function Title({ initial, last }) {
  return (
    <div className="section-title">
      <h2>
        {initial} <span>{last}</span>
      </h2>
    </div>
  );
}

export default Title;
