/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.tab`,
    defaultMessage: 'Tableau',
  },
  features: {
    id: `${scope}.test`,
    defaultMessage: 'Carte',
  },
});
