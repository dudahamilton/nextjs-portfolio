
import styles from "../styles/Projects.module.css"
import Image from 'next/image'

export default function Project() {
    return (
        <main className={styles.main}>
             
                
                <h1>Brazil-Memory-Game</h1>
                <Image
                    src='/pictures/brazil.png'
                    alt='game screenshot'
                    width='800'
                    height='600'/>
                <div className={styles.buttons}>
                    <a target="_blank" href='https://github.com/dudahamilton/Brazil-Memory-Game'>
                        <button className={styles.btn}>See it on Github</button></a>
                    <a target="_blank" href='https://dudahamilton.github.io/Brazil-Memory-Game/'>
                        <button className={styles.btn}>Play the Game</button></a>
                </div>
                <h2>MVP Goals</h2>
                <ul>
                    <li>Have the 10 squares with plain pictures on it</li>
                    <li>Button to hide the picture in case you didn't find a pair</li>
                    <li>Button to restart the game</li>
                    <li>Winning Message</li>
                    <li>timer</li>
                    <li>Track of how many pairs each player got</li>
                </ul>
                <h2> Stretch Goals</h2>
                <ul>
                    <li>Make the pictures disappear in 15 seconds in case of a mismatch instead of the button that hides the pictures.</li>
                    <li>putting the pictures in different order everytime the game is restarted.</li>
                    <li>Making an AI kind of thing that will be the second player.</li>
                    <li>Have the 20 squares with plain pictures on it</li>
                </ul>
                <h2>Approach</h2>
                <p>I decided to start with the logic of the cards, flipping (half of it happens through CSS), checking for a match, unflipping, storing the numbers of pairs, once the card logic was done I added the time obstacle, the reset button, the start button and the instructions button. Working with CSS flexbox was challenging but rewarding, (this) was also a roadblock but after watching a few classes and youtube video I now think I master it (I hope I don't prove myself wrong in the future) and adding the timer was also challenging but it worked well in the end. Shuffling using flexbox was easier than I though it would be and unfliping the cards using a selfTimeOut was also easier than I thout it would be.</p>
                <h2>Post Project thoughts</h2>
                <p>I am very happy with the final results of my project, I learned a lot with it. I now have a better understanding of the DOM, have a solid idea of what (this) means and how to apply it, learned setInterval and setTimeOut, learned to console.log properly and have a habit of commiting often which I did not have before. I will keep updating this project, but as far as right now I am very happy with the learning it provided me.</p>
            
                
                <h2>Wireframes</h2>
                <Image
                    src='/pictures/wf1.png'
                    alt='wireframe'
                    className={styles.images}
                    width='600'
                    height='400'/>

                <Image
                    src='/pictures/wf2.png'
                    alt='wireframe'
                    width='600'
                    className={styles.images}
                    height='400'/>
                
            

        </main>
       
    )
}