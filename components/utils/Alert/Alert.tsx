import React from 'react';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

//fowardRef - permite montar elementos com referencias, tipo: uma div com uma propriedade ref que diz o que a div vai fazer
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default Alert;