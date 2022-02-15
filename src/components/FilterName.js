import '../styles/components/FilterName.scss';

const FilterName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <label className='labelName' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input
        className='inputName'
        type='text'
        name='name'
        id='name'
        value={props.filterName}
        onChange={handleChange}
      ></input>
    </>
  );
};
export default FilterName;
