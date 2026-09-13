export const site = {
  name: "MCI",
  legalName: "MCI — My Car Inspection",
  taglineKo: "마이 카 인스펙션",
  domain: "mci.vehicledx.com",
  url: "https://mci.vehicledx.com",
  contactName: "Guny J",
  contactNameKo: "주형건",
  title: "Certified Chief Diagnostic Appraiser",
  titleKo: "대표공인진단평가사",
  phone: "010-9124-2805",
  phoneHref: "tel:+821091242805",
  email: "joo@vehicledx.com",
  kakaoUrl: "https://open.kakao.com/o/sXzX9mNi",
  whatsappUrl:
    "https://wa.me/821091242805?text=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20MCI%20%EB%94%94%EC%A7%80%ED%84%B8%20%EB%AA%85%ED%95%A8%EC%9D%84%20%EB%B3%B4%EA%B3%A0%20%EC%97%B0%EB%9D%BD%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%20%EA%B2%80%EC%B0%A8%20%EA%B4%80%EB%A0%A8%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.",
  bookingUrl: "https://vehicledx.com/client?b=VEHICL5M",
  bookingLabel: "Book an inspection",
  bookingLabelKo: "검차 예약",
  inventory:
    "used vehicles produced in Korea, and used vehicles that were imported into Korea and driven there",
  description:
    "MCI (My Car Inspection) delivers objective, real-time used-car evaluation reports from Korea to overseas B2B buyers and importers.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
] as const;
