import { useNavigate } from "react-router";
import { useCallback } from "react";

const Logo = ({ clickable = false }) => {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate('/');
    }, []);

    return (
        <p onClick={clickable ? onClick : undefined} className={`fond-bold font-black text-xl ${clickable && 'clickable'}`}> M<span className="text-red">P</span> </p>
    );
}

export default Logo;