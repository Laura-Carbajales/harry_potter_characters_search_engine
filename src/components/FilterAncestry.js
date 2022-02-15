import '../styles/components/FilterAncestry.scss';
import translateAncestry from '../services/translateAncestry';

const FilterAncestry = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'ancestry',
      value: ev.target.value,
    });
  };

  const renderAncestry = () => {
    return props.ancestry.map((ancestry, index) => {
      const resultAncestry = translateAncestry(ancestry);

      if (resultAncestry !== null) {
        return (
          <li className='labelAncestry__list--item' key={index}>
            <label className='labelInput'>
              <input
                className='input'
                type='checkbox'
                name='ancestry'
                value={ancestry}
                checked={props.filterAncestry.includes(ancestry)}
                onChange={handleChange}
              />
              {translateAncestry(ancestry)}
            </label>
          </li>
        );
      }

      return null;
    });
  };

  return (
    <>
      <div className='containerAncestry'>
        <label className='labelAncestry' htmlFor='ancestry'>
          Filtrar por ancestros:
        </label>
        <ul className='labelAncestry__list'>{renderAncestry()}</ul>
      </div>
    </>
  );
};
export default FilterAncestry;
