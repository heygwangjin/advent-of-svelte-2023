import challenge_base from "$lib/assets/challenge_base.webp";
import challenge_02 from "$lib/assets/challenge_02.webp";
import challenge_03 from "$lib/assets/challenge_03.webp";
import challenge_04 from "$lib/assets/challenge_04.webp";
import challenge_07 from "$lib/assets/challenge_07.webp";
import challenge_08 from "$lib/assets/challenge_08.webp";
import challenge_09 from "$lib/assets/challenge_09.webp";
import challenge_10 from "$lib/assets/challenge_10.webp";
import challenge_11 from "$lib/assets/challenge_11.webp";
import challenge_12 from "$lib/assets/challenge_12.webp";
import challenge_14 from "$lib/assets/challenge_14.webp";
import challenge_15 from "$lib/assets/challenge_15.webp";

export type Challenge = {
  id: number;
  title: string;
  image: string;
  description: string;
  isDone: boolean;
};

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: "Naughty or Nice",
    description: "Help the elves to keep track of children's behavior",
    isDone: true,
    image: challenge_base
  },
  {
    id: 2,
    title: "Merry Munch-o-Meter",
    description: "Click on the colorful cookies to give them to Santa",
    isDone: true,
    image: challenge_02
  },
  {
    id: 3,
    title: "Jingle Bell Balancer",
    description: "Create a Sleigh Load Balancer ",
    isDone: true,
    image: challenge_03
  },
  {
    id: 4,
    title: "Santa's Heart Rate Monitor",
    description: "Santa's Heart Rate Monitor",
    isDone: false,
    image: challenge_04
  },
  {
    id: 5,
    title: "Elf Productivity Dashboard",
    description: "Elf Productivity Dashboard",
    isDone: false,
    image: challenge_base
  },
  {
    id: 6,
    title: "Misteltoe Metronome",
    description: "challange-06",
    isDone: false,
    image: challenge_base
  },
  {
    id: 7,
    title: "Morse Code Translator",
    description: "Morse Code Translator",
    isDone: false,
    image: challenge_07
  },
  {
    id: 8,
    title: "Santa's Memory Game",
    description: "Santa's Memory Game",
    isDone: false,
    image: challenge_08
  },
  {
    id: 9,
    title: "Santa's Final Countdown",
    description: "Santa's Final Countdown",
    isDone: false,
    image: challenge_09
  },
  {
    id: 10,
    title: "Pop-up! Spreading the holiday cheer",
    description: "Pop-up! Spreading the holiday cheer",
    isDone: false,
    image: challenge_10
  },
  {
    id: 11,
    title: "Tinsel Transformers",
    description: "Tinsel Transformers",
    isDone: false,
    image: challenge_11
  },
  {
    id: 12,
    title: "Greetings and salutations",
    description: "Greetings and salutations",
    isDone: false,
    image: challenge_12
  },
  {
    id: 13,
    title: "Jingle Bell Balancer 2.0",
    description: "Jingle Bell Balancer 2.0",
    isDone: false,
    image: challenge_base
  },
  {
    id: 14,
    title: "Snowfall",
    description: "Configurable snowfall component",
    isDone: false,
    image: challenge_14
  },
  {
    id: 15,
    title: "Spankling Snowglobes",
    description: "Spankling Snowglobes",
    isDone: false,
    image: challenge_15
  },
  {
    id: 16,
    title: "challenge-16",
    description: "challange-16",
    isDone: false,
    image: challenge_base
  },
  {
    id: 17,
    title: "challenge-17",
    description: "challange-17",
    isDone: false,
    image: challenge_base
  },
  {
    id: 18,
    title: "challenge-18",
    description: "challange-18",
    isDone: false,
    image: challenge_base
  },
  {
    id: 19,
    title: "challenge-19",
    description: "challange-19",
    isDone: false,
    image: challenge_base
  },
  {
    id: 20,
    title: "challenge-20",
    description: "challange-20",
    isDone: false,
    image: challenge_base
  },
  {
    id: 21,
    title: "challenge-21",
    description: "challange-21",
    isDone: false,
    image: challenge_base
  },
  {
    id: 22,
    title: "challenge-22",
    description: "challange-22",
    isDone: false,
    image: challenge_base
  },
  {
    id: 23,
    title: "challenge-23",
    description: "challange-23",
    isDone: false,
    image: challenge_base
  },
  {
    id: 24,
    title: "challenge-24",
    description: "challange-24",
    isDone: false,
    image: challenge_base
  }
];

export const challengeNumbers = CHALLENGES.filter((challenge) => challenge.isDone).map(
  (challenge) => challenge.id
);
