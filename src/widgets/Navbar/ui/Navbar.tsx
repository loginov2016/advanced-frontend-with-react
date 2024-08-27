import { classNames } from 'shared/lib/classNames/classNames';
import style from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            
            <div className={style.links}>
                <AppLink to={'/'} className={style.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.THIRD}>О сайте</AppLink>
            </div>
        </div>
    );
};
