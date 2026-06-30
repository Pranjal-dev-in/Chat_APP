export function formatMessageDate(date) {
  const today = new Date();
  const messageDate = new Date(date);

  if (today.toDateString() === messageDate.toDateString()) {
    return "Today";
  }

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (yesterday.toDateString() === messageDate.toDateString()) {
    return "Yesterday";
  }

  return messageDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
