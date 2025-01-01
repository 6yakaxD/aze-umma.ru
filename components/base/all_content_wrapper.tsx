import React, {ReactNode} from 'react';
import style from './all_content_wrapper.module.scss';

interface AllContentWrapperProps {
    children: ReactNode;
}

export default function AllContentWrapper({children}: AllContentWrapperProps): React.ReactElement {

    return (
        <div className={style.mainContentDiv}>
            {children}
        </div>
    )

}