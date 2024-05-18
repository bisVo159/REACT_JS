import React from "react";

const UserContext=React.createContext()

export default UserContext;


// Notes
// we wrap all this component with UserContext making it a provider or global
{/* <UserContext>
<Login/>
<Card>
    <Data/>
</Card>
<UserContext/> */}