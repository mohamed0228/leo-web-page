import React from "react";
// import imageOfMe from "../../images/me.jpeg"
function About() {
    return (
        <section className="container">
            <h2 className="nav-title-font">Mohammed Boussaada </h2>
            <hr />
            <div>
                <img className="mb-5" id="avatar" src={process.env.PUBLIC_URL + '/images/me.jpeg'} alt="Mohammed Boussaada" />
                <p>
                Full stack web developer leveraging veterinary background to build a more intuitive user
experience on the web. Recently earned a certificate in full stack development from the
Rutgers University Coding bootcamp, with newly developed skills in JavaScript, CSS,node.js, React.js, MERN ,and responsive web
design.

                </p>
                <p>
                Known as an innovative problem solver passionate about developing apps, with a focus
on mobile-first design and development. With each project, my aim is to best engage my
audience for an impactful user experience. I applied aspects of UX and agile development in a
recent project. I worked on a team of four to develop a single-page MERN app that helps 
users to buy flowers from any part in the word, inventory, and attendance at specialty events. I’m excited to
leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the
web.


                </p>
                <hr/><hr/><br/><br/><br/><br/><br/>

            </div>
        </section>
    )
}
export default About;