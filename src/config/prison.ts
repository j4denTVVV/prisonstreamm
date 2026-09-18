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
import hassynainAsset from "@/assets/hassynain.png";
import xandeptAsset from "@/assets/xandept.png";
import sebzAsset from "@/assets/sebzonair.jpg";
import amiriAsset from "@/assets/4didit-group.png";
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
import j4dentvAsset from "@/assets/j4dentv.jpg";
import ysabellaAsset from "@/assets/ysabellagrace.png";
import smoothboimoAsset from "@/assets/smoothboimo.png";
import goobAsset from "@/assets/goob.png";
import starTejalAsset from "@/assets/star_tejal.png";
import yodeangeloAsset from "@/assets/yodeangelo.png";
import gracieAsset from "@/assets/gracie.png";
import lunamichelle2Asset from "@/assets/lunamichelle2.png";
import moalshemeriAsset from "@/assets/moalshemeri.png";
import tigzAsset from "@/assets/tigz.png";
import queentayxAsset from "@/assets/queentayx.png";
import lilaAsset from "@/assets/lila.png";

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
    bio: "4DidIt is a British group made up of four creators, including AmirIDidIt. Known for their entertaining content and social media presence, the group has built its identity through engaging with their audience, collaborating with other creators and sharing entertaining moments across social platforms.",
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
    file: "023",
    revealed: true,
    clearance: "CONFIRMED",
    name: "LILA",
    aliases: ["LILA SENAINI", "LILASENAINI"],
    role: "INMATE",
    image: lilaAsset,
    bio: "Lila is a digital creator and online personality known for her presence across social media. Her content is built around her personality and connecting with her audience as she continues to grow within the creator space.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/lila.senaini/" },
    ],
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
    socials: [{ platform: "Twitch", url: "https://www.twitch.tv/sammyamz" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "026",
    revealed: true,
    clearance: "CONFIRMED",
    name: "JMARNZ",
    aliases: ["J MARNZ", "JMARNZ", "REALJMARNZ", "REAL JMARNZ", "MARNZ"],
    role: "INMATE",
    image: jmarnzAsset,
    bio: "Jmarnz previously built a large TikTok following of around 170K before being banned from the platform. He became known for going live and talking about relatable topics, and now streams on Twitch while continuing to post content across social media.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/realjmarnz" },
      { platform: "TikTok", url: "https://www.tiktok.com/@realjmarnz" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "027",
    revealed: true,
    clearance: "CONFIRMED",
    name: "MASTIEMPO01",
    aliases: ["MASTIEMPO", "TIEMPO", "MAS TIEMPO", "MASTIEMPO 01"],
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
    aliases: ["J1GGZZ", "JIGGZZ", "365", "JIGGZ", "JIGGZ365", "JIGGZZ365", "J1GGZ", "J1GGZ365"],
    role: "INMATE",
    image: j1ggzzAsset,
    bio: "J1ggzz365 is a South London streamer known for his 365 community and the creators around it. He has focused on growing 365 as a community while collaborating and building connections with other creators, including members such as KingsleyCMA.",
    socials: [{ platform: "Twitch", url: "https://www.twitch.tv/j1ggzz365" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "029",
    revealed: true,
    clearance: "CONFIRMED",
    name: "J4DENTV",
    aliases: ["J4DEN", "JADEN", "4TV", "JADENTV", "J4DEN TV"],
    role: "INMATE",
    image: j4dentvAsset,
    bio: "j4denTV is a British content creator from Nottingham known for livestreaming, gaming and social media content. He has built the 4TV community around his online presence and creates a mix of live streams, reactions and short-form content.",
    socials: [
      { platform: "TikTok", url: "https://www.tiktok.com/@wrldofj4den" },
      { platform: "Linktree", url: "https://linktr.ee/j4dentv" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "030",
    revealed: true,
    clearance: "CONFIRMED",
    name: "YSABELLAGRACE",
    aliases: ["YSABELLA", "YSABELLA GRACE", "ISABELLA", "ISABELLAGRACE", "GRACE"],
    role: "GUIDANCE COUNSELOR",
    image: ysabellaAsset,
    bio: "YsabellaGrace is a female streamer and gamer known for her Just Chatting and gaming content. She was the first female streamer to take part in Streamer University, becoming part of the wider streaming community through her content and livestreams.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/ysabellagrace" },
      { platform: "Instagram", url: "https://www.instagram.com/ysabellagrace_" },
      { platform: "TikTok", url: "https://www.tiktok.com/@ysabellagrace_" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "031",
    revealed: true,
    clearance: "CONFIRMED",
    name: "SMOOTHBOIMO",
    aliases: ["SMOOTHBOIMO_", "SMOOTHBOYMO", "SMOOTH BOI MO", "MO"],
    role: "INMATE",
    image: smoothboimoAsset,
    bio: "smoothboimo is a content creator and online personality known for his social media presence and entertaining content. He has built his own identity online through his personality and connection with his audience.",
    socials: [{ platform: "Twitch", url: "https://www.twitch.tv/smoothboimo_" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "033",
    revealed: true,
    clearance: "CONFIRMED",
    name: "GOOB",
    aliases: ["NOSTYLISTJETLGGD", "JETLGGD", "GOOBY"],
    role: "INMATE",
    image: goobAsset,
    bio: "goob is an online creator and personality known for his entertaining social media presence. His content is centred around his personality and interactions with his audience, helping him build recognition within the creator space.",
    socials: [{ platform: "TikTok", url: "https://www.tiktok.com/@nostylistjetlggd" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "034",
    revealed: true,
    clearance: "CONFIRMED",
    name: "STAR_TEJAL",
    aliases: ["STAR TEJAL", "STARTEJAL", "TEJAL", "STAR_TEJALXX", "STARTEJALXX"],
    role: "INMATE",
    image: starTejalAsset,
    bio: "Star_tejal is a digital creator and social media personality who has built an online presence through entertaining and personality-led content. Her individuality and online interactions have helped her develop a growing audience.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/star_tejalxx" },
      { platform: "TikTok", url: "https://www.tiktok.com/@star_tejalxx" },
      { platform: "Twitch", url: "https://www.twitch.tv/star_tejalxx" },
      { platform: "X", url: "https://x.com/star_tejalxx" },
      { platform: "Snapchat", url: "https://www.snapchat.com/add/star_tejalxx" },
      { platform: "Linktree", url: "https://linktr.ee/star_tejalxx" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "035",
    revealed: true,
    clearance: "CONFIRMED",
    name: "YODEANGELO",
    aliases: ["YO DEANGELO", "DEANGELO", "IMDEANGELO", "YODEANGELO_"],
    role: "INMATE",
    image: yodeangeloAsset,
    bio: "YoDeangelo is a London-based British streamer and content creator who built a following of over 300,000 on TikTok, mainly through livestream clips, challenges, reactions and dance content. He later moved further into livestreaming, playing games such as Fortnite and GTA while also doing Just Chatting streams. In 2026, he appeared in a Sidemen video, where his humour and personality stood out and brought him even more attention.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/YoDeangelo" },
      { platform: "Instagram", url: "https://www.instagram.com/yodeangelo_" },
      { platform: "Discord", url: "https://discord.gg/FSncbv4rvP" },
      { platform: "Linktree", url: "https://linktr.ee/imdeangelo" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "036",
    revealed: true,
    clearance: "CONFIRMED",
    name: "GRACIE",
    aliases: ["THYFAWN", "GRACIE"],
    role: "INMATE",
    image: gracieAsset,
    bio: "gracie is a digital creator and online personality who has developed her presence through social media and entertainment. Her content is driven by her personality and creativity, helping her build her own identity and audience online.",
    socials: [{ platform: "Instagram", url: "https://www.instagram.com/thyfawn/" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "016",
    revealed: true,
    clearance: "CONFIRMED",
    name: "LUNAMICHELLE",
    aliases: ["LUNA", "LUNAMICHELLE"],
    role: "INMATE",
    image: lunamichelle2Asset,
    bio: "LunaMichelle is a digital creator and online personality known for her presence across social media and livestreaming. Her content focuses on entertainment, personality and connecting with her audience, while she continues to develop her own identity within the creator space.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/lunamichelleeee/" },
      { platform: "Twitch", url: "https://www.twitch.tv/itslunamichelle" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "017",
    revealed: true,
    clearance: "CONFIRMED",
    name: "MOALSHEMERI",
    aliases: ["MO", "MOALSHEMERI"],
    role: "INMATE",
    image: moalshemeriAsset,
    bio: "MoAlshemeri is an online creator and personality who has built his presence through social media and digital entertainment. His content is centred around his personality and interactions with his audience, helping him establish his own identity online.",
    socials: [
      { platform: "TikTok", url: "https://www.tiktok.com/@moalshameri" },
      { platform: "Instagram", url: "https://www.instagram.com/moalshameri" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "018",
    revealed: true,
    clearance: "CONFIRMED",
    name: "TIGZ",
    aliases: ["TIGS", "TIGZ"],
    role: "INMATE",
    image: tigzAsset,
    bio: "TigZ is a British Twitch streamer from the West Midlands known for gaming content, particularly Escape from Tarkov and other extraction shooters. He has been streaming since 2019 and has built a dedicated community around his gaming content.",
    socials: [{ platform: "Twitch", url: "https://www.twitch.tv/tigz" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "019",
    revealed: true,
    clearance: "CONFIRMED",
    name: "QUEENTAYX",
    aliases: ["QUEENTAY", "TAY", "QUEENTAYX"],
    role: "INMATE",
    image: queentayxAsset,
    bio: "Queentayx is a streamer and digital creator known for her personality-driven content and livestreams. She has built an online community through her streams and social media, creating content focused on entertainment and interaction with her audience.",
    socials: [{ platform: "Twitch", url: "https://www.twitch.tv/queentayx" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "037",
    revealed: true,
    clearance: "CONFIRMED",
    name: "XANDE",
    aliases: ["XANDE", "XANDEPT", "XANDE.PT"],
    role: "INMATE",
    image: xandeptAsset,
    bio: "Xande is an online creator known through his site xande.pt — News & Stuff. More details coming soon.",
    socials: [{ platform: "Website", url: "https://xande.pt" }],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "038",
    revealed: true,
    clearance: "CONFIRMED",
    name: "HASSYNAIN",
    aliases: ["HASSY", "HASSYNAIN"],
    role: "INMATE",
    image: hassynainAsset,
    bio: "Hassynain is an online creator and personality active across TikTok, Instagram, YouTube, X, Snapchat and Twitch.",
    socials: [
      { platform: "TikTok", url: "https://www.tiktok.com/@hassynain" },
      { platform: "Snapchat", url: "https://www.snapchat.com/@hassynain" },
      { platform: "Instagram", url: "https://www.instagram.com/hassynain" },
      { platform: "X", url: "https://x.com/hassynain" },
      { platform: "YouTube", url: "https://www.youtube.com/@Hassynain" },
      { platform: "Twitch", url: "https://www.twitch.tv/hasynain" },
      { platform: "Discord", url: "https://discord.com/invite/2j3zM4KGv" },
    ],
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
