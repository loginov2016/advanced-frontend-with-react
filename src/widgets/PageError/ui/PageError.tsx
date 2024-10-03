import { classNames } from 'shared/lib/classNames/classNames';
import style from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import React from 'react';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(style.PageError, {}, [className])}>
            <p>
                {t('Произошла не предвиденная ошибка!')}
                <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
            </p>
        </div>
    );
};

export default PageError;
