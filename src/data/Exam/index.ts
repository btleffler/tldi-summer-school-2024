export type ExamEntry = {
  question: string,
  answer: string,
  altText: string,
};

export const ExamData: ExamEntry[] = [
  {
    // 0
    question: `What type of bridge allowed Darcy to travel through time?`,
    answer: `Darcy used an Einstein-Rosen Bridge to travel through time.`,
    altText: `Darcy entering her Einstein-Rosen Bridge`,
  },
  {
    // 1
    question: `What other horror movie besides "Donnie Darko" uses Loyola High School on Venice Boulevard as a principal location?`,
    answer: `The horror movie "Re-Animator" was also filmed at the Loyola High School on Venice Boulevard, Los Angeles.`,
    altText: `Joe Bob teaching the class`,
  },
  {
    // 2
    question: `Who did the marketing campaign for "Passion of the Christ"?`,
    answer: `Bob Berney did the marketing campaign for "Passion of the Christ".`,
    altText: `Bob Berney talking about to Joe Bob and Darcy about his career`,
  },
  {
    // 3
    question: `According to Darcy, which is the most difficult of the three types of sexual performance? Skinemax, Playboy, or Hustler?`,
    answer: `Darcy says that the most difficult sexual performance is Skinemax, but if you ask me, I don't think any of them would be "easy".`,
    altText: `Darcy talking about her career`,
  },
  {
    // 4
    question: `What actress raised the money to make "Suitable Flesh"?`,
    answer: `Barbara Crampton raised the money to make "Suitable Flesh" as a producer.`,
    altText: `Barbara Crampton in "Suitable Flesh"`,
  },
  {
    // 5
    question: `What Christmas movie refused to allow its music to be used in Suitable Flesh?`,
    answer: `The estate representing Bing Crosby and/or the movie "White Christmas" refused to allow "Suitable Flesh" to use its song "Sisters".`,
    altText: `Joe Lynch talking to the class about how he attempted to secure the rights to use the song "Sisters" from "White Christmas" in "Suitable Flesh"`,
  },
  {
    // 6
    question: `What hospital has a 5000% markup on generic Tylenol?`,
    answer: `The MD Anderson Cancer Center in Houston, Texas has a 5000% markup on generic Tylenol.`,
    altText: `Joe Bob teaching the class about medical billing`,
  },
  {
    // 7
    question: `"Dr. Giggles" director, Manny Coto, was always always described as "Cuban" but where did he actually come from?`,
    answer: `Manny Coto was born in Cuba, but grew up in Orlando, Florida during his formative childhood years.`,
    altText: `Joe Bob teaching the class about Manny Coto`,
  },
  {
    // 8
    question: `What heart condition did Jennifer have in "Dr. Giggles"?`,
    answer: `Jennifer had a heart condition called a mitral valve prolapse in "Dr. Giggles" where the flaps of the mitral valve bulge into the left atrium during a heartbeat.`,
    altText: `Jennifer undergoing her checkup in "Dr. Giggles"`,
  },
  {
    // 9
    question: `On what network, and what show, did "Joe Bob's Summer School" originate?`,
    answer: `"Joe Bob's Summer School" originated on TNT's MonsterVision.`,
    altText: `Joe Bob teaching the class`,
  },
  {
    // 10
    question: `Explain the importance of Grandma Death in "Donnie Darko": `,
    answer: `I believe Grandma Death is important to the story of "Donnie Darko" for a number of reasons.
    First, she is the author of the book "The Philosophy of Time Travel" which goes over many of the things that Donnie seems to experience throughout the movie.
    Second, she's just an interesting character a merit to the movie, and also adds to the mystery about what Donnie experiencing. Her appearance is strange, and her behavior is odd and often unpredictable. She's not antagonistic, but there is still something slightly chilling about her. At the same time, the name "Grandma" implies a kind of maternal characterization. She could possibly help Donnie if he can gather the courage to speak with her.
    Finally, she serves as a grim reminder that death comes for everyone, and that "everyone dies alone." Donnie is able to relate to that sentiment by remembering his dog that died after crawling into a secluded place to die. While this is meaningful to Donnie the character, the audience can see that Grandma Death looks to be close to being on deaths door, and is quite alone. Donnie's fate is also quite in line with this. He's alone at the end of the movie, as he realizes he has to sacrifice himself for the greater good of his friends and family, and dies alone in that knowledge.`,
    altText: `Grandma Death from "Donnie Darko"`,
  },
  {
    // 11
    question: `Speculate as to why director Joe Lynch changed the main characters in H.P. Lovecraft's story from male to female: `,
    answer: `H.P. Lovecraft's stories are celebrated, but they are also from a different era. Among other things, it was a very male dominated era for better or worse.
    In updating the story for our times, Joe Lynch changed the main characters from male to female. In Lynch's own words:
    "The only thing about the script that was a little bit like, 'I don't know if this would work for the times' was the fact that in the original Lovecraft story, it was two men... [My writing partner and I] came up with this idea. Why don't we switch the genders?"
    The entire movie plays off gender roles. The female doctor and the male patient. The male and female partner cops. Husband and wife. I believe that by flipping the gender of the main characters, Lynch not only flipped the roles on their head, but he also brought more focus to those roles and their importance to the story.`,
    altText: `Joe Lynch discussing his decision with the class`,
  },
  {
    // 12
    question: `Expound on the topic of whether you think it's possible to have any sympathy at all for Larry Drake's character in "Dr. Giggles" because of his twisted childhood: `,
    answer: `I don't believe it's possible to be sympathetic for Drake's character in "Dr. Giggles".
    His introduction was him killing someone and making jokes about it. From the viewer's perspective at that moment in the film, the victim did nothing wrong. It's typical in slashers to have the victims to have some character flaw or to be engaging in morally ambiguous activities to kind of make them "deserve" their fate. While it is implied a little later that this person had an improper relationship with one of his subordinates, it's not definite, and it's only revealed as another joke. In my opinion, it's extremely hard to redeem a character after they do something like that.
    Throughout the movie there were attempts to paint his childhood as traumatic or troubled by inserting flashbacks where his father would abuse him, but the very first thing we see him doing as a child is cutting open and stitching his toys together. This is NOT normal behavior for a child. Even if he wants to be a doctor when he grows up. It is clear that the character is already completely disturbed by the earliest point in the characters life that we see as an audience.
    There is a very memorable flashback of Drake's character as a child being subjected to a 'reverse c-section' which I believe is meant to cement the reason for their mental state as an adult, but the overall tone and ridiculousness of the scene undermines any sympathy I might begin to have for them.
    Finally, the adult version of Drake's character is very one dimensional. He makes medical puns while murdering people who are more or less completely innocent. Even though there are bits and pieces of their backstory sprinkled throughout the film in order to paint their childhood as traumatic, I don't believe there is anything left for the audience to sympathize with.`,
    altText: `Larry Drake's character from "Dr. Giggles"`,
  }
];

const RESPONSE_EMAIL = 'joebobexam@gmail.com';
