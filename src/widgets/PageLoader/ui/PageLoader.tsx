import { classNames } from 'shared/lib/classNames/classNames';
import style from './PageLoader.module.scss';
import Loader from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(style.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
