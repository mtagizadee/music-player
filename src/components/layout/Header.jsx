import Logo from './../Logo';
import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();

    // TODO: get the current from the server if there is no user authorized isAuth = false
    const isAuth = false; // TODO: therefore there should me a AuthContext where isAuth will be gotten from

    const onLoginClick = useCallback(() => {
        navigate('/auth/login'); // TODO: add login page
    }, []);

    const onSignUpClick = useCallback(() => {
        navigate('/auth/signup'); // TODO: add sign up page
    }, []);

    return (
        <header className="fixed w-full flex justify-center">
            <div className="w-full max-w-main h-[80px] p-6 flex justify-between">
                <Logo clickable={true} />
                <div className='flex w-full max-w-[200px] justify-between'>
                    <NavLink to='/'> Home </NavLink>
                    {
                        isAuth ||
                        <div>
                            <button onClick={onLoginClick}> Log in </button> | <></>
                            <button onClcik={onSignUpClick}> Sign up </button>
                        </div> // TODO: add else statement
                    }
                </div>
            </div>
        </header >
    );
}

export default Header;