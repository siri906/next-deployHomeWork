import { BookGroup, BookListInfo } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/bookview.module.scss";

interface Props {
  viewBookInfo: BookGroup;
  rankNum: string;
}

const BxBook = styled(motion.div)``;

export default function BookView({ viewBookInfo }: Props) {
  return (
    <BxBook className="bx_cont">
      <div className={styles.left_area}>
        <div className="mb-5">
          {viewBookInfo.book_image ? <Image src={`${viewBookInfo.book_image}`} alt={`${viewBookInfo.title}`} width={viewBookInfo.book_image_width} height={viewBookInfo.book_image_height} /> : <div style={{ width: "300px", height: "500px" }}>no Image</div>}
          <span className={styles.rank_round}>{viewBookInfo.rank}위</span>
        </div>
        <div>
          <h2 className="text-xl">Buy Site</h2>
          <ul className={styles.list_buy}>
            {viewBookInfo.buy_links.slice(0, 3).map((buyLink, idx) => (
              <li key={idx}>
                <Link href={`${buyLink.url}`}>{buyLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right_area}>
        <h2>{viewBookInfo.title}</h2>
        <div />
        <h3>
          {viewBookInfo.author}
          <br /> {viewBookInfo.contributor}
        </h3>
      </div>
    </BxBook>
  );
}
