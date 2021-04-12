import "./employee.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { EmployeeProps } from '../../../types/types'


const employee: React.FC<EmployeeProps> = (props: EmployeeProps) => {
    return <><div className='card'>
        <div className='employee-wrapper'>
            <div className='employee-personal-info'>
                <div className='employee-image'>
                    <img src={props.image} alt='avatar' />
                </div>
                <div className='employee-name'>
                    <p className='name'>{props.name}</p>
                    <p className='position'>{props.lName}</p>
                </div>
            </div>
            <div className='employee-bio'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tterempor incididunnt ut elit labore.{props.lName + props.name}
                </p>
            </div>
            <div className='employee-contact-info'>
                <p><span><FontAwesomeIcon icon={faEnvelope} /></span>{props.email}</p>
                <p><span><FontAwesomeIcon icon={faInstagram} /></span>{props.name}.{props.lName}</p>
            </div>
            <div className='contact-employee'>
                <div>
                    <button className='message'>Message</button>
                    <button>Profile</button>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default employee