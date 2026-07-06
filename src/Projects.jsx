export default function Projects() {
    return(
        <div className="flex flex-col body p-4">
            <span className="text-2xl body-heading font-bold">Projects</span>
            <div className="flex gap-5">
                <div className="flex-1">
                    <span className="text-xl body-heading font-bold">Reviewership</span>
                    <p>I'm currently working on spinning up two projects. When they are online I'll link them here.</p>
                    <p>The first project is one I've been very passionate about for years. One of my hobbies in my private time is playing video games, and I feel that video games reviews and judgement is often either boiled down to either 'good' or 'bad', else it's not given a judgement at all, instead other similar games are pointed to and a vague gesture is made.</p>
                </div>
                <div className="flex-1">
                    <span className="text-xl body-heading font-bold">Board Game Club</span>
                    <p><a href="https://midlothianmeeples.games">midlothianmeeples.games</a></p>
                    <p>I regularly go to a board game night at a local community centre. This night is organized by members of the local community. People bring along board games and we put groups together, some organized beforehand, and play board games all evening!</p>
                    <p>This event is currently organized using a ticket-selling website, for estimations of attendance. I'm aiming to replace this system with a custom website with all the required functionality.</p>
                    <p>This was the first website I made which interfaced with a database after learning about it through The Odin Project. I hosted this database on supabase, which I had never used before. I decided to code the entire project in React because it seemed to be the most efficient way to bring these things together.</p>
                    <p>I also used environment variables to store the location of the database and keep the credentials secure.</p>
                </div>
            </div>
        </div>
    )
}