//   Ve vašem projektu předělejte metodu renderSection na komponentu EmailSection. Komponenta bude očekávat props ve tvaru:
// const { heading, emails, folder } = props;
// V prop folder očekáváme hodnoty 'read' nebo 'unread'.
// Založte pro komponentu složku, přesuňte CSS styly, jak už to znáte. Komponenta by měla vyrobit celou jednu sekci s e-maily. V HTML nám pak zůstane jen prázdný element #app.
// V hlavním souboru použijte komponentu k zobrazení obou sekcí.
// Zaříďte, aby si komponenta EmailSection stahovala vlastní data. Do prop s názvem emails vložte jako výchozí hodnotu prázdný seznam.

import { EmailSection } from './EmailSection/emailsection.js';

// const appElm = document.querySelector('#app');

document
  .getElementById('app')
  .append(
    EmailSection({ heading: 'Nepřečtené', folder: 'unread' }),
    EmailSection({ heading: 'Přečtené', folder: 'read' }),
  );
