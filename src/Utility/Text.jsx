const Text = (props) => {
    return (
        <div className='flex flex-col items-center text-center text-white font-bold text-3xl mb-11'>
            <h2>{props.title}</h2>
            <div className='bg-orange-500 w-[100px] h-[2px] mt-3'></div>
        </div>
    )
}
export default Text;
