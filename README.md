## APPreciate

## This is an unmaintained repository deployed with netlify on the client and pythonanywhere on the server

[Link](apppreciate.netlify.app/)

[Devpost Link](https://devpost.com/software/appreciation)

![Homepage](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/798/datas/gallery.jpg)

![Sign In Form](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/799/datas/gallery.jpg)

![Sign Up Form](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/800/datas/gallery.jpg)

![Business Finder](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/809/datas/gallery.jpg)

![Restaurant Modal](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/810/datas/gallery.jpg)

![Sending a Note Screen](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/807/datas/gallery.jpg)

![Submission Screen](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/847/datas/gallery.jpg)

![Dashboard](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/468/846/datas/gallery.jpg)

## Inspiration

As high-school seniors during the COVID-19 pandemic, we were able to witness firsthand the damage: beyond just shutting down all schools and workplaces (or resulting in the rather concerning widespread unavailability of toilet paper), COVID-19 forced local businesses to close, eventually putting over 80% into financial difficulties. To compensate, business owners desperately attempted a variety of measures, such as takeout, outdoor dining, and lower prices, but to no avail - approximately 30% of all small businesses have shut down already, as a result of COVID-19.

By the sole virtue of their existence, pandemics and small businesses - or any other business, for the matter - do not get along well. Small businesses rely on drawing the attention of the passerby, who may exhibit interest based on the bustling crowd inside. However, in the context of a pandemic, business is slow, and small businesses were forced to adjust to slow business.

## What it does

To resolve this issue, we built a React-based web app that provided users with a wide variety of data regarding local businesses. By replicating the functionality of a search engine, we displayed 50 local restaurants per user query, allowing the user to select (and save) as many as they wished.

However, APPreciation is different because we don't just present the users with a list of restaurants. We have an additional option, with which users can send custom appreciative messages to restaurants using the Twilio API (existing in the codebase, but disabled for judging purposes), appreciating the work that these essential workers put in. In fact, we urge users to use this, as demonstrated by the statistics we track - users consistently are incentivized to write more notes and spread positivity!

## Challenges we ran into

As relatively new programmers, one large challenge we faced was time management. In the case of this hackathon, we had 48 hours, which at first felt like a lot of time - we really had to struggle to stay focused and lock in on the work we had to do. However, as time passed, we decided to compromise on features and focusing on the MVP.

In terms of technical challenges, this was our first time working with both a client-side and server-side application: we had a high-level understanding of the overall architecture, but working on the actual code to integrate both aspects was challenging. Similarly, we struggled with using async/await functions in JS, but eventually worked it out.

## What we learned

Without a doubt, one of the most important skills we learned (and are proud of) was attention to detail. Although we've learned about this in prior hackathons, attention to detail was super important in this one because we had a lot of moving parts. We often had to edit 2 or 3 files at the same time, and we eventually learned how to maintain a mental list of future changes.

Additionally, we often had to make changes to the database schema on the move, and every change to the schema required changes to the app too. Making these changes required an in-depth understanding of the code, and we're proud of the fact that we were able to bring such an intricate idea to life in minimal time!

## What's next for APPreciation

Since the success of APPreciation depends on its users, we plan on concentrating our efforts on advertising to others. As we get a larger userbase, we'll be able to better achieve our mission of recognizing small businesses for the work they put in!

That's not to say that no new features are coming: we plan on implementing NLP classifiers for speech tone (which will be reported on the user's dashboard), visually displaying user activity over time (similar to what GitHub does with user commit history), and filters to make it easier for the user to search for restaurants. Stay tuned for updates!
