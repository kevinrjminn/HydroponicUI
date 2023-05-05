import { createContext } from 'react';

const AlertContext = createContext({
    showAlert: false,
    setShowAlert: () => {},
});

export default AlertContext;
