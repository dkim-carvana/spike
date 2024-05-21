import r2wc from '@r2wc/react-to-web-component';
import Header from './components/header/Header';
import MuiButton from './components/mui-button/MuiButton';

const wcHeader = r2wc(Header, { props: {text: 'string'}});
const wcHeaderShadow = r2wc(Header, { shadow: "open"});

const WebGreeting = r2wc(MuiButton, {
    props: {
      description: "string"
    },
})

customElements.define("web-greeting", WebGreeting)
customElements.define("r2w-header", wcHeader);