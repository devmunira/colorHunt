import { useState } from "react";

const useToggle = () => {
    const [show, setShow] = useState(false);
    const handleToggle = (e) => {
        e.preventDefault();
        setShow(!show)
    }
    return {
        show,
        handleToggle,
        setShow
    }
}

export default useToggle;