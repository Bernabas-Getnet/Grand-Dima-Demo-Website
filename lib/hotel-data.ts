export const roomData = [
  {
    slug: "standard-room",
    name: "Standard Room",
    description: "Comfortable accommodation for everyday stays.",
    image:
      "/standard-room.png",
    details:
      "A considered room for a restful stay, with the essentials arranged for ease and comfort.",
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    description: "More space and additional comfort for your stay.",
    image:
      "/luxure.png",
    details:
      "A spacious room with a calm, welcoming atmosphere and room to settle into your stay.",
  },
  {
    slug: "suite",
    name: "Suite",
    description: "A spacious option for guests looking for something extra.",
    image:
      "/suite.png",
    details:
      "An elevated stay with generous proportions and a relaxed setting for longer visits.",
  },
];
export type Room = (typeof roomData)[number];
