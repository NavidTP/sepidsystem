
import { Link } from 'react-router-dom';

const CustomBtn = ({ text, icon, img, bottom_b, link , customclass}) => {

    var bottom = "flex justify-center items-center w-fit mx-auto mt-[20px] rounded-[25px] min-w-[80px] p-1 text-base text-white primary-color-bg"
    var custom_link = "#"

    if (bottom_b) {
        bottom += "position-absolute left-0 right-0 bottom-15"
    }

    if (Link) {
        custom_link = Link
    }

    if(customclass){
        bottom += ` ${customclass}`
    }

    return (
        <>
            <Link to={custom_link}>
                <div className={bottom} >
                    <span>{text}</span>
                    {icon = true ? icon : <img src="" alt="" width="40" height="40" />}
                </div>
            </Link>
        </>
    )
}

export default CustomBtn;