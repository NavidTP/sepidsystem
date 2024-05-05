
const CustomSelect = ({ value, name, onChange, children, width, customClass }) => {

    var classname = "min-w-[180px] border border-[#ccc] px-[5px] py-[10px] rounded-[5px] bg-transparent bg-arrow-down bg-no-repeat bg-[left_calc(2%)_top_calc(50%)] [appearance:none] focus:bg-[#eff8ff] focus:border-[#c3e4fd] , focus:outline-[#c3e4fd] focus:shadow-sm focus:shadow-[#c3e4fd]"

    if (customClass) {
        classname += customClass
    }

    if (width) {
        classname += " " + width
    }

    const customStyles = {
        dropdownIndicator: base => ({
            ...base,
            color: "red" // Custom colour
        })
    };

    return (
        <>
            <select className={classname}
                styles={customStyles}
                name={name}
                value={value}
                onChange={onChange}
            >

                {children}

            </select>
        </>
    )
}

export default CustomSelect