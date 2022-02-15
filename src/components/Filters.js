import '../styles/components/Filters.scss';
import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import FilterAncestry from './FilterAncestry';
import ResetBtn from './ResetBtn';

const Filters = (props) => {
  return (
    <section>
      <form className='filters' onSubmit={(ev) => ev.preventDefault()}>
        <div className='filters__name'>
          <FilterName handleFilter={props.handleFilter} filterName={props.filterName} />
        </div>
        <div className='filters__house'>
          <FilterHouse handleFilter={props.handleFilter} filterHouse={props.filterHouse} />
        </div>
        <div className='filters__ancestry'>
          <FilterAncestry
            handleFilter={props.handleFilter}
            ancestry={props.ancestry}
            filterAncestry={props.filterAncestry}
          />
        </div>
        <ResetBtn resetBtn={props.resetBtn} />
      </form>
    </section>
  );
};
export default Filters;
