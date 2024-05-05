
import { Link } from "react-router-dom";



const ProBtn = ({ text, icon, imgsrc, borde, background, textcolor
    , textsize, customclass, selected, onClick ,background_deselect ,to}) => {

    var probtn = "flex items-center p-2 w-fit ml-auto mr-auto"

    

    if (imgsrc || icon) {

            probtn += " justify-content-between"
        } else {

            probtn += " justify-content-center"
        }


    if (textsize) {
        probtn += " " + textsize
    } else {
        probtn += " text-1-1rem"
    }

    probtn += " " + customclass

    if (selected) {
        probtn += " blue-back2 text-white"
    }else{
        probtn += " basic-text3"

        probtn += ` ${background_deselect}` 

    }

    if(!to){
        to=""
    }

    return (
        <>
            <Link to={to} onClick={onClick}>
                <div className={probtn} style={{ backgroundColor: background, color: textcolor }}>

                    <span>{text}</span>
                    {icon = true ? icon : <img src={require({ imgsrc })} alt="" width="40" height="40" />}

                </div>
            </Link>

        </>
    )

}

export default ProBtn;