/**
 * PRISON STREAM — single source of truth.
 *
 * Everything the project has not officially announced lives here as a
 * placeholder. Update this file as information is revealed; the whole site
 * re-renders around it. No component hard-codes an assumption.
 */

/** ---------------------------------------------------------------------
 * TERMINOLOGY
 * What the participants are officially called is NOT confirmed.
 * Change these strings once it is; they are used site-wide.
 * ------------------------------------------------------------------- */
export const terms = {
  /** singular, neutral */
  person: "Creator",
  /** plural, neutral */
  people: "Creators",
  /** collective noun for the group */
  group: "The Roster",
  /** what a profile page is called */
  profile: "File",
} as const;

/** ---------------------------------------------------------------------
 * LAUNCH
 * When the exact date is announced: set `exactDateAnnounced: true` and
 * fill `targetIso`. The Lockdown section swaps the placeholder for a real
 * countdown automatically. Do NOT guess a date.
 * ------------------------------------------------------------------- */
export const launch = {
  window: "AUTUMN",
  year: "2026",
  exactDateAnnounced: false,
  /** e.g. "2026-10-31T20:00:00Z" — only once officially confirmed */
  targetIso: null as string | null,
  /** shown while the date is unknown */
  dateLabel: "NOT YET REVEALED",
  timeLabel: "CLASSIFIED",
  status: "AWAITING AUTHORIZATION",
} as const;

/** Atmospheric readouts. Visual only — never fake statistics. */
export const systemReadout = [
  { label: "SYSTEM STATUS", value: "ACTIVE", tone: "ok" as const },
  { label: "TRANSMISSIONS", value: "STANDBY", tone: "warn" as const },
  { label: "ROSTER", value: "CLASSIFIED", tone: "muted" as const },
  { label: "NEXT REVEAL", value: "UNKNOWN", tone: "muted" as const },
  { label: "LAUNCH", value: "AUTUMN 2026", tone: "ok" as const },
  { label: "SECURITY LEVEL", value: "[CLASSIFIED]", tone: "muted" as const },
];

export const projectFile = [
  { label: "PROJECT", value: "PRISON STREAM" },
  { label: "STATUS", value: "ACTIVE" },
  { label: "LAUNCH", value: "AUTUMN 2026" },
  { label: "DATE", value: "CLASSIFIED" },
  { label: "PARTICIPANTS", value: "CLASSIFIED" },
  { label: "LOCATION", value: "CLASSIFIED" },
  { label: "FORMAT", value: "CLASSIFIED" },
];

/** ---------------------------------------------------------------------
 * ROSTER
 * Nobody has been officially revealed. Add entries as announcements happen;
 * `placeholderFiles` only controls how many empty files are displayed and
 * does NOT imply a participant count.
 * ------------------------------------------------------------------- */
import xkeonteAsset from "@/assets/xkeonte-portrait.jpg";
import sebzAsset from "@/assets/sebzonair.jpg";
import amiriAsset from "@/assets/amirididit.png";
import primeAsset from "@/assets/primedehaney.png";
import mrwrldAsset from "@/assets/upload-image-2.png";
import samhamAsset from "@/assets/upload-image-3.png";
import angelAsset from "@/assets/angelmurray.jpg";
import mr100Asset from "@/assets/upload-image-5.png";
import noisebykjAsset from "@/assets/upload-image-6.png";
import lbmmAsset from "@/assets/lbmm.jpg";
import r3dAsset from "@/assets/upload-image-8.png";
import tyroneAsset from "@/assets/tyrone1mc.jpg";
import kingsleyAsset from "@/assets/upload-image-10.png";
import remyb0ysAsset from "@/assets/remyb0ys.png";
import britishboycamAsset from "@/assets/britishboycam.png";
import mallyclipzAsset from "@/assets/mallyclipz.png";
import sammyamzAsset from "@/assets/sammyamz.png";
import jmarnzAsset from "@/assets/jmarnz.png";
import mastiempoAsset from "@/assets/mastiempo01.png";
import j1ggzzAsset from "@/assets/j1ggzz365.png";
import j4dentvAsset from "@/assets/j4dentv.png";
import ysabellaAsset from "@/assets/ysabellagrace.png";

export type SocialLink = { platform: string; url: string };

