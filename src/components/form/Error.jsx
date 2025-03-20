import React from "react";

const Error = ({ error, visible }) => {
    if(!visible) return null;
    return (
        <p className="text-sm text-error"> { error } </p>
    )
}

export default Error;