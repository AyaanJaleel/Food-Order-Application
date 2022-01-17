import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import { Fragment } from 'react';

function Meals(){
    return(
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    );
}

export default Meals;