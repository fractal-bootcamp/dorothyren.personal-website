
import { Link } from '@remix-run/react';
import React from 'react';

interface Article {
    title: string;
    description?: string;
    url: string;
}

const articleLinks: Article[] = [
    {
        title: "5 Lessons on Life from Zen Buddhist Master Shunryu Suzuki",
        description: "Empty your mind, work on yourself first, you yourself make the waves in your mind, real calmness is found in activity, the struggle itself gives you meaning.",
        url: "https://gainweightjournal.com/five-lessons-on-life-from-zen-buddhist-master-shunryu-suzuki/"
    },
    {
        title: "Luck Razor",
        description: "If all other factors are equal, choose the path that feels the luckiest.",
        url: "https://theprofile.substack.com/p/3-ways-to-attract-more-luck-into"
    },
    {
        title: "Charlie Munger's 7 Iron Laws",
        description: "1. Avoid sloth and unreliability 2. Incentives are a superpower 3. Be careful with your identity 4. Steelman arguments 5. Be worthy of a worthy mate 6. Dunning-Kruger effect is easier to see in others 7. Where is the opportunity for you to learn braille?",
        url: "https://twitter.com/george__mack/status/1125489975011762179"
    },
    {
        title: "SAT Post About Food Healing Generational Gaps",
        description: "Parents are imperfect beings and Asian parents are childlike in their ability to hold conversations around certain topics like mental health. It is my job to teach them as well.",
        url: "https://www.facebook.com/groups/1343933772408499/permalink/2570682753066922/?__tn__=K-R"
    },
    {
        title: "Craft is Culture",
        description: "the cost of finding and engaging in your craft of choice has gone to zero, thanks to the internet. You can learn anything on Youtube. You can find any subculture of people, interested in the same minute set of interests, on Twitter. As this happens, people are waking up to the idea that mastering a craft is how you find professional and personal fulfillment. This creates an irresistible draw: people want to go where their craft is celebrated, just like you’re drawn to where your culture is celebrated.",
        url: "https://alexdanco.com/2020/06/26/craft-is-culture/"
    },
    {
        title: "Even if You Beat Me - Sally Rooney",
        description: "The most ambitious debaters go out of their way to absorb information about sexual violence, racial profiling, police brutality: issues many of them will never experience firsthand. I did the same thing. Did it make me more empathetic and self-aware? Or did it just continue to affirm the idea that if I were smart and competitive enough, I could speak for anyone I wanted? … I no longer found it fun to think of ways in which capitalism benefits the poor, or things oppressed people should do about their oppression. Actually I found it depressing and vaguely immoral.",
        url: "https://thedublinreview.com/article/even-if-you-beat-me/"
    },
    {
        title: "W.E.B. Dubois Letter to His Teen Daughter",
        description: "You, however, must not laugh at yourself…The main thing is the YOU beneath the clothes and skin — the ability to do, the will to conquer, the determination to understand and know this great, wonderful, curious world. Don't shrink from new experiences and custom. Take the cold bath bravely…Take yourself in hand and master yourself. Make yourself do unpleasant things, so as to gain the upper hand of your soul.",
        url: "https://www.brainpickings.org/2016/02/23/w-e-b-du-bois-yolande-letter/"
    },
    {
        title: "Mellody Hobson's Letter to Her Young Daughter",
        description: "First, Du Bois says, 'Be honest, frank and fearless.' I will expect you to be honest; I will hope for your frankness; and I will encourage you at every turn to be fearless. As you know, although you are only three, I often tell you to be 'be brave.' I emphasize bravery because I have seen crippling fear cause so many people to give up on the lives and loves that they want. Here is the thing to know; everyone feels fear—and you cannot be brave without it. So when the fear comes, dig deep inside and trust yourself...With all of this opportunity comes my expectation that you will be grateful, kind, generous, compassionate and embrace all of mankind. Just as I will tell you that you can do or be anything, I will expect you to believe the same is true of anyone and everyone.",
        url: "https://leadersanddaughters.com/2017/03/06/ariels-mellody-hobson-lessons-from-w-e-b-du-bois"
    },
    {
        title: "Kimi Werner's Trip to Antarctica",
        description: "When I blame others it's because I recognize qualities in them that I feel in myself and it's easier to try and change them than change myself.",
        url: "http://www.kimiwerner.com/blog/expedition-to-antarctica-chapter-2"
    },
    {
        title: "Bits of unsolicited advice",
        description: "from a guy who turned 68 - treating a person to a meal never fails, there is no “them”, almost anything money can do friends can do better, own and take personal responsibility for the mistakes I’ve made. The universe is conspiring behind your back to make you a success. ",
        url: "https://www.youtube.com/watch?v=Zz70rcguxwk&feature=youtu.be"
    },
    {
        title: "Choose Wonder",
        description: "What is the point of being perpetually unimpressed?",
        url: "https://semi-rad.com/2019/11/choose-wonder/"
    },
    {
        title: "Kinda sorta marriage tips?",
        description: "I think lots of people end their relationships because they lack the will or the ability to modify their own behavior. It is easier to start over with someone else than to do the tedious, uncomfortable work of adjusting for each other.",
        url: "http://www.visakanv.com/blog/relationships/"
    },
    {
        title: "How to Think About a Career",
        description: "My own psyche seems to back this up—looking back on my path so far, the mistakes that bother me most are the ones that happened because someone else took the wheel of my head and overruled the quiet, insecure voice of my authentic self—the mistakes that I knew at the time, deep down, were wrong. My goal for the future isn't to avoid mistakes, it's for the mistakes I do make to be my own.",
        url: "https://waitbutwhy.com/2018/04/picking-career.html"
    },
    {
        title: "Are You Happy Where You Are, REALLY",
        description: "Tell yourself the truth, if you really wanted to improve your life, you wouldn't have a problem finding the discipline. Discipline will find you. If you tell yourself the truth, then you fill find discipline, the framework of discipline is the truth. I know I can do more, I know I can be more. The truth eats me up - ask the question. If I tell myself the unmerciful truth, I will find discipline. Discipline is freedom, discipline is rooted in the truth. The truth will set you free.",
        url: "https://www.youtube.com/watch?v=Xtq6NedDDjY"
    },
    {
        title: "Pride is Not the Opposite of Shame",
        description: "I must let go of my feelings of shame in order to let the anger go away. Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.",
        url: "https://www.youtube.com/watch?v=89rKnkNDKdM&feature=emb_title"
    },
    {
        title: "Perhaps the world ends here",
        description: "In my first semi-permanent home, I will invest in a comfortable dining set that accommodates all things.  ",
        url: "https://www.poetryfoundation.org/poems/49622/perhaps-the-world-ends-here"
    },
    {
        title: "‘Forgive me, but it’s hard to be a human’ and 'she lived as though the truth were true’",
        description: "As a teacher, Tommy devoted great time to teaching his section of the class — working on his astonishing lectures and jokes, and meeting endlessly with his dozen students on Zoom, finding what was precious in their work and teasing it out. He loved his students and they loved him back. Not content with giving half of his teaching salary away to save people with malaria by purchasing mosquito nets with global charities, when the semester was over and after his grades were in and the student evaluations were complete, he made individual donations in each of his students’ names to Oxfam, GiveDirectly and other groups targeting global hunger. When I asked him why he did this, he quoted something that he loved which Father Daniel Berrigan said about Dorothy Day: ‘she lived as though the truth were true.’ Tommy said: ‘I wanted them to see that the truth is true.’",
        url: "https://repraskin.medium.com/statement-of-congressman-jamie-raskin-and-sarah-bloom-raskin-on-the-remarkable-life-of-tommy-raskin-f93b0bb5d184"
    },
    {
        title: "Write Like a Motherfucker",
        description: "How many women wrote beautiful novels and stories and poems and essays and plays and scripts and songs in spite of all the crap they endured. How many of them didn't collapse in a heap of 'I could have been better than this' and instead went right ahead and became better than anyone would have predicted or allowed them to be. The unifying theme is resilience and faith. The unifying theme is being a warrior and a motherfucker. It is not fragility. It's strength. It's nerve. And 'if your Nerve, deny you –,' as Emily Dickinson wrote, 'go above your Nerve.' Writing is hard for every last one of us—straight white men included. Coal mining is harder. Do you think miners stand around all day talking about how hard it is to mine for coal? They do not. They simply dig.",
        url: "https://therumpus.net/2010/08/dear-sugar-the-rumpus-advice-column-48-write-like-a-motherfucker/"
    },
    {
        title: "A Life Worthy of Our Breath",
        description: "But even when you came here — and this is about the immigrant experience, but it's also about being Vietnamese — your mother would say to you, 'Remember, child — don't get noticed. You're already Vietnamese...And I think that's the great crisis of the first and second generation: the first generation made it here, and to live at all is such a privilege that they're happy, and even encourage you to put your head down, work, fade away, get your meals, and live a quiet life. And I think the second generation, the great conundrum there, the great paradox, is that they want to be seen. They want to make something. And what a better way to make something and fill yourself with agency than to be an artist? So: so many of us immigrant children end up betraying our parents in order to subversively achieve our parents' dreams.",
        url: "https://onbeing.org/programs/ocean-vuong-a-life-worthy-of-our-breath/"
    },
    {
        title: "You Must Trust That You Being the Best Possible You Matters Somehow",
        description: "All you can do is face the world with quiet grace and hope you make a sliver of difference. Humility does not mean self-abnegation, lassitude, detachment; it's more calm recognition that you must trust in that which does not make sense, that which is unreasonable, illogical, silly, ridiculous, crazy by the measure of most of our culture. You must trust the you being the best possible you matters somehow. That trying to be an honest and tender parent will echo for centuries through your tribe. That doing your chosen work with creativity and diligence will shiver people far beyond your ken. That being an attentive and generous friend and citizen will prevent a thread or two of the social fabric from unraveling. And you must do all of this with the certain knowledge that you will never get proper credit for it, and in fact the vast majority of things you do right will go utterly unremarked.",
        url: "https://www.mavismoon.com/blog/2020/07/one-long-river-of-song-notes-on-wonder.html"
    },
    {
        title: "Blessing for the Brokenhearted",
        description: "As if it trusts that its own persistent pulse is the rhythm of a blessing we cannot begin to fathom but will save us nonetheless. A tender surrender to the toughness of the precious heart who doesn't know what hit it, but is determined to keep doing what it does best: beating.",
        url: "https://verse.press/poem/blessing-for-the-brokenhearted-6973785118333689337"
    },
    {
        title: "Gap Between Having Good Taste and Your Own Ability",
        description: "Your taste is killer and you can tell that what you're making is a disappointment to you - you can tell it's crappy. A lot of people quit at this point. Most everybody who does interesting creative work, has a phase of years where they feel short, and you keep doing the work - put yourself on a deadline - you create a deadline.",
        url: "https://www.youtube.com/watch?v=X2wLP0izeJE"
    },
    {
        title: "Fart Proudly and On Choosing a Mistress",
        description: "Sometimes satirical letters by Ben Franklin about the whimsies of life.",
        url: "https://www.drjkoch.org/Misc/Franklin.pdf"
    },
    {
        title: "Breakdown of Ali Wong's Baby Cobra",
        description: "Why she was able to provide a laughter climax.",
        url: "https://pudding.cool/2018/02/stand-up/"
    },
    {
        title: "Case for Bad Coffee",
        description: "Because memories are rarely built around grabbing a cup of the finest coffee Brooklyn or Manhattan has to offer.",
        url: "https://www.seriouseats.com/the-case-for-bad-coffee"
    },
    {
        title: "Basic Needs - Extreme Happiness",
        description: "Because anyone who doesn't laugh at this is so so dead inside and probably needs an injection of warm puppy/kitten hugs, stat.",
        url: "https://www.youtube.com/watch?v=vC8gJ0_9o4M&feature=youtu.be&t=52s"
    }
];

const ContentCollection: React.FC = () => {
    return (<>
        <div className="p-4">
            <h2 className="text-xl mb-4">Writing by others that have shaped me</h2>
            <ul className="justify-content:flex-start flex-wrap:wrap grid grid-cols-2 gap-8 p-4 max-w-full md:max-w-full ">
                {articleLinks.map((articleLink: Article, index) => (
                    <li key={index} className="border p-6 rounded-md bg-gray-50 hover:bg-amber-100">
                        <Link to={articleLink.url} className="text-gray-800 underline">
                            {articleLink.title}
                        </Link>
                        <p className="mt-2">{articleLink.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
};

export default ContentCollection;
