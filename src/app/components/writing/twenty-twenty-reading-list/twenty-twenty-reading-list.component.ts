import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twenty-twenty-reading-list',
  templateUrl: './twenty-twenty-reading-list.component.html',
  styleUrls: ['./twenty-twenty-reading-list.component.scss']
})
export class TwentyTwentyReadingListComponent implements OnInit {
  books;
  constructor() { }

  ngOnInit(): void {
    this.books = [
      {
        "title": "Zen and the Art of Motorcycle Maintenance",
        "author": "Robert M. Pirsig",
        "wir": "Originally gifted to me in college by my Uncle who has been a long-time supporter of my reading. The recommendation was almost magically validated by a mention in Cloud Atlas Part 3, which I was reading at the time he gifted it to me.",
        "score": "7/10",
        "myThoughts": "This book provides an amazing look at some deeper questions and philosophies for life. It gave me some amazing context through its lense of classically minded vs romantically minded people. I docked a few points because the main character can be a bit self-fellating in his rhetoric. Overall, a combination of taking me so many years to finish and Pirsig's afterward and explaining his inspiration for the story had me tearing up.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/zen-and-the-art-of-motorcycle-maintenance.jpg"
      },
      {
        "title": "How to Heal a Broken Heart in 30 Days",
        "author": "Howard Bronson and Mike Riley",
        "wir": "Common knowledge to my friends and family, I went through a pretty tough breakup this year. In the beginning I was willing to shotgun consume any content that would help and this book was on some recommended reading list.",
        "score": "❤️❤️❤️❤️",
        "myThoughts": "It's not a cure all and I certainly needed more than 30 days, but this book has some excellent advice -- some of which I still use nearly a year later. Having a daily objective to look foward to was an excellent goal based approach to keep me going through the worst of it.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/how-to-heal-a-broken-heart.jpg"
      },
      {
        "title": "The 5 Second Rule",
        "author": "Mel Robbins",
        "wir": "At the time I felt desperate for self improvement. I felt like a failure and was taunted by the desire to have a magical solution that could help me get what I want.",
        "score": "4 out of 7.5 hours wasted",
        "myThoughts": "I found this book insanely annoying. The author goes on and on about how her life was in shambles and then gushes about how she turned it all around. Followed by a bunch of success stories from people the rule worked for. I can grant that it's useful procedure for some, but the message amounts to the Nike slogan of \"Just Do It.\" Looking at the positives: 1) Her husbands name is Christopher Robbins which is just close enough to be amusing. 2) I used the 5 second rule to decide to stop reading the book.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/the-five-second-rule.jpg"
      },
      {
        "title": "Attached",
        "author": "Amir Levine, M.D. and Rachel S.F. Heller, M.A.",
        "wir": "Because of the afore mentioned breakup, I had a lot of questions. I logically understood the situation but emotionally did not want to accept reality. This book was an attempt at understanding emotional attachment from a rational perspective.",
        "score": "👶 ➡️ 👨",
        "myThoughts": "Initially, it felt like this book made a lot of sense. But after giving it some time, I feel like it falls into a similar camp of the Meyers-Briggs or Enneagram of Personality. It seems like a potentially useful tool for psychotherapists but I'm hesitant to self-assign labels. I don't want to feel like one attachment style defines me and inhibit my own personal development. As far as theories go, it at least seemed well founded.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/attached.jpg"
      },
      {
        "title": "The Tao of Pooh",
        "author": "Benjamin Hoff",
        "wir": "I had seen this book on my friend's coffee table, and I felt like it was an appropriate fit to go with my self exploration and meditation.",
        "score": "🍯🍯🍯🍯🍯🍯🍯🍯🍯🍯",
        "myThoughts": "An amazing look at how Winnie the Pooh is the ideal Taoist. Even reading 5 pages of this book filled me with calm. I will probably read it again in the future to remind myself of the Dào. It ends at the Enchanted Place at the top of the forest. \"To get there, just take the path to Nothing and go Nowhere until you reach it. Because the Enchanted Place is right where you are, and if you're Friendly With Bears, you can find it.\"",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/the-tao-of-pooh.jpg"
      },
      {
        "title": "All Systems Red",
        "author": "Martha Wells",
        "wir": "I was staying at one of my best friend's place for work and he let me borrow it.",
        "score": "Two thumbs up, but they are pointing at me because I finished the book.",
        "myThoughts": "It was a short page turner so I didn't mind it too much. The action was decent, but I felt like they spent too much time describing characters I'll never see again. I will probably not be continuing my emersion into the Murderbot universe.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/all-systems-red.jpg"
      },
      {
        "title": "The Seven Principles for Making Marriage Work",
        "author": "John M. Gottman, Ph.D",
        "wir": "After two failed long-term relationships I felt it was time to get to the bottom of why I'm so gosh dang bad at them. This one was on Mark Manson's top 5 relationship books list.",
        "score": "\"You'll get 'em next time sport\"",
        "myThoughts": "This book described my relationships to the 'T' in the 'Predicting Divorce' section. It provided useful insight into conflict resolution, communication, and values. It's an excellent workbook with scientific studies to back it up.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/seven-principles-for-making-marriage-work.jpg"
      },
      {
        "title": "Mistborn the Final Empire",
        "author": "Brandon Sanderson",
        "wir": "I was recommended this book along with The Night Circus (which was phenomenal!) while drunk on scotch at a best friend's wedding.",
        "score": "🔥🔥🔥",
        "myThoughts": "What a wild ride of pure fantasy enjoyment and adrenaline. All of the characters are great, and the \"magical\" system is consistent. I'd recommend going into it as blind as I was, no complaints.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/mistborn-the-final-empire.jpg"
      },
      {
        "title": "Mistborn the Well of Ascension",
        "author": "Brandon Sanderson",
        "wir": "The first book was so good, I went back for more.",
        "score": "🔥🔥",
        "myThoughts": "The second book felt a bit more like a coming of age story. It was still an exciting tale with an insanely powerful female lead. However, it added some traits to the main character that were perhaps too realistic for a fictional universe and felt a bit sexist instead. Downgrading the score just a bit from the first.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/mistborn-the-well-of-ascension.jpg"
      },
      {
        "title": "Ford County",
        "author": "John Grisham",
        "wir": "One of my favorite neighbors was reading it on his porch and let me borrow it.",
        "score": "1 \"New Magnolia\" Mississippi State Flag (may it pass legislative approval)",
        "myThoughts": "First and foremost this collection of short stories reads like an airport page turner. However, I have continuously been impressed at how well Grisham is able to connect me with characters in a mere 50 pages per short story. He keeps the character list simple and paints scenes really well.",
        "cover": "app/components/writing/twenty-twenty-reading-list/bookCovers/ford-county.jpg"
      }
    ]
  }

}
