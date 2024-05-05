

const CustomInput = ({ type, value, width, onChange,customclass , placeholder, name, maxLength,
     textAlign, ltr, checked, onlyletters, onlymobile ,reff }) => {

    var classname = "border border-[#ccc] rounded-sm min-h-[36px] focus:bg-[#eff8ff] focus:border-[#fdeac3] focus:outline-[#fdeac3] focus:shadow-sm focus:shadow-[#939394]"


    if (width) {
        classname += " " + width
    } else {

    }

    if (textAlign) { classname += ' ' + textAlign }

    if (ltr) {
        classname += " ltr"
    }

    if(customclass){
        classname += " " + customclass
    }


    const handleKeyDown = (e) => {

        // if (onlyletters) {
        //     if (!/^[A-Za-zآ-ی]*$/.test(e.key)) {
        //         e.preventDefault()
        //     }
        // }


        // if (onlymobile) {
        //     if (!(e.keyCode === 8)) {
        //         if (!/^\d+$/.test(e.key) || (e.target.value.length >= 11)) {
        //             e.preventDefault();
        //         }

        //     }

        // }

    }



    return (
        <>
            <input type={type} name={name} className={classname} onChange={onChange} placeholder={placeholder || ''} 
            value={value || ''} maxLength={maxLength} autoComplete="off" checked={checked} onKeyDown={handleKeyDown} 
            ref={reff} />
        </>
    )
}

export default CustomInput;