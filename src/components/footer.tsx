import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import styles from './footer.module.css';

export const Footer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            {children}
            <footer className={styles.footer}>
                <div id="contact" className={styles.itemsContainer}>
                    <h2>Nos Contacts</h2>
                    <p>Vous pouvez nous retrouver sur</p>
                    <div className={styles.socialContainer}>
                        <button type="button" className={styles.buttonFacebook}>
                            <Link href="https://www.facebook.com/profile.php?id=61556567765376">
                                <Image
                                    alt="facebook"
                                    src="https://www.svgrepo.com/show/521654/facebook.svg"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </button>
                        <button type="button" className={styles.buttonTwitter}>
                            <Link href="https://twitter.com/users">
                                <Image
                                    alt="twitter"
                                    src="https://www.svgrepo.com/show/521900/twitter.svg"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </button>
                        <button
                            type="button"
                            className={styles.buttonInstagram}
                        >
                            <Link href="https://www.instagram.com/hemfree/">
                                <Image
                                    alt="instagram"
                                    src="https://www.svgrepo.com/show/521711/instagram.svg"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </button>
                    </div>
                    <Link href="https://myaccount.google.com/u/5/?hl=fr&utm_source=OGB&utm_medium=act&pli=1">
                        Hemfree.minecraft@gmail.com
                    </Link>
                    <p>&copy;No Copyright - Hemfree</p>
                </div>
            </footer>
        </Fragment>
    );
};
