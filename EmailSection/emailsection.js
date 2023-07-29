import { Email } from '../Email/email.js';

export const EmailSection = (props) => {
  const { heading, emails = [], folder } = props;

  //Vytvor element section
  const element = document.createElement('section');
  element.classList.add('inbox');
  //Pridej elementu section innerHTML
  element.innerHTML = `
    <h2>${heading}</h2>
    <div class="emails"></div>
  `;
  //Vygeneruj si pole s komponentami Email
  element.querySelector('.emails').append(
    ...emails.map((email) =>
      Email({
        id: email.id,
        senderName: email.sender.name,
        subject: email.subject,
        time: email.time,
        unread: email.unread,
      }),
    ),
  );

  if (emails.length === 0) {
    //Rekni si o data
    fetch(
      `https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`,
    )
      .then((response) => response.json())
      .then((data) =>
        element.replaceWith(
          EmailSection({
            heading: heading,
            emails: data.emails,
            folder: folder,
          }),
        ),
      );
  }
  //Return element section
  return element;
};
