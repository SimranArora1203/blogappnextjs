"use client";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Card = ({ key, item }) => {
  const { status } = useSession();
  const deletePosts = async (id) => {
    {
      status == "authenticated"
        ? await fetch(`http://localhost:3000/api/posts?_id=${id}`, {
            method: "DELETE",
          })
        : null;
    }
  };
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)}-{" "}
          </span>

          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2>{item.title}</h2>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}

        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <div className={styles.dltbtn}>
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More
          </Link>
          <button onClick={() => deletePosts(item.id)} className={styles.btn}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
