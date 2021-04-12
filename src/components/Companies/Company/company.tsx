
import "./company.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ChildProps } from '../../../types/types'


// interface ChildProps {
//     key: number
//     image: string
//     menu: string
//     rank: number
//     type: string
//     source: string
// }


const company: React.FC<ChildProps> = (props) => {

    //Country origin toUpperCase
    let type
    if (props.type) {
        let type1 = props.type.toString();
        type = type1.toUpperCase();
    }

    return <div className='company-container'>
        <div className='company-info'>
            <div className='company-rank'>
                <div className='rank'>{props.rank}</div>
            </div>
            <div className='company-logo'>
                <div className='logo'>
                    <div className='image'><img src={props.image} alt="logo" /></div>
                    <div className='logo-name'><h3>{type ? type : "-"}</h3></div>
                </div>
            </div>
        </div>
        <div className='company-menu '>
            <div>
                <h3>{props.menu}</h3>
                <p>Terms {"&"} Conditions</p>
            </div>
        </div>
        <div className='company-efforts'>
            <div>
                <p><span><FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /></span>{props.source}</p>
                <p><span><FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /></span>Delicious</p>
                <p><span><FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /></span>Free Delivery</p>
            </div>
        </div>
        <div className='company-website'>
            <div>
                <p>{props.menu}</p>
                <button>Order Now</button>
            </div>
        </div>
    </div>
}

export default company