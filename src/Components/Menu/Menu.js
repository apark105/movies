import { useState } from 'react'
import './Menu.css';
import arrow from '../../Assets/arrow.png'
import checkmark from '../../Assets/checkmark.png';


function Menu({ menuItem, selected, sort }) {
    const [btnClick, setBtnClick] = useState(false);

    let count = 0;

    const selectedItem = (e) => {
        // console.log(e.target.innerText)
        // sort(e.target.innerText)
        // setSelected(e.target.innerText)
    }


    const clickedMenu = () => {
        setBtnClick(!btnClick)
    }

    return (
        <div className="dropdown">
            <div onClick={clickedMenu} className="dropdown-title"><span className="dropdown-title--active">{selected}</span>
                <img className={btnClick ? 'dropdown-arrow dropdown-arrow--active' : 'dropdown-arrow'} src={arrow} alt="dropdown arrow" />
                <ul className={btnClick ? 'dropdown-menu dropdown-menu--active' : 'dropdown-menu'}>
                    {menuItem && menuItem.map((item) => {
                        return (<li key={count++} onClick={(e)=>{sort(e.target.innerText)}} className="dropdown-item">
                            {item}
                            <img className={selected === item ? 'dropdown-mark dropdown-mark--active' : 'dropdown-mark'} src={checkmark} alt="checkmark" />
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Menu;
