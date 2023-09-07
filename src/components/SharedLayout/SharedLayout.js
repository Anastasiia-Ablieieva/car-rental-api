import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
  return (
    <>
        <nav className={css.nav}>
            <div className={css.container}>   
                    <Link className={css.link} to="/">
                        Home
                    </Link>
                    <Link className={css.link} to='/catalog'>
                        Catalog
                    </Link>
                    <Link className={css.link} to='/favorites'>
                        Favorite Cars
                    </Link>
            </div>
        </nav>
      <Suspense >
        <Outlet />
      </Suspense>
    </>
  );
};