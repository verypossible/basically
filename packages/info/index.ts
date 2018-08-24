import { withInfo } from '@storybook/addon-info';

const styles = {
  header: {
    body: {
      paddingBottom: 0,
      paddingTop: 0,
    },
    h1: {
      display: 'inline',
      fontSize: '25px',
      marginRight: '20px',
    },
    h2: {
      color: '#999',
      display: 'inline',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    lineHeight: '2',
    padding: '0px 5px',
  },
};

const info = (text: string) =>
  withInfo({
    inline: true,
    source: false,
    styles,
    text,
  });

export default info;
