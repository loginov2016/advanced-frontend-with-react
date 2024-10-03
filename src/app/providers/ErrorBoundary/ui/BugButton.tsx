import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import React from 'react';

// Компонет для тестирования ErrorBoundary.
const BugButton = () => {
    const [error, setError] = useState(false);

    const onToggle = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Ошибка!');
        }
    }, [error]);

    return <Button onClick={onToggle}>Throw Error</Button>;
};

export default BugButton;
