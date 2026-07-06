const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function saveBooking(formData) {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...formData,
      payment: "Pending",
      type: "booking",
    }),
  });

  return { success: true };
}