import './App.css';
import {Comments, Posts, Users} from './components';

export const App = () => {
    return (
        <div>
            <div className={'users-posts'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>

        </div>
    );
};
