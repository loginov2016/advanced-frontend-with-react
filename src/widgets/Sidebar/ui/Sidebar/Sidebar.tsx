import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import React from 'react';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
            <button
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                onToggle
            </button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} />
            </div>
        </div>
    );
};
