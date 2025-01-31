import React from 'react';

interface ChildProps {
    clicks: number;
    updateClick: () => void;
}

const Child: React.FC<ChildProps> = ({ clicks, updateClick}) => {
    return (
        <div onClick={updateClick}>
            <h1>Clicks: {clicks}!</h1>
        </div>
    );
};

export default Child;