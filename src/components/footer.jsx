import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css'

const SampleFooter = () => (
  <Footer  className='footer'
  onClick
  autoFocus
  columns={[
    {
      title: 'Client Service',
      items: [
        {
          title: 'FAQs',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'Track Order',
          url: 'https://ceo/',
          openExternal: true,
        },
      ],
    },
    {
      title: 'Contact Us',
      items: [
        {
          title: 'Adress',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'Email',
          url: 'https://ceo/',
          openExternal: true,
        },
      ],
    },
  ]}

/>

);


export default () => <SampleFooter />;





