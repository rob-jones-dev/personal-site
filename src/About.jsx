export default function About() {
    return (
        <div className="flex body p-4">
            <div className="sidebar basis-1/4 border-r-2 border-e-sky-600 text-right pr-2">
                <a href="#"><b>2026</b> - The Odin Project</a>
            </div>
            <div className="font-Roboto p-4 mx-auto basis-3/4 about-container">
                    <section>
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