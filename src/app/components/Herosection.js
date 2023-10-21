// import React from 'react';
import heroStyles from "@/app/styles/Herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import {Mulish } from 'next/font/google'
 
const mulish =Mulish({
  weight: ['400' , '500' , '600' , '700' ,'800' , '900'],
  subsets: ['latin'],
});

const Herosection = ({title , imageUrl}) => {
    return (
       <main className={heroStyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1>{title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id laudantium inventore, aliquam omnis mollitia cum exercitationem ad in itaque voluptates tempore eum voluptate amet, nisi beatae quidem, minima debitis quibusdam. Ut voluptatum accusamus eum laborum labore quod. Sint, laborum expedita provident sed nesciunt ratione adipisci aspernatur dolores nemo quibusdam?</p>
                    <Link href="/movies">
                    <button className={mulish.className}>
                        Explore Movies
                    </button></Link>
                </div>
                <div className={heroStyles.hero_image}>
                <Image src={imageUrl} alt="home page" width={500} height={500}/>
                </div>
            </div>
        </div>
       </main>
    );
};

export default Herosection;