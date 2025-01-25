import { classNames } from 'shared/lib/classNames/classNames';
import style from './Navbar.module.scss';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [isAuthModal]);

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button
                className={style.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus vero et cumque necessitatibus? Perspiciatis
                reprehenderit tempore delectus mollitia, error ipsa?
            </Modal>
        </div>
    );
};