/**
 * Database clearance for a creator.
 * CLASSIFIED — in the database, not cleared for release (search returns classified).
 * CONFIRMED  — cleared: search runs the full scan and unseals the file.
 * REVEALED   — already unsealed publicly; search still runs the scan.
 */
export type Clearance = "CLASSIFIED" | "CONFIRMED" | "REVEALED";

export type RosterEntry = {
  /** file number, e.g. "001" */
  file: string;
  revealed: boolean;
  /** database clearance — drives the reveals search terminal */
  clearance?: Clearance;
  name?: string;
  /** extra spellings the search should recognise */
  aliases?: string[];
  username?: string;
  platform?: string;
  bio?: string;
  image?: string;
  socials?: SocialLink[];
  streamUrl?: string;
  announcedOn?: string;
  status?: string;
  /** position within the organisation, if revealed */
  role?: string;
};


export const placeholderFiles = 6;

export const roster: RosterEntry[] = [
  {
    file: "001",
    revealed: true,
    clearance: "REVEALED",
    name: "XKEONTE",
    platform: "TWITCH",
    role: "INMATE",
    image: xkeonteAsset,
    bio: "British content creator and online personality from Birmingham, England. Known for entertaining, creator-led content and his involvement in the UK online creator scene.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/xkeonte" },
      { platform: "Discord", url: "https://discord.com/invite/MddrwwJpf5" },
      { platform: "Instagram", url: "https://www.instagram.com/reel/DcOsXiWN6Ex/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "002",
    revealed: true,
    clearance: "REVEALED",
    name: "SEBZONAIR",
    aliases: ["SEBZ", "SEBZ ON AIR", "SEBZONAIRLIVE"],
    platform: "TWITCH",
    role: "INMATE",
    image: sebzAsset,
    bio: "SebzOnAir is a British content creator and streamer known for his entertaining personality, livestreams and engaging online presence. His content centres around entertainment, interactions with his audience and creating memorable moments for his community. With a personality-driven approach to content, SebzOnAir has developed his own identity online through livestreaming, social media and collaborations with other creators.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/sebzonair" },
      { platform: "YouTube", url: "https://www.youtube.com/@SebzOnAir" },
      { platform: "TikTok", url: "https://www.tiktok.com/@sebzonairlive" },
      { platform: "Instagram", url: "https://www.instagram.com/sebzonair/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "003",
    revealed: true,
    clearance: "REVEALED",
    name: "4DIDIT",
    aliases: ["AMIRIDIDIT", "AMIRI DID IT", "AMIRI"],
    platform: "TWITCH",
    role: "INMATE",
    image: amiriAsset,
    bio: "4DidIt, also known as AmirIDidIt, is a British content creator and online personality known for his entertaining personality, social media presence and creator-focused content. He has developed his own identity online through engaging with his audience, collaborating with other creators and sharing entertaining moments across social platforms.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/amirididit/" },
      { platform: "Twitch", url: "https://www.twitch.tv/4didit" },
      { platform: "TikTok", url: "https://www.tiktok.com/@amiri.didit" },
      { platform: "YouTube", url: "https://www.youtube.com/channel/UCifKJvSuQBh57QupAWnPjDQ" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "005",
    revealed: true,
    clearance: "CONFIRMED",
    name: "PRIMEDEHANEY",
    aliases: ["PRIME DEHANEY", "PRIME", "DEHANEY"],
    role: "INMATE",
    image: primeAsset,
    bio: "primeDehaney is a British content creator and online personality who has built his presence around entertainment, personality-driven content and social media. Known for his distinctive online identity, primeDehaney has developed an audience interested in his personality and the content he creates across digital platforms. His growing presence has established him as a recognizable name within the UK creator scene.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/primedehaney/" },
      { platform: "TikTok", url: "https://www.tiktok.com/@primedehaney" },
      { platform: "Twitch", url: "https://www.twitch.tv/primedehaney" },
      { platform: "YouTube", url: "https://www.youtube.com/@primedehaney" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "006",
    revealed: true,
    clearance: "CONFIRMED",
    name: "MRWRLD",
    aliases: ["MR WRLD", "MRWORLD"],
    role: "INMATE",
    image: mrwrldAsset,
    bio: "MrWRLD is a British content creator and online personality known for his entertaining presence across social media. With a personality-led approach to content, MrWRLD has developed his own identity within the online creator space and continues to build an audience through his digital presence. His name and persona have become closely associated with the content and entertainment he shares online.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/itsmrwrld" },
      { platform: "Twitch", url: "https://www.twitch.tv/itsmrwrld" },
      { platform: "YouTube", url: "https://www.youtube.com/@itsmrwrld?si=ynzzC2ZWz9gRL8CO" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "007",
    revealed: true,
    clearance: "CONFIRMED",
    name: "SAMHAM",
    aliases: ["SAM HAM", "SAM"],
    role: "INMATE",
    image: samhamAsset,
    bio: "SamHam is a London-based British content creator and streamer known for his energetic personality, livestreams and entertainment-focused content. He has built a strong online presence through platforms such as Twitch, YouTube and TikTok, creating a mixture of gaming, reactions, conversations and live entertainment. SamHam is also known for his interactive relationship with his community, making his livestreams a major part of his creator identity.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/samham" },
      { platform: "YouTube", url: "https://www.youtube.com/@samham" },
      { platform: "TikTok", url: "https://www.tiktok.com/@samham" },
      { platform: "Instagram", url: "https://www.instagram.com/samham/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "008",
    revealed: true,
    clearance: "CONFIRMED",
    name: "ANGELMURRAY",
    aliases: ["ANGEL MURRAY", "ANGEL"],
    role: "INMATE",
    image: angelAsset,
    bio: "AngelMurray is a British creator, streamer and music artist who has developed a presence across livestreaming, social media and music. Her content combines entertainment and personality with her creative work as an artist, allowing her to connect with audiences across multiple platforms. AngelMurray has also established a dedicated online community around her content, while continuing to develop her presence as both a creator and musician.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/angelmurrayyy/" },
      { platform: "TikTok", url: "https://www.tiktok.com/@angelmurrayyy" },
      { platform: "Twitch", url: "https://www.twitch.tv/angelmurrayyy" },
      { platform: "YouTube", url: "https://www.youtube.com/@Angelmurraymusic" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "009",
    revealed: true,
    clearance: "CONFIRMED",
    name: "MR£100",
    aliases: ["MR100", "MR 100", "MR100PAND", "MR £100"],
    role: "INMATE",
    image: mr100Asset,
    bio: "MR£100 is a British online creator and personality known for his distinctive identity across social media and digital entertainment. His presence is centred around personality-driven content and connecting with an online audience, helping him establish his own place within the creator space. Recognisable by the MR£100 name, he continues to develop his digital presence and audience across social platforms.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/mr100pand/" },
      { platform: "TikTok", url: "https://www.tiktok.com/@mr100pand" },
      { platform: "Twitch", url: "https://www.twitch.tv/mr100pand" },
      { platform: "YouTube", url: "https://www.youtube.com/@mr100pand" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "010",
    revealed: true,
    clearance: "CONFIRMED",
    name: "NOISEBYKJ",
    aliases: ["NOISE BY KJ", "NOISEBY KJ", "KJ"],
    role: "INMATE",
    image: noisebykjAsset,
    bio: "NoiseByKj is a British artist and online personality who has developed his presence through music, social media and digital entertainment. His work is centred around his sound, his personality and his ability to engage with an online audience, helping him establish a recognisable identity within the creator space. As his presence continues to grow, NoiseByKj is building his own name and community across platforms.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/noisebykj/" },
      { platform: "TikTok", url: "https://www.tiktok.com/@noisebykj" },
      { platform: "YouTube", url: "https://www.youtube.com/@noisebykj" },
      { platform: "Twitch", url: "https://www.twitch.tv/noisebykj" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "011",
    revealed: true,
    clearance: "CONFIRMED",
    name: "LBMM",
    aliases: ["LBM", "L B M M"],
    role: "INMATE",
    image: lbmmAsset,
    bio: "LBMM is a British streamer, online creator and personality who has developed his presence through livestreaming, social media and digital entertainment. His content is driven by personality and audience interaction, allowing him to create an identity that stands out within the wider creator space. LBMM continues to build his online presence while developing his own style and connection with his audience.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/lbmms_/" },
      { platform: "Twitch", url: "https://www.twitch.tv/lbmm" },
      { platform: "YouTube", url: "https://www.youtube.com/@LBMMLIVE" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "012",
    revealed: true,
    clearance: "CONFIRMED",
    name: "R3DEMPTIONTJ",
    aliases: ["R3DEMPTION", "REDEMPTION", "REDEMPTIONTJ", "R3D"],
    role: "INMATE",
    image: r3dAsset,
    bio: "R3demptionTJ is a British Twitch streamer, content creator and gamer from London who has built a strong presence through livestreaming and social media. His content spans gaming, reactions and Just Chatting, with his personality and interaction with viewers playing a major part in his streams. He has developed a dedicated online community known as the R3D community and continues to grow his presence across digital platforms.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/r3demptiontj" },
      { platform: "YouTube", url: "https://www.youtube.com/@r3demptiontj" },
      { platform: "TikTok", url: "https://www.tiktok.com/@r3demptiontj" },
      { platform: "Instagram", url: "https://www.instagram.com/r3demptiontj/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "013",
    revealed: true,
    clearance: "CONFIRMED",
    name: "TYRONE1MC",
    aliases: ["TYRONE", "TYRONE 1MC", "TYRONE1"],
    role: "INMATE",
    image: tyroneAsset,
    bio: "Tyrone1mc is a British streamer, host, content creator and musician who has built a significant presence across the UK entertainment and online creator scene. Alongside livestreaming and content creation, he has developed a career in music and is part of the dance music group FooR. Known for his energetic personality and entertainment-focused presence, Tyrone1mc has built a large audience across social platforms.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/tyrone1mc/" },
      { platform: "TikTok", url: "https://www.tiktok.com/@tyrone1mc" },
      { platform: "Twitch", url: "https://www.twitch.tv/tyrone1mc" },
      { platform: "YouTube", url: "https://www.youtube.com/@tyrone1mc" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "014",
    revealed: true,
    clearance: "CONFIRMED",
    name: "KINGSLEYCMA",
    aliases: ["KINGSLEY", "KINGSLEY CMA"],
    role: "INMATE",
    image: kingsleyAsset,
    bio: "KingsleyCMA is a British online creator and streamer known for his personality-driven presence and entertainment-focused content. His livestreams combine conversations, audience interaction and creative moments, with music and rap sessions also featuring within his content. Through his consistent online presence, KingsleyCMA has developed his own identity and community across the streaming space.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/kingsleycma" },
      { platform: "YouTube", url: "https://www.youtube.com/@kingsleycma" },
      { platform: "TikTok", url: "https://www.tiktok.com/@kingsleycma" },
      { platform: "Instagram", url: "https://www.instagram.com/kingsleycma/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "021",
    revealed: true,
    clearance: "CONFIRMED",
    name: "REMYB0YS",
    aliases: ["REMY", "REMYB0YS", "REMY BOYS", "REMYBOYS", "REMYBOY", "REMYB0Y"],
    role: "INMATE",
    image: remyb0ysAsset,
    bio: "Remyb0ys first gained attention through his dancing TikToks before moving into livestreaming. He now streams FIFA on Twitch alongside a variety of other content, continuing to build his audience across different platforms.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "022",
    revealed: true,
    clearance: "CONFIRMED",
    name: "BRITISHBOYCAM",
    aliases: ["BRITISH BOY CAM", "CAM", "BBC", "BOYCAM"],
    role: "INMATE",
    image: britishboycamAsset,
    bio: "BritishBoyCam is a streamer known for his variety of content, particularly his Just Chatting streams and girl-focused content. His streams are built around his personality and interactions with different guests and viewers.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "024",
    revealed: true,
    clearance: "CONFIRMED",
    name: "MALLYCLIPZ",
    aliases: ["MALLY", "MALLY CLIPZ", "MALLYCLIPS", "MALLY CLIPS"],
    role: "INMATE",
    image: mallyclipzAsset,
    bio: "Mallyclipz is a content creator known for sharing entertaining clips and social media content. He has developed his own identity within the online creator space and continues to grow his presence across digital platforms.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "025",
    revealed: true,
    clearance: "CONFIRMED",
    name: "SAMMYAMZ",
    aliases: ["SAMMY", "SAMMY AMZ"],
    role: "INMATE",
    image: sammyamzAsset,
    bio: "Sammyamz became widely known through the FaZe Subathon, before later moving over to Twitch. He is also known for his skits and personality-driven content, building an audience through his humour and entertaining style.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "026",
    revealed: true,
    clearance: "CONFIRMED",
    name: "JMARNZ",
    aliases: ["J MARNZ"],
    role: "INMATE",
    image: jmarnzAsset,
    bio: "Jmarnz previously built a large TikTok following of around 170K before being banned from the platform. He became known for going live and talking about relatable topics, and now streams on Twitch while continuing to post content across social media.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "027",
    revealed: true,
    clearance: "CONFIRMED",
    name: "MASTIEMPO01",
    aliases: ["MASTIEMPO", "TIEMPO"],
    role: "INMATE",
    image: mastiempoAsset,
    bio: "Mastiempo01 is an online creator who is also known for being a moderator for several creators and communities. Alongside supporting other creators, he has developed his own presence and continues to do his own content.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "028",
    revealed: true,
    clearance: "CONFIRMED",
    name: "J1GGZZ365",
    aliases: ["J1GGZZ", "JIGGZZ", "365"],
    role: "INMATE",
    image: j1ggzzAsset,
    bio: "J1ggzz365 is a South London streamer known for his 365 community and the creators around it. He has focused on growing 365 as a community while collaborating and building connections with other creators, including members such as KingsleyCMA.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "029",
    revealed: true,
    clearance: "CONFIRMED",
    name: "J4DENTV",
    aliases: ["J4DEN", "JADEN", "4TV"],
    role: "INMATE",
    image: j4dentvAsset,
    bio: "j4denTV is a British content creator from Nottingham known for livestreaming, gaming and social media content. He has built the 4TV community around his online presence and creates a mix of live streams, reactions and short-form content.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "030",
    revealed: true,
    clearance: "CONFIRMED",
    name: "YSABELLAGRACE",
    aliases: ["YSABELLA", "YSABELLA GRACE"],
    role: "GUIDANCE COUNSELOR",
    image: ysabellaAsset,
    bio: "YsabellaGrace is a female streamer and gamer known for her Just Chatting and gaming content. She was the first female streamer to take part in Streamer University, becoming part of the wider streaming community through her content and livestreams.",
    socials: [],
    status: "CONFIRMED — INSIDE",
  },
];


