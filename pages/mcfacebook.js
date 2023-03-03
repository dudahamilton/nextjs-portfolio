import styles from "../styles/Projects.module.css"
import Image from 'next/image'

export default function Project() {
    return (
        <main className={styles.main}>
             
                
                <h1>McFacebook</h1>
                <Image
                    src='/pictures/mcfacebook.png'
                    alt='mcfacebook website'
                    width='800'
                    height='600'/>
                <div className={styles.buttons}>
                    <a target="_blank" href='https://github.com/dudahamilton/domino-client'>
                        <button className={styles.btn}>Front-end Github</button></a>
                        <a target="_blank" href='https://github.com/dudahamilton/domino-server'>
                        <button className={styles.btn}>Back-end Github</button></a>
                    <a target="_blank" href='https://sage-pudding-1def3e.netlify.app/'>
                        <button className={styles.btn}>Check Website</button></a>
                </div>
                <h2>MVP Goals</h2>
                <ul>
                    <li>Render a home page that displays blog posts</li>
                    <li>Render a comment section</li>
                    <li>Render a page that displays a specific blog when clicked on</li>
                    <li>Be able to create, edit, and delete posts</li>
                    <li>Be able to post comment(s)</li>
                </ul>
                    
                <h2> Stretch Goals</h2>
                <ul>
                    <li>CSS styling</li>
                    <li>Be able to like and dislike a post</li>
                    <li>Be able to view a list of posts that I have liked</li>
                    <li>Be able to edit and delete comments</li>
                    <li>Integrate an API that will generate random Breaking Bad quotes</li>
                </ul>
                <h2>Approach</h2>
                <p>On the day the project was assigned, we had a Google Doc that each team member added their ideas for what kind of app they wanted to create, along with what names they would want the app to be called.</p>
                <p>Originally, we had a difficult time trying to divide the work among all 4 members because our pitch needed to be resubmitted. However, once it was approved, it was easy to divide the work because we had been planning on the Miro board. Once we finished dividing the work, it went relatively smoothly for us. In the beginning, we had a few merge conflicts but we quickly learned how to avoid them and how to solve them as well.
We had to deal with a few errors that were a bit tricky, but we were able to overcome those with a lot of searching on Google, as well as some hints being dropped by the instructors.</p>
                <h2>Post Project thoughts</h2>
                <p>Looking at the finished product, we don't seem to have any unsolved problems. However, one thing we did not get around to was to limit the amount of posts that would appear on the page so that in the off chance a large number of posts are created, the user doesn't have to endlessly scroll to get to the bottom of the page.</p>
                <p>Some of the major hurdles we faced was the planning during the beginning of the project. It was difficult to get started on planning the project because we didn't have a central authority figure that acted like a psuedo manager/supervisor. For the first few hours of the project work time during class, we struggled to come up with a solid game plan regarding the direction of the workflow. Once we opened up a Miro board, the planning became easier and more streamlined, and as a result, we were able to start work on the project itself later on in the day. Communication was not a major hurdle for us as each team member was very responsive to messages sent both in Slack and Discord.</p>
            
                
                <h2>Wireframes</h2>
                <Image
                    src='/pictures/domino.png'
                    alt='wireframe'
                    className={styles.images}
                    width='600'
                    height='400'/>

                <Image
                    src='/pictures/domino2.png'
                    alt='wireframe'
                    width='600'
                    className={styles.images}
                    height='400'/>
               
                
                <h2>ERD</h2>
                <Image
                    src='/pictures/erd2.png'
                    alt='erd'
                    width='600'
                    className={styles.images}
                    height='400'/>

                <h2>Routes</h2>
                <Image
                    src='/pictures/routes2.png'
                    alt='restful routes'
                    width='600'
                    className={styles.images}
                    height='400'/>
                
            

        </main>
       
    )
}