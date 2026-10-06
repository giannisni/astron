export const instagram = "https://www.instagram.com/astronclub/";
export const soundcloud = "https://soundcloud.com/astron-bar";
export const residentAdvisor = "https://ra.co/clubs/241181";

export const posters = [
  // Verified against the individual Resident Advisor listings on 5 October 2026.
  { src: "https://images.ra.co/a3c2e7a44bc2dd4a5a767e74b8fb80f9f41a612a.jpg", date: "09.10.26", title: "TROPISM with Umwelt", raUrl: "https://ra.co/events/2529706" },
  { src: "https://images.ra.co/fac855aed56c338f2504a4952a647e93f7ea42ea.png", date: "03.10.26", title: "ACN with Ngly / Outermost / Devika", raUrl: "https://ra.co/events/2543989" },
  { src: "/posters/91f9c5ccabd43800.jpg", date: "04.09.26", title: "Persephonic Sirens Night", raUrl: "https://ra.co/events/2504968" },
  { src: "/posters/f83b3239b5fe3df9.jpg", date: "05.09.26", title: "ACN · Jorkes", raUrl: "https://ra.co/events/2514032" },
  { src: "/posters/2cfa4007769823bc.jpg", date: "12.09.26", title: "KAOS × Astron · Oliver Ho", raUrl: "https://ra.co/events/2512648" },
  { src: "/posters/878bd7db6c7448b3.jpg", date: "29.08.26", title: "ACN · cotton / GRETA", raUrl: "https://ra.co/events/2511096" },
  { src: "/posters/d5adb300bd48b0de.jpg", date: "05.08.26", title: "Astron Archive" },
  { src: "/posters/ebde989a9ea1464e.jpg", date: "29.07.26", title: "Astron Archive" },
  { src: "/posters/12f197070d6fada0.jpg", date: "29.07.26", title: "Astron Archive" },
  { src: "/posters/cbcce0c5d972f25a.jpg", date: "21.07.26", title: "ACN · Eleusinia Mysteria" },
  { src: "/posters/0aac3ae954afce0b.jpg", date: "24.07.26", title: "ACN · 3.14 / Katra", raUrl: "https://ra.co/events/2489880" },
  { src: "/posters/ec3f3fb50e29c3e7.jpg", date: "25.07.26", title: "ACN · Mavridis / Re-Act", raUrl: "https://ra.co/events/2489922" },
  { src: "/posters/c762c7dfbb4d7419.jpg", date: "22.07.26", title: "Astron Archive" },
  { src: "/posters/66b19365edeca1ec.jpg", date: "18.01.26", title: "Astron Club Night" },
];

export function eventDay(date: string) {
  const [day, month, year] = date.split(".");
  return `20${year}-${month}-${day}`;
}

export function athensToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Athens", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(now);
}

export function upcomingEvents(today = athensToday()) {
  return posters.filter(event => event.raUrl && eventDay(event.date) >= today)
    .sort((a, b) => eventDay(a.date).localeCompare(eventDay(b.date)));
}
