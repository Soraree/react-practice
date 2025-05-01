import React from "react";

const Main = ({ children, style})=>{
    return(
        <>
        <div>Main</div>
        <main style={{padding:'20px'}}>
            {children}
        </main>
        </>
    );
};

export default Main;