import styles from "./index.module.css";
import {Link} from "react-router";

const Header = () => {
    return(
        <>
        <header>
            <nav className={styles.navBar}>
                <input className={styles.searchBar} type="text" placeholder="Search food items"></input>
                <Link to="/signup" className={styles.signup}>SignUp</Link>
                <Link to="/login" className={styles.login}>LogIn</Link>
                <img className={styles.sideLogo} src="https://s3-alpha-sig.figma.com/img/6c30/5666/5f8945b573189c004e90e2728a92eb63?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fmRDStXOfj6oKCrWCYd2~kC0crWef0kaOWwEqwg0S2p5mDB4Xd~Gxz-tzjXa-f~OAJDlUqOezDhkFZ1fltEvN0MTJNpwJH8ONn3drKiN0z~N6Kf2X2HYF8GvC0UvnPMMRmIMJyG9QzOJMm3emZM7ywIE39ht04pKRn58N86rma-aHjCx5NWlelj8q3SbDiLFCDGsOcCSFp0vIN3E-m54kv2m8YF55i~tX9IaM37j7dei5uopsJyJVyU51PuuFnPbaI~1ALxRa9sJ3ez-~D~uHDmlOsiPTucxNSmxgkAAq8GFe9WDsOQyhqmIL2zst14avYOElRU6EVCU85NP3R40jA__"></img>
            </nav>
        </header>
        <div className={styles.sidebar}>
                <div className={styles.head}>
                    <img className={styles.mainLogo} src="https://s3-alpha-sig.figma.com/img/6c30/5666/5f8945b573189c004e90e2728a92eb63?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fmRDStXOfj6oKCrWCYd2~kC0crWef0kaOWwEqwg0S2p5mDB4Xd~Gxz-tzjXa-f~OAJDlUqOezDhkFZ1fltEvN0MTJNpwJH8ONn3drKiN0z~N6Kf2X2HYF8GvC0UvnPMMRmIMJyG9QzOJMm3emZM7ywIE39ht04pKRn58N86rma-aHjCx5NWlelj8q3SbDiLFCDGsOcCSFp0vIN3E-m54kv2m8YF55i~tX9IaM37j7dei5uopsJyJVyU51PuuFnPbaI~1ALxRa9sJ3ez-~D~uHDmlOsiPTucxNSmxgkAAq8GFe9WDsOQyhqmIL2zst14avYOElRU6EVCU85NP3R40jA__"></img>
                    <h5>Your Restaurant Menu</h5>
                    <p className={styles.slogun}>your slogun</p>
                </div>
                <hr></hr>
                <div className={styles.links}>
                    <h5>Quick Links</h5>
                    <ol>
                        <li><Link className={styles.listItem} to="/">Home</Link></li>
                        <li><Link className={styles.listItem} to="/yourOrder">Your Order</Link></li>
                        <li><Link className={styles.listItem} to="wallet">Wallet</Link></li>
                        <li><Link className={styles.listItem} to="profile">Profile</Link></li>
                        <li><Link className={styles.listItem} to="logout">Logout</Link></li>
                    </ol>
                </div>
                <hr></hr>
                <div className={styles.aboutUs}>
                    <h5>More About Us</h5>
                    <ol>
                        <li><Link className={styles.listItem} to="/blogs">Our Blogs</Link></li>
                        <li><Link className={styles.listItem} to="/upcomingdishes">Upcomings Dishes</Link></li>
                        <li><Link className={styles.listItem} to="ourstories">Our Stories</Link></li>
                        <li><Link className={styles.listItem} to="socialmedialinks">Social Media Links</Link></li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Header;