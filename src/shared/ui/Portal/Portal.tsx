import { classNames } from 'shared/lib/classNames/classNames';
import style from './Portal.module.scss';
import { FC, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props: PortalProps): ReactPortal => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
