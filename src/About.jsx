export default function About() {
    return (
        <div className="flex body p-4">
            <div className="sidebar flex flex-col basis-1/3 border-r-2 border-e-sky-600 text-right pr-2">
                <a href="#devsite"><b>2026</b> - DevSite and Midlothian Meeples</a>
                <a href="#top"><b>2026</b> - The Odin Project</a>
                <a href="#family"><b>2020</b> - Family Caregiver</a>
            </div>
            <div className="font-Roboto p-4 mx-auto basis-3/4 about-container">
                    <section id="devsite">
                        <span className="text-2xl body-heading font-bold">DevSite and Midlothian Meeples</span>
                        <p>
                            After finishing my training I decided to put the new things I'd learned into practice. This began with this site you see here! I made the decision that it was important to get this site live and available as soon as possible, so I made the first few pages and put some content on them and then put it live. Using Vercel for the first time and hosting the file on my GitHub made the process seamless and intuitive.
                        </p>
                        <p>
                            After this site was up and running I shipped my first app! It's a small app called "Midlothian Meeples" and it's exclusively available on the web. This site is designed to allow people to sign up to a weekly board game event I attend, up to this point we were using a group chat to organize who was bringing what game and who was playing which game. This got confusing fast as people didn't know what games had space, and people couldn't easily find which games were being played in order to look them up to see if they'd enjoy them. I attempted to fix all of these problems in my app. It interfaces with a database I created on Supabase which stores all the information about who is attending, what games they are bringing, who will be hosting the game (sometimes someone brings a game and others play it) and who wants to play that game, as well as link to BoardGameGeek where people can read more about the game. This site is in constant development as more features are requested by the users and as I see opportunies to improve the user experience. These sites both went live in July 2026.
                        </p>
                    </section>
                    <section id="top">
                        <span className="text-2xl body-heading font-bold">2026 - The Odin Project</span>
                        <p>
                            In 2026 I finished <a href="https://www.theodinproject.com">The Odin Project</a>, the Odin Project took the basic to intermediate skills I had with HTML and CSS and built on them massively. If you've not heard of The Odin Project (TOP) before it's a pretty standard online course in learning various web development skills but very in depth. During this course I learned the following skills
                        </p>
                        <ul>
                            <li><b>Git</b> -  I had a very basic understanding of Git and I'd even used it in a professional setting but only as far as commits and pushes. During TOP I learned about branches, actions and other various useful things Git can do</li>
                            <li><b>SVG</b> - With experience in design learning about SVGs was both very fun and very useful</li>
                            <li><b>Advanced CSS</b> - Units, custom properties, animations all useful things. We also touched on Preprocessors and Frameworks.</li>
                            <li><b>Flexbox & Grid</b> - The building blocks of the modern web.</li>
                            <li><b>JavaScript</b> - Everything from if else statements to JSON to Async. This was the most extensive part of TOP.</li>
                            <li><b>React</b> - My personal favourite section, we learned how to build web apps in React. This website is also built in react!</li>
                            <li><b>Database Management</b> - We used PostgreSQL but we learned many of the SQL basics and some moderate concepts such that I can interact with a Database in a web app</li>
                            <li><b>Node.js</b> - We learned how to create and render websites on the server using Express, using routes, controllers and views. We learned how to secure a website with Passport.js we used Prisma to interact with our database. We also learned how to create and use our own APIs</li>
                        </ul>
                    </section>
                    <section id="family">
                        <span className="text-2xl body-heading font-bold">Family Caregiver</span>
                        <p>
                            A few years ago my Mother was diagnosed with breast cancer. My father cannot drive and as a result it fell to me to look after my parents. I am very happy to say that my Mother has made a full recovery after 2 surgeries followed by chemotherapy and radiotherapy. I was just starting to get back into the world of WebDev.
                        </p>
                        <p>
                            When my Dad had a heart attack. I had just moved to Edinburgh and my family is based in Hemel Hempstead, just outside London. My partner, who I'd move to Edinburgh to live with, and I went down to Hemel where, along with my brother, we looked after my Mother and went to visit my Father in the hospital. I am also very happy to say that my Father has made a recovery.
                        </p>
                        <p>
                            I started learning Full Stack Development before this took place, and these events really put a damper on my learning. It was very difficult to resume my life after this and I still struggle with it.
                        </p>
                    </section>

                <p>
                    As hard as it may be to believe I was a child once. When I was a child my Father got a computer and let me use it. When I used it I did the classics; solitare, minesweeper, and attemping to learn hearts. Computers were boring.
                </p>
                <p>
                    Then a few years later we got the internet! And it was terrible, it was dial-up and my Dad needed the phone a lot so it just didn't really work very well. But then we got <i>broadband</i> (NTL if you remember that ancient company) and finally I could use the internet whenever I wanted. Also when the person was installing the equipment in the house they mentioned that I could have 250mb of storage on my own personal site! I thought this was the best thing ever, I could have my own website. And so I went about learning how to make a website. I managed to learn how to make big words and change the background color, I didn't understand how relative paths worked so I couldn't make any pictures load but I got marquee working! Watching those colorful words scroll along was amazing.
                </p>
                <p>
                    That website, sadly, is lost to time. I couldn't navigate the systems to actually get the files online, and even if I could I wouldn't have been able to upload them. I did remember the code though and years later when I was learning IT systems I had a chance to code again and sure enough I knew what I was doing. Granted I made my first website is basic windows notepad and so using a program which auto-closed tags, and coloured everything in was revolutionary!
                </p>
            </div>
        </div>
    )
}