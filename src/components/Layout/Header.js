import React, {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import CartButton from './HeaderCartButton';

function Header(props){
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <CartButton onClick={props.onShowCart}></CartButton>
            </header>
            <div className={classes['main-image']} >
                <img src={mealsImage} alt="A table full of spices!"/>
            </div>
        </Fragment>
    );
}

export default Header;