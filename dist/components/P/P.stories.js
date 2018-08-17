import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import info from '../../utils/storybook-info';
import P from './index';
var withInfo = info("\n### Notes\n\nThe notes need to be updated for the new component.\n\n### Customization\n\n```\nimport { P } from 'basically'\nimport styled from 'styled-components'\n\nconst MyP = styled(P)`\n  background: blue;\n  color: white;\n`;\n\n<MyP>I'm Customized</MyP>\n```\n");
var stories = storiesOf('Components/P', module);
var paragraph = "\nBacon ipsum dolor amet pork landjaeger shankle bresaola short ribs. Flank strip steak drumstick kevin, buffalo brisket\nsausage beef. Ball tip shoulder prosciutto pork belly meatball, ribeye picanha pork chop burgdoggen brisket frankfurter\nground round hamburger bacon. Pork loin tri-tip strip steak prosciutto ribeye flank shankle kielbasa cow brisket. Corned\nbeef pork shank shoulder meatball landjaeger leberkas turkey, jerky turducken ground round beef. Meatloaf landjaeger ham\nturducken jowl cupim hamburger corned beef leberkas andouille shoulder meatball.\n";
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return React.createElement(P, null, text('children', paragraph));
}));
//# sourceMappingURL=P.stories.js.map