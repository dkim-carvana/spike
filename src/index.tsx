import r2wc from '@r2wc/react-to-web-component';
import Header from './components/header/Header';

const wcHeader = r2wc(Header, { props: {text: 'string'} });

customElements.define("r2w-header", wcHeader);