// ÚKOL 1
// V separátní složce vytvořte komponentu Email. Komponenta bude očekávat následující props:
// const { senderName, subject, time, unread } = props;
// Zařiďte, aby komponenta vracela DOM element.
// Do složky s komponentou vložte také styly a obrázky související s e-mailem.
// V hlavním souboru index.js upravte funkci renderSection tak, aby používala komponentu Email a metodu append.
// Zkontrolujte, že aplikace funguje správně, zobrazuje správné e-maily ve správných složkách se správnými ikonami.

export const Email = (props) => {
  const { id, senderName, subject, time, unread, body } = props;

  let iconClass = 'opened';
  if (unread) {
    iconClass = 'closed';
  }

  const element = document.createElement('div');
  element.classList.add('email');
  if (body !== undefined) {
    element.classList.add('email--expand');
  }

  element.innerHTML = `
    <div class="email__head">
      <button class="email__icon email__icon--${iconClass}"></button>
      <div class="email__info">
        <div class="email__sender">${senderName}</div>
        <div class="email__subject">${subject}</div>
      </div>
      <div class="email__time">${time}</div>
    </div>
    <div class="email__body">${body}</div>
  `;

  element.querySelector('button').addEventListener('click', () => {
    if (body === undefined) {
      fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
        .then((response) => response.json())
        .then((data) =>
          element.replaceWith(
            Email({
              id: data.id,
              senderName: data.sender.name,
              subject: data.subject,
              time: data.time,
              unread: data.unread,
              body: data.body,
            }),
          ),
        );
    } else {
      element.replaceWith(
        Email({
          id: id,
          senderName: senderName,
          subject: subject,
          time: time,
          unread: unread,
        }),
      );
    }
  });

  return element;
};
