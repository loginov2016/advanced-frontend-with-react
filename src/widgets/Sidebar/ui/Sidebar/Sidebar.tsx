import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import React from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                style.Sidebar,
                { [style.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                className={style.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                size={ButtonSize.XL}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={style.items}>
                <div className={style.item}>
                    <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
                        <MainIcon className={style.icon} />
                        <span className={style.link}>{t('Главная')}</span>
                    </AppLink>
                </div>
                <div className={style.item}>
                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <AboutIcon className={style.icon} />
                        <span className={style.link}>{t('О сайте')}</span>
                    </AppLink>
                </div>
            </div>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} short={collapsed} />
            </div>
        </div>
    );
};
