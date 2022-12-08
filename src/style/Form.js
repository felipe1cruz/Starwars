import { FormControl, StyledEngineProvider } from '@mui/material';

const Form = StyledEngineProvider(FormControl)`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column
    `;

export default Form;
