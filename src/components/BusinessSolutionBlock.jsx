const BusinessSolutionBlock = ({ title, svgIcon, text }) => {
    const isLastBox = !text;
    const words = text ? title.split(' ') : [title];
    const firstLine = words.slice(0, 2).join(' ');
    const secondLine = words.slice(2).join(' ');
    return (
        <>
      <div className={`p-8 gap-2.5  flex ${isLastBox ? 'bg-orange justify-center items-center' : 'bg-gray-100'}`}> 
      <div className={isLastBox ? 'font-semibold text-base text-white justify-center items-center' : 'leading-8 flex-1'}>
        {title && (
         <p className={isLastBox ? 'tracking-wider text-xl font-semibold font-inter' : 'text-[22px] font-semibold leading-8'}>
         {firstLine}{text && <br />}
         {secondLine}
       </p>
        )}
        {text && <p className="leading-8 mt-2 text-lg font-semibold text-orange">{text}</p>}
      </div>
      <div>{svgIcon}</div>
    </div>
    </>
    );
  }
  
  export default BusinessSolutionBlock;