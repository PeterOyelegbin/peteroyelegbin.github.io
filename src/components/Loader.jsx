import loader from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className='preloader'>
        <img src={loader} className="object-cover w-60 h-60 bg-white md:w-auto md:h-auto" alt="loading" />
    </div>
  )
}

export default Loader