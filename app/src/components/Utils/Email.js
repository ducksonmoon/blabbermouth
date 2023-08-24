const msg = {
  to: "test@example.com",
  from: "test@example.com",
  subject: "Sample To YOU",
  text: "Hih Hih",
  html: "<strong>Hih Hih</strong>",
};

export const sendEmail = (to) => {
  msg.to = to;
  console.log(msg);
};
