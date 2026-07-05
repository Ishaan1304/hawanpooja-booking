const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function saveBooking(formData) {
  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...formData,
      payment: "Pending",
    }),
  });

  return await response.json();
}