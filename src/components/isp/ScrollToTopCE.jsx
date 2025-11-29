import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToTopCE() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTopCE