// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// // import styles from './page.module.css'
// import styles from '../styles/Home.module.css'
// import Login from './login'


// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <Login></Login>
//     // <main className={styles.main}>
//     //   <div className={styles.description}>
//     //     <p>
//     //       Get started by editing&nbsp;
//     //       <code className={styles.code}>Normal page.js</code>
//     //     </p>
//     //     <div>
//     //       <a
//     //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         By{' '}
//     //         <Image
//     //           src="/vercel.svg"
//     //           alt="Vercel Logo"
//     //           className={styles.vercelLogo}
//     //           width={100}
//     //           height={24}
//     //           priority
//     //         />
//     //       </a>
//     //     </div>
//     //   </div>

//     //   <div className={styles.center}>
//     //     <Image
//     //       className={styles.logo}
//     //       src="/next.svg"
//     //       alt="Next.js Logo"
//     //       width={180}
//     //       height={37}
//     //       priority
//     //     />
//     //     <div className={styles.thirteen}>
//     //       <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
//     //     </div>
//     //   </div>

//     //   <div className={styles.grid}>
//     //     <a
//     //       href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={inter.className}>
//     //         Docs <span>-&gt;</span>
//     //       </h2>
//     //       <p className={inter.className}>
//     //         Find in-depth information about Next.js features and API.
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={inter.className}>
//     //         Templates <span>-&gt;</span>
//     //       </h2>
//     //       <p className={inter.className}>Explore the Next.js 13 playground.</p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={inter.className}>
//     //         Deploy <span>-&gt;</span>
//     //       </h2>
//     //       <p className={inter.className}>
//     //         Instantly deploy your Next.js site to a shareable URL with Vercel.
//     //       </p>
//     //     </a>
//     //   </div>
//     // </main>
//   )
// }



import { useState, useEffect } from 'react';
import Link from 'next/link';
import { userService } from '../services';

export default Home;

function Home() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <div className="card mt-4">
            <h4 className="card-header">You&apos;re logged in with Next.js 11 & Basic HTTP Authentication!!</h4>
            <div className="card-body">
                <h6>Users from secure api end point</h6>
                {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                }
                {!users && <div className="spinner-border spinner-border-sm"></div>}
                <p><Link href="/users">&gt;&gt; Manage Users</Link></p>
            </div>
        </div>
    );
}
