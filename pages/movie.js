import styles from "../styles/Projects.module.css"
import Image from 'next/image'

export default function Project() {
    return (
        <main className={styles.main}>
             
                
                <h1>Movies for Non-Experts</h1>
                <Image
                    src='/pictures/movie.png'
                    alt='movies website screenshot'
                    width='800'
                    height='600'/>
                <div className={styles.buttons}>
                    <a target="_blank" href='https://github.com/dudahamilton/project-2'>
                        <button className={styles.btn}>See it on Github</button></a>
                    <a target="_blank" href='https://omdb-project.herokuapp.com/'>
                        <button className={styles.btn}>Check Website</button></a>
                </div>
                <h2>MVP Goals</h2>
                <ul>
                    <li>User can create account/login/logout</li>
                    <li>User can see a variety of movies</li>
                    <li>User can comment the movies they see</li>
                    <li>User can edit comment</li>
                    <li>User can delete comment</li>
                    <li>User can choose their favorite movies</li>
                </ul>
                <h2> Stretch Goals</h2>
                <ul>
                    <li>User can change their password</li>
                    <li>User can rate movies from 1 start to 5</li>
                    <li>User can access a page with all their favorite movies</li>
                    <li>User can undo a favorite (if they chose a favorite movie by accident)</li>
                </ul>
                <h2>Approach</h2>
                <p>My project has a table of users, comments and movies and also a joint table users_movies. I decided to do a findOrCreate for the comments, so the user could write a review in a movie that was not yet in the database.My routes were built in a way that the user could search for a movie, click in that specific movie to learn more details about it and be able to add a comment to it, edit and delete it (the last two I was not able to finish on time but I will tonight).</p>
                <h2>Post Project thoughts</h2>
                <p>I was able to learn a lot during this project. I now have a better understanding about node, express, sql and sequelize. I reviewed a lot of material to be able to put this app together, I have a much better understanding of restful routes, postgres and sequelize. I now feel comfortable working with a sequelize structured db, and feel comfortable working with APIs in an express app. I still want to add favorites</p>
            
                
                <h2>Wireframes</h2>
                <Image
                    src='/pictures/image1.png'
                    alt='wireframe'
                    className={styles.images}
                    width='600'
                    height='400'/>

                <Image
                    src='/pictures/image2.png'
                    alt='wireframe'
                    width='600'
                    className={styles.images}
                    height='400'/>
                <Image
                    src='/pictures/image3.png'
                    alt='wireframe'
                    width='600'
                    className={styles.images}
                    height='400'/>
                
                <h2>ERD</h2>
                <Image
                    src='/pictures/erd1.png'
                    alt='wireframe'
                    width='600'
                    className={styles.images}
                    height='400'/>

                <h2>Routes</h2>
                <Image
                    src='/pictures/routes.png'
                    alt='restful routes'
                    width='600'
                    className={styles.images}
                    height='400'/>
                
            

        </main>
       
    )
}