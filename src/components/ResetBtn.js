import '../styles/components/ResetBtn.scss';

const ResetBtn = (props) => {
  const handleClick = (ev) => {
    props.resetBtn(ev);
  };
  return (
    <button className='btn' onClick={handleClick}>
      Borrar todo
    </button>
  );
};
export default ResetBtn;
