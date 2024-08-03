import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* 2nd part */}
      {/* category list */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>

        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>

        <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>

        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>

        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>

        <Link href="/blog" className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
      </div> */}
      {/* 3rd part */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
