import React, { useState } from 'react';

const RequireAuth = ({children}) => {

    const [auth, setAuth] = useState(false);






    return children   ; 
};

export default RequireAuth;