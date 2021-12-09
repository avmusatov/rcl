import { Global, css } from '@emotion/react';
import Content from './content';

const App = () => {
    return (
        <>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    html {
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        color: #181c32;
                    }
                    body {
                        background-image: url('https://preview.keenthemes.com/metronic8/demo12/assets/media/misc/page-bg.jpg');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-attachment: fixed;
                        background-size: cover;
                    }
                `}
            />
            <Content />
        </>
    );
};

export default App;