/** ---------------------------------------------------------------------
 * LIVE TRANSMISSIONS — empty until streams actually exist.
 * ------------------------------------------------------------------- */
export type Stream = {
  id: string;
  creator: string;
  platform: string;
  title: string;
  viewers?: number;
  url: string;
};

export const liveStreams: Stream[] = [];

/** ---------------------------------------------------------------------
 * TRAILER — no trailer released yet.
 * ------------------------------------------------------------------- */
export const trailer = {
  released: true,
  label: "TRANSMISSION 001",
  /** Official trailer — YouTube */
  url: "https://www.youtube.com/watch?v=QrnMwZ_7gSU",
  runtime: "CLASSIFIED",
};

/** ---------------------------------------------------------------------
 * BULLETIN — official announcements only.
 * ------------------------------------------------------------------- */
export type Bulletin = {
  id: string;
  code: string;
  date: string;
  title: string;
  body: string;
  status: "VERIFIED" | "PENDING";
};

export const bulletins: Bulletin[] = [
  {
    id: "b-001",
    code: "BULLETIN 001",
    date: "CLASSIFIED",
    title: "THE FACILITY IS ONLINE",
    body: "Prison Stream exists. The launch window is Autumn 2026. Everything else remains behind locked doors.",
    status: "VERIFIED",
  },
  {
    id: "b-002",
    code: "BULLETIN 002",
    date: "2026",
    title: "FIRST FILES DECLASSIFIED",
    body: "The first names are out. XKeonte, SebzOnAir and 4DidIt are confirmed inside. Transmission 001 is live. Every other file remains sealed until searched.",
    status: "VERIFIED",
  },
  {
    id: "b-003",
    code: "BULLETIN 003",
    date: "PENDING",
    title: "[REDACTED]",
    body: "[COMING SOON]",
    status: "PENDING",
  },
];


/** ---------------------------------------------------------------------
 * WHAT'S NEXT — nothing cleared for release yet.
 * ------------------------------------------------------------------- */
export type UpcomingItem = { id: string; label: string; when: string; kind: string };

export const upcoming: UpcomingItem[] = [];

/** ---------------------------------------------------------------------
 * SOCIALS — only real, official accounts. Empty until confirmed.
 * ------------------------------------------------------------------- */
export const officialSocials: SocialLink[] = [];
