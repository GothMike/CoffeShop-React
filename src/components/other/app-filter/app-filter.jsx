import "./app-filter.scss";

const AppFilter = (props) => {
  const buttonsData = [
    {
      name: "All",
      label: "All",
    },
    {
      name: "Brazil",
      label: "Brazil",
    },
    {
      name: "Kenya",
      label: "Kenya",
    },
    {
      name: "Columbia",
      label: "Columbia",
    },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-dark" : "btn-outline-dark";

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
